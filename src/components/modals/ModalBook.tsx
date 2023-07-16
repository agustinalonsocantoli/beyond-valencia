import { Modal } from "@mui/material";
import { FormBook } from "../shared/Form";
import { CodeBook } from "../book/CodeBook";
import { SelectQuantity } from "../book/SelectQuantity";
import { SelectTime } from "../book/SelectTime";

interface Props {
    open: boolean;
    handleClose: () => void;    
    adults: number;
    children: number;
    infants: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number | null;
    handleSubmit: (action: any) => void;
    setAdults: (action: number) => void;
    setChildren: (action: number) => void;
    setInfants: (action: number) => void;
    time: string | null;
    setTime: (action: string) => void;
    hours: string[]
}

export const ModalBook = (props: Props) => {
    const { 
        handleClose, 
        open,
        adults, 
        children, 
        subTotal, 
        validateCode, 
        handleGetCode, 
        discount, 
        totalPay,
        handleSubmit,
        infants,
        setAdults,
        setChildren,
        setInfants,
        time,
        setTime,
        hours
    } = props;

    return(
        <div>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <div className="modal_book">
                    <div>
                        <CodeBook
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
                        />
                    </div>

                    <div>
                        {hours?.map((hour: string, index: number) => (
                            <div key={index}>
                                <SelectTime 
                                    time={time}
                                    setTime={setTime}
                                    hour={hour}
                                />
                            </div>
                        ))}

                        <SelectQuantity 
                            adults={adults}
                            setAdults={setAdults}
                            children={children}
                            setChildren={setChildren}
                            infants={infants}
                            setInfants={setInfants}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}