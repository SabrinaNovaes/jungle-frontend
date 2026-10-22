import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const OPCOES_ORDENACAO = [
    'Listados recentemente',
    'Mais procurados',
];

function OrdenarPor() {
    const [aberto, setAberto] = useState(false);
    const [ordenacao, setOrdenacao] = useState('');

    const selecionar = (opcao: string) => {
        setOrdenacao(opcao);
        setAberto(false);
    };

    return (
        <div className="relative hidden text-foreground md:block">
            <button type="button" onClick={() => setAberto(!aberto)}
                className="flex items-center gap-2 text-label leading-none">
                <span>
                    Ordenar por: {ordenacao && ` ${ordenacao}`}
                </span>
                {aberto ? (
                    <IoIosArrowUp size={16} />
                ) : (
                    <IoIosArrowDown size={16} />
                )}
            </button>
            {aberto && (
                <div className="absolute right-0 top-7 z-10 flex flex-col gap-2 whitespace-nowrap rounded-sm bg-card-dark p-3 text-left">
                    {OPCOES_ORDENACAO.map((opcao) => (
                        <button type="button" key={opcao} onClick={() => selecionar(opcao)}
                            className="text-left hover:text-accent">
                            {opcao}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrdenarPor;
