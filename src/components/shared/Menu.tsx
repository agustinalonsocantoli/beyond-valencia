// MUI
import { Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import logo from "../../assets/logoW.png";

interface Props {
    isOpen: boolean;
    handleDrawer: (action: boolean) => void;
}

export const Menu = (props: Props) => {
    const { isOpen, handleDrawer } = props;

    const Links = [
        { href: "/", text: "Home" },
        { href: "/experiences", text: "Experiences" },
        { href: "/daytrips", text: "Day Trips" },
        { href: "/food", text: "Food & Dinning" }, 
        { href: "/aboutus", text: "About Us" }
    ]

    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={handleDrawer}
            >
                {/* <img src={logo} alt="img/logo" /> */}
                { Links?.map((link: any, index: number) => (
                    <NavLink to={link?.href} key={index}>
                        <span>{link?.text}</span>
                    </NavLink>
                ))}
            </Drawer>
        </div>
    );
};

{/* <NavLink to={"/"}>Home</NavLink>,
<NavLink to={"/experiences"}>Experiences</NavLink>,
<NavLink to={"/daytrips"}>Day Trips</NavLink>,
<NavLink to={"/food"}>Food & Dinning</NavLink>,
<NavLink to={"/aboutus"}>About Us</NavLink> */}