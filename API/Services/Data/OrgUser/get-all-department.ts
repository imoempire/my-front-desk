import { useQuery } from "@tanstack/react-query";
import user from "../../Repository/user";
import { API_ENDPOINT } from "../../../API/endpoints";

const fetchData = async () => {
  let response = await user.getStaff(API_ENDPOINT.GET_MY_DEPARTMENT);
  return response?.data?.data;
};

export default function useGetAllDepartmentMutations() {
  return useQuery({
    queryKey: ["department"],
    queryFn: fetchData,
    // refetchInterval: 60000,
    staleTime: Infinity,
  });
}
