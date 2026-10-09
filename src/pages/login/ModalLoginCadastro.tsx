import { IoIosLogOut } from 'react-icons/io';
import Popup from 'reactjs-popup'
import Login from './Login';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa6';
import { toast } from "react-toastify";
import { useState } from 'react';
import Cadastro from './Cadastro';

function ModalLogin() {

    const [modo, setModo] = useState<"login" | "cadastro">("login");

    function loginGoogle() {
        toast.info("A integração com o Google ainda não está disponível.");
    }

    function loginFacebook() {
        toast.info("A integração com o Facebook ainda não está disponível.");
    }

    return (
        <>
            <Popup trigger={
                <button
                    type="button"
                    className="flex h-[35px] w-[100px] items-center justify-center
                    gap-2 rounded-[6px] bg-[var(--color-primary)] text-[16px] text-[var(--color-background)]">
                    <IoIosLogOut className="w-[20p] h-[20px]" /> Entrar
                </button>
            }
                modal
                contentStyle={{
                    padding: '0',
                    border: 'none',
                    background: 'transparent',
                    width: 'auto',
                }} >

                <div className={`relative overflow-hidden flex w-[500px] flex-col rounded-[6px] bg-[var(--color-card-dark)] ${modo === "login" ? "h-[600px]" : "h-[656px]"}`}>

                    {/* HEADER */}
                    <div className="w-full h-[140px] pt-[48px] gap-[40px]">
                        <div className="h-[92px] px-[48px] gap-[40px] ">
                            <div className="w-full h-[20px] gap-[8px] flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={() => setModo("login")}
                                    className={`w-[73px] h-[16px] font-medium text-[20px] leading-[16px]
                                    ${modo === "login" ? "text-[var(--color-text-accent)]" : "text-[var(--color-text-foreground)]"
                                        }`}>
                                    Entrar
                                </button>

                                {/* LINHA */}
                                <div className="w-[1px] h-[20px] bg-[var(--color-text-coral)]"></div>

                                <button
                                    type="button"
                                    onClick={() => setModo("cadastro")}
                                    className={`w-[133px] h-[16px] font-medium text-[20px] leading-[16px]
                                    ${modo === "cadastro" ? "text-[var(--color-text-accent)]" : "text-[var(--color-text-foreground)]"}`}>
                                    Criar conta
                                </button>
                            </div>

                            <p className="w-[404px] h-[32px] text-[13px] leading-[16px] text-center text-[var(--color-text-foreground)] pt-[24px]">
                                {modo === "login" ? "Entre para gerenciar sua carteira, coleção e perfil de criador." :
                                    "Crie seu perfil de colecionador e conecte uma carteira quando quiser."}
                            </p>
                        </div>
                    </div>

                    {modo === "login" ? <Login /> : <Cadastro />}

                    {/* SOCIAL */}
                    <div className={`w-full px-[80px] pb-[30px] pt-[24px] ${modo === "login" ? "mt-20" : "mt-0"}`}>
                        <div className="flex h-[16px] w-full items-center justify-center gap-[12px]">
                            <div className="h-0 flex-1 border border-[var(--color-border)]"></div>

                            <span className="shrink-0 text-[13px] leading-[16px] text-[var(--color-text-foreground)]">
                                Ou continue com
                            </span>

                            <div className="h-0 flex-1 border border-[var(--color-border)]"></div>
                        </div>

                        <div className="mt-5 flex flex-col gap-[12px]">
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
                    <div className={`absolute pointer-events-none w-full h-[10px] text-[var(--color-primary)] bg-[var(--color-primary)]
                        ${modo === "login" ? "top-[590px]" : "top-[646px]"}`}></div>
                </div>
            </Popup >
        </>
    );
}

export default ModalLogin;