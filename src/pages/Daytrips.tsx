// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaDaytrips, contentDaytrips } from "../data/views/daytrips";
import { contentExperiences } from "../data/views/experiences";
import { Services } from "../components/shared/Services";
import { DataInt } from "../interfaces/services.model";


export const Daytrips = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    const dataDaytrips: DataInt = {
        h1: "Transportation and tiquets included",
        h2: "SPORTS EXPERIENCES",
        content: contentDaytrips
    }

    return(
        <div>
            <Navbar title={"Day Trips"} subtitle={"Day Trips"} />

            <Exposure data={multimediaDaytrips}  />
            
            {isMobile
            ? 
                <Services 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={contentExperiences}
                />
            :
                <GroupServices 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={contentExperiences}
                />
            }

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}