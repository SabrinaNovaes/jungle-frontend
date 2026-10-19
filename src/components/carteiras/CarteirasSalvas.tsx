type CarteirasSalvasProps = {
    carteiras: string[];
};

function CarteirasSalvas({ carteiras }: CarteirasSalvasProps) {
    return (
        <section className="w-full flex flex-col gap-4">
            <h2 className="font-medium text-[16px] text-[var(--color-text-foreground)]">
                Carteiras salvas
            </h2>

            <div className="w-full border-b border-[var(--color-border)]" />

            {carteiras.length > 0 ? (
                carteiras.map((carteira, index) => (
                    <div
                        key={index}
                        className="w-full min-h-[60px] flex items-center border-b border-[var(--color-border)]">
                        <span className="text-[14px] text-[var(--color-text-foreground)]">
                            {carteira}
                        </span>
                    </div>
                ))
            ) : (
                <p className="text-[14px] text-[var(--color-text-secundary)]">
                    Você ainda não tem carteiras salvas.
                </p>
            )}
        </section>
    );
}

export default CarteirasSalvas;
