import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";

// Import model classes
import Guest from "./models/Guest";
import OnlineGuest from "./models/OnlineGuest";
import GuestLogs from "./models/GuestLogs";
import Purpose from "./models/Purpose";
import OnlinePurpose from "./models/OnlinePurpose";
import Department from "./models/Departments";
import Staff from "./models/Staff";
import CountryCode from "./models/CountryCode";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: (error) => {
    console.error("Database setup error:", error);
  },
});

const database = new Database({
  adapter,
  modelClasses: [
    Guest,
    OnlineGuest,
    GuestLogs,
    Purpose,
    OnlinePurpose,
    Department,
    Staff,
    CountryCode,
  ],
});

// Define collections for each table
export const guestsCollection = database.get<Guest>("guest");
export const onlineGuestsCollection = database.get<OnlineGuest>("online_guest");
export const guestLogsCollection = database.get<GuestLogs>("guest_logs");
export const purposesCollection = database.get<Purpose>("purpose");
export const onlinePurposesCollection =
  database.get<OnlinePurpose>("online_purpose");
export const departmentsCollection = database.get<Department>("departments");
export const staffsCollection = database.get<Staff>("staff");
export const CountryCodeCollection = database.get<CountryCode>(
  "country_codes"
);

export { database };
