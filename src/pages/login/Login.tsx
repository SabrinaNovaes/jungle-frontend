import { useState, type SyntheticEvent } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
        toast.success("Login realizado com sucesso!");
    }

    function recuperarSenha() {
        if (!emailValido(email)) {
            toast.info("Digite seu e-mail para recuperar a senha.");
            return;
        }
        toast.info("A recuperação de senha ainda não está disponível.");
    }

    function loginGoogle() {
        toast.info("A integração com o Google ainda não está disponível.");
    }

    function loginFacebook() {
        toast.info("A integração com o Facebook ainda não está disponível.");
    }

    return (
        <>
            <div className="relative overflow-hidden flex flex-col w-[500px] h-[600px] rounded-[6px] bg-[var(--color-card-dark)]">

                {/* HEADER */}
                <div className="w-[500px] h-[140px] pt-[48px] gap-[40px]">
                    <div className="h-[92px] px-[48px] gap-[40px] flex flex-col">
                        <div className="h-[20px] gap-[8px] flex items-center justify-center">
                            <h2 className="w-[73px] h-[16px] font-medium text-[20px] leading-[16px] text-[var(--color-text-accent)]">
                                Entrar
                            </h2>

                            {/* LINHA */}
                            <div className="w-[1px] h-[20px] bg-[var(--color-text-coral)]"></div>

                            <span className="w-[133px] h-[16px] font-medium text-[20px] leading-[16px] text-[var(--color-text-foreground)]">
                                Criar conta
                            </span>
                        </div>

                        <p className="w-[404px] h-[32px] text-[13px] leading-[16px] text-center text-[var(--color-text-foreground)]">
                            Entre para gerenciar sua carteira, coleção e perfil de criador.
                        </p>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={login} className="py-2">
                    <div className="h-[144px] pt-[24px] px-[80px] gap-[12px] flex flex-col">
                        <div className="h-[40px] rounded-[5px] border border-[var(--color-primary)]">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="contato@email.com"
                                required
                                className="w-full h-full py-[12px] px-[16px] text-[14px] text-[var(--color-text-secundary)] rounded-[5px] bg-transparent outline-none" />
                        </div>

                        <div className="h-[40px] rounded-[5px] border border-[var(--color-primary)]">
                            <input
                                type="password"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="**********"
                                required
                                className="items-center w-full h-full px-[16px] py-[12px] text-[16px] text-[var(--color-text-foreground)] bg-transparent outline-none" />
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

                {/* SOCIAL */}
                <div className="w-full h-[144px] pt-[24px] gap-[12px]">
                    <div className="w-full h-[16px] gap-[12px] flex items-center pt-20">
                        <div className="w-[179px] h-0 border border-[var(--color-border)]"></div>

                        <span className="w-[118px] h-[16px] text-[13px] leading-[16px] text-[var(--color-text-foreground)]">
                            Ou continue com
                        </span>

                        <div className="w-[179px] h-0 border border-[var(--color-border)]"></div>
                    </div>

                    <div className="w-full h-[92px] px-[80px] gap-[12px] flex flex-col py-8">
                        <button
                            type="button"
                            onClick={loginGoogle}
                            className="flex w-[340px] h-[40px] shrink-0 rounded-[5px] border border-[var(--color-border)] gap-5
                            font-medium text-[13px] leading-[16px] items-center justify-center text-[var(--color-text-secundary)]">
                            <FcGoogle className="h-[25px] w-[25px]" />
                            Continuar com Google
                        </button>

                        <button
                            type="button"
                            onClick={loginFacebook}
                            className="flex w-[340px] h-[40px] shrink-0 rounded-[5px] border border-[var(--color-border)] gap-5
                            font-medium text-[13px] leading-[16px] items-center justify-center text-[var(--color-text-secundary)]">
                            <FaFacebookF className="h-[20px] w-[20px] text-[#3B5999]" />
                            Continuar com Facebook
                        </button>
                    </div>
                </div>

                {/* FAIXA FINAL */}
                <div className="absolute pointer-events-none top-[590px] w-full h-[10px] text-[var(--color-primary)] bg-[var(--color-primary)]"></div>
            </div>
        </>
    );

}

export default Login;