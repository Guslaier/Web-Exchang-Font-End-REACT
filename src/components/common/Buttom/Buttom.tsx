import React from 'react';
import './Buttom.css';

// 1. เปลี่ยนชื่อจาก type เป็น variant เพื่อเลี่ยงการชนกับมาตรฐาน HTML
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  variant: "submit" | "cancel" | "close" | "open"| "view" | "edit" | "add"; // เพิ่มตัวเลือก default สำหรับกรณีที่ไม่ต้องการใช้สีพิเศษ
  fun?: <T>(...args: any[]) => T;
}

// 2. ใช้ variant ในการกำหนด Class และใช้ ...props รับค่าอื่นๆ
const Button: React.FC<ButtonProps> = ({ label, variant, fun, className, ...props }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className || ''}`} // ใช้ variant คุมสีตาม CSS ที่คุณเขียน
      onClick={fun} 
      {...props} 
    >
      {label}
    </button>
  );
};

export default Button;