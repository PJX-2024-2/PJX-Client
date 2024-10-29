// ai api 파일 생성
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {aiPost} from '../../../apis/apiInstance';
import {AxiosResponse} from 'axios';
import { ReceiptImage } from '../../../types/receipt';

export const POST_RECEIPT_QUERY_KEY: string[] = ['receiptData'];

export const postReceiptImage = async (body: ReceiptImage) => {
    const formData = new FormData();
    formData.append('files',body.file);
    const response: AxiosResponse = await aiPost(`/receipt/analyze`,formData);
    
    return response.data;
};

export const usePostReceiptAnalyze = ({body}:{body:ReceiptImage}) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn : postReceiptImage,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [POST_RECEIPT_QUERY_KEY,body]});
        },
        onError: () => {
            console.log('ERROR');
        },
    });
    return {mutation};
}

export default usePostReceiptAnalyze;

