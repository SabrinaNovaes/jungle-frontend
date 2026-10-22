import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from "@/assets/Logo.png";
import { Link } from "@tanstack/react-router";
import 'reactjs-popup/dist/index.css';
import ModalLogin from "@/pages/login/ModalLoginCadastro";
import { useCarrinho } from "@/context/CarrinhoContext";
import Logout from "@/components/logout/Logout";
import { useUsuarioLogado } from "@/hooks/useUsuarioLogado";

const linkMenu =
    "relative flex h-full items-center border-b-2 border-transparent text-body text-foreground transition-colors hover:text-accent";
const linkAtivo = { className: "active border-primary!" };

function Navbar() {

    const { totalItens } = useCarrinho();

    const usuarioLogado = useUsuarioLogado();

    return (
        <nav aria-label="Principal" className="page hidden h-12 items-center justify-between gap-4 md:flex">

            {/* LOGO */}
            <Link to="/" className="flex shrink-0 items-center">
                <img src={logo} alt="Logo Kurio" className="h-9 w-auto lg:h-[2.14rem] lg:w-40" />
            </Link>

            {/* MENU */}
            <div className="flex h-full items-center gap-6 xl:gap-10">
                <Link to="/" activeOptions={{ exact: true }} activeProps={linkAtivo} className={linkMenu}>Início</Link>
                <Link to="/mercado" activeProps={linkAtivo} className={linkMenu}>Mercado</Link>
                <Link to="/criadores" activeProps={linkAtivo} className={linkMenu}>Criadores</Link>
                <Link to="/aprenda" activeProps={linkAtivo} className={linkMenu}>Aprenda</Link>
            </div>

            {/* SEARCH / CARRINHO / ENTRAR */}
            <div className="flex shrink-0 items-center gap-5 xl:gap-7">
                <Link to="/" aria-label="Buscar" className="text-foreground transition-colors hover:text-accent">
                    <FaSearch />
                </Link>

                <Link
                    to="/carrinho"
                    aria-label={`Carrinho com ${totalItens} itens`}
                    className="relative flex items-center justify-center text-foreground transition-colors hover:text-accent">
                    <FaCartShopping />
                    {totalItens > 0 && (
                        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-tiny font-bold text-ink">
                            {totalItens}
                        </span>
                    )}
                </Link>

                {usuarioLogado ? <Logout /> : <ModalLogin />}
            </div>
        </nav>
    );
}

export default Navbar;
