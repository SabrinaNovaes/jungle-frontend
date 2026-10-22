import { Link, useNavigate } from "@tanstack/react-router";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { encerrarSessao } from "@/service/auth";

type LogoutProps = {
    variant?: "navbar" | "sidebar";
};

function Logout({ variant = "navbar" }: LogoutProps) {
    const navigate = useNavigate();

    function sair() {
        encerrarSessao();

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
                    ? "btn btn-primary min-h-0 h-9 w-25 gap-2 text-subtitle font-normal"
                    : "flex w-full items-center gap-2 text-label font-bold text-accent"
            }>
            <IoIosLogOut size={variant === "navbar" ? 20 : 26} />
            Sair
        </Link>
    );
}

export default Logout;
