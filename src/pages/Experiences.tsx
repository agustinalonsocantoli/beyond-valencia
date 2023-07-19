// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaExperiences, dataExperiences } from "../data/views/experiences";
import { dataDaytrips } from "../data/views/daytrips";
import { Services } from "../components/shared/Services";

export const Experiences = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    return(
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure data={multimediaExperiences} />

            {isMobile
            ? 
                <Services
                    sliderPage1={dataExperiences} 
                    sliderPage2={dataDaytrips}
                />
            :
                <GroupServices 
                    sliderPage1={dataExperiences} 
                    sliderPage2={dataDaytrips}
                />
            }

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}