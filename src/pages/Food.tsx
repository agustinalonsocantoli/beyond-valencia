// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaFood, dataFood } from "../data/views/food";
import { Services } from "../components/shared/Services";

export const Food = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    return(
        <div>
            <Navbar title={"Beyond food"} subtitle={"food"} />

            <Exposure data={multimediaFood}  />

            {isMobile
            ? 
                <Services
                    sliderPage1={dataFood} 
                />
            :
                <GroupServices 
                    sliderPage1={dataFood} 
                />
            }

            <Events />

            <Wine />
            
            <Whatsapp />

            <Footer />
        </div>
    );
}