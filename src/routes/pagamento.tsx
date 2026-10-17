import Pagamento from '@/pages/pagamento/Pagamento'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagamento')({
  component: Pagamento,
})


