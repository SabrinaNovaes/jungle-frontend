import PageHeaderMobile from "@/components/pageHeaderMobile/PageHeaderMobile";
import CarteirasSalvas from "@/components/carteiras/CarteirasSalvas";
import SidebarPerfil from "@/components/sidebarPerfil/SidebarPerfil";
import CarteiraForm from "@/components/formCarteira/CarteiraForm";
import CarteiraSecundaria from "@/components/formCarteira/CarteiraSecundaria";
import { useState } from "react";

function Carteira() {

    const [formAberto, setFormAberto] = useState(false);
    const [carteiras, setCarteiras] = useState<string[]>([]);

    function adicionarCarteira(carteira: string) {
        setCarteiras((atuais) => [...atuais, carteira]);
        setFormAberto(false);
    }

    return (
        <div className="page pb-10 md:pt-8">
            <PageHeaderMobile titulo="Carteira" />

            <div className="flex flex-col gap-6 lg:flex-row lg:gap-7">
                <SidebarPerfil />

                <div className="flex min-w-0 flex-1 flex-col gap-8">
                    {/* CARTEIRA PRINCIPAL */}
                    <section className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-title font-bold text-foreground">
                                    Carteira principal
                                </h2>

                                <button
                                    type="button"
                                    onClick={() => setFormAberto(true)}
                                    className="text-subtitle font-medium text-accent hover:underline">
                                    Adicionar
                                </button>
                            </div>

                            <p className="max-w-2xl text-body leading-5 text-secondary">
                                Estas carteiras ficam disponíveis no pagamento e para receber NFTs comprados.
                            </p>
                        </div>

                        {formAberto ? (
                            <CarteiraForm
                                onSalvar={adicionarCarteira}
                                onCancelar={() => setFormAberto(false)} />
                        ) : (
                            <CarteirasSalvas carteiras={carteiras} />
                        )}
                    </section>

                    {/* CARTEIRA SECUNDÁRIA */}
                    <CarteiraSecundaria onAdicionar={() => setFormAberto(true)} />
                </div>
            </div>
        </div>
    );
}

export default Carteira;
