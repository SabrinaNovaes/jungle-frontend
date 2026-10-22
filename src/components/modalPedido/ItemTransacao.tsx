import type { ItemCarrinho } from "@/context/CarrinhoContext";
import { resolverImagemNft } from "@/assets/nftImagens";
import { formatarEth } from "@/utils/preco";
import { valorItem } from "@/utils/pedido";

type ItemTransacaoProps = {
    item: ItemCarrinho;
};

function ItemTransacao({ item }: ItemTransacaoProps) {
    const { produto, quantidade } = item;

    return (
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:grid-cols-[minmax(0,1fr)_4rem_6rem]">
            <div className="flex min-w-0 items-center gap-3">
                <img
                    src={resolverImagemNft(produto.imagem)}
                    alt={produto.nome}
                    className="size-14 shrink-0 rounded-lg object-cover md:size-18" />

                <div className="min-w-0">
                    <p className="truncate text-subtitle font-bold text-foreground">
                        {produto.nome} {produto.identificador}
                    </p>
                    <p className="truncate text-body text-secondary">
                        ID do token: {produto.identificador}
                    </p>
                    <p className="text-body text-secondary md:hidden">
                        (x {quantidade})
                    </p>
                </div>
            </div>

            <p className="hidden text-right text-body text-secondary md:block">
                (x {quantidade})
            </p>

            <p className="text-right text-subtitle font-bold text-accent md:text-title">
                {formatarEth(valorItem(item))}
            </p>
        </div>
    );
}

export default ItemTransacao;
