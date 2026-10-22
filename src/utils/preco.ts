export function precoParaNumero(preco: string): number {
    return Number.parseFloat(preco.replace(' ETH', '').replace(',', '.'));
}

export function formatarEth(valor: number, casas = 2): string {
    return `${valor.toFixed(casas)} ETH`;
}
