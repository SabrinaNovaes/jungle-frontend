import { createFileRoute } from '@tanstack/react-router';
import Produtos from '@/components/produto/Produtos';

export const Route = createFileRoute('/mercado/')({
  component: Produtos,
});
