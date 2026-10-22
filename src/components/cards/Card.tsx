import { useRef, useState } from 'react';
import { useProdutos } from '@/hooks/useProdutos';
import CardNft from './CardNft';
import Paginacao from './Paginacao';
import CarrosselIndicadores from './CarrosselIndicadores';

type CardsProps = {
    modo?: 'grade' | 'carrossel';
};

const PRODUTOS_POR_PAGINA = 9;
const SLIDES_CARROSSEL = 3;
const GAP_CARROSSEL = 24;

/* Lista de NFTs em grade paginada ou em carrossel. */
function Cards({ modo = 'grade' }: CardsProps) {
    const carrosselRef = useRef<HTMLDivElement>(null);
    const [slideAtual, setSlideAtual] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);

    const { data: cards = [], isLoading, isError } = useProdutos();

    function mudarSlide(indice: number) {
        const carrossel = carrosselRef.current;
        if (!carrossel) return;

        const card = carrossel.querySelector('a');
        if (!card) return;

        const distancia = card.getBoundingClientRect().width + GAP_CARROSSEL;

        carrossel.scrollTo({
            left: indice * distancia,
            behavior: 'smooth',
        });

        setSlideAtual(indice);
    }

    if (isLoading) return <p>Carregando produtos...</p>;
    if (isError) return <p>Erro ao carregar os produtos.</p>;

    const carrossel = modo === 'carrossel';
    const indiceInicial = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
    const produtosPagina = carrossel
        ? cards
        : cards.slice(indiceInicial, indiceInicial + PRODUTOS_POR_PAGINA);
    const totalPaginas = Math.ceil(cards.length / PRODUTOS_POR_PAGINA);

    return (
        <div className="flex w-full flex-col gap-8 md:gap-12">
            <div
                ref={carrosselRef}
                className={carrossel
                    ? 'flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4'
                    : 'nft-grid'}>
                {produtosPagina.map((produto) => (
                    <CardNft key={produto.id} produto={produto} carrossel={carrossel} />
                ))}
            </div>

            {!carrossel && (
                <Paginacao
                    paginaAtual={paginaAtual}
                    totalPaginas={totalPaginas}
                    onMudar={setPaginaAtual} />
            )}

            {carrossel && (
                <CarrosselIndicadores
                    total={SLIDES_CARROSSEL}
                    atual={slideAtual}
                    onSelecionar={mudarSlide} />
            )}
        </div>
    );
}

export default Cards;
