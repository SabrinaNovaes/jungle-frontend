import { useState, type SyntheticEvent } from "react";
import { toast } from "react-toastify";
import CampoSenha from "@/components/campoForm/CampoSenha";
import { buscarUsuario, iniciarSessao } from "@/service/auth";
import { emailValido } from "@/utils/validacao";

type LoginProps = {
    onSucesso?: () => void;
    gradiente?: boolean;
};

function Login({ onSucesso, gradiente = false }: LoginProps) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function login(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!emailValido(email)) {
            toast.error("Digite um e-mail válido!");
            return;
        }

        if (senha.length < 6) {
            toast.error("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        const usuarioEncontrado = buscarUsuario(email, senha);

        if (!usuarioEncontrado) {
            toast.error("E-mail ou senha incorretos.");
            return;
        }

        iniciarSessao(usuarioEncontrado);

        toast.success("Login realizado com sucesso!");
        onSucesso?.();
    }

    function recuperarSenha() {
        if (!emailValido(email)) {
            toast.info("Digite seu e-mail para recuperar a senha.");
            return;
        }
        toast.info("A recuperação de senha ainda não está disponível.");
    }

    return (
        <form onSubmit={login} className="flex flex-col gap-3">
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@email.com"
                autoComplete="email"
                required
                aria-label="E-mail"
                className="field" />

            <CampoSenha
                name="senha"
                value={senha}
                onChange={setSenha}
                placeholder="Senha"
                autoComplete="current-password"
                required
                aria-label="Senha" />

            <button
                type="button"
                onClick={recuperarSenha}
                className="self-end text-body text-accent hover:underline">
                Esqueceu a senha?
            </button>

            <button
                type="submit"
                className={`btn btn-block mt-3 ${gradiente ? "btn-gradient" : "btn-primary"}`}>
                Entrar
            </button>
        </form>
    );
}

export default Login;
