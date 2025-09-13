import {
    AboutMe,
    HeaderContainer,
    WorkExperience,
    Experience,
    EducationTitle,
    AchievementTitle,
} from './styles';
import WorkExperienceItem from '../../components/WorkExperience/index';
import Education from '../../components/Education/index';
import Achievement from '../../components/Achievement/index';

import jobs from '../../data/workExperience.json';
import school from '../../data/education.json';
import achievements from '../../data/achievements.json';

const About = () => {
    return (
        <HeaderContainer>
            <AboutMe>
                <h1>About Me</h1>
                <p>
                    I’m a Senior Software Engineer with over 10 years of
                    experience designing and delivering modern, scalable web
                    applications that delight users and solve real business
                    problems. My expertise spans React, TypeScript, JavaScript,
                    and SAPUI5, with a strong focus on building
                    high-performance, accessible, and maintainable front-end
                    architectures.
                    <p />
                    Throughout my career, I’ve led the development of
                    enterprise-level applications used by thousands of users,
                    optimized performance, and collaborated closely with product
                    teams to create intuitive user experiences. I thrive on
                    ownership, continuous learning, and transforming complex
                    requirements into elegant solutions.
                    <p />
                    Currently, I’m passionate about creating solutions that
                    scale, integrating best practices in performance and
                    accessibility, and mentoring teams to raise the bar in UI
                    development. Key skills: React, TypeScript, JavaScript
                    (ES6+), SAPUI5, OData, UI5 Testing (OPA5, QUnit, Jest),
                    GitHub Actions, Agile/Scrum.
                </p>
            </AboutMe>

            <Experience>
                <WorkExperience>
                    <h1>Work Experience</h1>
                    {jobs.experience.map((work, key) => {
                        return <WorkExperienceItem key={key} work={work} />;
                    })}
                </WorkExperience>
                <WorkExperience>
                    <EducationTitle>Education</EducationTitle>
                    {school.education.map((education, key) => {
                        return <Education key={key} education={education} />;
                    })}

                    <AchievementTitle>Achievements</AchievementTitle>
                    {achievements.map((achievement, key) => {
                        return (
                            <Achievement key={key} achievement={achievement} />
                        );
                    })}
                </WorkExperience>
            </Experience>
        </HeaderContainer>
    );
};

export default About;
