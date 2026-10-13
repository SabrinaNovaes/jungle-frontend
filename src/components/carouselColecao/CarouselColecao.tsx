import Cards from "../cards/Card";

function Carousel() {
    return (
        <>
            <div className="w-[1200px] h-[407px] gap-[32px] pt-20">
                <div className="w-full h-[28px] gap-[12px]">
                    <h2 className="h-[16px] mb-1 font-bold text-[17px] leading-[16px] text-[var(--color-text-accent)]">
                        Mais desta coleção
                    </h2>
                    <div className="w-full h-0 border border-[var(--color-primary)] items-center justify-center opacity-[50%]"></div>
                </div>
                <div className="w-full h-[347px] gap-[32px]">
                    <div className="h-[303px] justify-between">
                        <Cards modo="carrossel" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;