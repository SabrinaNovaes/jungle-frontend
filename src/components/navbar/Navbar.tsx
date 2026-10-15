import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/Logo.png";
import { Link } from "@tanstack/react-router";
import 'reactjs-popup/dist/index.css';
import ModalLogin from "@/pages/login/ModalLoginCadastro";
import { useCarrinho } from "@/context/CarrinhoContext";

function Navbar() {

    const { totalItens } = useCarrinho();

    return (
        <>
            <nav className="flex mx-auto h-[45px] w-full max-w-[1200px]
                justify-center mx-auto">
                <div className="flex w-full items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Logo Kurio" className="h-[34.3px] w-[160px]" />
                        </Link>
                    </div>

                    {/* MENU */}
                    <div className="flex gap-[40px]">
                        <Link to="/" activeProps={{
                            className: 'active',
                        }}>Início</Link>
                        <Link to="/mercado">Mercado</Link>
                        <Link to="/criadores">Criadores</Link>
                        <Link to="/aprenda">Aprenda</Link>
                    </div>

                    {/* SEARCH/CARRINHO/ENTRAR */}
                    <div className="flex h-[35px] w-[207px] items-center gap-[28px]">
                        <Link to="/"><FaSearch /></Link>

                        <div className="relative">
                            <Link
                                to="/carrinho"
                                aria-label={`Carrinho com ${totalItens} itens`}
                                className="relative flex items-center justify-center">
                                <FaCartShopping />
                                {totalItens > 0 && (
                                    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-[10px] font-bold text-[var(--color-background)]">
                                        {totalItens}
                                    </span>
                                )}
                            </Link>
                        </div>
                        <ModalLogin />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;