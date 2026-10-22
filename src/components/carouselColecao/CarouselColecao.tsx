import Cards from "../cards/Card";
import Divisor from "../common/Divisor";

type CarouselProps = {
    titulo?: string;
};

function Carousel({ titulo = "Mais desta coleção" }: CarouselProps) {

    return (
        <section className="flex w-full flex-col gap-4 pb-8 pt-10 xl:gap-8 xl:pb-12 xl:pt-20">
            <div>
                <h2 className="mb-2 text-title font-bold leading-tight text-accent">
                    {titulo}
                </h2>
                <Divisor className="w-full" />
            </div>

            <Cards modo="carrossel" />
        </section>
    );
}

export default Carousel;
