import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { storage } from '../utils/storage';
import { Path } from '../config/path.Config';
import type { UserRole } from '../types/entities';

interface GuardProps {
  allowedRoles?: UserRole[]; // ตัวเลือกสำหรับระบุบทบาทที่อนุญาตเข้าถึง
}

// MainGuard เป็นคอมโพเนนต์ที่ใช้สำหรับป้องกันการเข้าถึงหน้าเว็บตามเงื่อนไขการ Login และสิทธิ์ของผู้ใช้
const MainGuard = ({ allowedRoles }: GuardProps) => {
  const location = useLocation();
  
  // 🔍 Hook 1: เช็คการ Login (Auth Check)
  const token = storage.get<string>('authToken');
  const userRole = storage.get<UserRole>('userRole');

  // ถ้ายังไม่ได้ Login ให้ไปหน้า Login
  if (!token) {
    return <Navigate to={Path.LOGIN} state={{ from: location }} replace />;
  }

  // 🔍 Hook 2: เช็คสิทธิ์ (Role Check) - ถ้ามีการระบุบทบาทที่อนุญาต
  if (allowedRoles && !allowedRoles.includes(userRole!)) {
    // ถ้าสิทธิ์ไม่ถึง ให้เด้งไปหน้าแรก (Dashboard)
    return <Navigate to={Path.DASHBOARD} replace />;
  }

  // ผ่านทุกด่าน ให้ไปต่อได้
  return <Outlet />;
};

export default MainGuard;