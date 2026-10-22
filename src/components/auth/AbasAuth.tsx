import type { ModoAuth } from "./FormAuth";

type AbasAuthProps = {
    modo: ModoAuth;
    onChange: (modo: ModoAuth) => void;
};

const abas: { modo: ModoAuth; texto: string }[] = [
    { modo: "login", texto: "Entrar" },
    { modo: "cadastro", texto: "Criar conta" },
];

/** Abas "Entrar | Criar conta" */
function AbasAuth({ modo, onChange }: AbasAuthProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            {abas.map((aba, indice) => (
                <div key={aba.modo} className="contents">
                    {indice > 0 && <span aria-hidden="true" className="h-5 w-px bg-coral" />}

                    <button
                        type="button"
                        onClick={() => onChange(aba.modo)}
                        className={`text-title font-medium transition-colors hover:text-accent ${modo === aba.modo ? "text-accent" : "text-foreground"}`}>
                        {aba.texto}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default AbasAuth;
