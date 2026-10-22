import { useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

type PageHeaderMobileProps = {
    titulo?: string;
    acao?: ReactNode;
};

function PageHeaderMobile({ titulo, acao }: PageHeaderMobileProps) {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between gap-3 py-4 md:hidden">
            <button
                type="button"
                aria-label="Voltar"
                onClick={() => router.history.back()}
                className="icon-btn">
                <IoIosArrowBack size={18} />
            </button>

            {titulo && (
                <h1 className="flex-1 text-center text-title font-bold text-foreground">
                    {titulo}
                </h1>
            )}

            <div className="flex size-9 items-center justify-center">{acao}</div>
        </header>
    );
}

export default PageHeaderMobile;
