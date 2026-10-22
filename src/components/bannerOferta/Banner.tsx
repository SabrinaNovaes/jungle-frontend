import img from '../../assets/NFTArtwork18.png';

function Banner() {
    return (
        <aside className="mt-8 hidden w-full bg-card-dark px-5 pb-1 pt-6 xl:mt-20 xl:block">
            <div className="flex flex-col gap-4">

                {/* TITULO BANNER */}
                <span className="text-heading font-bold leading-8 text-accent">
                    NFT EM DESTAQUE
                </span>
                <span className="text-center text-[1.375rem] font-bold leading-4 text-foreground">
                    OFERTA LIMITADA
                </span>

                {/* FOTO BANNER */}
                <div className="relative">
                    <img src={img} alt="NFT Banner Oferta" className="aspect-[270/368] w-full rounded-[1.375rem] object-cover" />

                    {/* QUADRADO VERDE */}
                    <div aria-hidden="true" className="absolute left-[8%] top-[56%] size-[1.375rem] -translate-x-1/2 -translate-y-1/2 rounded-[0.4375rem] border-2 border-[#46A358] opacity-20" />

                    {/* CÍRCULO MENOR */}
                    <div aria-hidden="true" className="absolute left-[18%] top-[3%] size-[0.9375rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-primary/0 opacity-20" />

                    {/* CÍRCULO MAIOR */}
                    <div aria-hidden="true" className="absolute left-[85%] top-[70%] size-[2.8125rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-primary/0 opacity-20" />
                </div>
            </div>
        </aside>
    );
}

export default Banner;
