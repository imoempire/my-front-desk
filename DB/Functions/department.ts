import { useCallback } from "react";
import { database, departmentsCollection } from "..";
import Department from "../models/Departments";

interface DepartmentData {
  departmentId: string;
  organizationId: string;
  departmentName: string;
  departmentRoomNum: string;
}

const useSaveDepartmentData = () => {
  const saveDepartmentData = useCallback(
    async (departments: DepartmentData[]) => {
      try {
        await database.write(async () => {
          const comments = await departmentsCollection.query().fetch();
          const deleted = comments.map((comment) =>
            comment.prepareDestroyPermanently()
          );

          await database.batch(deleted);
          departments?.map((departments) => {
            database.batch(
              departmentsCollection.prepareCreate((department) => {
                department.departmentId = departments.departmentId;
                department.organizationId = departments.organizationId;
                department.departmentName = departments.departmentName;
                department.departmentRoomNum = departments.departmentRoomNum;
              })
            );
          });
        });
        console.log("Department data saved successfully");
      } catch (error) {
        console.error("Error saving department data:", error);
      }
    },
    []
  );

  return { saveDepartmentData };
};

export default useSaveDepartmentData;
