import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

type CampoSenhaProps = {
    name: string;
    value: string;
    onChange: (valor: string) => void;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    "aria-label"?: string;
};

function CampoSenha({ name, value, onChange, placeholder, required, autoComplete, "aria-label": ariaLabel }: CampoSenhaProps) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div className="relative">
            <input
                type={mostrar ? "text" : "password"}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                autoComplete={autoComplete}
                aria-label={ariaLabel}
                className="field pr-10 text-foreground" />

            <button
                type="button"
                onClick={() => setMostrar((atual) => !atual)}
                aria-label={mostrar ? "Ocultar senha" : "Mostrar senha"}
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center text-secondary transition-colors hover:text-foreground">
                {mostrar ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
}

export default CampoSenha;
