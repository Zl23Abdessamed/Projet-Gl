import { IconType } from "react-icons";
import {
  CourseType,
  Level,
  PaymentStatus,
  SubjectNames,
  UserType,
} from "./constants";

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  type: UserType;
}

export interface LoginUser {
  email: string;
  password: string;
  type: UserType;
}

export interface Subjects {
  name: keyof typeof SubjectNames;
  coeff: number;
}

export interface TeacherInfos {
  name: string;
  level: Level[];
  location: string;
  subject: string;
}

export interface Teacher {
  name: string;
  level: Level[];
  location: string;
  subject: SubjectNames[];
  experience: string;
  diploma: string;
  available: CourseType;
  tarifs: string[];
  contacts: {
    phone: string;
    email: string;
  };
  imageUrl?: string;
}

export interface Document extends LightDocument {
  title: string;
  description: string;
  file: File;
  senderId: string;
  createdAt: Date | string;
}

export interface LightDocument {
  id: string;
  subject: string;
  senderName: string;
}

export interface StudentPayment {
  id: string;
  month: string;
  teacherId: string;
  teacherName: string;
  subject: string;
  paymentStatus: PaymentStatus;
}

export interface Course {
  id: string;
  type: CourseType;
  teacherId: string;
  teacherName: string;
  location?: string;
  time: Date | string;
  subject: string;
}

export interface Student {
  id: string;
  lastName: string;
  firstName: string;
  status: string; // "Payé" or "Non payé"
}

export interface SideBarItemType {
  url: string;
  Icon: IconType;
  name: string;
}
