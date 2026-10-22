import { useState, type SyntheticEvent } from "react";
import { toast } from "react-toastify";
import CampoSenha from "@/components/campoForm/CampoSenha";
import { emailJaCadastrado, salvarUsuario } from "@/service/auth";
import { emailValido } from "@/utils/validacao";

type CadastroProps = {
    onSucesso?: () => void;
    gradiente?: boolean;
};

function Cadastro({ onSucesso, gradiente = false }: CadastroProps) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function cadastrar(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        if (nome.trim().length < 3) {
            toast.error("Digite seu nome completo.");
            return;
        }

        if (!emailValido(email)) {
            toast.error("Digite um e-mail válido!");
            return;
        }

        if (senha.length < 6) {
            toast.error("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            toast.error("As senhas não coincidem!");
            return;
        }

        const novoUsuario = {
            nome: nome.trim(),
            email: email.trim().toLowerCase(),
            senha,
        };

        if (emailJaCadastrado(novoUsuario.email)) {
            toast.error("Já existe uma conta com esse e-mail.");
            return;
        }

        salvarUsuario(novoUsuario);

        toast.success("Cadastro realizado com sucesso!");

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
        onSucesso?.();
    }

    return (
        <form onSubmit={cadastrar} className="flex flex-col gap-3">
            <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome de usuário"
                autoComplete="username"
                required
                aria-label="Nome de usuário"
                className="field" />

            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
                aria-label="E-mail"
                className="field" />

            <CampoSenha
                name="senha"
                value={senha}
                onChange={setSenha}
                placeholder="Senha"
                autoComplete="new-password"
                required
                aria-label="Senha" />

            <CampoSenha
                name="confirmarSenha"
                value={confirmarSenha}
                onChange={setConfirmarSenha}
                placeholder="Confirmar senha"
                autoComplete="new-password"
                required
                aria-label="Confirmar senha" />

            <button
                type="submit"
                className={`btn btn-block mt-3 ${gradiente ? "btn-gradient" : "btn-primary"}`}>
                Criar conta
            </button>
        </form>
    );
}

export default Cadastro;
