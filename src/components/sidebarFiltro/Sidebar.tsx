import { IoClose } from "react-icons/io5";
import { useDrawerFiltros } from "@/hooks/useDrawerFiltros";
import Banner from "../bannerOferta/Banner";
import FaixaPreco from "./FaixaPreco";
import ListaFiltro, { type ItemFiltro } from "./ListaFiltro";
import { TITULO_SECAO } from "./estilos";

const COLECOES: ItemFiltro[] = [
    { name: 'Arte digital', count: 33, active: true },
    { name: 'Fotografia', count: 12 },
    { name: 'Música', count: 65 },
    { name: 'Arte 3D', count: 39 },
    { name: 'Colecionáveis', count: 23 },
    { name: 'Generativa', count: 17 },
    { name: 'Jogos', count: 19 },
    { name: 'Assinaturas', count: 13 },
    { name: 'Utilidade', count: 18 },
];

const REDES: ItemFiltro[] = [
    { name: 'Ethereum', count: 119 },
    { name: 'Polygon', count: 78 },
    { name: 'Solana', count: 86 },
];

function Sidebar() {
    const { aberto, fechar } = useDrawerFiltros();

    return (
        <>
            {/* OVERLAY (mobile/tablet) */}
            {aberto && (
                <div
                    aria-hidden="true"
                    onClick={fechar}
                    className="fixed inset-0 z-40 bg-black/65 lg:hidden" />
            )}

            <aside
                aria-label="Filtros"
                className={`fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-80 flex-col gap-6 overflow-y-auto bg-ink p-4 transition-transform duration-300
                    lg:static lg:z-auto lg:w-full lg:max-w-none lg:translate-x-0 lg:overflow-visible lg:bg-transparent lg:p-0
                    ${aberto ? 'translate-x-0' : 'invisible -translate-x-full lg:visible'}`}>

                {/* CABEÇALHO DO DRAWER */}
                <div className="flex items-center justify-between lg:hidden">
                    <span className={TITULO_SECAO}>Filtros</span>
                    <button type="button" aria-label="Fechar filtros" onClick={fechar} className="icon-btn">
                        <IoClose size={20} />
                    </button>
                </div>

                <div className="panel flex flex-col gap-10">
                    <ListaFiltro titulo="Coleções" itens={COLECOES} variante="colecoes" />
                    <FaixaPreco />
                    <ListaFiltro titulo="Rede" itens={REDES} variante="redes" />
                </div>

                {/* BANNER (desktop) */}
                <div className="hidden lg:block">
                    <Banner />
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
