import type { SyntheticEvent } from "react";
import CampoTexto from "@/components/form/CampoTexto";
import CampoSelect from "@/components/form/CampoSelect";
import CampoEns from "@/components/form/CampoEns";
import { REDES, TIPOS_CARTEIRA } from "@/constants/opcoes";

type CarteiraFormProps = {
    onSalvar: (carteira: string) => void;
    onCancelar: () => void;
};

function CarteiraForm({ onSalvar, onCancelar }: CarteiraFormProps) {
    function salvarCarteira(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const formulario = new FormData(event.currentTarget);
        const nome = String(formulario.get("nomeExibicao") ?? "").trim();
        const endereco = String(formulario.get("endereco") ?? "").trim();

        if (!nome || !endereco) return;

        onSalvar(`${nome} - ${endereco}`);
    }

    return (
        <form onSubmit={salvarCarteira} className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <CampoTexto label="Nome de exibição" name="nomeExibicao" required />

                    <CampoSelect
                        label="Rede"
                        opcoes={REDES}
                        placeholder="Selecione uma rede"
                        required
                        defaultValue="" />

                    <CampoTexto
                        label="Endereço da carteira"
                        name="endereco"
                        placeholder="Endereço da carteira"
                        required />

                    <CampoSelect
                        label="Tipo de carteira"
                        opcoes={TIPOS_CARTEIRA}
                        placeholder="Selecione uma carteira"
                        required
                        defaultValue="" />

                    <CampoTexto label="E-mail" type="email" required />
                </div>

                <div className="flex flex-col gap-6">
                    <CampoTexto label="Apelido da carteira" required />

                    <CampoTexto label="Nome do perfil" required />

                    {/* No desktop alinha com o campo "Endereço da carteira" */}
                    <input
                        type="text"
                        placeholder="ENS ou carteira secundária (opcional)"
                        aria-label="ENS ou carteira secundária (opcional)"
                        className="field md:mt-8" />

                    <CampoTexto label="Código de indicação" required />

                    <CampoEns defaultValue="ethereum" />
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                <button type="submit" className="btn btn-primary min-w-35">
                    Salvar carteira
                </button>

                <button
                    type="button"
                    onClick={onCancelar}
                    className="btn btn-outline min-w-35 font-medium">
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default CarteiraForm;
