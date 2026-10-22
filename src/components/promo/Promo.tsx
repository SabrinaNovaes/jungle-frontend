import PromoCard from './PromoCard';
import { cardsPromo } from './promo.data';

function Promo() {
    return (
        <section className="page hidden py-10 md:block xl:py-20">
            <div className="grid gap-6 lg:grid-cols-2 xl:gap-14">
                {cardsPromo.map((card) => (
                    <PromoCard key={card.titulo} {...card} />
                ))}
            </div>
        </section>
    );
}

export default Promo;
