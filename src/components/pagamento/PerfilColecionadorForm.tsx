import CampoEns from '@/components/form/CampoEns';
import CampoSelect from '@/components/form/CampoSelect';
import CampoTexto from '@/components/form/CampoTexto';
import { REDES, TIPOS_CARTEIRA } from '@/constants/opcoes';

type PerfilColecionadorFormProps = {
    className?: string;
};

function PerfilColecionadorForm({ className = '' }: PerfilColecionadorFormProps) {
    return (
        <section className={className}>
            <h2 className="heading mb-4">
                Perfil do colecionador
            </h2>

            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
                <CampoTexto label="Nome de exibição" required />

                <CampoTexto label="Nome de usuário" required />

                <CampoSelect
                    label="Rede"
                    opcoes={REDES}
                    placeholder="Selecione uma rede"
                    required
                    defaultValue="" />

                <CampoTexto label="Nome do perfil" required />

                <CampoTexto
                    label="Endereço da carteira"
                    placeholder="Endereço 0x da carteira"
                    required />

                <input
                    type="text"
                    aria-label="ENS ou carteira secundária (opcional)"
                    placeholder="ENS ou carteira secundária (opcional)"
                    className="field self-end" />

                <CampoSelect
                    label="Tipo de carteira"
                    opcoes={TIPOS_CARTEIRA}
                    placeholder="Selecione uma carteira"
                    required
                    defaultValue="" />

                <CampoTexto label="Código de indicação" required />

                <CampoTexto label="E-mail" type="email" required />

                <CampoEns comEntrada={false} required defaultValue="" />
            </div>

            <div className="mt-6 flex items-center gap-2">
                <span className="size-4 shrink-0 rounded-full border-2 border-primary" aria-hidden="true" />
                <span className="text-label text-foreground">
                    Usar outra carteira?
                </span>
            </div>

            <div className="mt-4 flex max-w-sm flex-col gap-3">
                <label htmlFor="observacao" className="text-label text-foreground">
                    Observação do colecionador (opcional)
                </label>

                <textarea id="observacao" className="field" />
            </div>
        </section>
    );
}

export default PerfilColecionadorForm;
