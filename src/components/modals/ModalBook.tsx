import { Modal } from "@mui/material";
import { FormBook } from "../shared/Form";
import { CodeBook } from "../book/CodeBook";
import { SelectQuantity } from "../book/SelectQuantity";
import { SelectTime } from "../book/SelectTime";
import { PricesInt } from "../../interfaces/books.model";
import { IoReturnDownBackSharp } from "react-icons/io5";

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
    prices: PricesInt | undefined;
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
        setCurrentOrder,
        prices
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

    const isMobile = window.innerWidth < 1025 ? true : false;

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflow: "auto" }}
            >
                <div className="modal_book">
                    <div className="modal_flex">
                        <h3>Participants</h3>
                        <SelectQuantity
                            adults={adults}
                            setAdults={setAdults}
                            children={children}
                            setChildren={setChildren}
                            infants={infants}
                            setInfants={setInfants}
                            isDisable={prices?.children ? false : true}
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
                            prices={prices}
                        />

                        {!isMobile &&
                            <div className='btn_cancel '>
                                <button onClick={handleCancel}><IoReturnDownBackSharp />Back</button>
                            </div>
                        }
                    </div>

                    <div className="modal_flex">
                        <div className="time_container">
                            <h3>Select Time</h3>

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
                            labelButton="BOOK AND PAY"
                            nameClass="book_form"
                        />

                        {isMobile &&
                            <div className='btn_cancel '>
                                <button onClick={handleCancel}><IoReturnDownBackSharp />Back</button>
                            </div>
                        }

                    </div>
                </div>
            </Modal>
        </div>
    );
}