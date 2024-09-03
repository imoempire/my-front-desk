import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface GuestLogsAttributes {
  createdAt: number;
  guestId: string;
  organizationId: string;
  signInDate: string;
  signInTime: string;
  signOutTime: string;
}

class GuestLogs extends Model implements GuestLogsAttributes {
  static table = "guest_logs";

  @field("created_at") createdAt!: number;
  @field("guestId") guestId!: string;
  @field("organizationId") organizationId!: string;
  @field("signInDate") signInDate!: string;
  @field("signInTime") signInTime!: string;
  @field("signOutTime") signOutTime!: string;
}

export default GuestLogs;
export type { GuestLogsAttributes };
