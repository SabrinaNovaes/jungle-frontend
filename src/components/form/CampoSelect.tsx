import type { SelectHTMLAttributes } from 'react';
import CampoFormulario from '@/components/campoForm/CampoForm';
import type { Opcao } from '@/constants/opcoes';

type CampoSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    opcoes: Opcao[];
    placeholder?: string;
    containerClassName?: string;
};

function CampoSelect({ label, opcoes, placeholder, containerClassName, className = '', ...select }: CampoSelectProps) {
    return (
        <CampoFormulario label={label} className={containerClassName}>
            <select {...select} className={`field ${className}`}>
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {opcoes.map((opcao) => (
                    <option key={opcao.valor} value={opcao.valor}>
                        {opcao.rotulo}
                    </option>
                ))}
            </select>
        </CampoFormulario>
    );
}

export default CampoSelect;
