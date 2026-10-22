import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import FormAuth, { type ModoAuth } from "@/components/auth/FormAuth";
import SocialLogin from "@/components/auth/SocialLogin";

function LoginPage() {
    const navigate = useNavigate();
    const [modo, setModo] = useState<ModoAuth>("login");

    const ehLogin = modo === "login";

    return (
        <section className="page flex min-h-dvh max-w-[26rem] flex-col justify-center gap-10 py-10 md:min-h-0 md:py-16">
            <p className="text-center text-heading font-bold tracking-[0.1em] text-foreground">KURIO</p>

            <div className="flex flex-col gap-6">
                <h1 className="text-center text-title font-bold text-foreground">
                    {ehLogin ? "Entrar" : "Criar perfil de colecionador"}
                </h1>

                <FormAuth
                    modo={modo}
                    gradiente
                    onLoginSucesso={() => navigate({ to: "/" })}
                    onCadastroSucesso={() => setModo("login")} />
            </div>

            <SocialLogin />

            <p className="text-center text-body text-secondary">
                {ehLogin ? "Novo na Kurio? " : "Já tem uma conta? "}
                <button
                    type="button"
                    onClick={() => setModo(ehLogin ? "cadastro" : "login")}
                    className="hover:text-accent hover:underline">
                    {ehLogin ? "Crie uma conta" : "Entre"}
                </button>
            </p>
        </section>
    );
}

export default LoginPage;
