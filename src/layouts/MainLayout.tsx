// src/layouts/MainLayout.tsx

import React from 'react';
import Sidebar from '../components/Sidebar';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}

export default MainLayout;
