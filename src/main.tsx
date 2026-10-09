import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { worker } from './mocks/browser';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';

const router = createRouter({
  routeTree,
});

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

if (import.meta.env.DEV) {
  await worker.start();
}

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode >
);