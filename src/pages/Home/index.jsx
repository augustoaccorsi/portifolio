import { HomeContainer, UserInfo, ScrollHint, Actions, ResumeButton } from './styles';
import { useScrollContext } from '../../context/ScrollContext';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
    const { scrollToPage } = useScrollContext();

    return (
        <HomeContainer>
            <UserInfo>
                <p>Hi,</p>
                <p>My name is</p>
                <p>Augusto Accorsi</p>
                <p>And this is my portfolio</p>
            </UserInfo>
            <Actions>
                <ResumeButton
                    href="/resume.pdf"
                    download="Jose_Augusto_Accorsi_Resume.pdf"
                >
                    <FaDownload />
                    Download Resume
                </ResumeButton>
            </Actions>
            <ScrollHint onClick={() => scrollToPage(1)} aria-label="Scroll to About">
                <span>scroll down</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </ScrollHint>
        </HomeContainer>
    );
};

export default Home;
