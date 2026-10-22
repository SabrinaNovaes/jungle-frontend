import { Link, useRouterState } from "@tanstack/react-router";
import { FaCartShopping, FaHouse, FaShop, FaUser } from "react-icons/fa6";
import { IoScanOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

import { useCarrinho } from "@/context/CarrinhoContext";
import { useUsuarioLogado } from "@/hooks/useUsuarioLogado";

type TabLinkProps = {
    to: string;
    label: string;
    icone: IconType;
    exato?: boolean;
    badge?: number;
};

const baseTab = "relative flex size-11 items-center justify-center rounded-full text-primary/60 transition-colors";

function TabLink({ to, label, icone: Icone, exato, badge }: TabLinkProps) {
    return (
        <Link
            to={to}
            aria-label={label}
            activeOptions={{ exact: exato }}
            activeProps={{ className: "text-accent!" }}
            className={baseTab}>
            <Icone size={20} />
            {!!badge && badge > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-tiny font-bold text-ink">
                    {badge}
                </span>
            )}
        </Link>
    );
}

const rotasSemTabBar = /^\/(carrinho|pagamento|login|cadastro)\/?$|^\/mercado\/[^/]+\/?$/;

function TabBar() {
    const { totalItens } = useCarrinho();
    const usuarioLogado = useUsuarioLogado();
    const pathname = useRouterState({ select: (state) => state.location.pathname });

    if (rotasSemTabBar.test(pathname)) return null;

    return (
        <>
        <div aria-hidden="true" className="h-[calc(4.5rem+env(safe-area-inset-bottom))] md:hidden" />

        <nav
            aria-label="Navegação principal"
            className="fixed inset-x-0 bottom-0 z-40 md:hidden">
            <div className="relative mx-auto flex h-18 max-w-[32.5rem] items-center justify-between rounded-t-xl bg-surface px-6 pb-[env(safe-area-inset-bottom)] shadow-bar">
                <div className="flex flex-1 items-center justify-around">
                    <TabLink to="/" label="Início" icone={FaHouse} exato />
                    <TabLink to="/mercado" label="Mercado" icone={FaShop} />
                </div>

                <Link
                    to="/mercado"
                    aria-label="Explorar coleções"
                    className="-mt-10 flex size-16 shrink-0 items-center justify-center rounded-full btn-gradient text-ink shadow-fab ring-[6px] ring-ink">
                    <IoScanOutline size={28} />
                </Link>

                <div className="flex flex-1 items-center justify-around">
                    <TabLink to="/carrinho" label="Carrinho" icone={FaCartShopping} badge={totalItens} />
                    <TabLink
                        to={usuarioLogado ? "/perfil" : "/login"}
                        label={usuarioLogado ? "Meu perfil" : "Entrar"}
                        icone={FaUser} />
                </div>
            </div>
        </nav>
        </>
    );
}

export default TabBar;
