import { Link, useRouterState } from "@tanstack/react-router";
import Logout from "../logout/Logout";
import { linksPerfil } from "./linksPerfil";

function SidebarPerfil() {
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    return (
        <aside aria-label="Menu do perfil" className="bg-card-dark py-2 lg:w-78 h-[470px] lg:shrink-0 lg:rounded-xs">
            <h2 className="hidden px-3 py-2 text-title font-bold text-foreground lg:block">
                Meu perfil
            </h2>

            <nav>
                <ul className="scrollbar-hide flex overflow-x-auto px-2 lg:flex-col lg:overflow-visible lg:px-0">
                    {linksPerfil.map((link) => {
                        const Icone = link.icone;
                        const ativo = pathname === link.rota;

                        return (
                            <li
                                key={link.rota}
                                className={`shrink-0 border-b-2 lg:border-b-0 lg:border-l-[6px] ${ativo ? "border-primary" : "border-transparent"}`}>
                                <Link
                                    to={link.rota}
                                    className="flex items-center gap-3 whitespace-nowrap px-3 py-3 text-label text-accent">
                                    <Icone size={22} className="shrink-0" /> {link.texto}
                                </Link>
                            </li>
                        );
                    })}

                    <li aria-hidden="true" className="my-3 hidden h-px bg-primary/50 lg:block" />

                    <li className="shrink-0 px-3 py-3 lg:px-5">
                        <Logout variant="sidebar" />
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SidebarPerfil;
