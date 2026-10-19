import { useState } from "react";

type Produto = {
    id: number;
    nome: string;
    identificador: string;
    preco: string;
    imagem: string;
    imagens: string[];
};

type DescricaoProps = {
    produtos: Produto;
};

function Descricao({ produtos }: DescricaoProps) {

    const [modo, setModo] = useState<"detalhes" | "avaliacao">("detalhes");

    return (
        <>
            <div className="w-[1200px] h-[340px]">
                <div className="w-full h-[316px] gap-[12px]">
                    <div className="h-[280px]">
                        <div className="h-[256px] gap-[12px]">
                            <div className="w-full h-[220px]">
                                <div className="h-[196px] gap-[12px]">
                                    <div className="h-[160px] gap-[12px]">
                                        <div className="w-full h-[28px]">
                                            <div className="w-[530px] h-full gap-[32px] text-[17px] leading-[16px]">
                                                <button
                                                    type="button"
                                                    onClick={() => setModo("detalhes")}
                                                    className={`${modo === "detalhes"
                                                        ? "text-[var(--color-text-accent)] font-bold border-b-[3px] border-[var(--color-primary)]"
                                                        : "text-[var(--color-text-foreground)]"} mr-6 py-3`}>
                                                    Detalhes do NFT
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => setModo("avaliacao")}
                                                    className={`${modo === "avaliacao"
                                                        ? "text-[var(--color-text-accent)] font-bold border-b-[3px] border-[var(--color-primary)]"
                                                        : "text-[var(--color-text-foreground)]"} py-3`}>
                                                    Avaliações (19)
                                                </button>
                                                <div className="w-[1200px] h-0 opacity-[50%] border border-[var(--color-primary)] items-center"></div>
                                            </div>
                                            {modo === "detalhes" ? (
                                                <p className="w-full min-h-[120px] text-[14px] py-6 leading-[24px] text-[var(--color-text-secundary)]">
                                                    {produtos.nome} {produtos.identificador} é uma obra
                                                    digital 1/50 finalizada à mão da coleção Kurio Editions.
                                                    Cada atributo fica armazenado nos metadados do token e
                                                    verificado na Ethereum. A obra explora identidade,
                                                    movimento e luz em um mundo digital sem fronteiras.
                                                    <br /> <br />
                                                    A propriedade inclui a arte em alta resolução,
                                                    lançamentos exclusivos para colecionadores e um registro
                                                    permanente de procedência na rede. Nova Sato recebe 5%
                                                    de direitos autorais nas vendas secundárias, apoiando
                                                    novos trabalhos e lançamentos da comunidade.
                                                </p>
                                            ) : (
                                                <p className="w-full min-h-[120px] leading-[24px] py-6 text-[14px] text-[var(--color-text-secundary)]">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eaque architecto hic alias illo facere expedita et itaque neque voluptatibus
                                                    necessitatibus consequuntur quasi quidem distinctio dolorem debitis,
                                                    praesentium repellat deserunt earum.
                                                    <br /> <br />
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Eius iusto dolorem voluptatem repellendus numquam illo repudiandae at quae
                                                    quia cumque id ab quam unde quod, debitis necessitatibus ullam, quasi nostrum.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <span className="w-[1200px] h-[24px] font-bold text-[14px] leading-[24px] text-[var(--color-text-foreground)]">
                                    Rede:
                                </span>
                            </div>
                            <p className="w-[1200px] h-[24px] text-[14px] leading-[24px] text-[var(--color-text-secundary)]">
                                Cunhado na Ethereum com procedência imutável e metadados armazenados no IPFS.
                            </p>
                        </div>
                        <span className="w-[1200px] h-[24px] font-bold text-[14px] leading-[24px] text-[var(--color-text-foreground)]">
                            Contrato:
                        </span>
                    </div>
                    <p className="w-[1200px] h-[24px] text-[14px] leading-[24px] text-[var(--color-text-secundary)]">
                        Direitos autorais do criador: 5% nas vendas secundárias, pagos automaticamente pelos mercados compatíveis.
                    </p>
                </div>
                <span className="w-[1200px] h-[24px] font-bold text-[14px] leading-[24px] text-[var(--color-text-foreground)]">
                    Direitos autorais:
                </span>
                <p className="w-[1200px] h-[24px] text-[14px] leading-[24px] text-[var(--color-text-secundary)]">
                    0x7A42...19E8 • Contrato inteligente ERC-721 verificado.
                </p>
            </div>

        </>
    );
}

export default Descricao;