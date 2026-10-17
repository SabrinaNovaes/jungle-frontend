import CampoFormulario from "@/components/campoForm/CampoForm";
import FormPagamento from "@/components/formPagamento/FormPagamento";

function Pagamento() {

    return (
        <>
            <div className="w-full max-w-[1440px] mx-auto py-6 px-6 lg:px-[120px]">
                <div className="w-full flex flex-col gap-[32px]">
                    <h1 className="w-[253px] h-[16px] font-bold text-[15px] leading-[16px] text-[var(--color-text-foreground)]">
                        Início / Mercado /Pagamento
                    </h1>

                    <div className="flex">
                        {/* LADO DIREITO */}
                        <div className="w-full flex items-start justify-between gap-[32px]">
                            <div className="w-[763px] h-[688px] gap-[12px]">
                                <h2 className="h-[16px] font-bold text-[17px] mb-4 leading-[16px] text-[var(--color-text-foreground)]">
                                    Perfil do colecionador
                                </h2>
                                <div className="w-full grid grid-cols-2 gap-x-[24px] gap-y-[16px]">

                                    <div className="flex flex-col gap-[16px]">
                                        <div className="w-full">
                                            <CampoFormulario label="Nome de exibição" className="w-[370px] h-[69px]">
                                                <input
                                                    type="text"
                                                    required
                                                    className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)]" />
                                            </CampoFormulario>
                                        </div>

                                        <div className="w-full">
                                            <CampoFormulario label="Rede" className="h-[69px]">
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
                                        </div>

                                        <div className="w-full h-[69px]">
                                            <CampoFormulario label="Endereço da carteira" className="w-full h-[69px]">
                                                <input
                                                    type="text"
                                                    placeholder="Endereço 0x da carteira"
                                                    required
                                                    className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] text-[var(--color-text-secundary)]" />
                                            </CampoFormulario>
                                        </div>

                                        <div className="h-[69px]">
                                            <CampoFormulario label="Tipo de carteira" className="h-[69px]">
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
                                        </div>

                                        <div className="w-full h-[69px] mb-2">
                                            <CampoFormulario label="E-mail" className="w-full h-[69px] mb-2">
                                                <input
                                                    type="email"
                                                    required
                                                    className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)] text-[var(--color-text-secundary)]"
                                                />
                                            </CampoFormulario>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-[16px]">
                                        <div className="w-full flex flex-col gap-[16px]">
                                            <CampoFormulario label="Nome de usuário" className="w-full h-[69px]">
                                                <input
                                                    type="text"
                                                    required
                                                    className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)]" />
                                            </CampoFormulario>
                                        </div>

                                        <div className="w-full h-[69px]">
                                            <div className="w-full h-[69px]">
                                                <CampoFormulario label="Nome do perfil" className="w-full h-[69px]">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)]" />
                                                </CampoFormulario>
                                            </div>
                                        </div>

                                        <div className="w-[370px] h-[69px] pt-7.5">
                                            <div className="w-full h-[40px] rounded-[3px] border border-[var(--color-border)] py-[12px] pl-[12px] pr-[24px]">
                                                <input
                                                    type="text"
                                                    placeholder="ENS ou carteira secundária (opcional)"
                                                    className="px-2 w-[312px] h-[15px] text-[14px] leading-[15px] text-[var(--color-text-secundary)]" />
                                            </div>
                                        </div>

                                        <div className="w-full h-[69px]">
                                            <div className="w-full h-[69px]">
                                                <CampoFormulario label="Código de indicação" className="w-full h-[69px]">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="px-2 w-full h-[40px] rounded-[3px] border border-[var(--color-border)]" />
                                                </CampoFormulario>
                                            </div>
                                        </div>

                                        <div className="w-full h-[69px]">
                                            <div className="w-full h-[69px]">
                                                <CampoFormulario label="Nome ENS" className="w-[92px] h-[69px]">
                                                    <select
                                                        required
                                                        defaultValue=""
                                                        className="w-[78px] h-[40px] rounded-[3px] border border-[var(--color-border)] text-[14px] text-[var(--color-text-secundary)] bg-[var(--color-background)]">
                                                        <option value="ethereum">.eth</option>
                                                        <option value="polygon">.polygon</option>
                                                        <option value="solana">.sol</option>
                                                    </select>
                                                </CampoFormulario>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-[204px] h-[20px] gap-[8px] mt-6">
                                    <div className="w-[15px] h-[15px] border-2 border-[var(--color-primary)] rounded-full"></div>
                                    <span className="w-[181px] h-[20px] text-[15px] leading-[100%] text-[var(--color-text-foreground)]">
                                        Usar outra carteira?
                                    </span>
                                </div>

                                <div className="w-[350px] h-[179px] gap-[12px] flex flex-col mt-4">
                                    <span className="w-full h-[15px] text-[15px] leading-[15px] text-[var(--color-text-foreground)]">
                                        Observação do colecionador (opcional)
                                    </span>

                                    <textarea
                                        className="w-full h-[152px] rounded-[3px] border border-[var(--color-border)] text-[var(--color-text-secundary)]">
                                    </textarea>
                                </div>
                            </div>
                        </div>

                        {/* LADO ESQUERDO */}
                        <FormPagamento />
                    </div>
                </div>
            </div >
        </>
    );
}

export default Pagamento;