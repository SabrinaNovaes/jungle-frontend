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
        <div className="w-[251px] h-[50px] flex items-center gap-[20px] mt-2">
            <label className="cursor-pointer">
                <div className="w-[50px] h-[50px] flex items-center justify-center overflow-hidden rounded-[25px] border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-primary)]">
                    {imagem ? (
                        <img
                            src={imagem}
                            alt="Imagem do perfil"
                            className="w-full h-full rounded-full object-cover"/>
                    ) : (
                        <CiImageOn size={23} />
                    )}
                </div>

                <input
                    type="file"
                    accept="image/*"
                    onChange={selecionarImagem}
                    className="hidden"/>
            </label>

            <div className="w-[177px] h-[40px] flex items-center gap-[20px]">
                <label className="w-[98px] h-[40px] flex items-center justify-center rounded-[3px] bg-[var(--color-primary)] text-[var(--color-background)] text-center font-bold text-[14px] leading-[16px]">
                    Alterar
                    <input
                        type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                        className="hidden"/>
                </label>

                <button
                    type="button"
                    onClick={removerImagem}
                    className="h-[16px] text-[14px] leading-[16px] text-[var(--color-text-foreground)]">
                    Remover
                </button>
            </div>
        </div>
    );
}

export default ImagemPerfil;