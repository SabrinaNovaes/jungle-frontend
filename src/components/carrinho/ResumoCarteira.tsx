import { Link } from '@tanstack/react-router';
import CampoCupom from '@/components/common/CampoCupom';
import Divisor from '@/components/common/Divisor';
import LinhaValor from '@/components/common/LinhaValor';
import { formatarEth } from '@/utils/preco';
import type { ResumoPedido } from '@/utils/pedido';

type ResumoCarteiraProps = {
    resumo: ResumoPedido;
    codigo: string;
    onCodigoChange: (codigo: string) => void;
    onAplicarCupom: () => void;
    mensagemCupom: string;
    cupomAplicado: boolean;
    carrinhoVazio: boolean;
    onFinalizar: () => void;
};

const botaoCta = 'btn btn-block btn-gradient md:bg-none md:bg-primary md:hover:bg-accent';

function ResumoCarteira({
    resumo,
    codigo,
    onCodigoChange,
    onAplicarCupom,
    mensagemCupom,
    cupomAplicado,
    carrinhoVazio,
    onFinalizar,
}: ResumoCarteiraProps) {
    const { subtotal, desconto, taxaRede, total } = resumo;

    return (
        <aside className="flex flex-col gap-3 rounded-xl bg-card-dark p-4 lg:bg-transparent lg:p-0">
            <h2 className="heading hidden md:block">
                Resumo da carteira
            </h2>
            <Divisor forca={70} className="hidden md:block" />

            <div className="flex flex-col gap-2">
                <span className="hidden text-body font-bold text-foreground md:block">
                    Código promocional
                </span>

                <CampoCupom
                    valor={codigo}
                    onChange={onCodigoChange}
                    onAplicar={onAplicarCupom}
                    className="flex overflow-hidden rounded-full border border-primary pl-3 md:rounded-xs md:pl-2"
                    botaoClassName="btn btn-gradient min-h-10 rounded-none px-6 text-label md:bg-none md:bg-primary md:hover:bg-accent" />

                {mensagemCupom && (
                    <p className={`${cupomAplicado ? 'text-green-400' : 'text-coral'} text-caption`}>
                        {mensagemCupom}
                    </p>
                )}
            </div>

            <div className="mt-1 flex flex-col gap-3 text-foreground">
                <LinhaValor
                    rotulo="Subtotal"
                    valor={formatarEth(subtotal)}
                    valorClassName="text-right text-body md:text-title" />

                <LinhaValor
                    rotulo="Desconto do lançamento"
                    valor={`- ${desconto.toFixed(2)}`}
                    valorClassName="text-right text-label" />

                <LinhaValor
                    rotulo="Taxa de rede"
                    valor={formatarEth(taxaRede)}
                    valorClassName="text-right text-body md:text-title" />

                <p className="-mt-1 text-right text-caption text-accent">
                    Taxa estimada
                </p>

                <LinhaValor
                    rotulo="Total"
                    valor={formatarEth(total)}
                    className="text-subtitle font-bold"
                    rotuloClassName=""
                    valorClassName="text-right text-accent" />
            </div>

            <div className="flex flex-col gap-3">
                <button
                    type="button"
                    disabled={carrinhoVazio}
                    onClick={onFinalizar}
                    className={botaoCta}>
                    Conectar e finalizar
                </button>
                <Link to="/mercado"
                    className="hidden text-center text-label text-accent md:block">
                    Continuar explorando
                </Link>
            </div>
        </aside>
    );
}

export default ResumoCarteira;
