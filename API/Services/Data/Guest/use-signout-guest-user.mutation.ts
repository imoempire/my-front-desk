import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: { phoneNumber: string; countryCode: string };
}

export default function useGuestLogoutMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.guestlogout(variables);
    },
  });
}
