import { Link } from '@tanstack/react-router';
import { FaArrowRight } from 'react-icons/fa';

type BlogCardProps = {
    imagem: string;
    legenda: string;
    titulo: string;
    texto: string;
};

function BlogCard({ imagem, legenda, titulo, texto }: BlogCardProps) {
    return (
        <article className="overflow-hidden rounded-md bg-card-dark">
            <img src={imagem} alt="Imagens NFTs" className="aspect-[268/195] w-full object-cover" />

            <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
                <span className="text-caption font-medium leading-4 text-secondary">
                    {legenda}
                </span>

                <h2 className="text-subtitle font-bold leading-tight text-foreground">
                    {titulo}
                </h2>

                <p className="text-caption leading-4 text-secondary">
                    {texto}
                </p>

                <Link to="/" className="mt-1 flex w-fit items-center gap-1 text-caption font-bold text-accent">
                    Ler mais
                    <FaArrowRight size={7} />
                </Link>
            </div>
        </article>
    );
}

export default BlogCard;
