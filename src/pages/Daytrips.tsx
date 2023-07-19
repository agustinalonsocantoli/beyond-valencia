// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaDaytrips, dataDaytrips } from "../data/views/daytrips";
import { dataExperiences } from "../data/views/experiences";
import { Services } from "../components/shared/Services";


export const Daytrips = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    return(
        <div>
            <Navbar title={"Day Trips"} subtitle={"Day Trips"} />

            <Exposure data={multimediaDaytrips}  />
            
            {isMobile
            ? 
                <Services 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={dataExperiences}
                />
            :
                <GroupServices 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={dataExperiences}
                />
            }

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}