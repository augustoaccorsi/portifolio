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
import { useLocation, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { PortifolioContext } from '../../context/PortifolioContext';
import { useScrollContext } from '../../context/ScrollContext';

const NAV_LINKS = [
    { to: '/portifolio/', label: 'home' },
    { to: '/portifolio/about', label: 'about' },
    { to: '/portifolio/techStack', label: 'stack' },
    { to: '/portifolio/projects', label: 'projects' },
    { to: '/portifolio/contact', label: 'contact' },
];

const Header = () => {
    const location = useLocation();
    const { isDarkTheme, toggleTheme } = useContext(PortifolioContext);
    const { scrollToPage } = useScrollContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) =>
        path === '/portifolio/'
            ? location.pathname === '/portifolio/'
            : location.pathname.startsWith(path);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleNavClick = (e, index) => {
        e.preventDefault();
        setMenuOpen(false);
        scrollToPage(index);
    };

    return (
        <HeaderContainer>
            <HeaderInner>
                <NavLink to="/portifolio/" onClick={(e) => handleNavClick(e, 0)}>
                    <Logo>
                        <FaHome />
                    </Logo>
                </NavLink>

                <RightGroup>
                    <NavButtons>
                        {NAV_LINKS.map(({ to, label }, i) => (
                            <NavLink key={to} to={to} onClick={(e) => handleNavClick(e, i)}>
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
                {NAV_LINKS.map(({ to, label }, i) => (
                    <NavLink key={to} to={to} onClick={(e) => handleNavClick(e, i)}>
                        {isActive(to)
                            ? <SelectedLink>~/{label}</SelectedLink>
                            : <Link>~/{label}</Link>
                        }
                    </NavLink>
                ))}
            </MobileMenu>
        </HeaderContainer>
    );
};

export default Header;
