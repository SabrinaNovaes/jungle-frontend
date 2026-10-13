import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Mercado from '@/pages/mercado/Mercado';
import Produtos from '@/components/produto/Produtos';

type Produto = {
  id: number;
  nome: string;
  identificador: string;
  preco: string;
  imagem: string;
  imagens: string[];
};

export const Route = createFileRoute(`/mercado/$id`)({
  component: DetalhesProduto,
});

function DetalhesProduto() {
  const { id } = Route.useParams();

  const {
    data: produto,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['produto', id],
    queryFn: async () => {
      const resposta = await axios.get<Produto>(
        `/api/produtos/${id}`
      );

      console.log('Detalhes retornados pela API:', resposta.data);
      return resposta.data;
    },
  });

  if (isLoading) return <p>Carregando produto...</p>;

  if (isError || !produto) {
    return <p>Erro ao carregar o produto.</p>;
  }

  return (
    <>
      <Mercado produto={produto} />
      <Produtos />
    </>
  );
}
