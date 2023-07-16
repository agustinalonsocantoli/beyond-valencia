import { Box, Modal } from "@mui/material";
import { FormBook } from "../shared/Form";
import { CodeBook } from "../book/CodeBook";

interface Props {
    open: boolean;
    handleClose: () => void;
}

export const ModalBook = (props: Props) => {
    const { handleClose, open } = props;

    return(
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >

                <div>
                        {/* <CodeBook
                            adults={adults}
                            children={children}
                            subTotal={subTotal}
                            discount={discount}
                            totalPay={totalPay}
                            handleGetCode={handleGetCode}
                            validateCode={validateCode}
                        />

                        <FormBook
                            handleSubmit={handleSubmit}
                            labelButton="PAY NOW"
                            nameClass="book_form"
                        /> */}
                    </div>
            </Modal>
        </div>
    );
}