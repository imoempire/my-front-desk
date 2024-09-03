import { useState, useEffect, useCallback } from "react";
import {
  guestsCollection,
  onlineGuestsCollection,
  guestLogsCollection,
  purposesCollection,
  onlinePurposesCollection,
  departmentsCollection,
  staffsCollection,
  CountryCodeCollection,
  database,
} from "../DB/index";
import Guest from "@/DB/models/Guest";
import OnlineGuest from "@/DB/models/OnlineGuest";
import GuestLogs from "@/DB/models/GuestLogs";
import Purpose from "@/DB/models/Purpose";
import OnlinePurpose from "@/DB/models/OnlinePurpose";
import Department, { DapartmentAttributes } from "@/DB/models/Departments";
import Staff, { StaffAttributes } from "@/DB/models/Staff";
import CountryCode from "@/DB/models/CountryCode";
import { withObservables } from "@nozbe/watermelondb/react";

// Generic type for hooks
interface UseDataResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

// Hook to fetch all guests
export const useGuests = (): UseDataResult<Guest> => {
  const [data, setData] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        setLoading(true);
        const allGuests = await guestsCollection.query().fetch();
        setData(allGuests);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all online guests
export const useOnlineGuests = (): UseDataResult<OnlineGuest> => {
  const [data, setData] = useState<OnlineGuest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOnlineGuests = async () => {
      try {
        setLoading(true);
        const allOnlineGuests = await onlineGuestsCollection.query().fetch();
        setData(allOnlineGuests);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchOnlineGuests();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all guest logs
export const useGuestLogs = (): UseDataResult<GuestLogs> => {
  const [data, setData] = useState<GuestLogs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGuestLogs = async () => {
      try {
        setLoading(true);
        const allGuestLogs = await guestLogsCollection.query().fetch();
        setData(allGuestLogs);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestLogs();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all purposes
export const usePurposes = (): UseDataResult<Purpose> => {
  const [data, setData] = useState<Purpose[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPurposes = async () => {
      try {
        setLoading(true);
        const allPurposes = await purposesCollection.query().fetch();
        setData(allPurposes);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurposes();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all online purposes
export const useOnlinePurposes = (): UseDataResult<OnlinePurpose> => {
  const [data, setData] = useState<OnlinePurpose[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOnlinePurposes = async () => {
      try {
        setLoading(true);
        const allOnlinePurposes = await onlinePurposesCollection
          .query()
          .fetch();
        setData(allOnlinePurposes);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchOnlinePurposes();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all departments
export const useDepartments = (): UseDataResult<DapartmentAttributes> => {
  const [data, setData] = useState<DapartmentAttributes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const allDepartments = await departmentsCollection.query().fetch();
        let restructure = allDepartments?.reduce(
          (acc: DapartmentAttributes[], department) => {
            acc.push({
              departmentId: department.departmentId,
              departmentName: department.departmentName,
              departmentRoomNum: department.departmentRoomNum,
              organizationId: department.organizationId,
            });
            return acc;
          },
          []
        );
        setData(restructure);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  return { data, loading, error };
};

// Hook to fetch all staff
export const useStaffs = (): UseDataResult<StaffAttributes> & {
  refresh: () => void;
} => {
  const [data, setData] = useState<StaffAttributes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStaffs = useCallback(async () => {
    try {
      setLoading(true);
      const allStaffs = await staffsCollection.query().fetch();
      const restructure = allStaffs?.reduce((acc: StaffAttributes[], staff) => {
        acc.push({
          fullName: staff.fullName,
          email: staff.email,
          gender: staff.gender,
          phoneNumber: staff.phoneNumber,
          profilePhoto: staff.profilePhoto,
          departmentId: staff.departmentId,
          departmentName: staff.departmentName,
          role: staff.role,
          organizationId: staff.organizationId,
          organizationName: staff.organizationName,
          staffId: staff.staffId,
          title: staff.title,
        });
        return acc;
      }, []);
      setData(restructure);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStaffs();
  }, [fetchStaffs]);

  return { data, loading, error, refresh: fetchStaffs };
};

interface CountryCodeData {
  code: string;
}
export const useRecentCountryCodes = (initialCode: string = "+233") => {
  const [countryCode, setCountryCode] = useState<string>(initialCode);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the database
  const fetchData = async () => {
    try {
      const rows = await CountryCodeCollection.query().fetch();
      if (rows.length > 0) {
        setCountryCode(rows[0].code || initialCode);
      } else {
        setCountryCode(initialCode);
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch country code.");
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const subscription = CountryCodeCollection.query()
      .observe()
      .subscribe({
        next: (rows) => {
          // Check if we have data and set it
          if (rows.length > 0) {
            setCountryCode(rows[0].code || initialCode);
          } else {
            setCountryCode(initialCode);
          }
          setLoading(false);
        },
        error: (err) => {
          setLoading(false);
          setError("Failed to fetch country code.");
          console.error(err);
        },
      });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, [initialCode]);

  const updateCountryCode = useCallback(
    async (newCode: string) => {
      setLoading(true);
      try {
        if (!CountryCodeCollection) {
          throw new Error("CountryCodeCollection is not initialized.");
        }

        await database.write(async () => {
          const existingRecords = await CountryCodeCollection.query().fetch();
          if (existingRecords.length > 0) {
            // Update existing record
            await existingRecords[0].update((record) => {
              record.code = newCode;
            });
          } else {
            // Create new record if none exists
            await CountryCodeCollection.create((record) => {
              record.code = newCode;
            });
          }
        });

        // Refresh data after successful update
        await fetchData();
      } catch (err) {
        setError("Failed to update country code.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [initialCode]
  );

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      await fetchData();
    } catch (err) {
      setError("Failed to refresh country code.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    countryCode,
    loading,
    error,
    updateCountryCode,
    refresh,
  };
};
