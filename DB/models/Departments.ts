import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

interface DapartmentAttributes {
  departmentId: string;
  organizationId: string;
  departmentName: string;
  departmentRoomNum: string;
}

class Department extends Model implements DapartmentAttributes {
  static table = "departments";

  @field("departmentId") departmentId!: string;
  @field("organizationId") organizationId!: string;
  @field("departmentName") departmentName!: string;
  @field("departmentRoomNum") departmentRoomNum!: string;
}

export default Department;
export type { DapartmentAttributes };
