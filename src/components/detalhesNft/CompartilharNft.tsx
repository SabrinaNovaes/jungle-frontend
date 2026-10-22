import { Link } from "@tanstack/react-router";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SUBTITULO } from "./estilos";

function CompartilharNft() {
    return (
        <span className={`${SUBTITULO} hidden items-center gap-2 md:flex`}>
            Compartilhar este NFT:
            <Link to="https://linkedin.com" className="hover:text-primary"> <FaLinkedinIn /> </Link>
            <Link to="https://mailtomailto:exemplo@dominio.com" className="hover:text-primary"> <IoMdMail /> </Link>
            <Link to="https://x.com/?lang=pt" className="hover:text-primary"> <FaTwitter /> </Link>
        </span>
    );
}

export default CompartilharNft;
