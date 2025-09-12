import {
    WorkExperienceContainer,
    Header,
    Body,
    Footer,
    Divider,
} from './styles';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const WorkExperienceItem = ({ work }) => {
    return (
        <WorkExperienceContainer>
            <Header>
                <span>{work.title}</span>
                <p>{work.contract}</p>
            </Header>

            <Body>
                <ul>
                    {work.responsibilities.map((responsability, key) => (
                        <li key={key}>{responsability}</li>
                    ))}
                </ul>
            </Body>

            <Footer>
                <div>
                    <div>
                        <FaBuilding />
                        <p>{work.company}</p>
                    </div>
                    <div>
                        <FaLocationDot />
                        <p>{work.location}</p>
                    </div>

                    <div>
                        <FaCalendarAlt />
                        <p>
                            {work.start_date} - {work.end_date}
                        </p>
                    </div>
                </div>
            </Footer>
            <Divider />
        </WorkExperienceContainer>
    );
};

export default WorkExperienceItem;
