import { SUBTITULO } from "./estilos";

const EDICOES = [
    { rotulo: "1/1", ativa: false },
    { rotulo: "1/10", ativa: false },
    { rotulo: "1/50", ativa: true },
    { rotulo: "ABERTA", ativa: false },
];

function ChipsEdicao() {
    return (
        <div className="flex flex-col gap-3">
            <h2 className={SUBTITULO}>
                Edição:
            </h2>

            <div className="flex flex-wrap gap-3">
                {EDICOES.map((edicao) => (
                    <span
                        key={edicao.rotulo}
                        className={`flex items-center justify-center rounded-full border px-3 py-1 text-caption md:text-body
                            ${edicao.ativa
                                ? "border-primary text-accent"
                                : "border-line text-secondary"}`}>
                        {edicao.rotulo}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ChipsEdicao;
