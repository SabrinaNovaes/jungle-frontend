export type Opcao = { valor: string; rotulo: string };

export const REDES: Opcao[] = [
    { valor: 'ethereum', rotulo: 'Ethereum' },
    { valor: 'polygon', rotulo: 'Polygon' },
    { valor: 'solana', rotulo: 'Solana' },
];

export const TIPOS_CARTEIRA: Opcao[] = [
    { valor: 'metamask', rotulo: 'MetaMask' },
    { valor: 'walletconnect', rotulo: 'WalletConnect' },
    { valor: 'coinbase', rotulo: 'Coinbase Wallet' },
];

export const SUFIXOS_ENS: Opcao[] = [
    { valor: 'ethereum', rotulo: '.eth' },
    { valor: 'polygon', rotulo: '.polygon' },
    { valor: 'solana', rotulo: '.sol' },
];
