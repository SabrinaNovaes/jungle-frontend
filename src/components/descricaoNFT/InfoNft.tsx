type InfoNftProps = {
    rotulo: string;
    texto: string;
    separado?: boolean;
};

function InfoNft({ rotulo, texto, separado = false }: InfoNftProps) {
    return (
        <>
            <span className={`text-body font-bold leading-6 text-foreground ${separado ? "mt-3" : ""}`}>
                {rotulo}
            </span>
            <p className="text-body leading-6 text-secondary">{texto}</p>
        </>
    );
}

export default InfoNft;
