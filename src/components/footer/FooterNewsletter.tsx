import { useState } from "react";
import { toast } from "react-toastify";
import { emailValido } from "@/utils/validacao";

/* Campo de e-mail do footer. */
function FooterNewsletter() {
    const [email, setEmail] = useState("");

    function enviarEmail() {
        if (!emailValido(email)) {
            toast.error('Digite um e-mail válido!');
            return;
        }
        toast.success('E-mail enviado!');
    }

    return (
        <div className="flex flex-col gap-4 xl:px-4">
            <h2 className="text-title font-bold leading-tight text-foreground">
                Antecipe-se ao próximo lançamento
            </h2>

            <div className="flex h-10 overflow-hidden rounded-sm bg-card">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="digite seu e-mail..."
                    className="min-w-0 flex-1 bg-transparent px-3 text-body text-secondary" />

                <button
                    type="button"
                    onClick={enviarEmail}
                    className="shrink-0 bg-primary px-4 text-title font-bold text-ink transition-colors hover:bg-accent">
                    Enviar
                </button>
            </div>

            <p className="text-small leading-[1.7] text-secondary">
                Receba lançamentos selecionados, histórias de criadores e novidades do mercado.
            </p>
        </div>
    );
}

export default FooterNewsletter;
