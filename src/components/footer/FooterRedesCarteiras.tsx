import { Link } from "@tanstack/react-router";
import { carteirasCompativeis, redesSociais } from "./footer.data";

/* Coluna final do footer */
function FooterRedesCarteiras() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <h3 className="text-title font-bold leading-tight text-foreground">
                    Redes sociais
                </h3>
                <div className="flex items-center gap-2.5">
                    {redesSociais.map((Icone, index) => (
                        <Link
                            key={index}
                            to="/"
                            aria-label="Rede social"
                            className="flex size-[1.875rem] items-center justify-center rounded-xs border border-primary text-primary transition-colors hover:bg-accent hover:text-ink">
                            <Icone size={16} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-title font-bold leading-tight text-foreground">
                    Carteiras compatíveis
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-sm border border-line-soft bg-card px-2 py-1.5 text-tiny font-bold text-accent">
                    {carteirasCompativeis.map((carteira, i) => (
                        <span key={carteira} className="flex items-center gap-2">
                            {carteira}
                            {i < carteirasCompativeis.length - 1 && <span aria-hidden="true">•</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterRedesCarteiras;
