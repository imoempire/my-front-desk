import { useMutation } from '@tanstack/react-query';
import user from '../../Repository/user';

interface Props {
  variables?: {}[];
}

export default function useCreateBulkPurposeMutations() {
  return useMutation(({ variables }: Props) => {
    return user.createBulkPurpose(variables);
  });
}
