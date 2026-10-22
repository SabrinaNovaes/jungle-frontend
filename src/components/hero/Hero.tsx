import imgHero from '../../assets/Frame136.png';

function Hero() {
    return (
        <section className="page py-4 md:py-10 xl:mb-20">

            <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl bg-gradient-to-br from-primary/40 to-card-dark p-4
                md:grid-cols-[1fr_minmax(0,22rem)] md:gap-8 md:rounded-none md:bg-none md:p-0 xl:grid-cols-[1fr_28.125rem] xl:min-h-[28.125rem]">

                {/* TEXTO */}
                <div className="flex min-w-0 flex-col justify-center text-left">
                    <p className="text-caption font-medium tracking-widest text-foreground md:text-body">
                        Bem-vindo à Kurio
                    </p>

                    <h1 className="mt-2 text-display font-bold leading-tight text-foreground md:mt-4 md:leading-[1.6]">
                        SEJA DONO DO FUTURO
                        <br />
                        DA ARTE DIGITAL
                    </h1>

                    <p className="mt-2 max-w-[35rem] text-caption leading-relaxed text-secondary md:mt-4 md:text-body md:leading-6">
                        Descubra NFTs selecionados de criadores emergentes e consagrados.
                        <br className="hidden md:block" />
                        {' '}Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
                    </p>

                    {/* BOTÃO */}
                    <button type="button" className="btn btn-primary mt-4 w-fit px-3 md:mt-8 md:h-[2.56rem] md:w-35">
                        Explorar
                    </button>
                </div>

                {/* IMAGEM */}
                <figure className="w-28 md:w-full">
                    <img
                        className="aspect-square w-full rounded-lg object-cover md:rounded-xl"
                        src={imgHero}
                        alt="Imagem do componente Hero" />
                </figure>
            </div>
        </section>
    );
}

export default Hero;
