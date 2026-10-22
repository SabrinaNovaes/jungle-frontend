import { IoIosLogOut } from 'react-icons/io';
import { useState } from 'react';
import SocialLogin from '@/components/auth/SocialLogin';
import AbasAuth from '@/components/auth/AbasAuth';
import FormAuth, { type ModoAuth } from '@/components/auth/FormAuth';
import Modal from '@/components/common/Modal';

function ModalLogin() {

    const [modo, setModo] = useState<ModoAuth>("login");

    return (
        <Modal
            mostrarFechar
            trigger={
                <button type="button" className="btn btn-primary h-9 min-h-0 gap-2 px-4 text-subtitle font-normal">
                    <IoIosLogOut size={20} /> Entrar
                </button>
            }>
            {/* HEADER */}
            <div className="px-6 pb-6 pt-12 md:px-12">
                <AbasAuth modo={modo} onChange={setModo} />

                <p className="mx-auto mt-6 max-w-sm text-center text-small text-foreground">
                    {modo === "login"
                        ? "Entre para gerenciar sua carteira, coleção e perfil de criador."
                        : "Crie seu perfil de colecionador e conecte uma carteira quando quiser."}
                </p>
            </div>

            {/* FORM */}
            <div className="px-6 md:px-20">
                <FormAuth modo={modo} />
            </div>

            {/* SOCIAL */}
            <div className="mt-8 border-t border-line px-6 pb-10 pt-6 md:px-20">
                <SocialLogin />
            </div>
        </Modal>
    );
}

export default ModalLogin;
