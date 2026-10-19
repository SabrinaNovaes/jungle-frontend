import Perfil from '@/pages/perfil/Perfil'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/perfil')({
  component: Perfil,
})