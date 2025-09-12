import { HomeContainer, UserInfo, UserImage } from './styles';

const Home = () => {
    return (
        <HomeContainer>
            <UserInfo>
                <div>
                    <p>Hi,</p>
                </div>
                <div>
                    <p>My name is</p>
                </div>
                <div>
                    <p>Augusto Accorsi</p>
                </div>
                <div>
                    <p>And this is my portifolio</p>
                </div>
            </UserInfo>
            <UserImage>
                <img src="me.jpg"/>
            </UserImage>
        </HomeContainer>
    );
};

export default Home;
