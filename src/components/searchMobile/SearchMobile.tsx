import { FaSearch } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";

function SearchMobile() {
    return (
        <div className="page flex items-center gap-2 pt-8 md:hidden">
            <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl bg-surface px-3">
                <FaSearch size={18} className="shrink-0 text-primary" aria-hidden="true" />
                <input
                    type="search"
                    placeholder="Explorar coleções"
                    aria-label="Buscar coleções"
                    className="min-w-0 flex-1 bg-transparent text-body font-bold text-secondary outline-none placeholder:font-bold" />
            </form>

            <button
                type="button"
                aria-label="Abrir filtros"
                onClick={() => window.dispatchEvent(new Event("filtros:alternar"))}
                className="btn-gradient flex size-11 shrink-0 items-center justify-center rounded-lg text-foreground">
                <LuSlidersHorizontal size={20} />
            </button>
        </div>
    );
}

export default SearchMobile;
