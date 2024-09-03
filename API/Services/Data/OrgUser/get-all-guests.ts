import { useMutation, useQuery } from "@tanstack/react-query";
import user from "../../Repository/user";
import { API_ENDPOINT } from "../../../API/endpoints";

export default function useGetAllGuestsfMutations({
  orgId,
}: {
  orgId: string | any;
}) {
  return useQuery({
    queryKey: ["allmyguest", orgId],
    queryFn: async () => {
      let url = `${API_ENDPOINT.GET_MY_GUESTS}`;
      let response = await user.getStaff(url);
      return response?.data;
    },
    refetchInterval: 60000,
    staleTime: Infinity,
  });
}
