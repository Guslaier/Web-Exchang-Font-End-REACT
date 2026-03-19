// src/types/auth.ts

import type { UserData,UserRole } from './entities'; // Import จาก Entity ที่เราทำไว้

/** * ประเภทสิทธิ์การใช้งาน (อิงตาม Table users.role ใน DB)
 */

/**
 * ข้อมูลที่ได้รับหลังจาก Login สำเร็จ 
 */

export interface AuthResponse {
  accessToken: string;
  user: Omit<UserData, "passwordHash" | "updatedAt"> & {}; // ข้อมูลพื้นฐานจาก Table users
}

/**
 * โครงสร้างข้อมูลสำหรับหน้า Login
 */
export interface LoginCredentials {
  email: string; //
  password: string; //
}

/**
 * ข้อมูลที่เก็บไว้ใน Context หรือ Global State (เช่น UserInfo)
 */
export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<UserData, "passwordHash" | "updatedAt"> & {} | null;
  role: UserRole | null;
  shiftId: number | null; // สำหรับใช้ทำ Transactions
  loading: boolean;
}

/**
 * ข้อมูลความปลอดภัย (Token Payload)
 */
export interface TokenPayload {
  sub: number; // User ID
  email: string;
  role: UserRole;
  iat: number; // Issued at
  exp?: number; // Expiration
  jti: string; // Unique identifier for the token (ใช้สำหรับ Blacklist)
}
