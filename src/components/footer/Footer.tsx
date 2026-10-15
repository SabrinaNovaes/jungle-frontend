import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { toast } from "react-toastify";

function Footer() {

    const blocos = [
        {
            circulo: 'W',
            titulo: 'Segurança da carteira',
            texto: 'Proteja sua carteira e colecione arte digital verificada com confiança'
        },
        {
            circulo: 'C',
            titulo: 'Criadores em destaque',
            texto: 'Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede'
        },
        {
            circulo: 'D',
            titulo: 'Alertas de lançamentos',
            texto: 'Receba calendários de cunhagem, novidades de listas de acesso e análises do mercado'
        }
    ]

    const colunas = [
        {
            titulo: "Meu perfil",
            links: ["Meu perfil", "Minha coleção", "Atividade", "Estúdio do criador", "Lista de interesse"]
        },
        {
            titulo: "Central de ajuda",
            links: ["Central de ajuda", "Como comprar NFTs", "Carteira e segurança", "Política do mercado", "Denunciar item"]
        },
        {
            titulo: "Coleções",
            links: ["Arte digital", "Fotografia", "Música", "Arte 3D", "Utilidade"]
        }
    ]

    const redesSociais = [FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube];
    const carteiras = ["METAMASK", "WALLETCONNECT", "COINBASE"];

    const [email, setEmail] = useState("");

    const enviarEmail = (email: string) => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Digite um e-mail válido!');
            return;
        }
        toast.success('E-mail enviado!');
    };

    return (
        <>
            <div className="w-[1200px] h-[610px] mx-auto pt-10">

                {/* TOPO FOOTER */}
                <div className="flex w-full h-[250px] p-[32px] gap-[12px] bg-[var(--color-card-dark)]">
                    <div className="w-[1154px] h-[202px] justify-between flex">

                        {/* BLOCOS */}
                        {blocos.map((bloco, index) => (
                            <div key={bloco.titulo} className="flex flex-col w-[265px] h-full px-[16px] gap-[10px] ">
                                <div className="relative w-[233px] h-full gap-[12px] flex flex-col">

                                    {/* CIRCULO */}
                                    <div className="w-[74px] h-[74px] shrink-0 rounded-[37px] gap-[10px] bg-[var(--color-primary)]
                                        flex items-center justify-center">

                                        <span className="w-[15px] h-[32px] font-bold text-[24px] leading-[100%] text-center
                                            text-[var(--color-background)]">
                                            {bloco.circulo}
                                        </span>
                                    </div>

                                    {/* TITULO */}
                                    <h2 className="w-full h-full font-bold text-[17px] leading-[16px] 
                                            text-[var(--color-text-foreground)]">
                                        {bloco.titulo}
                                    </h2>

                                    {/* TEXTO */}
                                    <p className="w-[204px] h-[88px] text-[14px] leading-[22px] 
                                            text-[var(--color-text-secundary)] ">
                                        {bloco.texto}
                                    </p>

                                    {/* LINHA */}
                                    {index !== blocos.length - 0 && (
                                        <div className="absolute right-0 top-0 w-[1px] h-[202px] bg-[var(--color-primary)]" />
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* EMAIL */}
                        <div className="flex flex-col w-[357px] h-full px-[16px] gap-[12px]">
                            <div className="w-[325px] h-[88px] gap-[16px]">
                                <h2 className="w-full h-[32px] font-bold text-[18px] leading-[16px]
                                    text-[var(--color-text-foreground)]">
                                    Antecipe-se ao próximo lançamento
                                </h2>
                                <div className="w-full h-[40px] my-4">
                                    <div className="flex w-full h-full rounded-[6px] justify-between bg-[var(--color-card)] overflow-hidden">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            placeholder="digite seu e-mail..."
                                            className="w-[169px] h-[16px] my-auto ml-[12px] text-[14px] leading-[16px]
                                                text-[var(--color-text-secundary)] bg-transparent outline-none"/>

                                        <button 
                                            type="button" 
                                            onClick={() => enviarEmail(email)} 
                                            className="w-[85px] h-[40px] py-[12px] pl-[16px] pr-[4px] gap-[10px] 
                                            bg-[var(--color-primary)] font-bold text-[18px] leading-[16px] text-[var(--color-background)]">
                                                Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="w-full h-[89px] text-[13px] leading-[22px] text-[var(--color-text-secundary)]">
                                Receba lançamentos selecionados, histórias de criadores e novidades do mercado.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[360px]">

                    {/* MEIO FOOTER */}
                    <div className="w-full h-[80px] p-[32px] gap-[10px] bg-[var(--color-card)]">
                        <div className="w-[1136px] h-[24px] gap-[92px] flex items-center">
                            <div className="w-[210px] h-[34px] py-[8px] gap-[10px]">
                                <span className="w-[48px] h-[18px] font-bold text-[14px] leading-[100%] tracking-[10%]">
                                    KURIO
                                </span>
                            </div>

                            <span className="w-[219px] h-[44px] text-[14px] leading-[22px] text-[var(--color-text-foreground)]">
                                Feito para colecionadores, criadores e cultura
                            </span>

                            <span className="w-[143px] h-[22px] text-[14px] leading-[22px] text-[var(--color-text-foreground)]">
                                contato@email.com
                            </span>

                            <span className="w-[135px] h-[22px] text-[14px] leading-[22px] text-[var(--color-text-foreground)]">
                                +55 11 4002 8922
                            </span>
                        </div>
                    </div>

                    {/* FIM FOOTER */}
                    <div className="w-full h-[272px] gap-[6px] flex flex-col">
                        <div className="w-full h-[260px] p-[32px] bg-[var(--color-card-dark)] flex justify-center">
                            <div className="w-[1136px] h-[174px] flex justify-between gap-[124px]">

                                {/* COLUNAS DE LINKS */}
                                {colunas.map((coluna, index) => (
                                    <div key={index} className="w-[179px] h-[16px] flex flex-col gap-[8px]">
                                        <h3 className="text-[18px] font-bold leading-[16px] text-[var(--color-text-foreground)]">
                                            {coluna.titulo}
                                        </h3>
                                        <ul className="flex flex-col gap-[6px] w-full h-[174px]">
                                            {coluna.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link to="/" className="text-[14px] leading-[30px] text-[var(--color-text-foreground)] hover:text-[var(--color-text-accent)] transition-colors">
                                                        {link}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {/* COLUNA REDES SOCIAIS E CARTEIRA */}
                                <div className="w-[228px] h-[152px] flex flex-col justify-between gap-[32px]">

                                    {/* REDES SOCIAS */}
                                    <div className="w-[190px] h-[66px] flex flex-col gap-[20px]">
                                        <h3 className="w-full h-[16px] text-[18px] font-bold leading-[16px] text-[var(--color-text-foreground)]">
                                            Redes sociais
                                        </h3>
                                        <div className="w-[190px] h-[30px] flex items-center gap-[10px]">
                                            {redesSociais.map((Icone, index) => (
                                                <Link key={index} to="/" className="w-[30px] h-[30px] rounded-[4px] px-1.5 py-1.5 border 
                                                border-[var(--color-primary)] hover:bg-[var(--color-text-accent)] transition-colors text-[var(--color-primary)] 
                                                hover:text-[var(--color-background)] items-center justify-center">
                                                    <Icone size={16} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CARTEIRAS */}
                                    <div className="w-full h-[54px] flex flex-col gap-[12px]">
                                        <h3 className="w-full h-[16px] text-[18px] leading-[16px] font-bold text-[var(--color-text-foreground)]">
                                            Carteiras compatíveis
                                        </h3>
                                        <div className="w-full h-[26px] flex items-center justify-between px-2 py-1.5 bg-[var(--color-card)] border 
                                            border-[var(--color-border-soft)] rounded-[6px] text-[10px] text-[var(--color-text-accent)]">
                                            {carteiras.map((carteira, i) => (
                                                <span key={i} className="w-[215px] h-[12px] text-[9px] font-bold leading-[100%] tracking-[0.1px] flex items-center gap-2">
                                                    <span>{carteira}</span>
                                                    {i < carteiras.length - 1 && <span className="mr-1.5">•</span>}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full gap-[6px]">
                        <span className="flex w-full h-[30px] text-[14px] leading-[30px] text-[var(--color-text-foreground)]
                            justify-center mx-auto">
                            © 2026 Kurio. Propriedade digital para todos.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;