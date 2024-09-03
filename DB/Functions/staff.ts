import { useCallback } from "react";
import { database, staffsCollection } from "..";

interface StaffData {
  departmentId: string;
  email: string;
  fullName: string;
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

const useSaveStaffData = () => {
  const saveStaffData = useCallback(async (staffData: StaffData[]) => {
    try {
      await database.write(async () => {
        const comments = await staffsCollection.query().fetch();
        const deleted = comments.map((comment) =>
          comment.prepareDestroyPermanently()
        );
        await database.batch(deleted);

        staffData?.map((data) => {
          database.batch(
            staffsCollection.prepareCreate((staff) => {
              staff.fullName = data?.fullName;
              staff.email = data?.email;
              staff.gender = data?.gender;
              staff.phoneNumber = data?.phoneNumber;
              staff.profilePhoto = data?.profilePhoto;
              staff.role = data?.role;
              staff.staffId = data?.staffId;
              staff.title = data.title;
              staff.departmentId = data?.departmentId;
              staff.departmentName = data?.Department?.departmentName;
              staff.organizationId = data?.organizationId;
              staff.organizationName = data?.Organization?.organizationName;
            })
          );
        });
      });
      console.log("Staff data saved successfully");
    } catch (error) {
      console.log("Error saving staff datas:", error);
    }
  }, []);

  return { saveStaffData };
};

export default useSaveStaffData;
