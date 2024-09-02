// API PROPS
export interface LoginProps {
  email: string;
  password: string;
}

export interface GuestLoginProps {
  phoneNumber?: string;
  countryCode?: string;
}

export interface staffProps {
  id: number;
  fullName: string;
  staffId: string;
  organizationId: string;
  departmentId: string;
  title: string;
  email: string;
  phoneNumber: string;
  gender: string;
  role: string;
  profilePhoto: string | null;
  departmentName: string;
  organizationName: string;
}

export interface departmentProps {
  id: number;
  departmentName: string;
  departmentId: string;
  organizationId: string;
  departmentRoomNum: string;
}

export interface guestProps {
  id: number;
  guestId: string;
  organizationId: string;
  firstName: string;
  lastName: string;
  gender: string;
  countryCode: string;
  phoneNumber: string;
}

export interface AllPurposeType {
  purposeId: string;
  guestId: string;
  organizationId: string;
  purpose: string;
  departmentId: string;
  staffId: string;
  signInDate: string;
  signInTime: string;
  signOutTime: string;
  visitStatus: string;
  isLogOut: number | string;
  phoneNumber: string;
  countryCode: string;
}

export interface SignUpProps {
  organizationId: string;
  firstName: string;
  lastName: string;
  gender: string;
  countryCode: string;
  phoneNumber: string;
}

export interface LogoutProps {
  password: string;
}
