import FormPagamento from "@/components/formPagamento/FormPagamento";
import PageHeaderMobile from "@/components/pageHeaderMobile/PageHeaderMobile";
import PerfilColecionadorForm from "@/components/pagamento/PerfilColecionadorForm";

function Pagamento() {

    return (
        <div className="page flex flex-col gap-6 pb-8 md:gap-8 md:pb-16">
            <PageHeaderMobile titulo="Pagamento com carteira" />

            <h1 className="hidden text-label font-bold text-foreground md:block">
                Início / Mercado /Pagamento
            </h1>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-12">

                {/* PERFIL DO COLECIONADOR */}
                <PerfilColecionadorForm className="hidden min-w-0 md:block" />

                {/* RESUMO / CARTEIRA E REDE */}
                <FormPagamento />
            </div>
        </div>
    );
}

export default Pagamento;
