import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { toast } from "react-toastify";
import DivisorTexto from "./DivisorTexto";

function SocialLogin() {
    function loginGoogle() {
        toast.info("A integração com o Google ainda não está disponível.");
    }

    function loginFacebook() {
        toast.info("A integração com o Facebook ainda não está disponível.");
    }

    return (
        <div className="flex flex-col gap-5">
            <DivisorTexto texto="Ou continue com" />

            <div className="flex flex-col gap-3">
                <button type="button" onClick={loginGoogle} className="btn btn-outline btn-block gap-4 text-small font-medium text-secondary">
                    <FcGoogle size={22} />
                    Continuar com Google
                </button>

                <button type="button" onClick={loginFacebook} className="btn btn-outline btn-block gap-4 text-small font-medium text-secondary">
                    <FaFacebookF size={18} className="text-facebook" />
                    Continuar com Facebook
                </button>
            </div>
        </div>
    );
}

export default SocialLogin;
