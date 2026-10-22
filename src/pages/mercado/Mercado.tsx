import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

import Descricao from "@/components/descricaoNFT/DescricaoNFT";
import Carousel from "@/components/carouselColecao/CarouselColecao";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import PageHeaderMobile from "@/components/pageHeaderMobile/PageHeaderMobile";
import GaleriaNft from "@/components/detalhesNft/GaleriaNft";
import CompraNft from "@/components/detalhesNft/CompraNft";
import ChipsEdicao from "@/components/detalhesNft/ChipsEdicao";
import AvaliacaoNft from "@/components/detalhesNft/AvaliacaoNft";
import CompartilharNft from "@/components/detalhesNft/CompartilharNft";
import { INFO_LINHA, SUBTITULO } from "@/components/detalhesNft/estilos";
import type { Produto } from "@/types/produto";

type MercadoProps = {
    produto: Produto;
};

function Mercado({ produto }: MercadoProps) {

    return (
        <>
            <section className="page pb-44 pt-2 md:py-6">
                <PageHeaderMobile
                    acao={<IoMdHeartEmpty size={20} className="text-primary" aria-hidden="true" />} />

                <main className="flex w-full flex-col gap-3">
                    <Breadcrumb caminho="Início / Mercado" />

                    {/* PRODUTO */}
                    <div className="flex flex-col gap-0 md:gap-8 lg:flex-row">
                        <GaleriaNft produto={produto} />

                        {/* DETALHES */}
                        <div className="relative -mt-6 flex min-w-0 flex-1 flex-col gap-4 rounded-t-xl bg-card-dark p-4 md:mt-0 md:bg-transparent md:p-0 lg:max-w-149">

                            {/* TOPO DETALHE */}
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                                    <div className="flex flex-wrap gap-x-4 text-title font-bold leading-tight text-foreground md:gap-x-6 md:text-heading">
                                        <h1>
                                            {produto.nome}
                                        </h1>
                                        <h1>
                                            {produto.identificador}
                                        </h1>
                                    </div>

                                    {/* NOTA (mobile) */}
                                    <span className="flex items-center gap-1 rounded-sm bg-surface px-2 py-1 text-caption font-bold text-foreground md:hidden">
                                        <FaStar className="size-3 text-primary" /> 4.8 <span className="font-normal text-secondary">(19)</span>
                                    </span>
                                </div>

                                <div className="hidden flex-wrap items-center justify-between gap-3 md:flex">
                                    <span className="text-heading font-bold leading-tight text-accent">
                                        {produto.preco}
                                    </span>

                                    <AvaliacaoNft />
                                </div>

                                {/* LINHA */}
                                <div className="hidden w-full border-t border-primary/80 md:block" />
                            </div>

                            {/* DESCRIÇÃO */}
                            <div className="flex flex-col gap-1">
                                <h2 className={`${SUBTITULO} hidden md:block`}>
                                    Sobre este NFT:
                                </h2>

                                <p className="text-body leading-6 text-secondary">
                                    Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum,
                                    com arte desbloqueável e acesso para colecionadores.
                                </p>
                            </div>

                            <ChipsEdicao />

                            {/* INFORMAÇÕES */}
                            <div className="flex flex-col gap-3">
                                <span className={INFO_LINHA}>
                                    ID do token: {produto.identificador}
                                </span>

                                <span className={INFO_LINHA}>
                                    Coleção: Kurio Apes
                                </span>

                                <span className={INFO_LINHA}>
                                    Atributos: Óculos, Esmeralda, Raro
                                </span>
                            </div>

                            <CompraNft produto={produto} />

                            <CompartilharNft />
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12">
                        <Descricao produtos={produto} />
                    </div>
                    <div className="overflow-x-clip">
                        <Carousel />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Mercado;
