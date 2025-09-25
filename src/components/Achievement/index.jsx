import { AchievementContainer, Header, Body, Divider, DownloadFile } from './styles';
import { FaBuilding, FaCalendarAlt, FaFileDownload } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Achievement = ({ achievement }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/portifolio/Hybrelastic.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    <DownloadFile onClick={handleDownload}>
                        <FaFileDownload />
                        <p>
                            download periodic here
                        </p>
                    </DownloadFile>
                </div>
            </Body>
            <Divider />
        </AchievementContainer>
    );
};

export default Achievement;
