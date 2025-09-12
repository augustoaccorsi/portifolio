import { EducationContainer, Header, Body, Divider } from './styles';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Education = ({education}) => {
    return (
        <EducationContainer>
            <Header>
                <span>{education.degree} in {education.field}</span>
                <p>{education.focus}</p>
            </Header>

            <Body>
                <div>
                    <div>
                        <FaBuilding />
                        <p>{education.institution}</p>
                    </div>
                    <div>
                        <FaLocationDot />
                        <p>{education.location}</p>
                    </div>
                </div>
                <div>
                    <FaCalendarAlt />
                    <p>{education.start_date} - {education.end_date}</p>
                </div>
            </Body>
            <Divider />
        </EducationContainer>
    );
};

export default Education;
