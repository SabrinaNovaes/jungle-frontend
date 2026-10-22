type DivisorProps = {
    forca?: 50 | 70;
    className?: string;
};

const forcas = { 50: 'bg-primary/50', 70: 'bg-primary/70' } as const;

function Divisor({ forca = 50, className = '' }: DivisorProps) {
    return <div aria-hidden="true" className={`h-px ${forcas[forca]} ${className}`} />;
}

export default Divisor;
