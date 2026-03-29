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
import { Outlet, useLocation, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { PortifolioContext } from '../../context/PortifolioContext';

const NAV_LINKS = [
    { to: '/portifolio/', label: 'home' },
    { to: '/portifolio/about', label: 'about' },
    { to: '/portifolio/techStack', label: 'stack' },
    { to: '/portifolio/projects', label: 'projects' },
    { to: '/portifolio/contact', label: 'contact' },
];

const SWIPE_THRESHOLD = 60;

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isDarkTheme, toggleTheme } = useContext(PortifolioContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    const isActive = (path) =>
        path === '/portifolio/'
            ? location.pathname === '/portifolio/'
            : location.pathname.startsWith(path);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const dy = e.changedTouches[0].clientY - touchStartY.current;

        // Ignore if mostly vertical (user is scrolling)
        if (Math.abs(dy) > Math.abs(dx)) return;
        if (Math.abs(dx) < SWIPE_THRESHOLD) return;

        const currentIndex = NAV_LINKS.findIndex((l) => isActive(l.to));
        if (currentIndex === -1) return;

        if (dx < 0 && currentIndex < NAV_LINKS.length - 1) {
            navigate(NAV_LINKS[currentIndex + 1].to);
        } else if (dx > 0 && currentIndex > 0) {
            navigate(NAV_LINKS[currentIndex - 1].to);
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <>
            <HeaderContainer>
                <HeaderInner>
                    <NavLink to="/portifolio/">
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

            <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <Outlet />
            </div>
        </>
    );
};

export default Header;
