import { useRef, type ReactElement, type ReactNode } from 'react';
import Popup from 'reactjs-popup';
import type { PopupActions } from 'reactjs-popup/dist/types';
import { IoMdClose } from 'react-icons/io';
import { modalContentStyle, modalOverlayStyle } from '@/components/modal/modalStyles';

type ModalProps = {
    trigger?: ReactElement;
    open?: boolean;
    onClose?: () => void;
    className?: string;
    mostrarFechar?: boolean;
    children: ReactNode;
};

function Modal({ trigger, open, onClose, className = '', mostrarFechar = false, children }: ModalProps) {
    const popupRef = useRef<PopupActions>(null);

    return (
        <Popup
            ref={popupRef}
            trigger={trigger}
            open={open}
            onClose={onClose}
            modal
            contentStyle={modalContentStyle}
            overlayStyle={modalOverlayStyle}>
            <div className={`modal-shell flex flex-col ${className}`}>
                {mostrarFechar && (
                    <button
                        type="button"
                        onClick={() => popupRef.current?.close()}
                        aria-label="Fechar"
                        className="absolute right-3 top-3 text-secondary transition-colors hover:text-foreground">
                        <IoMdClose size={18} />
                    </button>
                )}
                {children}
            </div>
        </Popup>
    );
}

export default Modal;
