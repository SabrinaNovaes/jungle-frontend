import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import TabBar from '@/components/tabBar/TabBar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <TabBar />

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
