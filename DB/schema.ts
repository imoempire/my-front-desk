import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 4,
  tables: [
    tableSchema({
      name: "guest",
      columns: [
        { name: "created_at", type: "number" },
        { name: "guestId", type: "string" },
        { name: "first_name", type: "string" },
        { name: "last_name", type: "string" },
        { name: "gender", type: "string" },
        { name: "phone", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "countryCode", type: "string" },
        { name: "guestStatus", type: "string" },
      ],
    }),
    tableSchema({
      name: "online_guest",
      columns: [
        { name: "created_at", type: "number" },
        { name: "guestId", type: "string" },
        { name: "first_name", type: "string" },
        { name: "last_name", type: "string" },
        { name: "gender", type: "string" },
        { name: "phone", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "countryCode", type: "string" },
        { name: "guestStatus", type: "string" },
      ],
    }),
    tableSchema({
      name: "guest_logs",
      columns: [
        { name: "created_at", type: "number" },
        { name: "guestId", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "signInDate", type: "string" },
        { name: "signInTime", type: "string" },
        { name: "signOutTime", type: "string" },
      ],
    }),
    tableSchema({
      name: "purpose", // New purpose table
      columns: [
        { name: "purposeId", type: "string" },
        { name: "guestId", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "purpose", type: "string" },
        { name: "departmentId", type: "string" },
        { name: "staffId", type: "string" },
        { name: "signInDate", type: "string" },
        { name: "signInTime", type: "string" },
        { name: "signOutTime", type: "string" },
        { name: "visitStatus", type: "string" },
        { name: "isLogOut", type: "number" },
      ],
    }),
    tableSchema({
      name: "online_purpose", // New online purpose table
      columns: [
        { name: "purposeId", type: "string" },
        { name: "guestId", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "purpose", type: "string" },
        { name: "departmentId", type: "string" },
        { name: "staffId", type: "string" },
        { name: "signInDate", type: "string" },
        { name: "signInTime", type: "string" },
        { name: "signOutTime", type: "string" },
        { name: "visitStatus", type: "string" },
        { name: "isLogOut", type: "number" },
      ],
    }),
    tableSchema({
      name: "departments",
      columns: [
        { name: "departmentId", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "departmentName", type: "string" },
        { name: "departmentRoomNum", type: "string" },
      ],
    }),
    tableSchema({
      name: "staff",
      columns: [
        { name: "fullName", type: "string" },
        { name: "departmentId", type: "string" },
        { name: "email", type: "string" },
        { name: "gender", type: "string" },
        { name: "organizationId", type: "string" },
        { name: "phoneNumber", type: "string" },
        { name: "profilePhoto", type: "string" },
        { name: "role", type: "string" },
        { name: "staffId", type: "string" },
        { name: "title", type: "string" },
        { name: "departmentName", type: "string" },
        { name: "organizationName", type: "string" },
      ],
    }),
    tableSchema({
      name: "country_codes",
      columns: [{ name: "code", type: "string" }],
    }),
  ],
});
