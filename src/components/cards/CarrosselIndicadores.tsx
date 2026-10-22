type CarrosselIndicadoresProps = {
    total: number;
    atual: number;
    onSelecionar: (indice: number) => void;
};

/* Bolinhas de navegação do carrossel de NFTs. */
function CarrosselIndicadores({ total, atual, onSelecionar }: CarrosselIndicadoresProps) {
    return (
        <div className="flex justify-center gap-2">
            {Array.from({ length: total }, (_, indice) => (
                <button
                    key={indice}
                    type="button"
                    onClick={() => onSelecionar(indice)}
                    aria-label={`Ir para o slide ${indice + 1}`}
                    className={`size-2.5 rounded-full transition-colors ${atual === indice
                        ? 'bg-primary'
                        : 'bg-line'
                        }`} />
            ))}
        </div>
    );
}

export default CarrosselIndicadores;
