import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type PaginacaoProps = {
    paginaAtual: number;
    totalPaginas: number;
    onMudar: (pagina: number) => void;
};

const botaoSeta = 'flex size-9 items-center justify-center border border-line text-foreground';

/* Botões de paginação da grade de NFTs. */
function Paginacao({ paginaAtual, totalPaginas, onMudar }: PaginacaoProps) {
    return (
        <div className="flex w-full justify-center md:justify-end">
            <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                    type="button"
                    onClick={() => onMudar(1)}
                    disabled={paginaAtual === 1}
                    aria-label="Primeira página"
                    className={botaoSeta}>
                    <IoIosArrowBack />
                </button>

                {Array.from({ length: totalPaginas }, (_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onMudar(index + 1)}
                        className={`size-9 rounded-xs text-title font-bold leading-none ${paginaAtual === index + 1
                            ? 'bg-primary text-ink'
                            : 'border border-line text-foreground'
                            }`}>
                        {index + 1}
                    </button>
                ))}

                <button
                    type="button"
                    onClick={() => onMudar(paginaAtual + 1)}
                    disabled={paginaAtual === totalPaginas}
                    aria-label="Próxima página"
                    className={botaoSeta}>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

export default Paginacao;
