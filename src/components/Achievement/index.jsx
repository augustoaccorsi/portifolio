import { AchievementContainer, Header, Body, Divider } from './styles';
import { FaBuilding, FaCalendarAlt, FaFileDownload } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Achievement = ({ achievement }) => {
    return (
        <AchievementContainer>
            <Header>
                <span>
                    {achievement.name}
                </span>
                {/* <p>{achievement.autor}</p> */}
            </Header>

            <Body>
                <div>
                    <div>
                        <FaBuilding />
                        <p>{achievement.periodic} ({achievement.year})</p>
                    </div>
                        {/* <FaCalendarAlt />
                        <p>
                            {achievement.year}
                        </p> */}
                    <div>
                        <FaFileDownload />
                        <p>
                            download periodic here
                        </p>
                    </div>
                </div>
            </Body>
            <Divider />
        </AchievementContainer>
    );
};

export default Achievement;
