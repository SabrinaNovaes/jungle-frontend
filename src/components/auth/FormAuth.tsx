import Login from "@/pages/login/Login";
import Cadastro from "@/pages/login/Cadastro";

export type ModoAuth = "login" | "cadastro";

type FormAuthProps = {
    modo: ModoAuth;
    /** Botão principal (tela cheia mobile). */
    gradiente?: boolean;
    onLoginSucesso?: () => void;
    onCadastroSucesso?: () => void;
};

/** Formulário de login ou de cadastro */
function FormAuth({ modo, gradiente, onLoginSucesso, onCadastroSucesso }: FormAuthProps) {
    return modo === "login"
        ? <Login gradiente={gradiente} onSucesso={onLoginSucesso} />
        : <Cadastro gradiente={gradiente} onSucesso={onCadastroSucesso} />;
}

export default FormAuth;
