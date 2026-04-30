import './App.css'
import Navbar from './components/layout/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { storage } from './utils/storage'
import type { UserRole } from './types/entities.ts';
import { useState } from 'react';
import type { UserDatas } from './services/User.service.ts';
function App() {
  
  const [role] = useState<UserRole>(storage.get<UserRole>('userRole') || 'EMPLOYEE'); 
  const [userName] = useState<string>(storage.get<object>('userInfo') ? (storage.get<object>('userInfo') as UserDatas).username : ''); 
  // ดึง role และ userName จาก Storage หรือกำหนดค่าเริ่มต้น
  return (
    <div className="M-container">
      {/* 1. Sidebar ด้านซ้าย (Navbar ของคุณ) */}
        {/* ส่ง role และ userName จาก state ไปยัง Navbar */}
        <Navbar role={role} userName={userName} />
     

      {/* 2. ส่วนเนื้อหาด้านขวา */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default App