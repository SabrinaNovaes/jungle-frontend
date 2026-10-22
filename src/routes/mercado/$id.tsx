import { createFileRoute } from '@tanstack/react-router';
import Mercado from '@/pages/mercado/Mercado';
import Produtos from '@/components/produto/Produtos';
import { useProduto } from '@/hooks/useProdutos';

export const Route = createFileRoute(`/mercado/$id`)({
  component: DetalhesProduto,
});

function DetalhesProduto() {
  const { id } = Route.useParams();

  const { data: produto, isLoading, isError } = useProduto(id);

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
