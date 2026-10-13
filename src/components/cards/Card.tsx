import { useRef, useState } from 'react';
import imagem1 from '../../assets/Frame136.png';
import imagem2 from '../../assets/NFTArtwork04.png';
import imagem3 from '../../assets/NFTArtwork05.png';
import imagem4 from '../../assets/NFTArtwork09.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from '@tanstack/react-router';

type Produto = {
    id: number;
    nome: string;
    identificador: string;
    preco: string;
    imagem: string;
    imagens: string[];
};

const imagensDisponiveis: Record<string, string> = {
    imagem1,
    imagem2,
    imagem3,
    imagem4,
};

type CardsProps = {
    modo?: 'grade' | 'carrossel';
};

function Cards({ modo = 'grade' }: CardsProps) {
    const carrosselRef = useRef<HTMLDivElement>(null);
    const [slideAtual, setSlideAtual] = useState(0);

    function mudarSlide(indice: number) {
        const carrossel = carrosselRef.current;
        if (!carrossel) return;

        const card = carrossel.querySelector('a');
        if (!card) return;

        const distancia = card.getBoundingClientRect().width + 24;

        carrossel.scrollTo({
            left: indice * distancia,
            behavior: 'smooth',
        });

        setSlideAtual(indice);
    }

    const [paginaAtual, setPaginaAtual] = useState(1);

    const { data: cards = [], isLoading, isError } = useQuery({
        queryKey: ['produtos'],
        queryFn: async () => {
            const resposta = await axios.get<Produto[]>('/api/produtos');

            if (!Array.isArray(resposta.data)) {
                throw new Error('A API não retornou uma lista de produtos.');
            }

            return resposta.data;
        },
    });

    if (isLoading) return <p>Carregando produtos...</p>;
    if (isError) return <p>Erro ao carregar os produtos.</p>;

    const produtosPorPagina = 9;

    const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
    const indiceFinal = indiceInicial + produtosPorPagina;

    const produtosPagina =
        modo === 'carrossel'
            ? cards
            : cards.slice(indiceInicial, indiceFinal);

    const totalPaginas = Math.ceil(cards.length / produtosPorPagina);

    return (
        <>
            {/* CARDS */}
            <div className="w-[1200px] min-h-[1373px] flex flex-col gap-[48px]">
                <div
                    ref={carrosselRef}
                    className={
                        modo === 'carrossel'
                            ? 'flex gap-[24px] overflow-x-auto scroll-smooth scrollbar-hide pb-4'
                            : 'w-[842px] h-[1200px] grid grid-cols-3 gap-[72px] mt-8'}>
                    {produtosPagina.map((card) => (
                        <Link
                            key={card.id}
                            to="/mercado/$id"
                            params={{ id: String(card.id) }}
                            className={`flex flex-col w-[258px] h-[356px] gap-[12px] ${modo === 'carrossel' ? 'shrink-0' : ''
                                }`}>
                            <div className="flex items-center justify-center w-full h-[300px] bg-[var(--color-card-dark)]">
                                <img
                                    src={imagensDisponiveis[card.imagem]}
                                    alt={card.nome || 'NFT image'}
                                    className="w-[250px] h-[250px] rounded-[15px]" />
                            </div>

                            <div>
                                <span className="w-full h-[16px] text-[16px] leading-[16px] text-[var(--color-foreground)] pr-4">
                                    {card.nome}
                                </span>

                                <span className="w-full h-[16px] text-[16px] leading-[16px] text-[var(--color-foreground)]">
                                    {card.identificador}
                                </span>
                            </div>

                            <span className="w-full h-[16px] text-[18px] leading-[16px] font-bold text-[var(--color-text-accent)]">
                                {card.preco}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* BOTÕES DA PAGINAÇÃO */}
                {modo === 'grade' && (
                    <div className="w-[842px] flex justify-end">
                        <div className="flex items-center justify-center gap-[8px] w-[207px] h-[35px] self-end">
                            <button
                                type="button"
                                onClick={() => setPaginaAtual(1)}
                                disabled={paginaAtual === 1}
                                className="w-[35px] h-[35px] flex items-center justify-center text-[var(--color-foreground)] border-[var(--color-border)] border"
                            >
                                <IoIosArrowBack />
                            </button>

                            {Array.from({ length: totalPaginas }, (_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setPaginaAtual(index + 1)}
                                    className={`w-[35px] h-[35px] rounded-[4px] gap-[10px] text-[18px] font-bold leading-[16px] ${paginaAtual === index + 1
                                        ? 'bg-[var(--color-primary)] text-[var(--color-background)]'
                                        : 'text-[var(--color-foreground)] border-[var(--color-border)] border px-[12px] pt-[8px] pb-[10px]'
                                        }`}>
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={() => setPaginaAtual(paginaAtual + 1)}
                                disabled={paginaAtual === totalPaginas}
                                className="w-[35px] h-[35px] flex items-center justify-center text-[var(--color-foreground)] border-[var(--color-border)] border">
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                )}

                {/* BOLINHAS DO CARROSSEL */}
                {modo === 'carrossel' && (
                    <div className="flex justify-center gap-2 mt-4">
                        {[0, 1, 2].map((indice) => (
                            <button
                                key={indice}
                                type="button"
                                onClick={() => mudarSlide(indice)}
                                aria-label={`Ir para o slide ${indice + 1}`}
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${slideAtual === indice
                                        ? 'bg-[var(--color-primary)]'
                                        : 'bg-[var(--color-border)]'
                                    }`}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Cards;