import { useQuery } from '@tanstack/react-query';
import { buscarProduto, buscarProdutos } from '@/service/produtos';

export function useProdutos() {
    return useQuery({
        queryKey: ['produtos'],
        queryFn: buscarProdutos,
        staleTime: 5 * 60 * 1000,
        retry: 1,
    });
}

export function useProduto(id: string) {
    return useQuery({
        queryKey: ['produto', id],
        queryFn: () => buscarProduto(id),
    });
}
