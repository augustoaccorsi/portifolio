import { Container, MailInfo, MailAddress, Footer } from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <Container>
                <MailInfo>For any question please mail me:</MailInfo>
                <MailAddress>augusto.acorsi@gmail.com</MailAddress>
            </Container>
            <Footer>
                <div>
                    <span>augusto.acorsi@gmail.com</span>
                </div>
                <a
                    href="https://github.com/augustoaccorsi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/augusto-accorsi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </Footer>
        </div>
    );
};

export default Contact;
