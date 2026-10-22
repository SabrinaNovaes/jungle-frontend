import { FaStar } from "react-icons/fa";

const ESTRELAS = [1, 2, 3, 4, 5];

function AvaliacaoNft() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
                {ESTRELAS.map((estrela) => (
                    <FaStar
                        key={estrela}
                        className="size-4 text-primary" />
                ))}
            </div>

            <span className="text-label leading-none text-foreground">
                19 avaliações de colecionadores
            </span>
        </div>
    );
}

export default AvaliacaoNft;
