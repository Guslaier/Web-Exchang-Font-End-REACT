// src/services/auth.service.ts
import Swal from "sweetalert2";
import { API_CONFIG, API_ENDPOINTS } from "../config/api.config";
import type { LoginCredentials, AuthResponse } from "../types/auth";
import { storage } from "../utils/storage";
import api from "./api";
import axios from "axios";

// ฟังก์ชันจำลองสำหรับการ Login (ใช้ mock data)

export const login: (
  credentials: LoginCredentials,
) => Promise<AuthResponse> = async (credentials) => {
  // ในการใช้งานจริง คุณจะส่งคำขอไปยัง API ที่นี่
  // แต่ตอนนี้เราจะใช้ mock data แทน
  try {
    const res = await axios.post(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, credentials);

    // Axios จะเก็บข้อมูลไว้ใน property 'data' เสมอ
    const response = res.data;

    console.log("Login response:", response); // ตรวจสอบข้อมูล

    if (response && response.access_token) {
      // ทำการเก็บ Token หรือจัดการข้อมูลต่อ
      console.log("Login response:", response); // ตรวจสอบข้อมูลที่ได้รับจาก API
      // เก็บข้อมูลที่จำเป็นลงใน Storage
      storage.set("authToken", response.access_token);
      storage.set("userRole", response.user.role);
      storage.set("userInfo", JSON.stringify(response.user));
      return response;
    }
  } catch (error: any) {
    console.error(
      "Login failed in service:",
      error?.response?.data || error?.message,
    );
    if(error.status !== 401) {
      await Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data?.message || "An error occurred during login. Please try again.",
      });
    }

    throw error;
  }
};

export const logout = async () => {
  try {
    const status = await api.post(API_ENDPOINTS.AUTH.LOGOUT);
    console.log("Logout response:", status);
    if (status.status === 201) {
      storage.remove("authToken");
      storage.remove("userRole");
      storage.remove("userInfo");
    }
  } catch (error) {
    console.error("Logout failed:", error);
      await Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "An error occurred during logout. Please try again.",
      });
    throw error;
  }
};

export const authService = {
  resetWithToken: async (data: { email: string; token: string; newPassword: string }) => {
    try {
      const response = await api.put(API_ENDPOINTS.USER.RESET_PASSWORD, data);
      console.log("Reset with token response:", response);
      return response.data;
    } catch (error: any) {
      console.error("Reset with token failed:", error);
      await Swal.fire({
        icon: "error",
        title: "Reset Password Failed",
        text: error?.response?.data?.message || "An error occurred during password reset. Please try again.",
      });
      throw error;
    }
  },

  changeWithOldPass: async (id: string, data: { oldPass: string; newPass: string }) => {
    try {
      const response = await api.put(API_ENDPOINTS.USER.CHANGE_PASSWORD(id), data
      );
      console.log("Change with old password response:", response);
      return response.data;
    }
      catch (error: any) {
        console.error("Change with old password failed:", error);
        await Swal.fire({
          icon: "error",
          title: "Change Password Failed",
          text: error?.response?.data?.message || "An error occurred during password change. Please try again.",
        });
        throw error;
      }

    }
};