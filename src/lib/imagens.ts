import imagem1 from '@/assets/Frame136.png';
import imagem2 from '@/assets/NFTArtwork04.png';
import imagem3 from '@/assets/NFTArtwork05.png';
import imagem4 from '@/assets/NFTArtwork09.png';

export const imagensProduto: Record<string, string> = {
    imagem1,
    imagem2,
    imagem3,
    imagem4,
};

export function obterImagem(chave: string): string {
    return imagensProduto[chave] ?? chave;
}
