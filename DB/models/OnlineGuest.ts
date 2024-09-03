import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface GuestAttributes {
  createdAt: number;
  guestId: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  organizationId: string;
  countryCode: string;
  guestStatus: string;
}

class OnlineGuest extends Model implements GuestAttributes {
  static table = "online_guest";

  @field("created_at") createdAt!: number;
  @field("guestId") guestId!: string;
  @field("first_name") firstName!: string;
  @field("last_name") lastName!: string;
  @field("gender") gender!: string;
  @field("phone") phone!: string;
  @field("organizationId") organizationId!: string;
  @field("countryCode") countryCode!: string;
  @field("guestStatus") guestStatus!: string;
}

export default OnlineGuest;
export type { GuestAttributes };
