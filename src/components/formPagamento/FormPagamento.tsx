import { useCarrinho } from "@/context/CarrinhoContext";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

import imagem1 from '@/assets/Frame136.png';
import imagem2 from '@/assets/NFTArtwork04.png';
import imagem3 from '@/assets/NFTArtwork05.png';
import imagem4 from '@/assets/NFTArtwork09.png';
import ModalPedido from "../modalPedido/ModalPedido";

const imagens: Record<string, string> = {
    imagem1,
    imagem2,
    imagem3,
    imagem4,
};

const carteiras = [
    { id: 'metamask', nome: 'MetaMask' },
    { id: 'walletconnect', nome: 'WalletConnect' },
    { id: 'coinbase', nome: 'Coinbase Wallet' },
];

function FormPagamento() {

    const { itens } = useCarrinho();

    const [carteira, setCarteira] = useState('metamask');
    const [codigo, setCodigo] = useState('');
    const [cupomAplicado, setCupomAplicado] = useState(false);
    const [mostrarCupom, setMostrarCupom] = useState(false);

    const subtotal = useMemo(
        () =>
            itens.reduce((total, item) => {
                const preco = Number.parseFloat(
                    item.produto.preco.replace(' ETH', '').replace(',', '.')
                );

                return total + preco * item.quantidade;
            }, 0),
        [itens]
    );

    const desconto = cupomAplicado ? subtotal * 0.1 : 0;
    const taxaRede = itens.length > 0 ? 0.016 : 0;
    const total = subtotal - desconto + taxaRede;

    function aplicarCupom() {
        if (codigo.trim().toUpperCase() === 'JUNGLE10') {
            setCupomAplicado(true);
            toast.success('Cupom de 10% aplicado!');
        } else {
            setCupomAplicado(false);
            toast.error('Cupom inválido.');
        }
    }

    return (
        <>
            <div className="w-[405px] h-[778px] gap-[12px] flex flex-col">
                <h1 className="w-[405px] h-[16px] font-bold text-[17px] mb-1 leading-[16px] text-[var(--color-text-foreground)]">
                    Seus NFTs
                </h1>

                <div className="h-[750px] gap-[12px]">
                    <div className="w-[405px] h-[28px] gap-[12px]">
                        <div className="w-full h-[16px] justify-between flex text-[var(--color-text-foreground)]">
                            <h2 className="w-[39px] h-[16px] font-bold text-[16px] leading-[16px]">
                                NFTs
                            </h2>

                            <span className="w-[77px] h-[16px] font-medium text-[16px] leading-[16px]">
                                Subtotal
                            </span>
                        </div>
                        <div className="w-full mt-3.5 h-0 border-[0.3px] border-[var(--color-primary)] opacity-[50%]"></div>
                    </div>

                    <div className="w-full gap-[12px] pt-4">
                        {itens.map((item) => {
                            const produto = item.produto;
                            const preco = Number.parseFloat(
                                produto.preco.replace(' ETH', '').replace(',', '.')
                            );
                            const imagem = imagens[produto.imagem] ?? produto.imagem;

                            return (
                                <div
                                    key={produto.id}
                                    className="flex min-w-0 items-center gap-3 bg-[var(--color-card-dark)] p-2 mb-2">
                                    <img
                                        src={imagem}
                                        alt={produto.nome}
                                        className="h-12 w-12 shrink-0 rounded object-cover" />

                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-bold">
                                            {produto.nome} {produto.identificador}
                                        </p>
                                        <p className="text-[10px] text-[var(--color-text-secundary)]">
                                            ID do token: {produto.identificador}
                                        </p>
                                    </div>

                                    <span className="shrink-0 text-[10px] text-[var(--color-text-secundary)]">
                                        (x {item.quantidade})
                                    </span>

                                    <span className="shrink-0 text-sm font-bold text-[var(--color-primary)]">
                                        {(preco * item.quantidade).toFixed(2)} ETH
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full mb-4">
                        <button
                            type="button"
                            onClick={() => setMostrarCupom((atual) => !atual)}
                            className="text-[14px] leading-[16px] w-full h-[16px]">
                            Tem um código promocional? Aplique aqui
                        </button>

                        {mostrarCupom && (
                            <div className='w-full flex rounded-[3px] overflow-hidden border pl-[8px] border-[var(--color-primary)]'>
                                <input
                                    type='text'
                                    value={codigo}
                                    placeholder='Digite o código promocional...'
                                    onChange={(e) => {
                                        setCodigo(e.target.value);
                                        setCupomAplicado(false);
                                    }}
                                    className='w-full h-[40px] text-[var(--color-text-secundary)] text-[12px] leagind-[16px] outline-none' />

                                <button
                                    type='button'
                                    onClick={aplicarCupom}
                                    className='w-50 h-[40px] gap-[10px] text-[var(--color-background)] bg-[var(--color-primary)] font-bold text-[15px] leading-[16px] text-center'>
                                    Aplicar
                                </button>
                            </div>
                        )}

                        {cupomAplicado && (
                            <p className="mt-2 text-xs text-green-400">
                                Cupom JUNGLE10 aplicado: 10% de desconto.
                            </p>
                        )}
                    </div>

                    <div className="w-full h-[20px] flex flex-col justify-between text-[var(--color-text-foreground)]">

                        <div className="h-[20px] justify-between flex ">
                            <span className="w-[73px] h-[20px] text-[15px] leading-[100%]">
                                Subtotal
                            </span>
                            <span className="w-[98px] h-[16px] text-[18px] leading-[16px] text-right">
                                {subtotal.toFixed(2)} ETH
                            </span>
                        </div>

                        <div className="w-full h-[20x] justify-between flex ">
                            <span className="w-[199px] h-[20px] text-[15px] leadin-[100%]">
                                Desconto do lançamento
                            </span>
                            <span className="w-[82px] h-[20px] text-[15px] leading-[100%] text-right">
                                (-) {desconto.toFixed(2)}
                            </span>
                        </div>

                        <div className="w-full h-[20px] justify-between flex">
                            <span className="w-[109px] h-[20px] text-[15px] leading-[100%]">
                                Taxa de rede
                            </span>
                            <span className="w-[98px] h-[16px] text-[18px] leading-[16px] text-right">
                                {taxaRede.toFixed(2)} ETH
                            </span>
                        </div>

                        <p className="w-[405px] h-[16px] mt-3 text-[12px] leading-[16px] text-center text-[var(--color-text-accent)]">
                            Taxa estimada
                        </p>

                        <div className="w-[405px] h-0 border border-[var(--color-primary)] opacity-[50%] mb-4 mt-1"></div>

                        <div className="w-[321px] h-[16px] justify-between flex mx-auto mb-6">
                            <span className="w-[29px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                Total
                            </span>
                            <span className="w-[109px] h-[16px] font-bold text-[18px] leading-[16px] text-right text-[var(--color-text-accent)]">
                                {total.toFixed(2)} ETH
                            </span>
                        </div>

                        <div className="w-[405px] h-[272px] gap-[24px]">
                            <h2 className="w-full h-[16px] font-bold text-[17px] leading-[16px] text-center text-[var(--color-text-foreground)]">
                                Carteira e rede
                            </h2>

                            <div className="w-[224px] h-[26px] rounded-[6px] border border-[var(--color-border-soft)] bg-[var(--color-card)] py-[8px] px-[4px] gap-[10px] justify-center mx-auto mt-2">
                                <p className="w-[215px] h-[12px] font-bold text-[9px] leading-[100%] text-[var(--color-text-accent)] text-center">
                                    METAMASK  •  WALLETCONNECT  •  COINBASE
                                </p>
                            </div>

                            <div className="w-full h-[236px] gap-[24px]">
                                <div className="w-full h-[167px] gap-[16px]">
                                    {carteiras.map((opcao) => (
                                        <label
                                            key={opcao.id}
                                            className={`flex cursor-pointer items-center rounded border p-2 my-4 gap-2 ${carteira === opcao.id
                                                ? 'border-[var(--color-primary)]'
                                                : 'border-[var(--color-border)]'
                                                }`}>
                                            <input
                                                type="radio"
                                                name="carteira"
                                                value={opcao.id}
                                                checked={carteira === opcao.id}
                                                onChange={() => setCarteira(opcao.id)}
                                                className="appearance-none w-4 h-4 rounded-full border border-[var(--color-border)] bg-transparent checked:bg-[var(--color-primary)]" />

                                            <span>{opcao.nome}</span>
                                        </label>
                                    ))}
                                </div>
                                <ModalPedido carteira={carteira} total={total} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormPagamento;