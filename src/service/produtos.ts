import axios from 'axios';
import type { Produto } from '@/types/produto';

export async function buscarProdutos(): Promise<Produto[]> {
    const resposta = await axios.get<Produto[]>('/api/produtos');

    if (!Array.isArray(resposta.data)) {
        throw new Error('A API não retornou uma lista de produtos.');
    }

    return resposta.data;
}

export async function buscarProduto(id: string): Promise<Produto> {
    const resposta = await axios.get<Produto>(`/api/produtos/${id}`);
    return resposta.data;
}
