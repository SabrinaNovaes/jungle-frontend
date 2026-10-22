import CampoFormulario from '@/components/campoForm/CampoForm';
import { SUFIXOS_ENS } from '@/constants/opcoes';

type CampoEnsProps = {
    comEntrada?: boolean;
    required?: boolean;
    defaultValue?: string;
};

function CampoEns({ comEntrada = true, required, defaultValue }: CampoEnsProps) {
    const sufixo = (
        <select
            required={required}
            defaultValue={defaultValue}
            aria-label="Sufixo ENS"
            className={`field w-24 ${comEntrada ? 'shrink-0' : ''}`}>
            {SUFIXOS_ENS.map((opcao) => (
                <option key={opcao.valor} value={opcao.valor}>
                    {opcao.rotulo}
                </option>
            ))}
        </select>
    );

    return (
        <CampoFormulario label="Nome ENS">
            {comEntrada ? (
                <div className="flex gap-3">
                    {sufixo}
                    <input type="text" aria-label="Nome ENS" className="field min-w-0 flex-1" />
                </div>
            ) : (
                sufixo
            )}
        </CampoFormulario>
    );
}

export default CampoEns;
