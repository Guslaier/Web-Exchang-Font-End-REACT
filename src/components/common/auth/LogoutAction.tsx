// src/components/auth/LogoutAction.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/auth.service';

const LogoutAction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      // 🚩 ล้างข้อมูลทั้งหมดใน Storage
      await logout();
      
      // 🚩 ส่งผู้ใช้กลับไปหน้า Login (หรือหน้าหลัก)
      navigate('/login', { replace: true });
    };

    performLogout();
  }, [navigate]);

  return null; // ไม่ต้องแสดงผลอะไร
};

export default LogoutAction;