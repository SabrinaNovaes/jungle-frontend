import CampoFormulario from "@/components/campoForm/CampoForm";
import CarteirasSalvas from "@/components/carteiras/CarteirasSalvas";
import SidebarPerfil from "@/components/sidebarPerfil/SidebarPerfil";
import { useState, type SyntheticEvent } from "react";

function Carteira() {

    const [formAberto, setFormAberto] = useState(false);
    const [carteiras, setCarteiras] = useState<string[]>([]);

    function salvarCarteira(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const formulario = new FormData(event.currentTarget);
        const nome = String(formulario.get("nomeExibicao") ?? "").trim();
        const endereco = String(formulario.get("endereco") ?? "").trim();

        if (!nome || !endereco) return;

        setCarteiras((atuais) => [
            ...atuais,
            `${nome} - ${endereco}`,
        ]);

        setFormAberto(false);
    }

    return (
        <div className="w-[1200px] min-h-[716px] gap-[32px] mx-auto mt-10">
            <div className="w-[1200px] min-h-[639px] gap-[28px] flex">
                <SidebarPerfil />

                <div className="w-[862px] min-h-[639px] gap-[32px] flex flex-col">
                    <div className="w-full justify-between flex items-center">
                        <h1 className="font-bold text-[17px] leading-[16px] text-[var(--color-text-foreground)]">
                            Carteira principal
                        </h1>

                        <button
                            type="button"
                            onClick={() => setFormAberto(true)}
                            className="font-medium text-[16px] leading-[16px] text-[var(--color-text-accent)]">
                            Adicionar
                        </button>
                    </div>

                    <p className="max-w-[648px] mt-[-16px] mb-2 text-[14px] leading-[20px] text-[var(--color-text-secundary)]">
                        Estas carteiras ficam disponíveis no pagamento e para receber NFTs comprados.
                    </p>

                    {formAberto ? (
                        <form
                            onSubmit={salvarCarteira}
                            className="w-full gap-[24px] flex flex-col">
                            <div className="w-full gap-[24px] flex">
                                <div className="w-1/2 gap-[24px] flex flex-col">
                                    <CampoFormulario
                                        label="Nome de exibição"
                                        className="w-full" >
                                        <input
                                            type="text"
                                            name="nomeExibicao"
                                            required
                                            className="w-full px-2 h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="Rede"
                                        className="w-full">
                                        <select
                                            required
                                            defaultValue=""
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] text-[14px] text-[var(--color-text-secundary)] bg-[var(--color-background)]">
                                            <option value="" disabled>
                                                Selecione uma rede
                                            </option>
                                            <option value="ethereum">Ethereum</option>
                                            <option value="polygon">Polygon</option>
                                            <option value="solana">Solana</option>
                                        </select>
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="Endereço da carteira"
                                        className="w-full">
                                        <input
                                            type="text"
                                            name="endereco"
                                            placeholder="Endereço da carteira"
                                            required
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="Tipo de carteira"
                                        className="w-full">
                                        <select
                                            required
                                            defaultValue=""
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] text-[14px] text-[var(--color-text-secundary)] bg-[var(--color-background)]">
                                            <option value="" disabled>
                                                Selecione uma carteira
                                            </option>
                                            <option value="metamask">MetaMask</option>
                                            <option value="walletconnect">WalletConnect</option>
                                            <option value="coinbase">Coinbase Wallet</option>
                                        </select>
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="E-mail"
                                        className="w-full">
                                        <input
                                            type="email"
                                            required
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>
                                </div>

                                <div className="w-1/2 gap-[24px] flex flex-col">
                                    <CampoFormulario
                                        label="Apelido da carteira"
                                        className="w-full">
                                        <input
                                            type="text"
                                            required
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="Nome do perfil"
                                        className="w-full">
                                        <input
                                            type="text"
                                            required
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>

                                    <div className="w-full mt-8">
                                        <input
                                            type="text"
                                            placeholder="ENS ou carteira secundária (opcional)"
                                            className="w-full h-[40px] rounded-[3px] border border-[var(--color-border)] px-3 text-[14px] text-[var(--color-text-secundary)] bg-transparent" />
                                    </div>

                                    <CampoFormulario
                                        label="Código de indicação"
                                        className="w-full">
                                        <input
                                            type="text"
                                            required
                                            className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] bg-transparent text-[14px] text-[var(--color-text-foreground)]" />
                                    </CampoFormulario>

                                    <CampoFormulario
                                        label="Nome ENS"
                                        className="w-full">
                                        <div className="flex gap-5">
                                            <select
                                                defaultValue="ethereum"
                                                className="w-[90px] h-[40px] rounded-[3px] border border-[var(--color-border)] text-[14px] text-[var(--color-text-secundary)] bg-[var(--color-background)]">
                                                <option value="ethereum">.eth</option>
                                                <option value="polygon">.polygon</option>
                                                <option value="solana">.sol</option>
                                            </select>

                                            <input
                                                type="text"
                                                className="min-w-0 flex-1 h-[40px] rounded-[6px] border border-[var(--color-border)] px-3 text-[14px] text-[var(--color-text-foreground)] bg-transparent" />
                                        </div>
                                    </CampoFormulario>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    className="w-[140px] h-[40px] rounded-[3px] bg-[var(--color-primary)] text-[var(--color-background)] font-bold text-[14px] leading-[16px]">
                                    Salvar carteira
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setFormAberto(false)}
                                    className="w-[140px] h-[40px] rounded-[3px] border border-[var(--color-border)] text-[var(--color-text-foreground)] font-medium text-[14px]">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <CarteirasSalvas carteiras={carteiras} />
                    )}
                </div>
            </div>
            <div className="w-[990px] h-[43px] ml-85">
                <div className="w-full justify-between flex items-center">
                    <h1 className="w-full font-bold text-[17px] leading-[16px] text-[var(--color-text-foreground)]">
                        Carteira secundária
                    </h1>

                    <div className="w-full flex gap-4">
                        <div className="flex h-[16px] gap-4">
                            <div className="w-[15px] h-[15px] border-2 border-[var(--color-primary)] rounded-full"></div>
                            <span className="w-full h-[20px] text-[15px] leading-[100%] text-[var(--color-text-foreground)]">
                                Igual a carteira principal
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setFormAberto(true)}
                            className="font-medium text-[16px] leading-[16px] text-[var(--color-text-accent)]">
                            Adicionar
                        </button>
                    </div>
                </div>
                <p className="text-[14px] text-[var(--color-text-secundary)] mt-2">
                    Você ainda não adicionou uma carteira secundária.
                </p>
            </div>
        </div>
    );
}

export default Carteira;