type FooterBlocoProps = {
    circulo: string;
    titulo: string;
    texto: string;
};

/* Bloco de destaque do topo do footer (círculo com letra, título e texto). */
function FooterBloco({ circulo, titulo, texto }: FooterBlocoProps) {
    return (
        <div className="flex flex-col gap-3 xl:border-r xl:border-primary xl:px-4">
            <div className="flex size-[4.625rem] shrink-0 items-center justify-center rounded-full bg-primary">
                <span className="text-heading font-bold leading-none text-ink">
                    {circulo}
                </span>
            </div>

            <h2 className="text-title font-bold leading-tight text-foreground">
                {titulo}
            </h2>

            <p className="max-w-[17rem] text-body leading-[1.55] text-secondary">
                {texto}
            </p>
        </div>
    );
}

export default FooterBloco;
