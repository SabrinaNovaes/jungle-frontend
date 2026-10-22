import type { InputHTMLAttributes } from 'react';
import CampoFormulario from '@/components/campoForm/CampoForm';

type CampoTextoProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    className?: string;
};

function CampoTexto({ label, className, ...input }: CampoTextoProps) {
    return (
        <CampoFormulario label={label} className={className}>
            <input type="text" {...input} className="field" />
        </CampoFormulario>
    );
}

export default CampoTexto;
