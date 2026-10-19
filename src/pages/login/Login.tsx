import { useState, type SyntheticEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [mostrarSenha, setMostrarSenha] = useState(false);

    function emailValido(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

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
        
        
        const usuarios = JSON.parse(
            localStorage.getItem("usuariosCadastrados") || "[]"
        );

        const usuarioEncontrado = usuarios.find(
            (usuario: { email: string; senha: string }) =>
                usuario.email === email.trim().toLowerCase() &&
                usuario.senha === senha
        );

        if (!usuarioEncontrado) {
            toast.error("E-mail ou senha incorretos.");
            return;
        }

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify({
                nome: usuarioEncontrado.nome,
                email: usuarioEncontrado.email,
            })
        );

        window.dispatchEvent(new Event("authChange"));
        
        toast.success("Login realizado com sucesso!");

    }

    function recuperarSenha() {
        if (!emailValido(email)) {
            toast.info("Digite seu e-mail para recuperar a senha.");
            return;
        }
        toast.info("A recuperação de senha ainda não está disponível.");
    }

    return (
        <>
            {/* FORM */}
            <form onSubmit={login}>
                <div className="h-[144px] pt-[24px] px-[80px] gap-[12px] flex flex-col">
                    <div className="h-[40px] rounded-[5px] border border-[var(--color-primary)]">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="contato@email.com"
                            required
                            className="w-full h-full py-[12px] px-[16px] text-[14px] text-[var(--color-text-secundary)] rounded-[5px] bg-transparent" />
                    </div>

                    <div className="relative h-[40px] rounded-[5px] border border-[var(--color-primary)]">
                        <input
                            type={`${mostrarSenha ? "text" : "password"}`}
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                            required
                            className="h-[40px] flex w-full rounded-[5px] border border-[var(--color-primary)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)]"/>

                        <button
                            type="button"
                            onClick={() => setMostrarSenha(!mostrarSenha)}
                            className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center text-[var(--color-text-foreground)]"
                            aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                            {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="h-[16px]">
                        <button
                            type="button"
                            onClick={recuperarSenha}
                            className="text-[14px] flex items-start leading-[16px] text-[var(--color-text-accent)] ml-45">
                            Esqueceu a senha?
                        </button>
                    </div>

                    <div className="w-full z-10 h-[69px] pt-[24px]">
                        <button
                            type="submit"
                            className="w-full rounded-[5px] bg-[var(--color-primary)] py-[12px] font-bold text-[var(--color-background)]">
                            Entrar
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;