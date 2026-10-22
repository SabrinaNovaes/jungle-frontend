import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCarrinho } from "@/context/CarrinhoContext";
import type { Produto } from "@/types/produto";
import Quantidade from "@/components/quantidade/Quantidade";

type CompraNftProps = {
    produto: Produto;
};

function CompraNft({ produto }: CompraNftProps) {
    const [quantidade, setQuantidade] = useState(1);
    const { adicionarAoCarrinho } = useCarrinho();

    const adicionar = () => adicionarAoCarrinho(produto, quantidade);

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col gap-3 rounded-t-xl bg-card-dark p-4 shadow-bar
            md:static md:flex-row md:items-center md:justify-between md:gap-5 md:rounded-none md:bg-transparent md:p-0 md:shadow-none">
            <div className="flex items-center justify-between md:contents">
                <Quantidade
                    rotulo="Qtd."
                    valor={quantidade}
                    onDiminuir={() => setQuantidade((atual) => Math.max(1, atual - 1))}
                    onAumentar={() => setQuantidade((atual) => atual + 1)} />

                <span className="text-heading font-bold leading-tight text-accent md:hidden">
                    {produto.preco}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={adicionar}
                    className="btn btn-gradient flex-1 md:flex-none md:bg-none md:bg-primary md:px-6">
                    <span className="md:hidden">Comprar NFT</span>
                    <span className="hidden md:inline">COMPRAR</span>
                </button>

                {/* Carrinho (mobile) */}
                <button
                    type="button"
                    aria-label="Adicionar ao carrinho"
                    onClick={adicionar}
                    className="btn btn-outline size-10 shrink-0 px-0 md:hidden">
                    <FaCartShopping size={16} />
                </button>

                {/* Favoritar (desktop) */}
                <button type="button" className="btn hidden border border-primary text-primary md:inline-flex md:px-4">
                    <IoMdHeartEmpty size={25} /> Favoritar
                </button>
            </div>
        </div>
    );
}

export default CompraNft;
