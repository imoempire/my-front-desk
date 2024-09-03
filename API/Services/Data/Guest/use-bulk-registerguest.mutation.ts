import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: {}[];
}

export default function useBulkGuestRegisterMutations() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.bulkGuestsRegister(variables);
    },
  });
}
