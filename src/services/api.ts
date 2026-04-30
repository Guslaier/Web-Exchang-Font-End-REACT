// src/services/api.ts
import axios from 'axios';
import { storage } from '../utils/storage';
import { API_CONFIG, STORAGE_KEYS, HTTP_STATUS } from '../config/api.config';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

// ดึง Token จาก Storage มาใส่ใน Header ทุกครั้งที่ส่ง
api.interceptors.request.use(
  (config) => {
    const token = storage.get<string>(STORAGE_KEYS.TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// จัดการ Response และ Error
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config; // แสดงข้อความผิดพลาดจาก API
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = storage.get<string>(STORAGE_KEYS.REFRESH_TOKEN);
        if (refreshToken) {
          // ส่วนของ Refresh Token Logic
        } else {
          // 🚩 กรณีไม่มี Refresh Token หรือ Session หมดอายุ
          storage.clear(); // ล้างข้อมูลทั้งหมดใน Storage
          alert('Session expired. Please log in again.');
          // เปลี่ยนหน้าไปที่ Root (/)
          // การใช้ href จะทำให้แอป Reload และกลับไปเช็ค Guard ใหม่ที่หน้าแรก
          window.location.href = '/'; 
        }
      } catch (refreshError) {
        storage.clear();
        alert('Session expired. Please log in again.');
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;