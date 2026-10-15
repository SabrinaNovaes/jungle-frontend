import Cards from "../cards/Card";

type CarouselProps = {
    titulo?: string;
};

function Carousel ({ titulo = "Mais desta coleção" }: CarouselProps) {

    return (
        <>
            <div className="w-[1200px] min-h-[407px] flex flex-col gap-[32px] pt-20 pb-12">
                <div className="w-full h-[28px] gap-[12px]">
                    <h2 className="h-[16px] mb-2 font-bold text-[17px] leading-[16px] text-[var(--color-text-accent)]">
                        {titulo}
                    </h2>
                    <div className="w-full h-0 border border-[var(--color-primary)] items-center justify-center opacity-[50%]"></div>
                </div>
                <div className="w-full h-[347px] gap-[32px] mt-4">
                    <div className="h-[303px] justify-between">
                        <Cards modo="carrossel" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;