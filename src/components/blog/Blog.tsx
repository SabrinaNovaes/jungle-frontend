import BlogCard from './BlogCard';
import { postsBlog } from './blog.data';

function Blog() {
    return (
        <section className="page hidden pb-12 md:block xl:pb-20">

            {/* TOPO BLOG */}
            <header className="mb-8 flex flex-col gap-3 text-center xl:mb-10">
                <h1 className="text-heading font-bold leading-none text-foreground xl:text-[1.75rem]">
                    Diário da Cunhagem
                </h1>
                <p className="text-body text-secondary">
                    Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.
                </p>
            </header>

            {/* CARDS BLOG */}
            <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">
                {postsBlog.map((post) => (
                    <BlogCard key={post.titulo} {...post} />
                ))}
            </div>
        </section>
    );
}

export default Blog;
