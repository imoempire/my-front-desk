import { useMutation } from "@tanstack/react-query";
import user from "../../Repository/user";
import { LoginProps } from "@/constants/FormProps";

interface Props {
  variables: LoginProps;
}

export default function useLoginMutation() {
  return useMutation({
    mutationKey: ["orglogin"],
    mutationFn: ({ variables }: Props) => user.login(variables),
  });
}
