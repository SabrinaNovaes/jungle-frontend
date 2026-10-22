import type { ItemCarrinho } from '@/context/CarrinhoContext';
import { precoParaNumero } from '@/utils/preco';

export const CUPOM_CODIGO = 'JUNGLE10';
export const CUPOM_DESCONTO = 0.1;
export const TAXA_REDE = 0.016;

export function cupomValido(codigo: string): boolean {
    return codigo.trim().toUpperCase() === CUPOM_CODIGO;
}

export function valorItem(item: ItemCarrinho): number {
    return precoParaNumero(item.produto.preco) * item.quantidade;
}

export type ResumoPedido = {
    subtotal: number;
    desconto: number;
    taxaRede: number;
    total: number;
};

export function calcularResumo(itens: ItemCarrinho[], cupomAplicado: boolean): ResumoPedido {
    const subtotal = itens.reduce((soma, item) => soma + valorItem(item), 0);
    const desconto = cupomAplicado ? subtotal * CUPOM_DESCONTO : 0;
    const taxaRede = itens.length > 0 ? TAXA_REDE : 0;

    return { subtotal, desconto, taxaRede, total: subtotal - desconto + taxaRede };
}
