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
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Titulo"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>


        </Modal>
    )
}