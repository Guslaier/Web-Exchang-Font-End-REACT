// src/components/common/Button.tsx
import React from 'react';
import './swicth-BT.css';
import { ReactSVG } from 'react-svg';
import switchOnIcon from '../../../assets/svg/swicth-BT/switch.svg.svg';
import switchOffIcon from '../../../assets/svg/swicth-BT/switchoff.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean; // 🚩 รับสถานะเพื่อเลือกไอคอน
  fun?: () => void;
}

const SwitchButton: React.FC<ButtonProps> = ({ fun, isActive, ...props }) => {
  return (
    <button 
      className={`btn-sw ${isActive ? 'active' : ''}`} 
      onClick={fun} // 🚩 ใช้ฟังก์ชันที่ส่งมาจาก UserManagement
      {...props} 
    >
      <ReactSVG
        // 🚩 เปลี่ยนไอคอนตามสถานะ isActive
        src={isActive ? switchOnIcon : switchOffIcon}
        className="nav-icon-svg"
      />
    </button>
  );
};

export default SwitchButton;