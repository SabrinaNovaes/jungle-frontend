import { useRouterState } from "@tanstack/react-router";
import { LuSlidersHorizontal } from "react-icons/lu";
import Sidebar from "../sidebarFiltro/Sidebar";
import Cards from "../cards/Card";
import AbasProdutos from "./AbasProdutos";
import OrdenarPor from "./OrdenarPor";

function Produtos() {

    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    const estaNaTelaDeDetalhes = /^\/mercado\/[^/]+\/?$/.test(pathname);

    if (estaNaTelaDeDetalhes) {
        return null;
    }

    return (
        <div className="page flex flex-col gap-6 pt-6 lg:grid lg:grid-cols-[19.375rem_minmax(0,1fr)] lg:gap-12 lg:pt-0">
            <Sidebar />

            <div className="flex min-w-0 flex-col gap-6 lg:gap-8">
                {/* TOOLBAR */}
                <div className="flex w-full items-start justify-between gap-4">
                    <AbasProdutos />

                    <div className="flex shrink-0 items-center gap-4">
                        {/* FILTROS (tablet: a sidebar vira drawer) */}
                        <button type="button"
                            onClick={() => window.dispatchEvent(new Event("filtros:alternar"))}
                            className="hidden items-center gap-2 text-label leading-none text-foreground md:flex lg:hidden">
                            <LuSlidersHorizontal size={16} />
                            Filtros
                        </button>

                        <OrdenarPor />
                    </div>
                </div>

                {/* CARDS */}
                <Cards />
            </div>
        </div>
    );
}

export default Produtos;
