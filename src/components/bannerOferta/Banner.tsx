import img from '../../assets/NFTArtwork18.png';

function Banner() {
    return (
        <>
            <div className="bg-[var(--color-card-dark)] w-[310px] h-[470px] pt-[24px] pb-[4px] mt-20">
                <div className="w-full h-[448px] gap-[16px]">
                    <div className="h-[64px] gap-[16px]">

                        {/* TITULO BANNER */}
                        <div className="w-full h-[32px] gap-[10px] px-[20px]">
                            <span className="w-[270] h-full font-bold text-[24px] leading-[32px] 
                                text-[var(--color-text-accent)]">
                                NFT EM DESTAQUE
                            </span>
                        </div>
                        <div className="text-center w-full h-[16px] px-[20px] gap-[16px] my-[15px]">
                            <span className="justify-center w-[270px] h-full font-bold text-[22px] leading-[16px] 
                                text-[var(--color-foreground)] ">
                                OFERTA LIMITADA
                            </span>
                        </div>

                        {/* FOTO BANNER */}
                        <div className="relative">
                            <img src={img} alt="NFT Banner Oferta" className="w-full h-[368px] rounded-[22px]" />

                            {/* QUADRADO VERDE */}
                            <div className="absolute top-[205px] left-[30px] -translate-x-1/2 -translate-y-1/2 w-[22px] h-[22px]  
                                rounded-[7px] border-[2px] border-[2px] opacity-20 border-[#46A358]">
                            </div>

                            {/* CIRCULO MENOR */}
                            <div className='absolute top-[10px] left-[50px] -translatex-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-[29px] 
                                bg-[linear-gradient(90deg,#D28A4C_0%,#D28A4C00_100%)] opacity-20'>
                            </div>
 
                            {/* CIRCULO MAIOR */}
                            <div className='absolute top-[260px] left-[275px] -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-[29px] 
                                bg-[linear-gradient(90deg,#D28A4C_0%,#D28A4C00_100%)] opacity-20'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;