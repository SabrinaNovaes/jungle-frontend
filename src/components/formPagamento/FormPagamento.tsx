import { useState } from "react";
import { toast } from "react-toastify";
import { useCarrinho } from "@/context/CarrinhoContext";
import { calcularResumo, CUPOM_CODIGO, cupomValido } from "@/utils/pedido";
import { formatarEth } from "@/utils/preco";

import ModalPedido from "../modalPedido/ModalPedido";
import CampoCupom from "@/components/common/CampoCupom";
import Divisor from "@/components/common/Divisor";
import LinhaValor from "@/components/common/LinhaValor";
import ItemNftResumo from "@/components/pagamento/ItemNftResumo";
import OpcoesCarteira from "@/components/pagamento/OpcoesCarteira";

function FormPagamento() {

    const { itens } = useCarrinho();

    const [carteira, setCarteira] = useState('metamask');
    const [codigo, setCodigo] = useState('');
    const [cupomAplicado, setCupomAplicado] = useState(false);
    const [mostrarCupom, setMostrarCupom] = useState(false);

    const { subtotal, desconto, taxaRede, total } = calcularResumo(itens, cupomAplicado);

    function aplicarCupom() {
        if (cupomValido(codigo)) {
            setCupomAplicado(true);
            toast.success('Cupom de 10% aplicado!');
        } else {
            setCupomAplicado(false);
            toast.error('Cupom inválido.');
        }
    }

    function alterarCodigo(novoCodigo: string) {
        setCodigo(novoCodigo);
        setCupomAplicado(false);
    }

    return (
        <aside className="flex min-w-0 flex-col gap-3">
            <h2 className="heading hidden md:block">
                Seus NFTs
            </h2>

            {/* LISTA DE NFTs */}
            <div className="hidden flex-col md:flex">
                <div className="flex justify-between text-subtitle text-foreground">
                    <h3 className="font-bold">NFTs</h3>
                    <span className="font-medium">Subtotal</span>
                </div>
                <Divisor className="my-3" />

                <div className="flex flex-col gap-2">
                    {itens.map((item) => (
                        <ItemNftResumo key={item.produto.id} item={item} />
                    ))}
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => setMostrarCupom((atual) => !atual)}
                        className="text-center text-body">
                        Tem um código promocional? Aplique aqui
                    </button>

                    {mostrarCupom && (
                        <CampoCupom
                            valor={codigo}
                            onChange={alterarCodigo}
                            onAplicar={aplicarCupom} />
                    )}

                    {cupomAplicado && (
                        <p className="text-caption text-green-400">
                            Cupom {CUPOM_CODIGO} aplicado: 10% de desconto.
                        </p>
                    )}
                </div>
            </div>

            {/* SUBTOTAL / DESCONTO / TAXA */}
            <div className="hidden flex-col gap-3 text-foreground md:flex">
                <LinhaValor rotulo="Subtotal" valor={formatarEth(subtotal)} />

                <LinhaValor
                    rotulo="Desconto do lançamento"
                    valor={`(-) ${desconto.toFixed(2)}`}
                    valorClassName="text-right text-label" />

                <LinhaValor rotulo="Taxa de rede" valor={formatarEth(taxaRede)} />

                <p className="text-center text-caption text-accent">
                    Taxa estimada
                </p>

                <Divisor />
            </div>

            {/* TOTAL */}
            <LinhaValor
                rotulo="Total"
                valor={formatarEth(total)}
                className="md:px-4 max-md:order-2"
                rotuloClassName="text-subtitle font-bold text-foreground"
                valorClassName="text-right text-title font-bold text-accent" />

            {/* CARTEIRA E REDE */}
            <section className="flex flex-col gap-4 md:mt-3 max-md:order-1">
                <h2 className="heading md:text-center">
                    Carteira e rede
                </h2>

                <p className="mx-auto hidden w-fit rounded-sm border border-line-soft bg-card px-3 py-2 text-center text-tiny font-bold text-accent md:block">
                    METAMASK  •  WALLETCONNECT  •  COINBASE
                </p>

                <OpcoesCarteira selecionada={carteira} onSelecionar={setCarteira} />
            </section>

            <div className="max-md:order-3">
                <ModalPedido carteira={carteira} total={total} />
            </div>
        </aside>
    );
}

export default FormPagamento;
