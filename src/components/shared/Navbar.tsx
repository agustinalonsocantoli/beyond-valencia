// React
import { useNavigate } from "react-router-dom";
// Icons
import { TfiMenu } from "react-icons/tfi";
// Img
import logo from "../../assets/logoW.png";
import { useState } from "react";
import { Menu } from "./Menu";

interface Props {
    title: string;
    subtitle: string;
}

export const Navbar = ({ title, subtitle }: Props) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleDrawer = () => {
        setIsOpen((prev: boolean) => !prev)
    };

    return (
        <div className="nav">

            <div className="nav_flex">
                <div className="nav_menu">
                    <TfiMenu onClick={handleDrawer} />

                <Menu 
                    isOpen={isOpen}
                    handleDrawer={handleDrawer}
                />
                </div>

                <img src={logo} alt="img/logo" onClick={() => navigate('/')} />
            </div>

            <div className="nav_title">
                <h1 data-text={subtitle}>{title}</h1>
            </div>
        </div>
    );
}