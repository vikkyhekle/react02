import React, {useEffect, useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav, 
    NavBarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from "./NavBar.elements";


const NavBar = () => {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const hansleClick = () => setClick(!click);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavBarContainer> 
                    <NavLogo to='/'>
                        <NavIcon/>
                        GREEN ROOM
                    </NavLogo>
                    <MobileIcon onClick={hansleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={hansleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button  fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu> 
                </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
