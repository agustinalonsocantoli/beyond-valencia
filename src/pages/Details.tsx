// React
import { useState } from 'react';
// Components
import { Navbar } from '../components/shared/Navbar';
import { Exposure } from "../components/shared/Exposure";
import { NewBook } from "../components/book/NewBook";
import { Payments } from '../components/stripe/Payments';
import { Footer } from '../components/shared/Footer';
import { Whatsapp } from '../components/shared/Whatsapp';
// Icons
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiTimer } from 'react-icons/bi'
import { IoCalendar } from 'react-icons/io5';
import { RiArrowDownSFill } from 'react-icons/ri'
import { GiTalk } from 'react-icons/gi';
import { RxCheck, RxCross1 } from "react-icons/rx"
import { FaUniversalAccess } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import { MdAccessible } from "react-icons/md"
// Data
import { experiencesApi } from '../data/Api/experiences';
import { Navigate, useParams } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { BsTicket } from 'react-icons/bs';


export const Details = () => {
    const { slug } = useParams();
    const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [currentOrder, setCurrentOrder] = useState<any>(null);
    const [totalPay, setTotalPay] = useState<number | null>(null);
    const data = experiencesApi.find(((experience: any) => experience?.slug === slug))

    return (
        data ?
        <div className="details">

            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <div className="details_exposure">
                <Exposure data={data?.multimedia} />
            </div>

            <div className="details_description">
                <div className="description">
                    <h1>{data?.title}</h1>
                    <p className='subtitle'><strong>{data?.subtitle?.label}</strong>: {data?.subtitle?.text}</p>

                    <div className="description_slogan">
                        <p>
                            {data?.headline}
                        </p>
                    </div>

                    <h3>Overview</h3>
                    <div className="description_text">
                        <p>
                            {data?.description}
                        </p>
                    </div>

                    <h3>Highlights</h3>
                    <ul className="highlights">
                        {data?.highlights?.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3>Included</h3>
                    <ul className="highlights">
                        {data?.included?.map((item: any, index: number) => (
                            <li style={{ listStyle: 'none' }} key={index}>
                                {item?.state
                                ? <RxCheck style={{ color: 'green', marginRight: 5, }} />
                                : <RxCross1 style={{ color: 'red', marginRight: 5 }} />
                                }
                                {item?.text}
                            </li>
                        ))}
                    </ul>
        
                    <h3>Details</h3>
                    <div className="information">
                        <p><HiOutlineUserGroup /><strong>Age</strong> {data?.details?.age}</p>
                        <p><BiTimer /><strong>How long?</strong> {data?.details?.duration}</p>
                        <p><BsTicket /><strong>Ticketing</strong> {data?.details?.ticket}</p>
                        <p><IoCalendar /><strong>Availability</strong> {data?.details?.availably}</p>
                        <p><GiTalk /> <strong>Lenguage</strong> {data?.details?.language}</p>
                        <p className='location'><SlLocationPin /><strong>Meeting Point</strong> {data?.details?.meetengPoint?.label}</p>
                        <p><FaUniversalAccess /><strong>Accessibility</strong> {data?.details?.accessibility}</p>
                        <p><MdAccessible /><strong>Mobility</strong> {data?.details?.mobility}</p>
                    </div>



                    <Accordion>
                        <AccordionSummary
                            expandIcon={<RiArrowDownSFill />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p>More about experience</p>
                        </AccordionSummary>

                        <AccordionDetails>
                            <p>{data?.description}</p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<RiArrowDownSFill />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p>Cancelation polices</p>
                        </AccordionSummary>

                        <AccordionDetails>
                            <p>{data?.description}</p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ marginBottom: "50px" }}>
                        <AccordionSummary
                            expandIcon={<RiArrowDownSFill />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p>Terms and conditions</p>
                        </AccordionSummary>

                        <AccordionDetails>
                            <p>{data?.description}</p>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <NewBook
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    setTotalPay={setTotalPay}
                    totalPay={totalPay}
                    setFormVisible={setFormVisible}
                />
            </div>

            {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    setFormVisible={setFormVisible}
                    description={`${currentOrder.tourName ? currentOrder.tourName : ""}, Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />}

            <Whatsapp />

            <Footer />
        </div>
        : <Navigate to={"/"} />
    );
}