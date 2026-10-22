import { useState } from "react";
import { TITULO_SECAO } from "./estilos";

const PRECO_MAXIMO = 20;

function FaixaPreco() {
    const [minPreco, setMinPreco] = useState(0);
    const [maxPreco, setMaxPreco] = useState(PRECO_MAXIMO);

    return (
        <div className="flex flex-col gap-5">
            <h2 className={TITULO_SECAO}>Faixa de preço</h2>

            <div className="relative h-5 w-full">

                {/* Barra */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-primary" />

                {/* Faixa selecionada */}
                <div
                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent"
                    style={{
                        left: `${(minPreco / PRECO_MAXIMO) * 100}%`,
                        right: `${100 - (maxPreco / PRECO_MAXIMO) * 100}%`,
                    }} />

                {/* Valor mínimo */}
                <input type="range" min="0" max={PRECO_MAXIMO} step="0.1" value={minPreco}
                    aria-label="Preço mínimo"
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value <= maxPreco) {
                            setMinPreco(value);
                        }
                    }}
                    className="range-input absolute inset-0 z-30 w-full" />

                {/* Valor máximo */}
                <input type="range" min="0" max={PRECO_MAXIMO} step="0.1" value={maxPreco}
                    aria-label="Preço máximo"
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value >= minPreco) {
                            setMaxPreco(value);
                        }
                    }}
                    className="range-input absolute inset-0 z-20 w-full" />
            </div>

            <span className="text-label leading-none text-foreground">
                Preço: {minPreco.toFixed(2)} - {maxPreco.toFixed(2)} ETH
            </span>

            <button type="button" className="btn btn-primary w-fit">
                Aplicar
            </button>
        </div>
    );
}

export default FaixaPreco;
