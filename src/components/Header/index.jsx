import {
    HeaderContainer,
    NavButtons,
    Logo,
    Link,
    SelectedLink,
    Icon,
} from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ThemeToggle from '../ThemeToggle';
import { PortifolioContext } from '../../context/PortifolioContext';

const Header = () => {
    const location = useLocation();
    const { isDarkTheme, toggleTheme } = useContext(PortifolioContext);

    const isActiveRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <header>
                <HeaderContainer>
                    <div>
                        <NavLink to="/portifolio/">
                            <Logo>
                                {isDarkTheme ? (
                                    <img
                                        src="rex-logo-dark.svg"
                                        alt="Portfolio Logo"
                                        width="50"
                                        height="50"
                                    />
                                ) : (
                                    <img
                                        src="rex-logo-light.svg"
                                        alt="Portfolio Logo"
                                        width="50"
                                        height="50"
                                    />
                                )}
                            </Logo>
                        </NavLink>
                        <div>
                            <NavButtons>
                                <NavLink to="/portifolio/">
                                    {isActiveRoute('/portifolio/') ? (
                                        <SelectedLink>Home</SelectedLink>
                                    ) : (
                                        <Link>Home</Link>
                                    )}
                                </NavLink>
                                <NavLink to="/portifolio/about">
                                    {isActiveRoute('/portifolio/about') ? (
                                        <SelectedLink>About</SelectedLink>
                                    ) : (
                                        <Link>About</Link>
                                    )}
                                </NavLink>
                                <NavLink to="/portifolio/techStack">
                                    {isActiveRoute('/portifolio/techStack') ? (
                                        <SelectedLink>Tech Stack</SelectedLink>
                                    ) : (
                                        <Link>Tech Stack</Link>
                                    )}
                                </NavLink>
                                <NavLink to="/portifolio/projects">
                                    {isActiveRoute('/portifolio/projects') ? (
                                        <SelectedLink>Projects</SelectedLink>
                                    ) : (
                                        <Link>Projects</Link>
                                    )}
                                </NavLink>
                                <NavLink to="/portifolio/contact">
                                    {isActiveRoute('/portifolio/contact') ? (
                                        <SelectedLink>Contact</SelectedLink>
                                    ) : (
                                        <Link>Contact</Link>
                                    )}
                                </NavLink>
                                <NavLink
                                    to="https://github.com/augustoaccorsi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon>
                                        <FaGithub />
                                    </Icon>
                                </NavLink>
                                <NavLink
                                    to="https://www.linkedin.com/in/augusto-accorsi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon>
                                        {' '}
                                        <FaLinkedin />
                                    </Icon>
                                </NavLink>

                                <ThemeToggle
                                    isDark={isDarkTheme}
                                    onToggle={toggleTheme}
                                />
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
