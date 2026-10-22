import { useState } from "react";
import { toast } from "react-toastify";
import { useCarrinho } from "@/context/CarrinhoContext";
import { TAXA_REDE } from "@/utils/pedido";
import { formatarEth } from "@/utils/preco";

import Modal from "@/components/common/Modal";
import Divisor from "@/components/common/Divisor";
import LinhaValor from "@/components/common/LinhaValor";
import ItemTransacao from "./ItemTransacao";
import ResumoTransacao, { type CompraConfirmada } from "./ResumoTransacao";

import img from "../../assets/imgModalPedido.png";

type ModalPedidoProps = {
    carteira: string;
    total: number;
};

function ModalPedido({ carteira, total }: ModalPedidoProps) {

    const [modalAberto, setModalAberto] = useState(false);
    const [compraConfirmada, setCompraConfirmada] = useState<CompraConfirmada | null>(null);

    const { itens } = useCarrinho();

    const taxaRede = itens.length > 0 ? TAXA_REDE : 0;

    function confirmarCompra() {
        if (itens.length === 0) {
            toast.error("Seu carrinho está vazio.");
            return;
        }

        if (!carteira) {
            toast.error("Selecione uma carteira.");
            return;
        }

        setCompraConfirmada({
            id: crypto.randomUUID(),
            data: new Date(),
            total,
            carteira,
        });

        setModalAberto(true);
    }

    return (
        <>
            <button
                type="button"
                onClick={confirmarCompra}
                className="btn btn-block btn-gradient mt-2 md:bg-none md:bg-primary md:hover:bg-accent">
                Confirmar compra
            </button>

            <Modal
                open={modalAberto}
                onClose={() => setModalAberto(false)}
                className="md:w-xl">
                {/* HEADER MODAL */}
                <div className="px-6 pb-4 pt-8 md:pt-10">
                    <img
                        src={img}
                        alt="Ícone de agradecimento"
                        className="mx-auto size-20" />

                    <h1 className="mx-auto mt-4 text-center text-subtitle font-bold text-secondary">
                        Seus NFTs agora estão na sua carteira
                    </h1>
                </div>

                {/* RESUMO DA TRANSAÇÃO */}
                {compraConfirmada && <ResumoTransacao compra={compraConfirmada} />}

                {/* DETALHES DA TRANSAÇÃO */}
                <div className="px-6 pb-10 pt-5 md:px-11 md:pb-12">
                    <h2 className="mb-4 text-label font-bold text-foreground">
                        Detalhes da transação
                    </h2>

                    {/* Cabeçalho da tabela */}
                    <div className="hidden grid-cols-[minmax(0,1fr)_4rem_6rem] items-center gap-3 text-subtitle font-bold text-foreground md:grid">
                        <h2>NFTs</h2>
                        <h2 className="text-right">Edições</h2>
                        <h2 className="text-right">Subtotal</h2>
                    </div>
                    <Divisor className="my-3 hidden md:block" />

                    <div className="flex flex-col gap-3">
                        {itens.map((item) => (
                            <ItemTransacao key={item.produto.id} item={item} />
                        ))}
                    </div>

                    <div className="mt-4 flex flex-col gap-3 border-b border-primary/50 pb-4 md:border-t md:pt-4">
                        <LinhaValor
                            rotulo="Taxa de rede"
                            valor={formatarEth(taxaRede)}
                            rotuloClassName="text-label text-foreground"
                            valorClassName="text-right text-title text-foreground" />

                        <LinhaValor
                            rotulo="Total"
                            valor={formatarEth(total, 3)}
                            rotuloClassName="text-subtitle font-bold text-foreground"
                            valorClassName="text-right text-title font-bold text-accent" />
                    </div>

                    <p className="my-6 text-center text-body leading-relaxed text-secondary">
                        Transação confirmada na Ethereum. A propriedade foi transferida
                        para sua carteira conectada e registrada na rede.
                    </p>

                    <button
                        type="button"
                        onClick={() => { }}
                        className="btn btn-primary mx-auto flex min-h-12 px-6 text-subtitle">
                        Ver no Etherscan
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default ModalPedido;
