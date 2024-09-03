import { useMutation } from "@tanstack/react-query";
import user from "../../Repository/user";

interface Props {
  variables?: {
    guestId: string;
    organizationId: string;
    purpose: string;
    departmentId: string;
    staffId: string;
  };
}

export default function useCreatePurposeMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.guestPurpose(variables);
    },
  });
}
