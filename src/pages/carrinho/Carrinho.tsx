import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useCarrinho } from '@/context/CarrinhoContext';
import { calcularResumo, cupomValido } from '@/utils/pedido';

import Carousel from '@/components/carouselColecao/CarouselColecao';
import PageHeaderMobile from '@/components/pageHeaderMobile/PageHeaderMobile';
import Divisor from '@/components/common/Divisor';
import ItemCarrinho from '@/components/carrinho/ItemCarrinho';
import ResumoCarteira from '@/components/carrinho/ResumoCarteira';
import { colunasTabela } from '@/components/carrinho/colunasTabela';

const MSG_CUPOM_APLICADO = 'Cupom de 10% aplicado!';
const MSG_CUPOM_INVALIDO = 'Cupom inválido.';

function Carrinho() {

    const navigate = useNavigate();

    const {
        itens,
        atualizarQuantidade,
        removerDoCarrinho,
    } = useCarrinho();

    const [codigoPromocional, setCodigoPromocional] = useState('');
    const [mensagemPromo, setMensagemPromo] = useState('');

    const cupomAplicado =
        cupomValido(codigoPromocional) && mensagemPromo === MSG_CUPOM_APLICADO;

    const resumo = calcularResumo(itens, cupomAplicado);

    function aplicarCupom() {
        setMensagemPromo(
            cupomValido(codigoPromocional) ? MSG_CUPOM_APLICADO : MSG_CUPOM_INVALIDO
        );
    }

    function alterarCodigo(codigo: string) {
        setCodigoPromocional(codigo);
        setMensagemPromo('');
    }

    return (
        <div className="page flex flex-col gap-8 pb-8 md:pb-16">
            <PageHeaderMobile titulo="Carrinho de NFTs" />

            <h1 className="hidden py-4 text-label font-bold text-foreground md:block">
                Início / Mercado / Carrinho
            </h1>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20">

                {/* LISTA DE ITENS */}
                <section className="min-w-0">
                    {/* TOPO CARRINHO */}
                    <div className={`hidden items-center gap-2 pr-2 text-subtitle text-foreground md:grid ${colunasTabela}`}>
                        <span className="font-bold">NFTs</span>
                        <span className="font-medium">Preço</span>
                        <span className="font-bold">Edições</span>
                        <span className="font-medium">Total</span>
                        <span aria-hidden="true" />
                    </div>

                    <Divisor forca={70} className="my-3 hidden md:block" />

                    <div className="flex flex-col gap-3">
                        {itens.length === 0 ? (
                            <div className="py-8 text-center">
                                <p>Seu carrinho está vazio.</p>
                                <Link
                                    to="/mercado"
                                    className="mt-4 inline-block text-primary">
                                    Continuar explorando
                                </Link>
                            </div>
                        ) : (
                            itens.map((item) => (
                                <ItemCarrinho
                                    key={item.produto.id}
                                    item={item}
                                    onAtualizarQuantidade={atualizarQuantidade}
                                    onRemover={removerDoCarrinho} />
                            ))
                        )}
                    </div>
                </section>

                <ResumoCarteira
                    resumo={resumo}
                    codigo={codigoPromocional}
                    onCodigoChange={alterarCodigo}
                    onAplicarCupom={aplicarCupom}
                    mensagemCupom={mensagemPromo}
                    cupomAplicado={cupomAplicado}
                    carrinhoVazio={itens.length === 0}
                    onFinalizar={() => navigate({ to: "/pagamento" })} />
            </div>

            <Carousel titulo="Colecionadores também viram" />
        </div>
    );
}

export default Carrinho;
