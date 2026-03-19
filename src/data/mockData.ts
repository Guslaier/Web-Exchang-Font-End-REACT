import type { AuthResponse } from "../types/auth.ts";
import type {
  UserData,
  ExchangeTransactionData,
  BoothData,
} from "../types/entities.ts";

// ข้อมูลบูธจำลอง 15 รายการ
// id: number;
//     name: string;
//     location: string;
//     currentShiftId: number | null;
//     isActive: boolean;
//     isOpen: boolean; // เพิ่มเพื่อใช้ในหน้า UI
//     createdAt: string;
// }
export const mockBooths: BoothData[] = [
  {
    id: "1",
    name: "7-11",
    location: "Floor 1, Zone A",
    currentShiftId: "1",
    isActive: true,
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Lotus",
    location: "Floor 1, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Siam",
    location: "Floor 2, Zone A",
    currentShiftId: "2",
    isActive: true,
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Station",
    location: "Floor 2, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "MK",
    location: "Floor 3, Zone A",
    currentShiftId: "3",
    isActive: true,
    isOpen: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Airport",
    location: "Floor 3, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Silom",
    location: "Floor 4, Zone A",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Central",
    location: "Floor 4, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    name: "MBK",
    location: "Floor 5, Zone A",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    name: "Emporium",
    location: "Floor 5, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    name: "Paragon",
    location: "Floor 6, Zone A",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "12",
    name: "Gaysorn",
    location: "Floor 6, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "13",
    name: "IconSiam",
    location: "Floor 7, Zone A",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "14",
    name: "Terminal 21",
    location: "Floor 7, Zone B",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "15",
    name: "Union Mall",
    location: "Floor 8, Zone A",
    currentShiftId: null,
    isActive: true,
    isOpen: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ข้อมูลธุรกรรมจำลอง 12 รายการ

export type TransactionVoidView = Omit<
  ExchangeTransactionData,
  | "customerId"
  | "exchangeRatesId"
  | "exchangeRate"
  | "foreignAmount"
  | "thaiBahtAmount"
  | "calculateMethod"
  | "approvedBy"
  | "updatedAt"
  | "createdAt"
> & {
  booth: string;
  user: string;
  time: string;
  currency_name: string;
  rate: number;
  amount: number;
};

export const mockTransactionsVoid: TransactionVoidView[] = [
  {
    transactionNo: "TXN001",
    booth: "",
    user: "gool_staff",
    time: "2026-02-22T10:00:00Z",
    rate: 30.5,
    currency_name: "USD",
    type: "SELL",
    amount: 1000,
    status: "PENDING",
  },
  {
    transactionNo: "TXN002",
    booth: "Lotus",
    user: "user_01",
    time: "2026-02-22T11:00:00Z",
    rate: 30.0,
    currency_name: "EUR",
    type: "BUY",
    amount: 500,
    status: "COMPLETED",
  },
];

export type User = Omit<UserData, "passwordHash" | "updatedAt"> & {};
export const mockUsers: User[] = [
  {
    id: "1",
    username: "admin_test",
    email: "admin@test.com",
    role: "MANAGER",
    createdAt: new Date(),
    isActive: true,
    phoneNumber: "081-234-5678",
  },
  {
    id: "2",
    username: "user_01",
    email: "user01@test.com",
    role: "EMPLOYEE",
    createdAt: new Date(),
    isActive: true,
    phoneNumber: "081-234-5679",
  },
  {
    id: "3",
    username: "user_02",
    email: "user02@test.com",
    role: "EMPLOYEE",
    createdAt: new Date(),
    isActive: true,
    phoneNumber: "081-234-5680",
  },
];

export const mockStaffAuth: AuthResponse = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  user: {
    id: "101",
    username: "gool_staff",
    email: "gool_staff@test.com",
    phoneNumber: "081-234-5678",
    role: "EMPLOYEE",
    isActive: true,
    createdAt: new Date("2026-01-15T08:00:00Z"),
  },
};

// 🚩 กรณีที่ 2: Admin ที่เข้าสู่ระบบจัดการหลังบ้าน (ไม่มี currentShift)
export const mockAdminAuth: AuthResponse = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.admin...",
  user: {
    id: "1",
    username: "admin_master",
    email: "admin_master@test.com",
    phoneNumber: "02-123-4567",
    role: "MANAGER",
    isActive: true,
    createdAt: new Date("2025-12-01T09:00:00Z"),
  },
};
