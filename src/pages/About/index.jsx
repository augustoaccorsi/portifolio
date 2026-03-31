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
                    experience designing and delivering scalable,
                    high-performance web applications at enterprise scale, with
                    a strong focus on front-end architecture and user
                    experience.
                </p>
                <p>
                    My expertise spans React, TypeScript, JavaScript, and
                    SAPUI5. I specialize in building maintainable, accessible,
                    and performance-driven applications that support complex
                    business workflows, particularly within enterprise
                    environments.
                </p>
                <p>
                    Throughout my career, I’ve led the development of
                    applications used by thousands of users, improving
                    performance, simplifying complex processes, and delivering
                    solutions aligned with business goals. I work closely with
                    product and design teams to translate complex requirements
                    into clean, intuitive interfaces.
                </p>
                <p>
                    I take strong ownership of what I build, from architecture
                    decisions to final delivery, and I’m always looking for
                    ways to improve code quality, performance, and team
                    practices. I also enjoy mentoring other developers and
                    contributing to a culture of continuous improvement.
                </p>
                <p>
                    I’ve also been incorporating AI into my workflow to enhance
                    development efficiency—accelerating implementation,
                    improving test coverage, and supporting better technical
                    decisions. I focus on applying it pragmatically to deliver
                    better outcomes without adding unnecessary complexity.
                </p>
                <p>
                    I’m currently focused on building scalable UI
                    architectures, leveraging modern tooling, and continuously
                    improving how software is designed and delivered.
                </p>
                <p>
                    Key skills: React, TypeScript, JavaScript (ES6+), SAPUI5,
                    OData, UI5 Testing (OPA5, QUnit, Jest), GitHub Actions,
                    Agile/Scrum.
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
