import { Fragment } from "react";

export type CompraConfirmada = {
    id: string;
    data: Date;
    total: number;
    carteira: string;
};

type ResumoTransacaoProps = {
    compra: CompraConfirmada;
};

function ResumoTransacao({ compra }: ResumoTransacaoProps) {
    const campos = [
        { rotulo: "ID da transação", valor: `${compra.id.slice(0, 6)}...${compra.id.slice(-4)}` },
        { rotulo: "Data", valor: compra.data.toLocaleDateString("pt-BR") },
        { rotulo: "Total", valor: compra.total.toFixed(2) },
        { rotulo: "Carteira", valor: compra.carteira },
    ];

    return (
        <div className="border-y border-primary px-6 py-3 md:px-9">
            <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between">
                {campos.map((campo, indice) => (
                    <Fragment key={campo.rotulo}>
                        {indice > 0 && (
                            <div className="hidden h-8 w-px bg-primary md:block" aria-hidden="true" />
                        )}

                        <div className="min-w-0">
                            <span className="block text-body font-bold text-secondary">
                                {campo.rotulo}
                            </span>
                            <p className="mt-1 truncate text-label text-secondary">
                                {campo.valor}
                            </p>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default ResumoTransacao;
