import Blog from "@/components/blog/Blog";
import Hero from "@/components/hero/Hero";
import Produtos from "@/components/produto/Produtos";
import Promo from "@/components/promo/Promo";
import SearchMobile from "@/components/searchMobile/SearchMobile";

function Home() {
    return (
        <>
            <SearchMobile />
            <Hero />
            <Produtos />
            <Promo />
            <Blog />
        </>
    );
}

export default Home;
