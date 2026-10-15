import Carrinho from '@/pages/carrinho/Carrinho'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/carrinho')({
  component: Carrinho,
});
