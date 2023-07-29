// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaExperiences, contentExperiences } from "../data/views/experiences";
import { contentDaytrips } from "../data/views/daytrips";
import { Services } from "../components/shared/Services";
import { DataInt } from "../interfaces/services.model";

export const Experiences = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    const dataExperiences: DataInt = {
        h1: "Meeting point in the City",
        h2: "PERSONALIZED EXPERIENCE",
        content: contentExperiences
    }

    return(
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure data={multimediaExperiences} />

            {isMobile
            ? 
                <Services
                    sliderPage1={dataExperiences} 
                    sliderPage2={contentDaytrips}
                />
            :
                <GroupServices 
                    sliderPage1={dataExperiences} 
                    sliderPage2={contentDaytrips}
                />
            }

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}