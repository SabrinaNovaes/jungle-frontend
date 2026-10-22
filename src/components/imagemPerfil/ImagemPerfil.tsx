import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

function ImagemPerfil() {
    const [imagem, setImagem] = useState<string | null>(null);

    function selecionarImagem(e: React.ChangeEvent<HTMLInputElement>) {
        const arquivo = e.target.files?.[0];

        if (arquivo && arquivo.type.startsWith("image/")) {
            const leitor = new FileReader();

            leitor.onload = () => {
                if (typeof leitor.result === "string") {
                    setImagem(leitor.result);
                }
            };

            leitor.readAsDataURL(arquivo);
        }

        e.target.value = "";
    }

    function removerImagem() {
        setImagem(null);
    }

    return (
        <div className="flex flex-wrap items-center gap-5">
            <label className="cursor-pointer">
                <div className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-primary">
                    {imagem ? (
                        <img
                            src={imagem}
                            alt="Imagem do perfil"
                            className="size-full rounded-full object-cover" />
                    ) : (
                        <CiImageOn size={23} />
                    )}
                </div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={selecionarImagem}
                    className="hidden" />
            </label>

            <div className="flex items-center gap-5">
                <label className="btn btn-primary min-w-24 cursor-pointer">
                    Alterar
                    <input
                        type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                        className="hidden" />
                </label>

                <button
                    type="button"
                    onClick={removerImagem}
                    className="text-body text-foreground transition-colors hover:text-accent">
                    Remover
                </button>
            </div>
        </div>
    );
}

export default ImagemPerfil;
