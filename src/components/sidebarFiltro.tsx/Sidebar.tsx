import { useState } from "react";
import Banner from "../bannerOferta/Banner";

function Sidebar() {

    const listaColecao = [
        { name: 'Arte digital', count: 33, active: true },
        { name: 'Fotografia', count: 12, active: false },
        { name: 'Música', count: 65, active: false },
        { name: 'Arte 3D', count: 39, active: false },
        { name: 'Colecionáveis', count: 23, active: false },
        { name: 'Generativa', count: 17, active: false },
        { name: 'Jogos', count: 19, active: false },
        { name: 'Assinaturas', count: 13, active: false },
        { name: 'Utilidade', count: 18, active: false },
    ]

    const listaRede = [
        { name: 'Ethereum', count: 119 },
        { name: 'Polygon', count: 78 },
        { name: 'Solana', count: 86 }
    ]

    const [minPreco, setMinPreco] = useState(0);
    const [maxPreco, setMaxPreco] = useState(20);

    const [loading, setLoading] = useState(false);

    return (

        <>
            <div className="w-[310px] h-[1279px] gap-[24px]">
                <div className="bg-[var(--color-card-dark)] w-full h-[785px] p-[20px]">
                    <div className="w-[270px] h-[745px] gap-[40px]">
                        <div className="w-[270px] h-[388px] gap-[20px]">
                            <h2 className="w-[87px] h-[16px] font-bold text-[18px] leading-[16px] text-[var(--color-text-foreground)]">
                                Coleções
                            </h2>

                            {/* LISTA SIDEBAR */}
                            <div className="w-[270px] h-[360px] px-[12px]">
                                <ul className="mt-5 flex flex-col gap-5 ">
                                    {listaColecao.map((colecao) => (
                                        <li key={colecao.name}
                                            className={`flex items-center justify-between 
                                            ${colecao.active
                                                    ? 'text-[var(--color-text-accent)]'
                                                    : 'text-[var(--color-text-secundary)]'
                                                }`}>
                                            <label className="flex items-center gap-[10px]">
                                                <span>{colecao.name}</span>
                                            </label>
                                            <span>({colecao.count})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h2 className="w-[152px] h-[16px] font-bold text-[18px] leading-[16px] py-[10px] mt-[45px] text-[var(--color-text-foreground)]">
                                Faixa de preço
                            </h2>

                            {/* FAIXA DE PREÇO */}
                            <div className="relative mt-5 w-[258px] h-[21px]">

                                {/* Barra */}
                                <div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[var(--color-primary)]" />
                                
                                {/* Faixa selecionada */}
                                <div
                                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[var(--color-text-accent)]"
                                    style={{
                                        left: `${(minPreco / 20) * 100}%`,
                                        right: `${100 - (maxPreco / 20) * 100}%`,
                                    }}/>

                                {/* Valor mínimo */}
                                <input type="range" min="0" max="20" step="0.1" value={minPreco}
                                    onChange={(e) => {
                                        const value = Number(e.target.value)
                                        if (value <= maxPreco) {
                                            setMinPreco(value)
                                        }
                                    }}
                                    className="range-input absolute inset-0 z-30 w-full"/>

                                {/* Valor máximo */}
                                <input type="range" min="0" max="20" step="0.1" value={maxPreco}
                                    onChange={(e) => {
                                        const value = Number(e.target.value)
                                        if (value >= minPreco) {
                                            setMaxPreco(value)
                                        }
                                    }}
                                    className="range-input absolute inset-0 z-20 w-full"/>
                            </div>

                            {/* VALORES */}
                            <div className="my-3 w-[208px] h-[20px] flex justify-between text-[15px] text-[var(--color-text-foreground)] leading-[100%]">
                                <span>Preço: {minPreco.toFixed(2)} - {maxPreco.toFixed(2)} ETH</span>
                            </div>
                            <button type="button" disabled={loading} className="w-[92px] h-[36px] rounded-[6px] py-[8px] px-[12px] font-bold bg-[var(--color-primary)] 
                                text-[var(--color-background)] text-[16px] leading-[20px]"
                                onChange={() =>{

                                }}>
                                Aplicar
                            </button>
                        </div>

                        {/* REDES */}
                        <div className="flex flex-col w-[270px] h-[148px] gap-[12px] mt-[225px]">
                            <h2 className="w-[44px] h-[16px] font-bold text-[18px] leading-[16px] text-[var(--color-text-foreground)]">
                                Rede
                            </h2>
                            <div className="w-[270px] h-[120px] pl-[12px]">
                                <ul className="w-[258px]">
                                    {listaRede.map((rede) => (
                                        <li key={rede.name} className="flex items-center justify-between w-full text-[15px] leading-[40px]
                                            text-[var(--color-text-secundary)]">
                                            <label>
                                                <span>{rede.name}</span>
                                            </label>
                                            <span>({rede.count})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* BANNER */}
                <Banner />
            </div>
        </>
    );
}

export default Sidebar;