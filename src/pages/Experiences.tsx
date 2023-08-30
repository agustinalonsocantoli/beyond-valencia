// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { Services } from "../components/shared/Services";
import { ContentInt, DataInt } from "../interfaces/services.model";
import { Options } from "../components/shared/Options";
import { useEffect, useState } from "react";
import { getAllContent } from "../middlewares/content.middlewares";
import { AxiosResponse } from "axios";
import { getAllMultimedia } from "../middlewares/multimedia.middlewares";
import { MultimediaInt } from "../interfaces/exposure.model";

export const Experiences = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    const [multimediaExperiences, setMultimediaExperiences] = useState<MultimediaInt[]>()
    const [contentExperiences, setContentExperiences] = useState<ContentInt[]>()
    const [contentDaytrips, setContentDaytrips] = useState<ContentInt[]>()
    const [dataExperiences, setDataExperiences] = useState<DataInt>()
    const [loadingContent, setLoadingContent] = useState<boolean>(true)
    const [loadingMultimedia, setLoadingMultimedia] = useState<boolean>(true)

    useEffect(() => {
        setLoadingMultimedia(true);
        setLoadingContent(true);

        getAllMultimedia("?landing=experiences")
        .then((response: AxiosResponse) => {
            setMultimediaExperiences(response?.data?.data);

            setTimeout(() => { setLoadingMultimedia(false) }, 500)
        })
        
        getAllContent("?landing=experiences")
        .then((response: AxiosResponse) => {
            setContentExperiences(response?.data?.data);

            setTimeout(() => { setLoadingContent(false) }, 500)
        })

        getAllContent("?landing=daytrips")
        .then((response: AxiosResponse) => {
            setContentDaytrips(response?.data?.data);
        })
    }, [])

    useEffect(() => {
        setDataExperiences({
            h1: "Meeting point in the City",
            h2: "PERSONALIZED EXPERIENCE",
            content: contentExperiences
        })

    }, [contentExperiences])

    return(
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure 
                data={multimediaExperiences} 
                loading={loadingMultimedia}
            />

            {isMobile
            ? 
                <Services
                    sliderPage1={dataExperiences} 
                    sliderPage2={contentDaytrips}
                    loading={loadingContent}
                />
            :
                <GroupServices 
                    sliderPage1={dataExperiences} 
                    sliderPage2={contentDaytrips}
                    loading={loadingContent}
                />
            }

            <Events />

            <Options />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}