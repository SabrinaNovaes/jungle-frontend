import Carteira from '@/pages/carteira/Carteira';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/carteira')({
  component: Carteira,
});