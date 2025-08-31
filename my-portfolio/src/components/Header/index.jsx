import { HeaderContainer, NavButtons } from './styles';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { PortifolioContext } from '../../context/PortifolioContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <HeaderContainer>
                    <div>
                        <NavLink to="/">
                            <img src="logo.svg" alt="logo" />
                        </NavLink>
                        <div>
                            <NavButtons>
                                <NavLink to="/home">
                                    <a>
                                        Home
                                    </a>
                                </NavLink>
                                <NavLink to="/about">
                                    <a>
                                        About
                                    </a>
                                </NavLink>
                                <NavLink to="/techStack">
                                    <a>
                                        Tech Stack
                                    </a>
                                </NavLink>
                                <NavLink to="/projects">
                                    <a>
                                        Projects
                                    </a>
                                </NavLink>
                                <NavLink to="/contact">
                                    <a>
                                        Contact
                                    </a>
                                </NavLink>
                                <NavLink
                                    to="https://github.com/augustoaccorsi"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub />
                                </NavLink>
                                <NavLink
                                    to="https://www.linkedin.com/in/augusto-accorsi/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin />
                                </NavLink>
                            </NavButtons>
                        </div>
                    </div>
                </HeaderContainer>
            </header>
            <Outlet />
        </>
    );
};

export default Header;