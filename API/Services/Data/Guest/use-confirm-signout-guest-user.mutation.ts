import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: { phoneNumber: string; countryCode: string };
  purposeId: string;
}

export default function useConfirmGuestLogoutMutations() {
  return useMutation({
    mutationFn: ({ variables, purposeId }: Props) => {
      return user.confirmguestlogout(variables, purposeId);
    },
  });
}
