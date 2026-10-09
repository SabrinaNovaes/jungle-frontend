import { useState, type SyntheticEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    function emailValido(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

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
            email: email.trim(),
            senha,
        };

        console.log("Novo usuário:", {
            ...novoUsuario,
            senha: "[oculta]",
        });
        toast.success("Cadastro realizado com sucesso!");

        setNome("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
    }

    return (
        <>
            {/* FORM */}
            <form onSubmit={cadastrar}>
                <div className="flex flex-col gap-[12px] px-[80px] pt-[24px]">
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome de usuário"
                        required
                        className="h-[40px] w-full rounded-[5px] border border-[var(--color-primary)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)] outline-none" />

                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                        required
                        className="h-[40px] w-full rounded-[5px] border border-[var(--color-primary)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)] outline-none" />

                    <div className="relative h-[40px] w-full">
                        <input
                            type={`${mostrarSenha ? "text" : "password"}`}
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                            required
                            className="h-[40px] flex w-full rounded-[5px] border border-[var(--color-primary)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)] outline-none" />

                        <button
                            type="button"
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center text-[var(--color-text-foreground)]"
                            aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <input
                        type="password"
                        name="confirmarSenha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        placeholder="Confirmar senha"
                        required
                        className="h-[40px] w-full rounded-[5px] border border-[var(--color-primary)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)] outline-none" />

                    <button
                        type="submit"
                        className="mt-[12px] flex h-[45px] w-full cursor-pointer items-center justify-center rounded-[5px] bg-[var(--color-primary)] font-bold text-[var(--color-background)]">
                        Criar conta
                    </button>
                </div>
            </form>
        </>
    );
}

export default Cadastro;