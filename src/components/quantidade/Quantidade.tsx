type QuantidadeProps = {
    valor: number;
    onDiminuir: () => void;
    onAumentar: () => void;
    minimo?: number;
    rotulo?: string;
    tamanho?: "sm" | "md";
    className?: string;
};

const botaoPassoBase =
    "flex shrink-0 items-center justify-center rounded-full bg-primary font-bold leading-none text-ink transition-colors hover:bg-accent disabled:opacity-40";

const tamanhosBotao = { md: "size-8 text-title", sm: "size-6 text-body" } as const;

function Quantidade({ valor, onDiminuir, onAumentar, minimo = 1, rotulo, tamanho = "md", className = "" }: QuantidadeProps) {
    const botaoPasso = `${botaoPassoBase} ${tamanhosBotao[tamanho]}`;

    return (
        <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
            {rotulo && <span className="mr-1 text-body font-bold text-secondary">{rotulo}</span>}

            <button
                type="button"
                aria-label="Diminuir quantidade"
                disabled={valor <= minimo}
                onClick={onDiminuir}
                className={botaoPasso}>
                −
            </button>

            <span className="min-w-4 text-center text-body text-foreground" aria-live="polite">
                {valor}
            </span>

            <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={onAumentar}
                className={botaoPasso}>
                +
            </button>
        </div>
    );
}

export default Quantidade;
