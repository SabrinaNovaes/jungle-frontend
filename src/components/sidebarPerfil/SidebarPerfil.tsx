import { Link, useRouterState } from "@tanstack/react-router";
import { RxPerson } from "react-icons/rx";
import { GrLocation } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosTrendingUp, IoMdHeartEmpty } from "react-icons/io";
import { TbDownloadFilled, TbLogout } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";
import Logout from "../logout/Logout";

const linksSidebar = [
    {
        texto: "Dados do perfil",
        rota: "/perfil",
        icone: RxPerson,
    },
    {
        texto: "Carteira",
        rota: "/carteira",
        icone: GrLocation,
    },
    {
        texto: "Atividade",
        rota: "/carrinho",
        icone: FaCartShopping,
    },
    {
        texto: "Lista de interesse",
        rota: "/favoritos",
        icone: IoMdHeartEmpty,
    },
    {
        texto: "Ofertas",
        rota: "/ofertas",
        icone: IoIosTrendingUp
    },
    {
        texto: "Arquivos baixados",
        rota: "/",
        icone: TbDownloadFilled
    },
    {
        texto: "Suporte",
        rota: "/suporte",
        icone: FiAlertTriangle
    }
];

function SidebarPerfil() {
    const pathname = useRouterState({
        select: (state) => state.location.pathname,
    });

    return (
        <>
            <div className="w-[310px] h-[407px] py-[8px] bg-[var(--color-card-dark)] rounded-[3px]">
                <div className="w-[129px] h-[36px] gap-[10px] flex flex-col py-2">
                    <h1 className="w-[109px] h-[16px] mx-3 font-bold text-[18px] leading-[16px] text-[var(--color-text-foreground)]">
                        Meu perfil
                    </h1>

                    <div className="w-[310px] h-[45px] py-2">
                        <div className="w-[278px] h-[45px] gap-[16px]">
                            {linksSidebar.map((link) => {
                                const Icone = link.icone;
                                const ativo = pathname === link.rota;

                                return (
                                    <div
                                        key={link.rota}
                                        className={`w-full h-[45px] ${ativo
                                            ? "border-l-[6px] border-l-[var(--color-primary)]"
                                            : "border-l-[6px] border-l-transparent"
                                            }`}>
                                        <Link
                                            to={link.rota}
                                            className="w-full h-[45px] text-[15px] leading-[45px] items-center gap-3 text-[var(--color-text-accent)] flex mx-3">
                                            <Icone size={23} /> {link.texto}
                                        </Link>
                                    </div>
                                );
                            })}

                            <div className="w-[310px] h-0 border border-[var(--color-primary)] opacity-[50%] mb-3"></div>

                            <div className="w-[278px] h-[45px] mx-5">
                                <Logout variant="sidebar" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarPerfil;