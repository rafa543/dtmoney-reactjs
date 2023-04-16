import { Container } from "./styles";
import Modal from 'react-modal'

interface NewTransitionModalProps {
    isOpen: boolean;
    onRequest: () => void;
}

export function NewTransactionModal({ isOpen, onRequest }: NewTransitionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequest}
        >

        </Modal>
    )
}