import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface StaffAttributes {
  fullName: string;
  departmentId: string;
  email: string;
  gender: string;
  organizationId: string;
  phoneNumber: string;
  profilePhoto: string;
  role: string;
  staffId: string;
  title: string;
  departmentName: string;
  organizationName: string;
}

class Staff extends Model implements StaffAttributes {
  static table = "staff";

  @field("fullName") fullName!: string;
  @field("departmentId") departmentId!: string;
  @field("email") email!: string;
  @field("gender") gender!: string;
  @field("organizationId") organizationId!: string;
  @field("phoneNumber") phoneNumber!: string;
  @field("profilePhoto") profilePhoto!: string;
  @field("role") role!: string;
  @field("staffId") staffId!: string;
  @field("title") title!: string;
  @field("departmentName") departmentName!: string;
  @field("organizationName") organizationName!: string;
}

export default Staff;
export type { StaffAttributes };
