// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Data
import { multimediaFood, contentFood } from "../data/views/food";
import { Services } from "../components/shared/Services";
import { DataInt } from "../interfaces/services.model";

export const Food = () => {
    const isMobile = window.innerWidth < 1025 ? true : false;

    const dataFood: DataInt = {
        h1: "New deals every week!",
        h2: "DO YOU NEED A CATERING?",
        content: contentFood
    }

    return (
        <div>
            <Navbar title={"Beyond food"} subtitle={"food"} />

            <Exposure data={multimediaFood} />

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