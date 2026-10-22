import { useEffect, useState } from "react";
import { assinarMudancaAuth, haUsuarioLogado } from "@/service/auth";

export function useUsuarioLogado() {
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    useEffect(() => {
        const verificarLogin = () => setUsuarioLogado(haUsuarioLogado());

        verificarLogin();
        return assinarMudancaAuth(verificarLogin);
    }, []);

    return usuarioLogado;
}
