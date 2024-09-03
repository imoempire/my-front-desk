import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: {}[];
}

export default function useUpdateBulkPurposeMutations() {
  return useMutation(({ variables }: Props) => {
    return user.updatePurpose(variables);
  });
}
