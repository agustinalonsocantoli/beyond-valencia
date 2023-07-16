// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaExperiences, dataExperiences } from "../data/views/experiences";
import { dataDaytrips } from "../data/views/daytrips";

export const Experiences = () => {



    return(
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure data={multimediaExperiences} />

            <Services 
                sliderPage1={dataExperiences} 
                sliderPage2={dataDaytrips}
            />

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}