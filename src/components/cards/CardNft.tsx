import { Link } from '@tanstack/react-router';
import { resolverImagemNft } from '@/assets/nftImagens';
import type { Produto } from '@/types/produto';

type CardNftProps = {
    produto: Produto;
    carrossel?: boolean;
};

const larguraCarrossel =
    'shrink-0 basis-[calc((100%-1.5rem)/2)] md:basis-[calc((100%-3rem)/3)] xl:basis-[calc((100%-6rem)/5)]';

/* Card de um NFT */
function CardNft({ produto, carrossel = false }: CardNftProps) {
    return (
        <Link
            to="/mercado/$id"
            params={{ id: String(produto.id) }}
            className={`flex min-w-0 flex-col gap-3 ${carrossel ? larguraCarrossel : 'w-full'}`}>
            <div className="flex w-full items-center justify-center bg-card-dark p-2 md:px-1 md:py-6">
                <img
                    src={resolverImagemNft(produto.imagem)}
                    alt={produto.nome || 'NFT image'}
                    className="aspect-square w-full rounded-lg object-cover" />
            </div>

            <div className="flex flex-wrap gap-x-2 text-body leading-tight text-foreground md:text-subtitle">
                <span>{produto.nome}</span>
                <span>{produto.identificador}</span>
            </div>

            <span className="text-subtitle font-bold leading-tight text-accent md:text-title">
                {produto.preco}
            </span>
        </Link>
    );
}

export default CardNft;
