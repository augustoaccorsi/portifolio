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
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { PortifolioContext } from '../../context/PortifolioContext';

const NAV_LINKS = [
    { to: '/', label: 'home' },
    { to: '/about', label: 'about' },
    { to: '/techStack', label: 'stack' },
    { to: '/projects', label: 'projects' },
    { to: '/contact', label: 'contact' },
];

const Header = () => {
    const location = useLocation();
    const { isDarkTheme, toggleTheme } = useContext(PortifolioContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) =>
        path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(path);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <NavLink to="/">
                        <Logo>
                            <FaHome />
                        </Logo>
                    </NavLink>

                    <RightGroup>
                        <NavButtons>
                            {NAV_LINKS.map(({ to, label }) => (
                                <NavLink key={to} to={to}>
                                    {isActive(to)
                                        ? <SelectedLink>~/{label}</SelectedLink>
                                        : <Link>~/{label}</Link>
                                    }
                                </NavLink>
                            ))}
                        </NavButtons>

                        <a href="https://github.com/augustoaccorsi" target="_blank" rel="noopener noreferrer">
                            <Icon><FaGithub /></Icon>
                        </a>
                        <a href="https://www.linkedin.com/in/augusto-accorsi/" target="_blank" rel="noopener noreferrer">
                            <Icon><FaLinkedin /></Icon>
                        </a>

                        <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />

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

                <MobileMenu id="mobile-menu" data-open={menuOpen ? 'true' : 'false'}>
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
                            {isActive(to)
                                ? <SelectedLink>~/{label}</SelectedLink>
                                : <Link>~/{label}</Link>
                            }
                        </NavLink>
                    ))}
                </MobileMenu>
            </HeaderContainer>

            <Outlet />
        </>
    );
};

export default Header;
