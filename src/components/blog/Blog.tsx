import img1 from '../../assets/imgBlog1.png';
import img2 from '../../assets/imgBlog2.png';
import img3 from '../../assets/imgBlog3.png';
import img4 from '../../assets/imgBlog4.png';
import { Link } from '@tanstack/react-router';
import { FaArrowRight } from 'react-icons/fa';

function Blog() {

    const cards = [
        {
            imagem: img1,
            legenda: '12 de setembro | Leitura de 6 min',
            titulo: 'Como funciona a propriedade de NFTs',
            texto: 'Aprenda a colecionar, negociar e verificar ativos digitais.'
        },
        {
            imagem: img2,
            legenda: '13 de setembro | Leitura de 2 min',
            titulo: '10 artistas digitais para acompanhar',
            texto: 'Conheça criadores que moldam a cultura digital.'
        },
        {
            imagem: img3,
            legenda: '15 de setembro | Leitura de 3 min',
            titulo: 'Raridade, atributos e procedência',
            texto: 'Entenda raridade, procedência, direitos autorais e utilidade.'
        },
        {
            imagem: img4,
            legenda: '15 de setembro | Leitura de 2 min',
            titulo: 'Como proteger sua carteira',
            texto: 'Proteja sua carteira, seus ativos e sua identidade.'
        }
    ]

    return (
        <>
            <div className="w-[1200px] h-[476px] gap-[40px] m-auto mb-20">

                {/* TOPO BLOG */}
                <div className="flex flex-col w-full h-[67px] gap-[12px] mb-10">
                    <h1 className="h-[37px] font-bold text-[28px] leading-[100%] text-center
                        text-[var(--color-text-foreground)]">
                        Diário da Cunhagem
                    </h1>
                    <span className="h-[18px] text-[14px] leading-[100%] text-center
                        text-[var(--color-text-secundary)]">
                        Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.
                    </span>
                </div>

                {/* CARD BLOG */}
                <div className="w-full h-[369px] flex gap-[24px] justify-center m-auto">
                    {cards.map((card) => (
                        <div key={card.imagem} className="w-[268px] h-[369px] overflow-hidden rounded-[8px] bg-[var(--color-card-dark)]">

                            {/* IMG CARD */}
                            <img src={card.imagem} alt='Imagens NFTs' className="w-[268px] h-[195px]" />

                            {/* TEXTOS CARD */}
                            <div className="h-[174px] pt-[12px] pb-[16px] px-[16px] flex flex-col gap-[8px]">
                                <span className="w-[236px] h-[32px] font-medium text-[12px] 
                                    text-[var(--color-text-secundary)] leading-[16px]">
                                    {card.legenda}
                                </span>

                                <h2 className="font-bold text-[16px] text-[var(--color-foreground)] leading-[100%]
                                    w-[236px] h-[42px]">
                                    {card.titulo}
                                </h2>
                                <p className="text-[12px] text-[var(--color-text-secundary)] leading-[16px]
                                    w-[236px] h-[32px]">
                                    {card.texto}
                                </p>

                                <div className='w-[74px] h-[16px] gap-[4px]'>
                                    <Link to='/' className='flex w-full h-[14px] font-bold text-[12px] items-center
                                        text-[var(--color-text-accent)] gap-[4px]'>
                                            Ler mais
                                            <FaArrowRight size={7} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Blog;