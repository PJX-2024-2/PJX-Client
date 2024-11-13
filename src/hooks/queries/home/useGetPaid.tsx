import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const PAID_QUERY_KEY = ['paidData'];

interface PaidData {
    amount: number;
}

export const fetchSummary = async (): Promise<PaidData> => {
    const response: AxiosResponse<PaidData> = await get('/api/spending/current');
    return response.data;
};

const useGetPaid = ()=>{
    const { data, isLoading, isError } = useSuspenseQuery({
        queryKey: PAID_QUERY_KEY,
        queryFn: () => fetchSummary(),
    });
    return  { data, isLoading, isError };
};

export default useGetPaid;