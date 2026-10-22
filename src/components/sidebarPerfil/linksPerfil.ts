import { RxPerson } from "react-icons/rx";
import { GrLocation } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosTrendingUp, IoMdHeartEmpty } from "react-icons/io";
import { TbDownload } from "react-icons/tb";
import { FiAlertTriangle } from "react-icons/fi";

export const linksPerfil = [
    {
        texto: "Dados do perfil",
        rota: "/perfil",
        icone: RxPerson,
    },
    {
        texto: "Carteira",
        rota: "/carteira",
        icone: GrLocation,
    },
    {
        texto: "Atividade",
        rota: "/carrinho",
        icone: FaCartShopping,
    },
    {
        texto: "Lista de interesse",
        rota: "/favoritos",
        icone: IoMdHeartEmpty,
    },
    {
        texto: "Ofertas",
        rota: "/ofertas",
        icone: IoIosTrendingUp
    },
    {
        texto: "Arquivos baixados",
        rota: "/",
        icone: TbDownload
    },
    {
        texto: "Suporte",
        rota: "/suporte",
        icone: FiAlertTriangle
    }
];
