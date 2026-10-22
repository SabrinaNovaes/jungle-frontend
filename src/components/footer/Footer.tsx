import FooterBloco from "./FooterBloco";
import FooterColunaLinks from "./FooterColunaLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterRedesCarteiras from "./FooterRedesCarteiras";
import { blocosFooter, colunasFooter } from "./footer.data";

function Footer() {
    return (
        <footer className="page hidden pt-10 md:block">

            {/* TOPO FOOTER */}
            <div className="grid gap-8 bg-card-dark p-6 md:grid-cols-2 xl:grid-cols-[repeat(3,1fr)_1.4fr] xl:gap-3 xl:p-8">
                {blocosFooter.map((bloco) => (
                    <FooterBloco key={bloco.titulo} {...bloco} />
                ))}

                <FooterNewsletter />
            </div>

            {/* MEIO FOOTER */}
            <div className="grid gap-3 bg-card p-6 text-body leading-[1.55] text-foreground md:grid-cols-2 xl:grid-cols-[1fr_1.4fr_1fr_1fr] xl:items-center xl:gap-8 xl:p-8">
                <span className="text-body font-bold tracking-widest">KURIO</span>
                <span>Feito para colecionadores, criadores e cultura</span>
                <span>contato@email.com</span>
                <span>+55 11 4002 8922</span>
            </div>

            {/* FIM FOOTER */}
            <div className="grid gap-8 bg-card-dark p-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-12 xl:p-8">
                {colunasFooter.map((coluna) => (
                    <FooterColunaLinks key={coluna.titulo} {...coluna} />
                ))}

                <FooterRedesCarteiras />
            </div>

            <p className="py-4 text-center text-body text-foreground">
                © 2026 Kurio. Propriedade digital para todos.
            </p>
        </footer>
    );
}

export default Footer;
