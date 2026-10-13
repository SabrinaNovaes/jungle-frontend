import { useState } from "react";
import Sidebar from "../sidebarFiltro.tsx/Sidebar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Cards from "../cards/Card";

function Produtos() {

    const buscar = [
        { name: 'Todos os NFTs', active: true },
        { name: 'Novos lançamentos', active: false },
        { name: 'Em alta', active: false }
    ]

    const [ordenacaoAberta, setOrdenacaoAberta] = useState(false);
    const [ordenacao, setOrdenacao] = useState("");

    const opcoesOrdenacao = [
        "Listados recentemente",
        "Mais procurados",
    ];

    const selecionarOrdenacao = (opcao: string) => {
        setOrdenacao(opcao);
        setOrdenacaoAberta(false);
    };

    return (
        <>
            <div className="w-[1200px] h-[1373px] gap-[48px] flex mx-auto mt-20">
                <Sidebar />

                <div className="w-[842px] h-[1373px] gap-[88px]">
                    {/* TOOLBAR */}
                    <div className="flex w-full h-[18px] justify-between">
                        {/* TABS */}
                        <div className="w-[376px] h-[16px] flex gap-[20px]">
                            {buscar.map((busca) => (
                                <button type="button" key={busca.name}
                                    className={`flex items-center justify-between h-[16px] text-[15px] leading-[16px] font-medium
                                            ${busca.active
                                            ? 'text-[var(--color-text-accent)]'
                                            : 'text-[var(--color-foreground)]'
                                        }`}>
                                    {busca.name}
                                </button>
                            ))}
                        </div>
                        {/* SORT */}
                        <div className="w-[300px] h-[18px]">
                            <div className="relative w-full h-[20px] text-[var(--color-foreground)] justify-between">
                                <button type="button" onClick={() => setOrdenacaoAberta(!ordenacaoAberta)}
                                    className="flex items-center gap-[8px] text-[15px] leading-[100%]">
                                    <span>
                                        Ordenar por: {ordenacao && ` ${ordenacao}`}
                                    </span>
                                    {ordenacaoAberta ? (
                                        <IoIosArrowUp size={16} />
                                    ) : (
                                        <IoIosArrowDown size={16} />
                                    )}
                                </button>
                                {ordenacaoAberta && (
                                    <div className="absolute right-0 top-[24px] z-10 bg-[var(--color-card-dark)] p-[10px] rounded-sm">
                                        {opcoesOrdenacao.map((opcao) => (
                                            <button type="button" key={opcao} onClick={() => selecionarOrdenacao(opcao)}>
                                                {opcao}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* CARDS */}
                    <Cards />
                </div>
            </div>
        </>
    );
}

export default Produtos;