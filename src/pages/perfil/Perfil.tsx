import PageHeaderMobile from "@/components/pageHeaderMobile/PageHeaderMobile";
import SidebarPerfil from "@/components/sidebarPerfil/SidebarPerfil";
import DadosPerfilForm from "@/components/perfil/DadosPerfilForm";
import AlterarSenhaForm from "@/components/perfil/AlterarSenhaForm";

function Perfil() {
    return (
        <div className="page pb-10 md:pt-6">
            <PageHeaderMobile titulo="Perfil do colecionador" />

            <div className="hidden h-px bg-primary/50 md:block" />

            {/* BODY */}
            <div className="flex flex-col gap-6 md:mt-4 lg:flex-row lg:gap-7">
                <SidebarPerfil />

                <div className="flex min-w-0 flex-1 flex-col gap-6">
                    <h1 className="hidden text-subtitle font-bold text-foreground md:block">
                        Perfil do colecionador
                    </h1>

                    <DadosPerfilForm />
                    <AlterarSenhaForm />
                </div>
            </div>
        </div>
    );
}

export default Perfil;
