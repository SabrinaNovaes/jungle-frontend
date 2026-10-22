const ABAS = [
    { name: 'Todos os NFTs', active: true },
    { name: 'Novos lançamentos', active: false },
    { name: 'Em alta', active: false },
];

/** Abas de filtro rápido da listagem (rolagem horizontal no mobile). */
function AbasProdutos() {
    return (
        <div className="flex min-w-0 gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {ABAS.map((aba) => (
                <button type="button" key={aba.name}
                    className={`flex shrink-0 items-center text-body font-medium leading-tight md:text-label
                            ${aba.active
                            ? 'text-accent'
                            : 'text-foreground'
                        }`}>
                    {aba.name}
                </button>
            ))}
        </div>
    );
}

export default AbasProdutos;
