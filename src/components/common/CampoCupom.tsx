type CampoCupomProps = {
    valor: string;
    onChange: (valor: string) => void;
    onAplicar: () => void;
    className?: string;
    botaoClassName?: string;
};

function CampoCupom({
    valor,
    onChange,
    onAplicar,
    className = 'flex overflow-hidden rounded-xs border border-primary pl-2',
    botaoClassName = 'btn btn-primary rounded-none px-6 text-label',
}: CampoCupomProps) {
    return (
        <div className={className}>
            <input
                type="text"
                value={valor}
                placeholder="Digite o código promocional..."
                aria-label="Código promocional"
                onChange={(e) => onChange(e.target.value)}
                className="h-10 min-w-0 flex-1 bg-transparent text-caption text-secondary" />

            <button type="button" onClick={onAplicar} className={botaoClassName}>
                Aplicar
            </button>
        </div>
    );
}

export default CampoCupom;
