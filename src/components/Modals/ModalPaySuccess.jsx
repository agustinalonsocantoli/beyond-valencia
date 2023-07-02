import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BsCheckCircleFill } from 'react-icons/bs';

export const ModalPaySuccess = (props) => {
    const { handleClose, open } = props;

    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box className="pay_success">
                <h1>Successful Payment</h1>
                <BsCheckCircleFill />
            </Box>
        </Modal>
    )
};