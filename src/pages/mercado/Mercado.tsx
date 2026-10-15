
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaSearch, FaStar } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdMail } from "react-icons/io";
import { Link } from "@tanstack/react-router";

import Descricao from "@/components/descricaoNFT/DescricaoNFT";
import Carousel from "@/components/carouselColecao/CarouselColecao";
import { useCarrinho } from '@/context/CarrinhoContext';

import img1 from '../../assets/Frame136.png';
import img2 from '../../assets/NFTArtwork04.png';
import img3 from '../../assets/NFTArtwork05.png';
import img4 from '../../assets/NFTArtwork09.png';

type Produto = {
    id: number;
    nome: string;
    identificador: string;
    preco: string;
    imagem: string;
    imagens: string[];
};

type MercadoProps = {
    produto: Produto;
};

function Mercado({ produto }: MercadoProps) {

    const [quantidade, setQuantidade] = useState(1);
    const { adicionarAoCarrinho } = useCarrinho();

    const imagensDisponiveis: Record<string, string> = {
        imagem1: img1,
        imagem2: img2,
        imagem3: img3,
        imagem4: img4,
    };

    const imagens = (produto.imagens?.length
        ? produto.imagens
        : [produto.imagem]
    )
        .map((imagem) => imagensDisponiveis[imagem])
        .filter((imagem): imagem is string => Boolean(imagem));

    const [imagemSelecionada, setImagemSelecionada] = useState(
        imagens[0] ?? ""
    );

    useEffect(() => {
        setImagemSelecionada(imagens[0] ?? "");
    }, [produto.id]);

    return (
        <>
            <section className="w-[1440px] min-h-[1400px] py-[24px] gap-[96px] mx-auto justify-center flex">
                {/* TOPO */}
                <div className="w-[1200px] h-[553px] gap-[32px]">
                    <main className="w-full gap-[12px]">
                        <span className="w-[145px] h-[16px] font-bold text-[15px] leading-[16px] text-[var(--color-text-foreground)]">
                            Início / Mercado
                        </span>

                        {/* PRODUTO */}
                        <div className="w-full h-[448px] gap-[32px] flex">
                            <div className="w-[573px] h-full gap-[28px] flex">

                                {/* THUMBNAILS */}
                                <div className="flex w-[100px] shrink-0 flex-col gap-[16px]">
                                    {imagens.map((imagem, index) => (
                                        <button
                                            key={`${produto.id}-${index}`}
                                            type="button"
                                            onClick={() => setImagemSelecionada(imagem)}
                                            className={`h-[100px] w-[100px] shrink-0 rounded-[6px] border
                                                ${imagemSelecionada === imagem ? "border-[var(--color-primary)]" : "border-transparent"} bg-[var(--color-card-dark)]`}>

                                            {/* RETÂNGULO */}
                                            <div className="h-full w-full overflow-hidden rounded-[6px] bg-[var(--color-card-dark)]">
                                                <img
                                                    src={imagem}
                                                    alt={`Miniatura ${index + 1}`}
                                                    className="h-full w-full rounded-[6px] object-cover" />
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* FOTO DESTAQUE */}
                                <div className="relative w-[444px] h-[444px] rounded-[6px] p-[16px] gap-[10px] bg-[var(--color-card-dark)]">
                                    <img
                                        src={imagemSelecionada}
                                        alt={produto.nome}
                                        className="w-[404px] h-[404px] rounded-[24px] object-cover"
                                    />
                                </div>

                                {/* ZOOM */}
                                <div className="absolute top-26 left-217 w-[32px] h-[32px] gap-[10px] border border-[var(--color-border)] bg-[var(--color-surface-raised)] rounded-[30px] p-1.5">
                                    <button
                                        type="button">
                                        <FaSearch className="w-[20px] h-[20px] text-[var(--color-text-foreground)]" />
                                    </button>
                                </div>
                            </div>

                            {/* DETALHES */}
                            <div className="w-[595px] h-[448px] justify-between">

                                {/* TOPO DETALHE */}
                                <div className="h-[81px] gap-[12px]">
                                    <div className="h-[69px] gap-[12px]">
                                        <div className="h-[37px] font-bold text-[28px] leading-[100%] text-[var(--color-text-foreground)] mb-2 flex gap-6">
                                            <h1>
                                                {produto.nome}
                                            </h1>
                                            <h1>
                                                {produto.identificador}
                                            </h1>
                                        </div>

                                        <div className="h-[16px] font-bold text-[22px] leading-[16px] text-[var(--color-text-accent)] justify-between items-center flex mb-3">
                                            {produto.preco}

                                            {/* AVALIAÇÕES */}
                                            <div className="w-[375px] h-[20px] gap-[4px] flex">
                                                <div className="flex items-center gap-[8px] items-center">
                                                    <div className="flex items-center gap-[4px] pb-2">
                                                        {[1, 2, 3, 4, 5].map((estrela) => (
                                                            <FaStar
                                                                key={estrela}
                                                                className="h-[15px] w-[15px] text-[var(--color-primary)]" />
                                                        ))}
                                                    </div>

                                                    <span className="w-[280px] h-[20px] text-[15px] leading-[100%] text-[var(--color-text-foreground)]">
                                                        19 avaliações de colecionadores
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* LINHA */}
                                        <div className="w-full border text-[var(--color-primary)] opacity-[80%] justify-center mx-auto"></div>
                                    </div>

                                    {/* DESCRIÇÃO */}
                                    <div className="w-[574px] h-[94px] gap-[12px] mt-6">
                                        <h2 className="w-full h-[16px] font-bold text-[15px] leading-[16px] text-[var(--color-text-foreground)]">
                                            Sobre este NFT:
                                        </h2>

                                        <p className="w-full h-[66px] text-[14px] leading-[24px] text-[var(--color-text-secundary)] mt-1">
                                            Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum,
                                            com arte desbloqueável e acesso para colecionadores.
                                        </p>
                                    </div>

                                    <div className="w-[209px] h-[56px] gap-[12px] my-2">
                                        <h2 className="h-[16px] font-bold text-[15px] leading-[16px] text-[var(--color-text-foreground)]">
                                            Edição
                                        </h2>

                                        <div className="w-full h-[28px] gap-[35px] flex mt-3">
                                            <div className="w-[36px] h-[28px] py-[6px] px-[4px] gap-[10px]">
                                                <span className="w-15 h-[28px] flex items-center justify-center rounded-[100%] border border-[var(--color-border)] text-[var(--color-text-secundary)]">
                                                    1/1
                                                </span>
                                            </div>

                                            <div className="w-[36px] h-full py-[6px] px-[4px] gap-[10px]">
                                                <span className="w-15 h-[28px] flex items-center justify-center rounded-[100%] border border-[var(--color-border)] text-[var(--color-text-secundary)]">
                                                    1/10
                                                </span>
                                            </div>

                                            <div className="w-[36px] h-full py-[6px] px-[4px] gap-[10px]">
                                                <span className="w-15 h-[28px] flex items-center justify-center rounded-[100%] border border-[var(--color-primary)] text-[var(--color-text-accent)]">
                                                    1/50
                                                </span>
                                            </div>

                                            <div className="w-[66px] h-full py-[6px] px-[4px] gap-[10px]">
                                                <span className="w-18 h-[28px] flex items-center justify-center rounded-[100%] border border-[var(--color-border)] text-[var(--color-text-secundary)]">
                                                    ABERTA
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BOTOES */}
                                    <div className="w-full h-[49.5px] justify-between flex mt-6">
                                        <div className="w-[103px] h-full gap-[20px] flex">
                                            <div className="w-full h-full gap-[12px]">
                                                <div className="w-[33px] h-full rounded-[33px] border bg-[var(--color-primary)] rounded-full 
                                                    shadow-[0px_6.6px_19.8px_-3.3px_#140D0A26]">
                                                    <div className="w-[26.4px] h-[26.4px] items-center flex justify-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => setQuantidade((atual) => Math.max(1, atual - 1))}
                                                            className="text-black text-[35px] text-center flex pt-3 pl-1">-</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <span className="flex items-center justify-center min-w-[20px] text-[var(--color-text-foreground)]">
                                                {quantidade}
                                            </span>

                                            <div className="w-full h-full gap-[12px]">
                                                <div className="w-[33px] h-full rounded-[33px] border bg-[var(--color-primary)] rounded-full 
                                                    shadow-[0px_6.6px_19.8px_-3.3px_#140D0A26]">
                                                    <div className="w-[26.4px] h-[26.4px] items-center flex justify-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => setQuantidade((atual) => atual + 1)}
                                                            className="text-black text-[30px] text-center flex pt-4 pl-1">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[268px] h-[40px] gap-[8px] flex">
                                            <button
                                                type="button"
                                                onClick={() => adicionarAoCarrinho(produto, quantidade)}
                                                className="w-[130px] h-[40px] rounded-[6px] font-bold justify-between bg-[var(--color-primary)] text-[var(--color-background)]">
                                                COMPRAR
                                            </button>

                                            <button className="flex w-[130px] h-[40px] rounded-[6px] justify-center items-center border border-[var(--color-primary)] gap-[4px] text-[var(--color-primary)]">
                                                <IoMdHeartEmpty size={25} /> Favoritar
                                            </button>
                                        </div>
                                    </div>

                                    {/* FIM DETALHES */}
                                    <div className="w-[308px] h-[114px] gap-[12px] py-4">
                                        <div className="h-[84px] gap-[12px] flex flex-col">
                                            <span className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                                ID do token: {produto.identificador}
                                            </span>

                                            <span className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                                Coleção: Kurio Apes
                                            </span>

                                            <span className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-secundary)]">
                                                Atributos: Óculos, Esmeralda, Raro
                                            </span>
                                        </div>

                                        <div className="w-[271.97px] h-[18px] gap-[18px]">
                                            <span className="flex gap-[8px] w-full h-[16px] font-bold text-[15px] leading-[16px] 
                                                text-[var(--color-text-foreground)]">
                                                Compartilhar este NFT:
                                                <Link to="https://linkedin.com" className="hover:text-[var(--color-primary)]"> <FaLinkedinIn /> </Link>
                                                <Link to="https://mailtomailto:exemplo@dominio.com" className="hover:text-[var(--color-primary)]"> <IoMdMail /> </Link>
                                                <Link to="https://x.com/?lang=pt" className="hover:text-[var(--color-primary)]"> <FaTwitter /> </Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Descricao produtos={produto} />
                        <Carousel />
                    </main>
                </div>
            </section>
        </>
    );
}

export default Mercado;

