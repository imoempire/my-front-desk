import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: {
    organizationId: string;
    firstName: string;
    lastName: string;
    gender: string;
    countryCode: string;
    phoneNumber: string;
  };
}

export default function useRegisterGuestMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.guestregister(variables);
    },
  });
}
