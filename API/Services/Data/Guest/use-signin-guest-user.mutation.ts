import { useMutation } from "@tanstack/react-query";
import user from "../../Repository/user";
import { GuestLoginProps } from "../../../ApiProps";

export default function useGuestLoginMutations() {
  return useMutation({
    mutationFn: (variables: GuestLoginProps) => {
      return user.guestlogin(variables);
    },
  });
}
