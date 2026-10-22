import { Link } from "@tanstack/react-router";

type FooterColunaLinksProps = {
    titulo: string;
    links: string[];
};

/* Coluna de links do rodapé (título + lista). */
function FooterColunaLinks({ titulo, links }: FooterColunaLinksProps) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-title font-bold leading-tight text-foreground">
                {titulo}
            </h3>
            <ul className="flex flex-col gap-1.5">
                {links.map((link) => (
                    <li key={link}>
                        <Link to="/" className="text-body leading-[1.9] text-foreground transition-colors hover:text-accent">
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterColunaLinks;
