import { AboutMe, HeaderContainer, WorkExperience, Experience } from './styles';
import WorkExperienceItem from '../../components/WorkExperience/index';
import Education from '../../components/Education/index'

import jobs from '../../data/workExperience.json'
import school from '../../data/education.json'

const About = () => {
    return (
        <HeaderContainer>
            <AboutMe>
                <h1>About Me</h1>
                <p>Hi there! I’m Augusto Accorsi, but my friends call me Guto. Having worked in software development for almost 10 years,
                I have tried quite a few areas before discovering the developer I want to be is a frontend engineer or a full-stack developer.
                Everything started with HTML and CSS of course, that software coding was a brave new world for me. After that, I found myself with ABAP, trying to navigate in the sea of enterprise software.
                Nonetheless, I realized that my real passion was frontend development, which means dealing with JavaScript and, later, Node.js. Since then, I have acquired rich experience in developing user interfaces from scratch, starting from responsive layouts to performance understanding.
                </p>
            </AboutMe>

            <Experience>
                <WorkExperience>
                <h1>Work Experience</h1>
                {
                    jobs.experience.map((work, key) => {
                        return <WorkExperienceItem key={key} work={work} />
                    })
                }
            </WorkExperience>
            <WorkExperience>
                <h1>Education</h1>
                {
                    school.education.map((education, key) => {
                        return <Education key={key} education={education} />
                    })
                }
            </WorkExperience>
            </Experience>
        </HeaderContainer>
    );
};

export default About;
