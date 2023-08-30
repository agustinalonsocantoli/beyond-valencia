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
import { MultimediaInt } from "../interfaces/exposure.model";
import { getAllMultimedia } from "../middlewares/multimedia.middlewares";


export const Daytrips = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    const [multimediaDaytrips, setMultimediaDaytrips] = useState<MultimediaInt[]>()
    const [contentDaytrips, setContentDaytrips] = useState<ContentInt[]>()
    const [contentExperiences, setContentExperiences] = useState<ContentInt[]>()
    const [dataDaytrips, setDataDaytrips] = useState<DataInt>()
    const [loadingContent, setLoadingContent] = useState<boolean>(true)
    const [loadingMultimedia, setLoadingMultimedia] = useState<boolean>(true)

    useEffect(() => {
        setLoadingMultimedia(true);
        setLoadingContent(true);

        getAllMultimedia("?landing=daytrips")
        .then((response: AxiosResponse) => {
            setMultimediaDaytrips(response?.data?.data);

            setTimeout(() => { setLoadingMultimedia(false) }, 500)
        })

        getAllContent("?landing=daytrips")
        .then((response: AxiosResponse) => {
            setContentDaytrips(response?.data?.data);

            setTimeout(() => { setLoadingContent(false) }, 500)
        })

        getAllContent("?landing=experiences")
        .then((response: AxiosResponse) => {
            setContentExperiences(response?.data?.data);
        })
    }, [])

    useEffect(() => {
        setDataDaytrips({
            h1: "Transportation and tiquets included",
            h2: "SPORTS EXPERIENCES",
            content: contentDaytrips
        })

    }, [contentDaytrips])

    return(
        <div>
            <Navbar title={"Day Trips"} subtitle={"Days Trips"} />

            <Exposure 
                data={multimediaDaytrips} 
                loading={loadingMultimedia} 
            />
            
            {isMobile
            ? 
                <Services 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={contentExperiences}
                    loading={loadingContent}
                />
            :
                <GroupServices 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={contentExperiences}
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