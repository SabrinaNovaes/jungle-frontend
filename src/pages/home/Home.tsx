import Blog from "@/components/blog/Blog";
import Hero from "@/components/hero/Hero";
import Produtos from "@/components/produto/Produtos";
import Promo from "@/components/promo/Promo";

function Home () {
    return (
        <>
            <section className="">
                <div className="">
                    <Hero />
                    <Produtos />
                    <Promo />
                    <Blog />
                </div>
            </section>
        </>
    );
}

export default Home;