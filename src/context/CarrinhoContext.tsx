import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import type { Produto } from '@/types/produto';

export type ProdutoCarrinho = Produto;

export type ItemCarrinho = {
    produto: ProdutoCarrinho;
    quantidade: number;
};

type CarrinhoContextType = {
    itens: ItemCarrinho[];
    totalItens: number;
    adicionarAoCarrinho: (
        produto: ProdutoCarrinho,
        quantidade: number
    ) => void;
    atualizarQuantidade: (id: number, quantidade: number) => void;
    removerDoCarrinho: (id: number) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(
    undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {

    const [itens, setItens] = useState<ItemCarrinho[]>(() => {
        try {
            const dados = localStorage.getItem('carrinho');
            return dados ? JSON.parse(dados) : [];
        } catch {
            return [];
        }
    });

    const totalItens = itens.reduce(
        (total, item) => total + item.quantidade,
        0
    );

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(itens));
    }, [itens]);

    function adicionarAoCarrinho(
        produto: ProdutoCarrinho,
        quantidade: number
    ) {
        if (quantidade < 1) return;

        setItens((atuais) => {
            const existente = atuais.find(
                (item) => item.produto.id === produto.id
            );

            if (existente) {
                return atuais.map((item) =>
                    item.produto.id === produto.id
                        ? {
                            ...item,
                            quantidade: item.quantidade + quantidade,
                        }
                        : item
                );
            }

            return [...atuais, { produto, quantidade }];
        });
    }

    function atualizarQuantidade(id: number, quantidade: number) {
        if (quantidade < 1) {
            removerDoCarrinho(id);
            return;
        }

        setItens((atuais) =>
            atuais.map((item) =>
                item.produto.id === id
                    ? { ...item, quantidade }
                    : item
            )
        );
    }

    function removerDoCarrinho(id: number) {
        setItens((atuais) =>
            atuais.filter((item) => item.produto.id !== id)
        );
    }

    return (
        <CarrinhoContext.Provider
            value={{
                itens,
                totalItens,
                adicionarAoCarrinho,
                atualizarQuantidade,
                removerDoCarrinho,
            }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    const contexto = useContext(CarrinhoContext);

    if (!contexto) {
        throw new Error(
            'useCarrinho precisa ser usado dentro de CarrinhoProvider.'
        );
    }

    return contexto;
}
