import { FaArrowRight } from 'react-icons/fa6';
import img1 from '../../assets/Frame136.png';
import img2 from '../../assets/NFTArtwork05.png';

function Promo() {

    const cards = [
        {
            imagem: img1,
            titulo: 'Lançamentos gênesis de edição limitada',
            texto: 'Colecione edições escassas diretamente dos criadores antes da revelação pública'
        },
        {
            imagem: img2,
            titulo: 'Arte digital selecionada e muito mais',
            texto: 'Explore novos artistas, coleções verificadas e obras digitais que definem a cultura.'
        }
    ]

    return (
        <>
            {/* CARD */}
            <div className="w-[1200px] h-[300px] flex justify-between m-auto items-center my-20 gap-15">
                {cards.map((card, index) => (
                    <div key={index} className="flex w-[586px] h-[250px] overflow-hidden justify-between rounded-[8px] bg-[var(--color-card-dark)]">
                        <div className="relative w-[292px] h-[250px] rounded-[18px]">
                            <img src={card.imagem} alt="Imagem NFT Promo" className="w-[292px] h-[250px]" />
                        
                            {/* DETALHE CIRCULO FOTO */}
                            <div className="absolute w-[256px] h-[256px] top-[134px] left-[-199px] rounded-full border-[1px] border-[var(--color-primary)]"></div>
                            <div className="absolute w-[256px] h-[256px] top-[142px] left-[-191px] rounded-full border-[2px] border-[var(--color-primary)]"></div>

                        </div>

                        {/* TEXYO CARD */}
                        <div className='flex flex-col w-[300px] h-[250px] pt-[30px] mr-5 p-[10px]'>
                            <h2 className='font-bold text-[18px] w-full h-[24px] mb-5 text-[var(--color-foreground)] text-right'>
                                {card.titulo}
                            </h2>
                            <p className='w-full h-[45px] mt-8 text-[14px] text-[var(--color-text-secundary)] text-right'>
                                {card.texto}
                            </p>

                            {/* BOTÃO CARD */}
                            <div className="flex justify-end mt-auto">
                                <button type="button" className="w-[140px] h-[40px] flex items-center justify-center gap-[8px] bg-[var(--color-primary)] 
                                    text-[var(--color-background)] rounded-[6px]">
                                    Explorar
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Promo;