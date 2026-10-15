import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { Link } from '@tanstack/react-router';
import { useCarrinho } from '@/context/CarrinhoContext';

import imagem1 from '../../assets/Frame136.png';
import imagem2 from '../../assets/NFTArtwork04.png';
import imagem3 from '../../assets/NFTArtwork05.png';
import imagem4 from '../../assets/NFTArtwork09.png';
import Carousel from '@/components/carouselColecao/CarouselColecao';

const imagensDisponiveis: Record<string, string> = {
    imagem1,
    imagem2,
    imagem3,
    imagem4,
};

function Carrinho() {
    const {
        itens,
        atualizarQuantidade,
        removerDoCarrinho,
    } = useCarrinho();

    const [codigoPromocional, setCodigoPromocional] = useState('');
    const [mensagemPromo, setMensagemPromo] = useState('');

    const subtotal = itens.reduce((soma, item) => {
        const preco = Number.parseFloat(
            item.produto.preco.replace(' ETH', '').replace(',', '.')
        );

        return soma + preco * item.quantidade;
    }, 0);

    const desconto =
        codigoPromocional.trim().toUpperCase() === 'JUNGLE10' &&
            mensagemPromo === 'Cupom de 10% aplicado!'
            ? subtotal * 0.1
            : 0;

    const taxaRede = itens.length > 0 ? 0.016 : 0;
    const total = subtotal - desconto + taxaRede;

    function aplicarCupom() {
        if (codigoPromocional.trim().toUpperCase() === 'JUNGLE10') {
            setMensagemPromo('Cupom de 10% aplicado!');
        } else {
            setMensagemPromo('Cupom inválido.');
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-16">
            <div className='flex flex-col w-full items-start justify-between'>
                <h1 className='w-full h-[16px] font-bold text-[15px] leading-[16px] text-[var(--color-text-foreground)] my-4'>
                    Início / Mercado / Carrinho
                </h1>

                <div className='w-full h-[388px] justify-between flex gap-20'>
                    <div className='w-[782px] h-[274px] gap-[12px]'>

                        {/* TOPO CARRINHO */}
                        <div className='h-[16px] justify-between pr-[24px] flex'>
                            <div className='w-[250px] h-[16px] gap-[10px]'>
                                <span className='w-[39px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]'>
                                    NFTs
                                </span>
                            </div>

                            <div className='w-[77px] h-[16px] gap-[10px]'>
                                <span className='w-[48px] h-[16px] font-medium text-[16px] lçeading-[16px] text-[var(--color-text-foreground)]'>
                                    Preço
                                </span>
                            </div>

                            <div className='w-[75px] h-[16px] gap-[10px]'>
                                <span className='w-[68px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]'>
                                    Edições
                                </span>
                            </div>

                            <div className='w-[87px] h-[16px] gap-[10px]'>
                                <span className='w-[49px] h-[16px] font-medium text-[16px] leading-[16px] text-[var(--color-text-foreground)]'>
                                    Total
                                </span>
                            </div>

                            <div className='w-[24px] h-[16px] gap-[10px]'>
                            </div>
                        </div>

                        <div className='w-[782px] h-0 border border-[var(--color-primary)] opacity-[70%] justify-center my-3'></div>

                        <div className="flex w-[782px] flex-col gap-[12px]">
                            {itens.length === 0 ? (
                                <div className="py-8 text-center">
                                    <p>Seu carrinho está vazio.</p>
                                    <Link
                                        to="/mercado"
                                        className="mt-4 inline-block text-[var(--color-primary)]">
                                        Continuar explorando
                                    </Link>
                                </div>
                            ) : (
                                itens.map((item) => {
                                    const preco = Number.parseFloat(
                                        item.produto.preco.replace(' ETH', '').replace(',', '.')
                                    );

                                    return (
                                        <div
                                            key={item.produto.id}
                                            className="grid min-h-[55px] grid-cols-[250px_77px_75px_87px_24px] items-center justify-between gap-2 bg-[var(--color-card-dark)] p-2">
                                            <div className="flex min-w-0 items-center gap-3">
                                                <img
                                                    src={imagensDisponiveis[item.produto.imagem]}
                                                    alt={item.produto.nome}
                                                    className="h-[55px] w-[55px] shrink-0 rounded-md object-cover" />

                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-bold">
                                                        {item.produto.nome}
                                                    </p>
                                                    <p className="truncate text-xs text-[var(--color-text-secundary)]">
                                                        ID do token: {item.produto.identificador}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="text-sm">
                                                {preco.toFixed(2)} ETH
                                            </span>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    disabled={item.quantidade <= 1}
                                                    onClick={() =>
                                                        atualizarQuantidade(
                                                            item.produto.id,
                                                            item.quantidade - 1
                                                        )}
                                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-black disabled:opacity-40">
                                                    −
                                                </button>

                                                <span>{item.quantidade}</span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        atualizarQuantidade(
                                                            item.produto.id,
                                                            item.quantidade + 1
                                                        )}
                                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-black">
                                                    +
                                                </button>
                                            </div>

                                            <span className="text-sm font-bold text-[var(--color-text-accent)]">
                                                {(preco * item.quantidade).toFixed(2)} ETH
                                            </span>

                                            {/* REMOVER ITEM */}
                                            <button
                                                type="button"
                                                aria-label={`Remover ${item.produto.nome}`}
                                                onClick={() => removerDoCarrinho(item.produto.id)}
                                                className="text-[var(--color-text-secundary)] hover:text-red-400">
                                                <FaTrashCan />
                                            </button>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>

                    {/* LADO DIREITO */}
                    <div className='w-[332px] h-[388px] gap-[24px]'>
                        <div className='w-full h-[28px] gap-[12px] flex flex-col'>
                            <h2 className='w-[195px] h-[16px] font-bold text-[18px] leading-[16px] text-[var(--color-text-foreground)]'>
                                Resumo da carteira
                            </h2>
                            <div className='w-[332px] h-0 border border-[var(--color-primary)] justify-center opacity-[70%]'></div>

                            <div className='w-full min-h-[64px] gap-[8px]'>
                                <span className='w-[152px] h-[16px] font-bold text-[14px] leading-[16px] text-[var(--color-tet-foreground)]'>
                                    Código promocional
                                </span>

                                <div className='w-full flex rounded-[3px] overflow-hidden border pl-[8px] border-[var(--color-primary)]'>
                                    <input
                                        type='text'
                                        placeholder='Digite o código promocional...'
                                        value={codigoPromocional}
                                        onChange={(e) => {
                                            setCodigoPromocional(e.target.value);
                                            setMensagemPromo('');
                                        }}
                                        className='w-[222px] h-[40px] text-[var(--color-text-secundary)] text-[12px] leagind-[16px] outline-none' />

                                    <button
                                        type='button'
                                        onClick={aplicarCupom}
                                        className='w-[102px] h-[40px] gap-[10px] text-[var(--color-background)] bg-[var(--color-primary)] font-bold text-[15px] leading-[16px] text-center'>
                                        Aplicar
                                    </button>
                                </div>
                                {mensagemPromo && (
                                    <p className={`${mensagemPromo === 'Cupom de 10% aplicado!' ? 'text-green-600' : 'text-red-500'} text-xs`}>
                                        {mensagemPromo}
                                    </p>
                                )}

                            </div>

                            <div className='flex flex-col w-full h-[112px] gap-[12px] mt-3'>
                                <div className='flex w-full h-[20px] justify-between text-[var(--color-text-foreground)]'>
                                    <span className='w-[73px] h-[20px] text-[15px] leading-[100%]'>
                                        Subtotal
                                    </span>

                                    <span className='w-[98px] h-[16px] text-[18px] leading-[16px] text-right'>
                                        {subtotal.toFixed(2)} ETH
                                    </span>
                                </div>

                                <div className='flex w-full h-[20px] justify-between text-[var(--color-text-foreground)]'>
                                    <span className='w-[199px] h-full text-[15px] leading-[100%]'>
                                        Desconto do lançamento
                                    </span>

                                    <span className='w-[82px] h-full text-[15px] leading-[100%] text-right'>
                                        - {desconto.toFixed(2)}
                                    </span>
                                </div>

                                <div className='flex w-full h-[48px] gap-[12px] justify-between text-[var(--color-text-foreground)]'>
                                    <span className='w-[109px] h-[20px] text-[15px] leading-[100%]'>
                                        Taxa de rede
                                    </span>

                                    <span className='w-[98px] h-[16px] text-[18px] leading-[16px] text-right'>
                                        {taxaRede.toFixed(2)} ETH
                                    </span>
                                </div>
                                <span className='w-[94px] h-[16px] text-[12px] leading-[16px] text-[var(--color-text-accent)] text-right ml-auto'>
                                    Taxa estimada
                                </span>

                                <div className='flex w-full h-[16px] justify-between font-bold text-[16px] leading-[16px] text-right'>
                                    <span className='w-[49px] h-[16px] text-[var(--color-text-foreground)]'>
                                        Total
                                    </span>
                                    <span className="w-[109px] text-[var(--color-text-accent)]">
                                        {total.toFixed(2)} ETH
                                    </span>
                                </div>

                                <div className='w-full h-[72px] gap-[12px] flex flex-col'>
                                    <button
                                        type='button'
                                        disabled={itens.length === 0}
                                        onClick={() => {

                                        }}
                                        className='h-[40px] rounded-[3px] bg-[var(--color-primary)] text-[var(--color-background)]'>
                                        Conectar e finalizar
                                    </button>
                                    <Link to='/mercado'
                                        className='w-[181px] h-[20px] text-[15px] leading-[100%] text-[var(--color-text-accent)] mx-auto'>
                                        Continuar explorando
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel titulo="Colecionadores também viram" />
            </div>
        </div>
    );
}

export default Carrinho;