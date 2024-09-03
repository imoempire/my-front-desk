import { useMutation } from "@tanstack/react-query";
import user from "../../Repository/user";

interface Props {
  variables?: {
    password: string;
  };
}

export default function useLogoutMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.logout(variables);
    },
  });
}
