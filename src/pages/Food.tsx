// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaFood, dataFood } from "../data/views/food";

export const Food = () => {



    return(
        <div>
            <Navbar title={"Beyond food"} subtitle={"food"} />

            <Exposure data={multimediaFood}  />

            <Services sliderPage1={dataFood} />

            <Events />

            <Wine />
            
            <Whatsapp />

            <Footer />
        </div>
    );
}