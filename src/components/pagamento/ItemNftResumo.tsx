import type { ItemCarrinho } from '@/context/CarrinhoContext';
import { resolverImagemNft } from '@/assets/nftImagens';
import { formatarEth } from '@/utils/preco';
import { valorItem } from '@/utils/pedido';

type ItemNftResumoProps = {
    item: ItemCarrinho;
};

function ItemNftResumo({ item }: ItemNftResumoProps) {
    const { produto, quantidade } = item;

    return (
        <div className="flex min-w-0 items-center gap-3 bg-card-dark p-2">
            <img
                src={resolverImagemNft(produto.imagem)}
                alt={produto.nome}
                className="size-12 shrink-0 rounded-xs object-cover" />

            <div className="min-w-0 flex-1">
                <p className="text-body font-bold">
                    {produto.nome} {produto.identificador}
                </p>
                <p className="text-tiny text-secondary">
                    ID do token: {produto.identificador}
                </p>
            </div>

            <span className="shrink-0 text-tiny text-secondary">
                (x {quantidade})
            </span>

            <span className="shrink-0 text-body font-bold text-primary">
                {formatarEth(valorItem(item))}
            </span>
        </div>
    );
}

export default ItemNftResumo;
