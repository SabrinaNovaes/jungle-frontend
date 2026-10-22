import { useState } from "react";
import type { Produto } from "@/types/produto";
import InfoNft from "./InfoNft";

type DescricaoProps = {
    produtos: Produto;
};

type Modo = "detalhes" | "avaliacao";

const ABAS: { modo: Modo; rotulo: string }[] = [
    { modo: "detalhes", rotulo: "Detalhes do NFT" },
    { modo: "avaliacao", rotulo: "Avaliações (19)" },
];

const INFORMACOES = [
    { rotulo: "Rede:", texto: "Cunhado na Ethereum com procedência imutável e metadados armazenados no IPFS." },
    { rotulo: "Contrato:", texto: "Direitos autorais do criador: 5% nas vendas secundárias, pagos automaticamente pelos mercados compatíveis." },
    { rotulo: "Direitos autorais:", texto: "0x7A42...19E8 • Contrato inteligente ERC-721 verificado." },
];

const classeAba = (ativa: boolean) =>
    `py-3 text-body md:text-title leading-none ${ativa
        ? "border-b-[3px] border-primary font-bold text-accent"
        : "text-foreground"}`;

const classeTexto = "py-6 text-body leading-6 text-secondary";

function Descricao({ produtos }: DescricaoProps) {

    const [modo, setModo] = useState<Modo>("detalhes");

    return (
        <div className="flex w-full flex-col">
            {/* ABAS */}
            <div className="flex gap-6 border-b border-primary/50 md:gap-8">
                {ABAS.map((aba) => (
                    <button
                        key={aba.modo}
                        type="button"
                        onClick={() => setModo(aba.modo)}
                        className={classeAba(modo === aba.modo)}>
                        {aba.rotulo}
                    </button>
                ))}
            </div>

            {modo === "detalhes" ? (
                <p className={classeTexto}>
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
                <p className={classeTexto}>
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

            {INFORMACOES.map((info, indice) => (
                <InfoNft key={info.rotulo} rotulo={info.rotulo} texto={info.texto} separado={indice > 0} />
            ))}
        </div>
    );
}

export default Descricao;
