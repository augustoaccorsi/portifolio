import {
    PageContainer,
    HeaderSection,
    ContactGrid,
    ContactCard,
    ContactIcon,
    ContactInfo,
    ContactTitle,
    ContactText,
    ContactButton,
    SocialSection,
    SocialTitle,
    SocialLinks,
    SocialLink,
} from './styles';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
    return (
        <PageContainer>
            <HeaderSection>
                <h1>Get In Touch</h1>
                <p>Let's work together and create something amazing!</p>
            </HeaderSection>

            <ContactGrid>
                <ContactCard>
                    <ContactIcon>
                        <FaEnvelope />
                    </ContactIcon>
                    <ContactInfo>
                        <ContactTitle>Email</ContactTitle>
                        <ContactText>augusto.acorsi@gmail.com</ContactText>
                        <ContactButton
                            href="mailto:augusto.acorsi@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send Email
                        </ContactButton>
                    </ContactInfo>
                </ContactCard>

                <ContactCard>
                    <ContactIcon>
                        <FaLinkedin />
                    </ContactIcon>
                    <ContactInfo>
                        <ContactTitle>LinkedIn</ContactTitle>
                        <ContactText>
                            Connect with me professionally
                        </ContactText>
                        <ContactButton
                            href="https://www.linkedin.com/in/augusto-accorsi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect
                        </ContactButton>
                    </ContactInfo>
                </ContactCard>

                <ContactCard>
                    <ContactIcon>
                        <FaGithub />
                    </ContactIcon>
                    <ContactInfo>
                        <ContactTitle>GitHub</ContactTitle>
                        <ContactText>
                            Check out my projects and code
                        </ContactText>
                        <ContactButton
                            href="https://github.com/augustoaccorsi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Profile
                        </ContactButton>
                    </ContactInfo>
                </ContactCard>

                <ContactCard>
                    <ContactIcon>
                        <FaMapMarkerAlt />
                    </ContactIcon>
                    <ContactInfo>
                        <ContactTitle>Location</ContactTitle>
                        <ContactText>Rio Grande do Sul, Brazil</ContactText>
                        <ContactButton as="div">
                            Available for Remote Work
                        </ContactButton>
                    </ContactInfo>
                </ContactCard>
            </ContactGrid>

            <SocialSection>
                <SocialTitle>Let's Connect</SocialTitle>
                <SocialLinks>
                    <SocialLink
                        href="mailto:augusto.acorsi@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope />
                    </SocialLink>
                    <SocialLink
                        href="https://www.linkedin.com/in/augusto-accorsi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/augustoaccorsi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </SocialLink>
                </SocialLinks>
            </SocialSection>
        </PageContainer>
    );
};

export default Contact;
