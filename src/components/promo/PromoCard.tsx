import { FaArrowRight } from 'react-icons/fa6';

type PromoCardProps = {
    imagem: string;
    titulo: string;
    texto: string;
};

/* Card de destaque da home */
function PromoCard({ imagem, titulo, texto }: PromoCardProps) {
    return (
        <div className="grid min-h-[15.6rem] grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] overflow-hidden rounded-md bg-card-dark">

            {/* IMAGEM + DETALHE CÍRCULO */}
            <div className="relative">
                <img src={imagem} alt="Imagem NFT Promo" className="size-full object-cover" />
                <div aria-hidden="true" className="absolute left-[-12.4rem] top-[8.4rem] size-64 rounded-full border border-primary" />
                <div aria-hidden="true" className="absolute left-[-11.9rem] top-[8.9rem] size-64 rounded-full border-2 border-primary" />
            </div>

            {/* TEXTO */}
            <div className="flex flex-col p-5 pt-8 text-right">
                <h2 className="text-title font-bold leading-tight text-foreground">
                    {titulo}
                </h2>
                <p className="mt-4 text-body text-secondary">
                    {texto}
                </p>

                <div className="mt-auto flex justify-end pt-4">
                    <button type="button" className="btn btn-primary w-35">
                        Explorar
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PromoCard;
