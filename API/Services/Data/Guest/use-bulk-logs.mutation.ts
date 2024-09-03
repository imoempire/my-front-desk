import { useMutation } from "@tanstack/react-query";
import user from "../../Repository/user";

interface Props {
  variables?: {}[];
}

export default function useBulkGuestLogsMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.bulkPurposeLogs(variables);
    },
  });
}
