type CarteirasSalvasProps = {
    carteiras: string[];
};

function CarteirasSalvas({ carteiras }: CarteirasSalvasProps) {
    return (
        <section className="flex w-full flex-col gap-4">
            <h2 className="text-subtitle font-medium text-foreground">
                Carteiras salvas
            </h2>

            <div className="w-full border-b border-line" />

            {carteiras.length > 0 ? (
                carteiras.map((carteira, index) => (
                    <div
                        key={index}
                        className="flex min-h-14 w-full items-center border-b border-line">
                        <span className="break-all text-body text-foreground">
                            {carteira}
                        </span>
                    </div>
                ))
            ) : (
                <p className="text-body text-secondary">
                    Você ainda não tem carteiras salvas.
                </p>
            )}
        </section>
    );
}

export default CarteirasSalvas;
