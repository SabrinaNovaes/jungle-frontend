import { IoIosLogOut } from 'react-icons/io';
import Popup from 'reactjs-popup'
import Login from './Login';

function ModalLogin() {
    return (
        <>
            <Popup trigger={
                <button
                    type="button"
                    className="flex h-[35px] w-[100px] items-center justify-center
                    gap-2 rounded-[6px] bg-[var(--color-primary)] text-[16px] text-[var(--color-background)]">
                    <IoIosLogOut className="w-[20p] h-[20px]" /> Entrar
                </button>
            }
                modal
                contentStyle={{
                    padding: '0',
                    border: 'none',
                    background: 'transparent',
                    width: 'auto',
                }}
            >
                <Login />
            </Popup >
        </>
    );
}

export default ModalLogin;