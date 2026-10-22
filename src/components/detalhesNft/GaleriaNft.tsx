import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { imagensNft } from "@/assets/nftImagens";
import type { Produto } from "@/types/produto";

type GaleriaNftProps = {
    produto: Produto;
};

function GaleriaNft({ produto }: GaleriaNftProps) {
    const imagens = (produto.imagens?.length
        ? produto.imagens
        : [produto.imagem]
    )
        .map((imagem) => imagensNft[imagem])
        .filter((imagem): imagem is string => Boolean(imagem));

    const [imagemSelecionada, setImagemSelecionada] = useState(
        imagens[0] ?? ""
    );

    useEffect(() => {
        setImagemSelecionada(imagens[0] ?? "");
    }, [produto.id]);

    return (
        <div className="flex w-full gap-7 lg:w-auto lg:shrink-0">

            {/* THUMBNAILS */}
            <div className="hidden shrink-0 flex-col gap-4 md:flex">
                {imagens.map((imagem, index) => (
                    <button
                        key={`${produto.id}-${index}`}
                        type="button"
                        onClick={() => setImagemSelecionada(imagem)}
                        className={`size-20 shrink-0 overflow-hidden rounded-sm border bg-card-dark xl:size-25
                            ${imagemSelecionada === imagem ? "border-primary" : "border-transparent"}`}>
                        <img
                            src={imagem}
                            alt={`Miniatura ${index + 1}`}
                            className="size-full rounded-sm object-cover" />
                    </button>
                ))}
            </div>

            {/* FOTO DESTAQUE */}
            <div className="relative aspect-square w-full rounded-sm md:max-w-111 md:bg-card-dark md:p-4">
                <img
                    src={imagemSelecionada}
                    alt={produto.nome}
                    className="size-full rounded-xl object-cover" />

                {/* ZOOM */}
                <button
                    type="button"
                    aria-label="Ampliar imagem"
                    className="absolute right-4 top-4 hidden size-8 items-center justify-center rounded-full border border-line bg-surface md:right-8 md:top-8 md:flex">
                    <FaSearch className="size-4 text-foreground" />
                </button>
            </div>
        </div>
    );
}

export default GaleriaNft;
