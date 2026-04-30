import { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import TechStack from '../../pages/TechStack';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { ScrollContext } from '../../context/ScrollContext';
import { Container, Section } from './styles';

const PAGES = [
    { to: '/portifolio/', Component: Home },
    { to: '/portifolio/about', Component: About },
    { to: '/portifolio/techStack', Component: TechStack },
    { to: '/portifolio/projects', Component: Projects },
    { to: '/portifolio/contact', Component: Contact },
];

const isActivePage = (path, pathname) =>
    path === '/portifolio/'
        ? pathname === '/portifolio/'
        : pathname.startsWith(path);

const ScrollLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef(null);
    const sectionRefs = useRef([]);
    const observing = useRef(true);

    const scrollToPage = useCallback((index) => {
        observing.current = false;
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navigate(PAGES[index].to, { replace: true });
        setTimeout(() => { observing.current = true; }, 800);
    }, [navigate]);

    // On mount: jump to the section matching the initial URL once layout is ready
    useEffect(() => {
        const index = PAGES.findIndex(({ to }) => isActivePage(to, location.pathname));
        if (index > 0) {
            requestAnimationFrame(() => {
                const section = sectionRefs.current[index];
                if (section && containerRef.current) {
                    containerRef.current.scrollTop = section.offsetTop;
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Scroll handler: update URL based on which section's top is at/above viewport
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let rafId = null;
        const handleScroll = () => {
            if (!observing.current) return;
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = null;
                const scrollTop = container.scrollTop;
                let currentIndex = 0;
                sectionRefs.current.forEach((section, i) => {
                    if (section && section.offsetTop <= scrollTop + 100) {
                        currentIndex = i;
                    }
                });
                navigate(PAGES[currentIndex].to, { replace: true });
            });
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            container.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [navigate]);

    return (
        <ScrollContext.Provider value={{ scrollToPage }}>
            <Header />
            <Container ref={containerRef}>
                {PAGES.map(({ to, Component }, i) => (
                    <Section
                        key={to}
                        ref={(el) => { sectionRefs.current[i] = el; }}
                    >
                        <Component />
                    </Section>
                ))}
            </Container>
        </ScrollContext.Provider>
    );
};

export default ScrollLayout;
