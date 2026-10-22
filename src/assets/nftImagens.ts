import imagem1 from '@/assets/Frame136.png';
import imagem2 from '@/assets/NFTArtwork04.png';
import imagem3 from '@/assets/NFTArtwork05.png';
import imagem4 from '@/assets/NFTArtwork09.png';

/** Imagens locais dos NFTs, indexadas pela chave que a API devolve em `produto.imagem`. */
export const imagensNft: Record<string, string> = {
    imagem1,
    imagem2,
    imagem3,
    imagem4,
};

/** Resolve a chave da API para a URL da imagem (mantém o valor original se não houver mapeamento). */
export function resolverImagemNft(chave: string): string {
    return imagensNft[chave] ?? chave;
}
