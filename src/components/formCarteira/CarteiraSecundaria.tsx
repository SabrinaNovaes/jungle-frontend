type CarteiraSecundariaProps = {
    onAdicionar: () => void;
};

function CarteiraSecundaria({ onAdicionar }: CarteiraSecundariaProps) {
    return (
        <section className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h2 className="text-title font-bold text-foreground">
                    Carteira secundária
                </h2>

                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-3 text-label text-foreground">
                        <span aria-hidden="true" className="size-4 rounded-full border-2 border-primary" />
                        Igual a carteira principal
                    </span>

                    <button
                        type="button"
                        onClick={onAdicionar}
                        className="text-subtitle font-medium text-accent hover:underline">
                        Adicionar
                    </button>
                </div>
            </div>

            <p className="text-body text-secondary">
                Você ainda não adicionou uma carteira secundária.
            </p>
        </section>
    );
}

export default CarteiraSecundaria;
