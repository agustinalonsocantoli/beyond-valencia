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
    setTime: (action: string | null) => void;
    hours: string[]
    date: any;
    setDate: (date: any) => void;
    setCurrentOrder: (order: any) => void;
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
        hours,
        date,
        setDate,
        setCurrentOrder
    } = props;

    const handleCancel = () => {
        setCurrentOrder(null);
        setAdults(0)
        setChildren(0)
        setInfants(0)
        setTime(null)
        setDate(null)
        handleClose();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal_book">
                    <div className="modal_flex">
                        <SelectQuantity
                            adults={adults}
                            setAdults={setAdults}
                            children={children}
                            setChildren={setChildren}
                            infants={infants}
                            setInfants={setInfants}
                        />

                        <CodeBook
                            adults={adults}
                            children={children}
                            subTotal={subTotal}
                            discount={discount}
                            totalPay={totalPay}
                            handleGetCode={handleGetCode}
                            validateCode={validateCode}
                            date={date}
                            time={time}
                        />

                        <button 
                            className="btn_cancel"
                            onClick={handleCancel}
                        >
                            CANCEL
                        </button>
                    </div>

                    <div className="modal_flex">
                        <div className="time_container">
                            <h3>Select Departure Time</h3>

                            <div className="time">
                                {hours?.map((hour: string, index: number) => (
                                    <SelectTime
                                        time={time}
                                        setTime={setTime}
                                        hour={hour}
                                        key={index}
                                    />

                                ))}
                            </div>
                        </div>

                        <FormBook
                            handleSubmit={handleSubmit}
                            labelButton="PAY NOW"
                            nameClass="book_form"
                        />

                    </div>
                </div>
            </Modal>
        </div>
    );
}