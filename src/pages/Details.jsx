// Components
import { Navbar } from "@/components/Navbar";
import { Exposure } from "../components/Exposure";
import { Book } from "../components/Book";
// Image
import details2 from "../assets/img/details1.jpg";
import details3 from "../assets/img/details2.jpg";
import details1 from "../assets/img/details3.jpg";
import details4 from "../assets/img/details4.jpg";
// Icons
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiTimer } from 'react-icons/bi'
import { FcOvertime } from 'react-icons/fc';
import { BsTicket } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi';
import { GrLocation } from 'react-icons/gr';


export const Details = () => {

    const multimedia = {
        A: {
            src: details1,
            type: "image"
        },
        B: {
            src: details2,
            type: "image"
        },
        C: {
            src: details3,
            type: "image"
        },
        D: {
            src: details4,
            type: "image"
        },
    }

    return(
        <div className="details">

            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <div className="details_exposure">
                <Exposure data={multimedia} />
            </div>

            <div className="details_description">
                <div className="description">
                    <h1>One Day in Calpe</h1>

                    <h2>General information</h2>

                    <div className="description_text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem, labore corrupti iure assumenda asperiores laboriosam laudantium tempora explicabo voluptatibus provident nostrum atque iusto? Commodi eligendi dignissimos deserunt enim nihil?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae vitae, molestias, architecto sapiente culpa sequi esse excepturi molestiae eveniet blanditiis repudiandae adipisci necessitatibus ad explicabo commodi fuga veniam minus repellat.
                        </p>
                    </div>

                    <h3>Highlights</h3>
                    <ul className="highlights">
                        <li>Save time—tick off multiple top Amsterdam landmarks in a day</li>
                        <li>Travel in an eco-friendly way—the boat has an electric engine</li>
                        <li>Flexible tour—choose from a variety of daily start times and from 3 different departure locations</li>
                    </ul>
                
                    <div className="information">
                        <p><HiOutlineUserGroup />Age 0 - 99, max of 10 per group</p>
                        <p><BiTimer /> Duration: 1h</p>
                        <p><FcOvertime /> Start time: Check availability </p>
                        <p><BsTicket /> Mobile Ticket</p>
                        <p><TfiWorld /> Spanish</p>
                        <p><GrLocation />Location</p>
                    </div>

                    <div className="description_policy">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam consectetur animi! Doloribus beatae non consectetur laudantium dolores soluta delectus iste quia consequatur facilis fugiat eum distinctio praesentium, exercitationem pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, temporibus molestias porro cumque dicta magnam, incidunt quaerat, quidem animi maxime nulla nihil quo tempore aspernatur et odio totam in.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo maiores, laborum veritatis assumenda incidunt! Quas reprehenderit consequuntur at quos quo corporis, sunt dolores odit placeat? Perferendis labore ipsam hic.
                        </p>
                    </div>
                </div>

                <Book />
            </div>
            

        </div>
    );
}