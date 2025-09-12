import {
    HeaderContainer,
    HeaderInner,
    RightGroup,
    NavButtons,
    Logo,
    Link,
    SelectedLink,
    Icon,
    HamburgerButton,
    MobileMenu,
} from './styles';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { PortifolioContext } from '../../context/PortifolioContext';

const Header = () => {
    const location = useLocation();
    const { isDarkTheme, toggleTheme } = useContext(PortifolioContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const isActiveRoute = (path) => location.pathname === path;

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <NavLink to="/portifolio/">
                        <Logo>
                            <img
                                src={
                                    isDarkTheme
                                        ? 'rex-logo-dark.svg'
                                        : 'rex-logo-light.svg'
                                }
                                alt="Portfolio Logo"
                                width="50"
                                height="50"
                            />
                        </Logo>
                    </NavLink>

                    <RightGroup>
                        {/* Desktop nav (hidden on mobile via CSS) */}
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

                            {/* external links should be anchor tags */}
                            <a
                                href="https://github.com/augustoaccorsi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon>
                                    <FaGithub />
                                </Icon>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/augusto-accorsi/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon>
                                    <FaLinkedin />
                                </Icon>
                            </a>

                            <ThemeToggle
                                isDark={isDarkTheme}
                                onToggle={toggleTheme}
                            />
                        </NavButtons>

                        {/* Hamburger (visible on small screens) */}
                        <HamburgerButton
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((s) => !s)}
                            type="button"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </HamburgerButton>
                    </RightGroup>
                </HeaderInner>

                {/* Mobile menu (animated via CSS). We use data-open attribute to control visibility */}
                <MobileMenu
                    id="mobile-menu"
                    data-open={menuOpen ? 'true' : 'false'}
                >
                    <NavLink
                        to="/portifolio/"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/portifolio/') ? (
                            <SelectedLink>Home</SelectedLink>
                        ) : (
                            <Link>Home</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/portifolio/about"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/portifolio/about') ? (
                            <SelectedLink>About</SelectedLink>
                        ) : (
                            <Link>About</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/portifolio/techStack"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/portifolio/techStack') ? (
                            <SelectedLink>Tech Stack</SelectedLink>
                        ) : (
                            <Link>Tech Stack</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/portifolio/projects"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/portifolio/projects') ? (
                            <SelectedLink>Projects</SelectedLink>
                        ) : (
                            <Link>Projects</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/portifolio/contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/portifolio/contact') ? (
                            <SelectedLink>Contact</SelectedLink>
                        ) : (
                            <Link>Contact</Link>
                        )}
                    </NavLink>

                    <a
                        href="https://github.com/augustoaccorsi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon>
                            <FaGithub />
                        </Icon>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/augusto-accorsi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon>
                            <FaLinkedin />
                        </Icon>
                    </a>

                    <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
                </MobileMenu>
            </HeaderContainer>

            <Outlet />
        </>
    );
};

export default Header;
