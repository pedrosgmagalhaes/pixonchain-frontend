// src/App.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { login, logout } from './features/auth/authSlice';
import Dashboard from './pages/Dashboard';

function AuthListener() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      console.log('User logged in:', user);
      dispatch(login(user));
      navigate('/dashboard'); // Redirect to dashboard on login
    });

    netlifyIdentity.on('logout', () => {
      console.log('User logged out');
      dispatch(logout());
      navigate('/'); // Redirect to home on logout
    });

    // Clean up event listeners
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, [dispatch, navigate]);

  return null;
}

function App() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Router>
      <AuthListener /> {/* This component sets up auth listeners with proper routing context */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {!user ? (
          <>
            <h1 className="text-3xl font-bold text-blue-600">Teste 1 2 3</h1>
            <div className="mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => netlifyIdentity.open()}
              >
                Login / Signup
              </button>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
