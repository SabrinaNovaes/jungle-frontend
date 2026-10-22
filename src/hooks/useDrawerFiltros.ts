import { useEffect, useState } from "react";

export function useDrawerFiltros() {
    const [aberto, setAberto] = useState(false);

    useEffect(() => {
        const alternar = () => setAberto((atual) => !atual);
        const fecharComEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setAberto(false);
        };

        window.addEventListener("filtros:alternar", alternar);
        window.addEventListener("keydown", fecharComEsc);

        return () => {
            window.removeEventListener("filtros:alternar", alternar);
            window.removeEventListener("keydown", fecharComEsc);
        };
    }, []);

    return { aberto, fechar: () => setAberto(false) };
}
