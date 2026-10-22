import CampoTexto from "@/components/form/CampoTexto";
import CampoEns from "@/components/form/CampoEns";
import ImagemPerfil from "@/components/imagemPerfil/ImagemPerfil";

function DadosPerfilForm() {
    return (
        <form className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
                <CampoTexto label="Nome de exibição" />
                <CampoTexto label="E-mail" type="email" />
                <CampoTexto label="Apelido da carteira" />
            </div>

            <div className="flex flex-col gap-6">
                <CampoTexto label="Nome de usuário" />

                <CampoEns required defaultValue="" />

                <div className="flex flex-col gap-2">
                    <span className="text-label text-foreground">Avatar</span>
                    <ImagemPerfil />
                </div>
            </div>
        </form>
    );
}

export default DadosPerfilForm;
