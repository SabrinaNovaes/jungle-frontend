/** Linha — texto — linha (ex.: "Ou continue com"). */
function DivisorTexto({ texto }: { texto: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-line-soft" />
            <span className="shrink-0 text-small text-foreground">{texto}</span>
            <span className="h-px flex-1 bg-line-soft" />
        </div>
    );
}

export default DivisorTexto;
