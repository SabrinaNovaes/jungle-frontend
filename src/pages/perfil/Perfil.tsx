import CampoFormulario from "@/components/campoForm/CampoForm";
import ImagemPerfil from "@/components/imagemPerfil/ImagemPerfil";
import SidebarPerfil from "@/components/sidebarPerfil/SidebarPerfil";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Perfil() {

    const [senhaAtual, setSenhaAtual] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

    const [mensagem, setMensagem] = useState("");

    function alterarSenha(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setMensagem("");

        if (senhaAtual.trim() === "" || senha.trim() === "" || confirmarSenha.trim() === "") {
            setMensagem("Preencha todos os campos.");
            return;
        }

        if (senha === senhaAtual) {
            setMensagem("A nova senha deve ser diferente da senha atual.");
            return;
        }

        if (senha !== confirmarSenha) {
            setMensagem("A nova senha e a confirmação não coincidem.");
            return;
        }
        setMensagem("Validação concluída! Pronto para alterar a senha.");
    }

    return (
        <>
            <div className="w-[1440px] max-h-[1080px] py-[24px] px-[120px] gap-[96px]">
                <div className="w-[1200px] h-0 border border-[var(--color-primary)] opacity-[50%]"></div>

                {/* BODY */}
                <div className="w-[1200px] h-[726px] gap-[28px] flex mt-4">
                    <SidebarPerfil />

                    <div className="flex flex-col">
                        <h1 className="w-[212px] h-[16px] font-bold text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                            Perfil do colecionador
                        </h1>

                        <form className="w-[862px] flex gap-6 mt-6">

                            <div className="w-full h-[285px] gap-[24px] flex flex-col">
                                <CampoFormulario label="Nome de exibição">
                                    <input
                                        type="text"
                                        className="h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[var(--color-text-secundary)]" />
                                </CampoFormulario>

                                <CampoFormulario label="E-mail">
                                    <input
                                        type="email"
                                        className="h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[var(--color-text-secundary)]" />
                                </CampoFormulario>

                                <CampoFormulario label="Apelido da carteira">
                                    <input
                                        type="text"
                                        className="h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[var(--color-text-secundary)]" />
                                </CampoFormulario>

                            </div>

                            <div className="w-full h-[285px] gap-[24px] flex flex-col">
                                <CampoFormulario label="Nome de usuário">
                                    <input
                                        className="h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[var(--color-text-secundary)]" />
                                </CampoFormulario>

                                <div className="w-full h-[69px]">
                                    <CampoFormulario label="Nome ENS" className="w-[92px] h-[69px]">
                                        <div className="flex gap-5">
                                            <select
                                                required
                                                defaultValue=""
                                                className="w-[90px] h-[40px] rounded-[3px] border border-[var(--color-border)] text-[14px] text-[var(--color-text-secundary)] bg-[var(--color-background)]">
                                                <option value="ethereum">.eth</option>
                                                <option value="polygon">.polygon</option>
                                                <option value="solana">.sol</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[var(--color-text-secundary)]" />
                                        </div>
                                    </CampoFormulario>
                                </div>
                                <div className="w-full h-[75px] gap-[10px]">
                                    <span className="w-[55px] h-[15px] text-[15px] leadin-[15px] text-[var(-color-text-foreground)]">
                                        Avatar
                                    </span>

                                    <ImagemPerfil />
                                </div>
                            </div>
                        </form>
                        <form
                            onSubmit={alterarSenha}
                            className="w-[417px] min-h-[289px] mt-4 gap-[24px] flex flex-col">

                            <h2 className="w-[125px] h-[16px] font-medium text-[16px] leading-[16px] text-[var(--color-text-foreground)]">
                                Alterar senha
                            </h2>

                            <CampoFormulario label="Senha atual">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    name="senhaAtual"
                                    value={senhaAtual}
                                    onChange={(e) => setSenhaAtual(e.target.value)}
                                    required
                                    className="relative w-[417px] h-[40px] rounded-[6px] border border-[var(--color-border)] px-3" />

                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    className="absolute right-262 top-130 -translate-y-1/2 flex items-center text-[var(--color-text-foreground)]"
                                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </CampoFormulario>

                            <CampoFormulario label="Nova senha">
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    name="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Senha"
                                    required
                                    className="relative w-[417px] h-[40px] flex w-full rounded-[5px] border border-[var(--color-border)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)]" />

                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    className="absolute right-262 top-154 -translate-y-1/2 flex items-center text-[var(--color-text-foreground)]"
                                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </CampoFormulario>

                            <CampoFormulario label="Confirmar nova senha">
                                <input
                                    type={mostrarConfirmarSenha ? "text" : "password"}
                                    name="confirmarSenha"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                    placeholder="Confirmar senha"
                                    required
                                    className="relative w-[417px] h-[40px] w-full rounded-[5px] border border-[var(--color-border)] bg-transparent px-[16px] text-[14px] text-[var(--color-text-foreground)] outline-none" />

                                <button
                                    type="button"
                                    onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                    className="absolute right-262 top-177 -translate-y-1/2 flex items-center text-[var(--color-text-foreground)]">
                                    {mostrarConfirmarSenha ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </CampoFormulario>

                            {mensagem && (
                                <p className="text-sm text-[var(--color-text-foreground)]">
                                    {mensagem}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-[131px] h-[40px] rounded-[3px] bg-[var(--color-primary)] text-[var(--color-background)] 
                                font-bold text-[14px] leading-[16px]">
                                Salvar
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;