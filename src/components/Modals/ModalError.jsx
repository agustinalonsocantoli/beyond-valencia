import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdError } from 'react-icons/md';

export const ModalError = (props) => {
    const { handleClose, open, message } = props;

    return(
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className='payment_error'>
                    <h1>{message}</h1>
                    <MdError />
                </Box>
            </Modal>
        </div>
    )
};