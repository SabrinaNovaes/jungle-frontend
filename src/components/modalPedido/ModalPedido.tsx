import { useCarrinho } from "@/context/CarrinhoContext";
import { useState } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";

import img from "../../assets/imgModalPedido.png";

import imagem1 from "@/assets/Frame136.png";
import imagem2 from "@/assets/NFTArtwork04.png";
import imagem3 from "@/assets/NFTArtwork05.png";
import imagem4 from "@/assets/NFTArtwork09.png";

type ModalPedidoProps = {
    carteira: string;
    total: number;
};

function ModalPedido({ carteira, total }: ModalPedidoProps) {

    const [modalAberto, setModalAberto] = useState(false);

    const { itens } = useCarrinho();

    const imagens: Record<string, string> = {
        imagem1,
        imagem2,
        imagem3,
        imagem4,
    };

    const taxaRede = itens.length > 0 ? 0.016 : 0;

    const [compraConfirmada, setCompraConfirmada] = useState<{
        id: string;
        data: Date;
        total: number;
        carteira: string;
    } | null>(null);

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
                className="w-full mt-2 rounded-[3px] bg-[var(--color-primary)] px-4 py-3 font-bold text-[var(--color-background)]">
                Confirmar compra
            </button>
            <Popup
                open={modalAberto}
                onClose={() => setModalAberto(false)}
                modal
                contentStyle={{
                    padding: "0",
                    border: "none",
                    background: "transparent",
                    width: "auto",
                }}>
                <div className="relative w-[578px] min-h-[821px] rounded-[8px] overflow-hidden bg-[var(--color-card-dark)] flex flex-col">
                    {/* HEADER MODAL */}
                    <div className="w-[578px] h-[156px] gap-[16px]">
                        <img
                            src={img}
                            alt="Ícone de agradecimento"
                            className="w-[80px] h-[80px] justify-center mx-auto mt-10" />
                    </div>

                    <h1 className="w-[356px] min-h-[16px] font-bold text-[16px] mb-4 leading-[16px] text-center mx-auto text-[var(--color-text-secundary)]">
                        Seus NFTs agora estão na sua carteira
                    </h1>

                    {/* LINHA */}
                    <div className="w-[578px] h-[1px] bg-[var(--color-primary)]" ></div>

                    <div className="w-full h-[65px] py-[4px] px-[36px] gap-[12px]">
                        <div className="w-[506px] h-[57px] justify-between flex items-center">
                            <div className="w-[127px] h-[36px] flex flex-col gap-2">
                                <span className="w-[200px] h-[16px] font-bold text-[14px] leading-[16px] text-[var(--color-text-secundary)]">
                                    ID da transação
                                </span>
                                <p className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                    {`${compraConfirmada?.id.slice(0, 6)}...${compraConfirmada?.id.slice(-4)}`}
                                </p>
                            </div>

                            <div className="h-[31px] mx-4 border border-[var(--color-primary)] items-center flex"></div>

                            <div className="w-[127px] h-[36px] flex flex-col gap-2">
                                <span className="w-full h-[16px] font-bold text-[14px] leading-[16px] text-[var(--color-text-secundary)]">
                                    Data
                                </span>
                                <p className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                    {compraConfirmada?.data.toLocaleDateString("pt-BR")}
                                </p>
                            </div>

                            <div className="h-[31px] mx-4 border border-[var(--color-primary)] items-center"></div>

                            <div className="w-[127px] h-[36px] flex flex-col gap-2">
                                <span className="w-full h-[16px] font-bold text-[14px] leading-[16px] text-[var(--color-text-secundary)]">
                                    Total
                                </span>
                                <p className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                    {compraConfirmada?.total.toFixed(2)}
                                </p>
                            </div>

                            <div className="h-[31px] mx-4 border border-[var(--color-primary)] items-center"></div>

                            <div className="w-[127px] h-[36px] flex flex-col gap-2">
                                <span className="w-full h-[16px] font-bold text-[14px] leading-[16px] text-[var(--color-text-secundary)]">
                                    Carteira
                                </span>
                                <p className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                    {compraConfirmada?.carteira}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* LINHA */}
                    <div className="relative w-[578px] h-[1px] bg-[var(--color-primary)]" ></div>

                    <div className="w-[578px] h-[598px]">
                        <div className="w-full h-[588px] pt-[20px] pb-[48px] px-[44px] gap-[12px]">
                            <div className="w-[490px] h-[16px] gap-[10px] mb-4">
                                <h2 className="w-[190px] h-full font-bold text-[15px] leadaing-[16px] text-[var(--color-text-foreground)]">
                                    Detalhes da transação
                                </h2>
                            </div>
                            <div className="w-[490px] h-[346px] gap-[12px]">
                                <div className="w-full h-[334px] gap-[12px]">
                                    <div className="w-full h-[274px] gap-[12px]">
                                        <div className="w-full h-[28px] gap-[12px]">
                                            <div className="w-full h-[16px] justify-between flex">
                                                <div className="w-[297px] h-full gap-[10px]">
                                                    <h2 className="w-[39px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                                        NFTs
                                                    </h2>
                                                </div>
                                                <div className="w-[193px] h-[16px] gap-[48px] flex">
                                                    <h2 className="w-[68px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                                        Edições
                                                    </h2>

                                                    <h2 className="w-[68px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                                        Subtotal
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[490px] h-0 border border-[var(--color-primary)] opacity-[50%] justify-center"></div>
                                        <div className="w-[495px] h-[234px] gap-[12px]">
                                            <div className="w-[495px] h-[70px] justify-between">
                                                {itens.map((item) => (
                                                    <div
                                                        key={item.produto.id}
                                                        className="w-[236px] h-[70px] gap-[12px] my-2 flex items-center">
                                                        <img
                                                            src={imagens[item.produto.imagem]}
                                                            alt={item.produto.nome}
                                                            className="h-[70px] w-[70px] rounded-[8px] object-cover mr-2" />

                                                        <div className="w-[154px] h-[38px] gap-[6px] mr-12">
                                                            <p className="w-[200px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                                                {item.produto.nome} {item.produto.identificador}
                                                            </p>
                                                            <p className="w-[154px] h-[16px] text-[14px] leading-[16px] text-[var(--color-text-secundary)]">
                                                                ID do token: {item.produto.identificador}
                                                            </p>
                                                        </div>

                                                        <div className="w-[194px] h-[16px] gap-[48px] flex">
                                                            <p className="w-[43px] h-full text-[14px] leading-[16px] text-right text-[var(--color-text-secundary)]">
                                                                (x {item.quantidade})
                                                            </p>

                                                            <p className="w-[87px] h-full font-bold text-[18px] leading-[16px] text-right text-[var(--color-text-accent)]">
                                                                {(Number.parseFloat(
                                                                    item.produto.preco.replace(" ETH", "").replace(",", ".")
                                                                ) * item.quantidade).toFixed(2)} ETH
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-[48px] gap-[12px] flex flex-col">
                                        <div className="w-full h-[20px] justify-between flex items-center mx-auto">
                                            <p className="w-[109px] h-full text-[15px] leading-[100%] text-[var(--color-text-foreground)]">
                                                Taxa de rede
                                            </p>

                                            <p className="w-[98px] h-[16px] text-[18px] leading-[16px] text-right text-[var(--color-text-foreground)]">
                                                {taxaRede.toFixed(2)} ETH
                                            </p>
                                        </div>

                                        <div className="w-full h-[16px] justify-between flex items-center">
                                            <p className="w-[49px] h-full font-bold text-[16px] leading-[16px] text-[var(--color-text-foregorund)]">
                                                Total
                                            </p>

                                            <p className="w-[109px] h-full font-bold text-[18px] leading-[16px] text-right text-[var(--color-text-accent)]">
                                                {total.toFixed(3)} ETH
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[490px] h-0 border border-[var(--color-primary)] opacity-[50%] justify-center"></div>
                            </div>
                            <div className="w-[490px] h-[34px] mt-12 justify-center mx-auto flex flex-col">
                                <p className="w-full h-[66px] my-6 text-[14px] leading-[22px] text-center text-[var(--color-text-secundary)]">
                                    Transação confirmada na Ethereum. A propriedade foi transferida
                                    para sua carteira conectada e registrada na rede.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => { }}
                                    className="w-[186px] h-[48px] rounded-[5px] p-[16px] bg-[var(--color-primary)] 
                                        text-[var(--color-background)] text-[16px] leading-[16px] font-bold justofy-center mx-auto">
                                            Ver no Etherscan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[843px] w-full h-[10px] bg-[var(--color-primary)]"></div>
                </div>
            </Popup>
        </>
    );
}

export default ModalPedido;
