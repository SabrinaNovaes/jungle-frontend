import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

import logo from "../../assets/Logo.png";
import { Link } from "@tanstack/react-router";

function Navbar() {
    return (
        <>
            <nav className="flex mx-auto h-[45px] w-full max-w-[1200px]
                justify-center mx-auto">
                <div className="flex w-full items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <Link to="/home">
                            <img src={ logo } alt="Logo Kurio" className="h-[34.3px] w-[160px]" />
                        </Link>
                    </div>

                    {/* MENU */}
                    <div className="flex gap-[40px]">
                        <Link to="/home" activeProps={{
                            className: 'active',
                        }}>Início</Link>
                        <Link to="/mercado">Mercado</Link>
                        <Link to="/criadores">Criadores</Link>
                        <Link to="/aprenda">Aprenda</Link>
                    </div>

                    {/* SEARCH/CARRINHO/ENTRAR */}
                    <div className="flex h-[35px] w-[207px] items-center gap-[28px]">
                        <Link to="/perfil"><FaSearch /></Link>
                        <Link to="/carrinho"><FaCartShopping /></Link>
                        <button className="flex h-[35px] w-[100px] items-center justify-center
                            gap-2 rounded-[6px] bg-[var(--color-primary)]
                            text-[16px] text-[var(--color-background)]">
                            <IoIosLogOut className="w-[20p] h-[20px]" /> Entrar
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;