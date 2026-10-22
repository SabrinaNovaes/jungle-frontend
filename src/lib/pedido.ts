import type { ItemCarrinho } from '@/context/CarrinhoContext';

export const TAXA_REDE = 0.016;

export const CODIGO_CUPOM = 'JUNGLE10';
export const DESCONTO_CUPOM = 0.1;

export function parsePreco(preco: string): number {
    return Number.parseFloat(preco.replace(' ETH', '').replace(',', '.'));
}

export function calcularSubtotal(itens: ItemCarrinho[]): number {
    return itens.reduce(
        (soma, item) => soma + parsePreco(item.produto.preco) * item.quantidade,
        0
    );
}

export function calcularTaxaRede(itens: ItemCarrinho[]): number {
    return itens.length > 0 ? TAXA_REDE : 0;
}

export function cupomEhValido(codigo: string): boolean {
    return codigo.trim().toUpperCase() === CODIGO_CUPOM;
}
