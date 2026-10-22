import { TITULO_SECAO } from "./estilos";

export type ItemFiltro = {
    name: string;
    count: number;
    active?: boolean;
};

type ListaFiltroProps = {
    titulo: string;
    itens: ItemFiltro[];
    variante: "colecoes" | "redes";
};

const estilos = {
    colecoes: {
        container: "flex flex-col gap-5",
        lista: "flex flex-col gap-5 px-3",
        item: "flex items-center justify-between",
        label: "flex items-center gap-2.5",
    },
    redes: {
        container: "flex flex-col gap-3",
        lista: "pl-3",
        item: "flex w-full items-center justify-between text-label leading-10 text-secondary",
        label: "",
    },
} as const;

function ListaFiltro({ titulo, itens, variante }: ListaFiltroProps) {
    const estilo = estilos[variante];

    return (
        <div className={estilo.container}>
            <h2 className={TITULO_SECAO}>{titulo}</h2>

            <ul className={estilo.lista}>
                {itens.map((item) => (
                    <li key={item.name}
                        className={variante === "colecoes"
                            ? `${estilo.item} ${item.active ? "text-accent" : "text-secondary"}`
                            : estilo.item}>
                        <label className={estilo.label || undefined}>
                            <span>{item.name}</span>
                        </label>
                        <span>({item.count})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaFiltro;
