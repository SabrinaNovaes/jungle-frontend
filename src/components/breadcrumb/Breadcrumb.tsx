type BreadcrumbProps = {
    caminho: string;
    className?: string;
};

function Breadcrumb({ caminho, className = "" }: BreadcrumbProps) {
    return (
        <p className={`hidden text-label font-bold text-foreground md:block ${className}`}>
            {caminho}
        </p>
    );
}

export default Breadcrumb;
