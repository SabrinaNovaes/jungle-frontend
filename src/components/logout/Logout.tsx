import { Link, useNavigate } from "@tanstack/react-router";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";

type LogoutProps = {
    variant?: "navbar" | "sidebar";
};

function Logout({ variant = "navbar" }: LogoutProps) {
    const navigate = useNavigate();

    function sair() {
        localStorage.removeItem("usuarioLogado");

        window.dispatchEvent(new Event("authChange"));

        toast.success("Logout realizado com sucesso!");
        
        navigate({ to: "/" });
    }

    return (
        <Link
            to="/"
            onClick={(e) => {
                e.preventDefault();
                sair();
            }}
            className={
                variant === "navbar"
                    ? "flex h-[35px] w-[100px] items-center justify-center gap-2 rounded-[6px] bg-[var(--color-primary)] text-[16px] text-[var(--color-background)]"
                    : "flex items-center gap-2 text-[15px] text-[var(--color-text-accent)] font-bold leading-[15px] w-full h-[15px]"
            }>
            <IoIosLogOut size={26}/>
            Sair
        </Link>
    );
}

export default Logout;