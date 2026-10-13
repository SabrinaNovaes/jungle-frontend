import imgHero from '../../assets/Frame136.png';

function Hero() {
    return (
        <>
            <div className="mx-auto h-[450px] w-full max-w-[1200px] py-[40px] mb-35">
                <div className="grid grid-cols-[1fr_450px] h-full">
                    
                    {/* TEXTO */}
                   <div className="flex flex-col justify-center text-left">
                        <p className="w-[600px] h-[16px] text-[14px] font-medium leading-[16px] tracking-[10%]">
                            Bem-vindo à Kurio
                        </p>
                        <h1 className="w-[600px] h-[140px] text-[43px] font-bold leading-[70px]">
                            SEJA DONO DO FUTURO 
                            <br />
                            DA ARTE DIGITAL</h1>
                        <p className="w-[557px] h-[72px] text-[14px] font-normal leading-[24px] text-[var(--color-text-secundary)]">
                            Descubra NFTs selecionados de criadores emergentes e consagrados. 
                            <br />
                            Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
                        </p>

                        {/* BOTÃO */}
                        <button className="
                            mt-8 h-[41px] w-[140px] rounded-[6px]
                            text-[var(--color-background)] bg-[var(--color-primary)] font-bold">
                            Explorar
                        </button>
                    </div>

                    {/* IMAGEM */}
                    <figure className="w-[450px] h-[450px] ">
                        <img id="hero" className="rounded-[24px] gap-[10px]" src={ imgHero } alt="Imagem do componente Hero" />
                    </figure>
                </div>
            </div>
        </>
    );
}

export default Hero;