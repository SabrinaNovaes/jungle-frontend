import { useState } from 'react';
import imagem1 from '../../assets/Frame136.png';
import imagem2 from '../../assets/NFTArtwork04.png';
import imagem3 from '../../assets/NFTArtwork05.png';
import imagem4 from '../../assets/NFTArtwork09.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


function Cards() {

    const cards = [
        { name: "Emerald Ape #042", preco: '1.19 ETH', imagem: imagem1 },
        { name: "Sage Nomad #009", preco: '1.69 ETH', imagem: imagem2 },
        { name: "Neon Vessel #552", preco: '1.99 ETH', imagem: imagem3 },
        { name: "Cosmic Bloom #118", preco: '1.29 ETH', imagem: imagem2 },
        { name: "Violet Nomad #314", preco: '1.39 ETH', imagem: imagem2 },
        { name: "Ivory aron #088", preco: '1.79 ETH', imagem: imagem3 },
        { name: "Golden Beat #207", preco: '0.99 ETH', imagem: imagem4 },
        { name: "", preco: '', imagem: imagem4 },
        { name: "Golden Signal #160", preco: '0.39 ETH', imagem: imagem4 },

        { name: "Neon Vessel #552", preco: '1.99 ETH', imagem: imagem3 },
        { name: "Cosmic Bloom #118", preco: '1.29 ETH', imagem: imagem2 },
        { name: "Violet Nomad #314", preco: '1.39 ETH', imagem: imagem2 },
        { name: "Golden Signal #160", preco: '0.39 ETH', imagem: imagem4 },
        { name: "Emerald Ape #042", preco: '1.19 ETH', imagem: imagem1 },
        { name: "Sage Nomad #009", preco: '1.69 ETH', imagem: imagem2 },
        { name: "Cosmic Bloom #118", preco: '1.29 ETH', imagem: imagem2 },
        { name: "Violet Nomad #314", preco: '1.39 ETH', imagem: imagem2 },
        { name: "Ivory aron #088", preco: '1.79 ETH', imagem: imagem3 },
        
        { name: "Cosmic Bloom #118", preco: '1.29 ETH', imagem: imagem2 },
        { name: "Violet Nomad #314", preco: '1.39 ETH', imagem: imagem2 },
        { name: "Ivory aron #088", preco: '1.79 ETH', imagem: imagem3 },
        { name: "Golden Signal #160", preco: '0.39 ETH', imagem: imagem4 },
        { name: "Emerald Ape #042", preco: '1.19 ETH', imagem: imagem1 },
        { name: "Sage Nomad #009", preco: '1.69 ETH', imagem: imagem2 },
        { name: "Neon Vessel #552", preco: '1.99 ETH', imagem: imagem3 },
        { name: "Cosmic Bloom #118", preco: '1.29 ETH', imagem: imagem2 },
        { name: "Violet Nomad #314", preco: '1.39 ETH', imagem: imagem2 },
        
    ]

    const [paginaAtual, setPaginaAtual] = useState(1);

    const produtosPorPagina = 9;

    const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
    const indiceFinal = indiceInicial + produtosPorPagina;

    const produtosPagina = cards.slice(indiceInicial, indiceFinal);
    const totalPaginas = Math.ceil(cards.length / produtosPorPagina);

    return (
        <>
            {/* CARDS */}
            <div className="w-[1200px] min-h-[1373px] flex flex-col gap-[48px]">
                <div className="w-[842px] h-[1200px] grid grid-cols-3 gap-[72px] mt-8">
                    {produtosPagina.map((card, index) => (
                        <div key={`${card.name}-${index}`} className="flex flex-col w-[258px] h-[356px] gap-[12px]">
                            <div className="flex items-center justify-center w-full h-[300px] bg-[var(--color-card-dark)]">
                                <img src={card.imagem} alt="NFT image" className="w-[250px] h-[250px] rounded-[15px]" />
                            </div>
                            <span className="w-full h-[16px] text-[16px] leading-[16px] text-[var(--color-foreground)]">
                                {card.name}
                            </span>
                            <span className="w-full h-[16px] text-[18px] leading-[16px] font-bold text-[var(--color-text-accent)]">
                                {card.preco}
                            </span>
                        </div>
                    ))}
                </div>

                {/* BOTÕES DA PAGINAÇÃO */}
                <div className='w-[842px] flex justify-end'>
                    <div className="flex items-center justify-center gap-[8px] w-[207px] h-[35px] self-end">
                        <button type="button" onClick={() => setPaginaAtual(1)} disabled={paginaAtual === 1}
                            className="w-[35px] h-[35px] flex items-center justify-center text-[var(--color-foreground)] border-[var(--color-border)] border">
                            <IoIosArrowBack />
                        </button>
                        {Array.from({ length: totalPaginas }, (_, index) => (
                            <button key={index} type="button" onClick={() => setPaginaAtual(index + 1)}
                                className={`w-[35px] h-[35px] rounded-[4px] gap-[10px] text-[18px] font-bold leading-[16px] ${paginaAtual === index + 1
                                    ? 'bg-[var(--color-primary)] text-[var(--color-background)]'
                                    : 'text-[var(--color-foreground)] border-[var(--color-border)] border px-[12px] pt-[8px] pb-[10px]'
                                    }`} >
                                {index + 1}
                            </button>
                        ))}
                        <button type="button" onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}
                            className="w-[35px] h-[35px] flex items-center justify-center text-[var(--color-foreground)] border-[var(--color-border)] border">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;