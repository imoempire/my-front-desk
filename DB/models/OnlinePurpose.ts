import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface PurposeAbributes {
  purposeId: string;
  guestId: string;
  organizationId: string;
  purpose: string;
  departmentId: number;
  staffId: string;
  signInDate: string;
  signInTime: string;
  signOutTime: string;
  visitStatus: string;
  isLogOut: number;
}

class OnlinePurpose extends Model implements PurposeAbributes {
  static table = "online_purpose";

  @field("purposeId") purposeId!: string;
  @field("guestId") guestId!: string;
  @field("organizationId") organizationId!: string;
  @field("purpose") purpose!: string;
  @field("departmentId") departmentId!: number;
  @field("staffId") staffId!: string;
  @field("signInDate") signInDate!: string;
  @field("signInTime") signInTime!: string;
  @field("signOutTime") signOutTime!: string;
  @field("visitStatus") visitStatus!: string;
  @field("isLogOut") isLogOut!: number;
}

export default OnlinePurpose;
export type { PurposeAbributes };
