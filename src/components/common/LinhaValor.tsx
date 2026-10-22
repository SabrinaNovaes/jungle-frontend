import type { ReactNode } from 'react';

type LinhaValorProps = {
    rotulo: ReactNode;
    valor: ReactNode;
    className?: string;
    rotuloClassName?: string;
    valorClassName?: string;
};

function LinhaValor({
    rotulo,
    valor,
    className = '',
    rotuloClassName = 'text-label',
    valorClassName = 'text-right text-title',
}: LinhaValorProps) {
    return (
        <div className={`flex items-baseline justify-between gap-4 ${className}`}>
            <span className={rotuloClassName}>{rotulo}</span>
            <span className={valorClassName}>{valor}</span>
        </div>
    );
}

export default LinhaValor;
