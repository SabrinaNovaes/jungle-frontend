import { createFileRoute, Outlet } from '@tanstack/react-router';
import Produtos from '@/components/produto/Produtos';

function MercadoLayout() {
  const pathname = window.location.pathname;

  if (pathname === '/mercado') {
    return <Produtos />;
  }

  return <Outlet />;
}

export const Route = createFileRoute('/mercado')({
  component: MercadoLayout,
});