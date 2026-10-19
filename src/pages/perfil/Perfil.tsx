import CampoFormulario from "@/components/campoForm/CampoForm";
import SidebarPerfil from "@/components/sidebarPerfil/SidebarPerfil";

function Perfil() {
    return (
        <>
            <div className="w-[1440px] h-[1080px] py-[24px] px-[120px] gap-[96px]">
                <div className="w-[1200px] h-0 border border-[var(--color-primary)] opacity-[50%]"></div>

                {/* BODY */}
                <div className="w-[1200px] h-[726px] gap-[28px]">
                    <SidebarPerfil />

                    <form className="flex flex-col gap-4">

                        <div className="w-full h-[285px] gap-[24px]">
                            <div>
                                <CampoFormulario label="Nome de exibição">
                                    <input
                                        type="text"
                                        className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                                </CampoFormulario>

                                <CampoFormulario label="E-mail">
                                    <input
                                        type="email"
                                        className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                                </CampoFormulario>

                                <CampoFormulario label="Apelido da carteira">
                                    <input
                                        type="text"
                                        className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                                </CampoFormulario>
                            </div>

                            <div>
                                <CampoFormulario label="Nome de usuário">
                                    <input
                                        type="text"
                                        className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                                </CampoFormulario>
                            </div>

                        </div>

                        <CampoFormulario label="Nome de usuário">
                            <input
                                className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                        </CampoFormulario>

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
                                <input
                                    type="text"
                                    className="h-[45px] rounded-[6px] border border-[var(--color-primary)] px-3" />
                            </CampoFormulario>
                        </div>

                        <button type="submit">
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Perfil;