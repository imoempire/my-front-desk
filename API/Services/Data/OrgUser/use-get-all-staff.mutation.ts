import { useQuery } from "@tanstack/react-query";
import user from "../../Repository/user";
import { API_ENDPOINT } from "../../../API/endpoints";

export default function useGetAllStaffMutations() {
  return useQuery({
    queryKey: ["mystaff"],
    queryFn: async () => {
      let response = await user.find(API_ENDPOINT.GET_MY_STAFF);
      return response?.data?.data;
    },
    // refetchInterval: 60000,
    staleTime: Infinity,
  });
}
