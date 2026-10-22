import { FaTrashCan } from 'react-icons/fa6';
import type { ItemCarrinho as Item } from '@/context/CarrinhoContext';
import { resolverImagemNft } from '@/assets/nftImagens';
import { formatarEth, precoParaNumero } from '@/utils/preco';
import { colunasTabela } from './colunasTabela';

type ItemCarrinhoProps = {
    item: Item;
    onAtualizarQuantidade: (id: number, quantidade: number) => void;
    onRemover: (id: number) => void;
};

/* Linha do carrinho: NFT, preço, quantidade, total e botão de remover. */
function ItemCarrinho({ item, onAtualizarQuantidade, onRemover }: ItemCarrinhoProps) {
    const { produto, quantidade } = item;
    const preco = precoParaNumero(produto.preco);

    return (
        <div
            className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 rounded-md bg-card-dark p-2 md:rounded-none ${colunasTabela}`}>
            <div className="flex min-w-0 items-center gap-3">
                <img
                    src={resolverImagemNft(produto.imagem)}
                    alt={produto.nome}
                    className="size-16 shrink-0 rounded-md object-cover md:size-14" />

                <div className="min-w-0">
                    <p className="truncate text-body font-bold">
                        {produto.nome}
                    </p>
                    <p className="truncate text-caption text-secondary">
                        ID do token: {produto.identificador}
                    </p>
                    {/* Mobile: total do item abaixo do nome (Figma) */}
                    <p className="mt-1 text-subtitle font-bold text-accent md:hidden">
                        {formatarEth(preco * quantidade)}
                    </p>
                </div>
            </div>

            <span className="hidden text-body md:block">
                {formatarEth(preco)}
            </span>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    aria-label="Diminuir quantidade"
                    disabled={quantidade <= 1}
                    onClick={() => onAtualizarQuantidade(produto.id, quantidade - 1)}
                    className="flex size-6 items-center justify-center rounded-full bg-primary text-ink disabled:opacity-40">
                    −
                </button>

                <span className="min-w-4 text-center" aria-live="polite">{quantidade}</span>

                <button
                    type="button"
                    aria-label="Aumentar quantidade"
                    onClick={() => onAtualizarQuantidade(produto.id, quantidade + 1)}
                    className="flex size-6 items-center justify-center rounded-full bg-primary text-ink">
                    +
                </button>
            </div>

            <span className="hidden text-body font-bold text-accent md:block">
                {formatarEth(preco * quantidade)}
            </span>

            <button
                type="button"
                aria-label={`Remover ${produto.nome}`}
                onClick={() => onRemover(produto.id)}
                className="flex size-6 items-center justify-center text-secondary hover:text-coral">
                <FaTrashCan />
            </button>
        </div>
    );
}

export default ItemCarrinho;
