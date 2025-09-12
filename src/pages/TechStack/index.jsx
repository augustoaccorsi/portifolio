import {
    About,
    HeaderContainer,
    TechContainer
} from './styles';

import data from '../../data/techStack.json'
import Tech from '../TechStack/Tech/index'


const TechStack = () => {
    return (
        <HeaderContainer>
            <About>
                <h1>My Tech Stack</h1>
                <p>Technologies I’ve been working with recently</p>
            </About>

            <TechContainer>
                {data.tech_stack.map((tech, key) => {
                    return <Tech key={key} tech={tech} />
                })}
            </TechContainer>
        </HeaderContainer>
    )
    
};

export default TechStack;
