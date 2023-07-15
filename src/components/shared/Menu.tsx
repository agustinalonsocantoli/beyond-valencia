// MUI
import { Box, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import villareal from "../../assets/img/villarealBanner.jpg";

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
        { href: "/more-services", text: "Bike Rentals" },
        { href: "/more-services", text: "Locker Services" },
        // { href: "/food", text: "Food & Dinning" }, 
        // { href: "/aboutus", text: "About Us" }
    ]

    return (
        <div>
            <Drawer
                open={isOpen}
                onClose={handleDrawer}
            >   
                { Links?.map((link: any, index: number) => (
                    <NavLink to={link?.href} key={index}>
                        <span
                        style={{
                            background: link?.text === "Bike Rentals" || link?.text === "Locker Services"
                            ? "rgba(255, 230, 103)"
                            : "rgba(255, 255, 255, .7)",
                        }}
                        >
                            {link?.text}
                        </span>
                    </NavLink>
                ))}

                <Box className="banner">
                    <h3>Villareal CF en un dia</h3>
                    <img src={villareal} alt="img/villareal" />
                    
                    <p>Celebra con nosotros los 100 años de club Español "Campeon de La Liga Europea"</p>
                    <span>
                        <NavLink to={"/"}>
                            BOOK NOW
                        </NavLink>
                    </span>
                </Box>
            </Drawer>
        </div>
    );
};

{/* <NavLink to={"/"}>Home</NavLink>,
<NavLink to={"/experiences"}>Experiences</NavLink>,
<NavLink to={"/daytrips"}>Day Trips</NavLink>,
<NavLink to={"/food"}>Food & Dinning</NavLink>,
<NavLink to={"/aboutus"}>About Us</NavLink> */}