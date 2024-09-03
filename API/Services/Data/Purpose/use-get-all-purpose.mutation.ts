import { useQuery } from '@tanstack/react-query';
import user from '../../Repository/user';
import { API_ENDPOINT } from '../../../api/endpoints';

interface Props {
  variables?: {}[];
}

const fetchData = async () => {
  let response = await user.getallPurposes(API_ENDPOINT.GET_ALL_PURPOSE);
  return response?.data?.data;
};

export default function useGetAllPurposeMutations() {
  return useQuery({
    queryKey: ['all_purpose'],
    queryFn: fetchData,
    refetchInterval: 60000,
  });
}
