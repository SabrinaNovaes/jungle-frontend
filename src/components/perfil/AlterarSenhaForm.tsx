import { useState } from "react";
import CampoFormulario from "@/components/campoForm/CampoForm";
import CampoSenha from "@/components/campoForm/CampoSenha";

function AlterarSenhaForm() {
    const [senhaAtual, setSenhaAtual] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [mensagem, setMensagem] = useState("");

    function alterarSenha(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setMensagem("");

        if (senhaAtual.trim() === "" || senha.trim() === "" || confirmarSenha.trim() === "") {
            setMensagem("Preencha todos os campos.");
            return;
        }

        if (senha === senhaAtual) {
            setMensagem("A nova senha deve ser diferente da senha atual.");
            return;
        }

        if (senha !== confirmarSenha) {
            setMensagem("A nova senha e a confirmação não coincidem.");
            return;
        }
        setMensagem("Validação concluída! Pronto para alterar a senha.");
    }

    return (
        <form onSubmit={alterarSenha} className="flex w-full max-w-104 flex-col gap-6">
            <h2 className="text-subtitle font-medium text-foreground">
                Alterar senha
            </h2>

            <CampoFormulario label="Senha atual">
                <CampoSenha
                    name="senhaAtual"
                    value={senhaAtual}
                    onChange={setSenhaAtual}
                    autoComplete="current-password"
                    required />
            </CampoFormulario>

            <CampoFormulario label="Nova senha">
                <CampoSenha
                    name="senha"
                    value={senha}
                    onChange={setSenha}
                    placeholder="Senha"
                    autoComplete="new-password"
                    required />
            </CampoFormulario>

            <CampoFormulario label="Confirmar nova senha">
                <CampoSenha
                    name="confirmarSenha"
                    value={confirmarSenha}
                    onChange={setConfirmarSenha}
                    placeholder="Confirmar senha"
                    autoComplete="new-password"
                    required />
            </CampoFormulario>

            {mensagem && (
                <p className="text-body text-foreground">
                    {mensagem}
                </p>
            )}

            <button type="submit" className="btn btn-primary w-full md:w-auto md:min-w-32 md:self-start">
                Salvar
            </button>
        </form>
    );
}

export default AlterarSenhaForm;
