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
                    <NavLink to="/">
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
                            <NavLink to="/">
                                {isActiveRoute('/') ? (
                                    <SelectedLink>Home</SelectedLink>
                                ) : (
                                    <Link>Home</Link>
                                )}
                            </NavLink>

                            <NavLink to="/about">
                                {isActiveRoute('/about') ? (
                                    <SelectedLink>About</SelectedLink>
                                ) : (
                                    <Link>About</Link>
                                )}
                            </NavLink>

                            <NavLink to="/techStack">
                                {isActiveRoute('/techStack') ? (
                                    <SelectedLink>Tech Stack</SelectedLink>
                                ) : (
                                    <Link>Tech Stack</Link>
                                )}
                            </NavLink>

                            <NavLink to="/projects">
                                {isActiveRoute('/projects') ? (
                                    <SelectedLink>Projects</SelectedLink>
                                ) : (
                                    <Link>Projects</Link>
                                )}
                            </NavLink>

                            <NavLink to="/contact">
                                {isActiveRoute('/contact') ? (
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
                        to="/"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/') ? (
                            <SelectedLink>Home</SelectedLink>
                        ) : (
                            <Link>Home</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/about') ? (
                            <SelectedLink>About</SelectedLink>
                        ) : (
                            <Link>About</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/techStack"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/techStack') ? (
                            <SelectedLink>Tech Stack</SelectedLink>
                        ) : (
                            <Link>Tech Stack</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/projects"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/projects') ? (
                            <SelectedLink>Projects</SelectedLink>
                        ) : (
                            <Link>Projects</Link>
                        )}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isActiveRoute('/contact') ? (
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
