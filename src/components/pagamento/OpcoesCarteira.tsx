import { TIPOS_CARTEIRA } from '@/constants/opcoes';

type OpcoesCarteiraProps = {
    selecionada: string;
    onSelecionar: (id: string) => void;
};

function OpcoesCarteira({ selecionada, onSelecionar }: OpcoesCarteiraProps) {
    return (
        <div className="flex flex-col gap-3">
            {TIPOS_CARTEIRA.map((opcao) => (
                <label
                    key={opcao.valor}
                    className={`flex cursor-pointer items-center gap-3 rounded-md border bg-card-dark p-3 transition-colors md:rounded-xs md:bg-transparent md:p-2 ${selecionada === opcao.valor
                        ? 'border-primary'
                        : 'border-line'
                        }`}>
                    <input
                        type="radio"
                        name="carteira"
                        value={opcao.valor}
                        checked={selecionada === opcao.valor}
                        onChange={() => onSelecionar(opcao.valor)}
                        className="order-last ml-auto size-4 shrink-0 appearance-none rounded-full border border-line-soft bg-transparent checked:border-primary checked:bg-primary md:order-first md:ml-0" />

                    <span>{opcao.rotulo}</span>
                </label>
            ))}
        </div>
    );
}

export default OpcoesCarteira;
