import { Image } from './styles'

const Tech = ({tech}) => {
  return (
    <Image>
        <img src={tech.logo}/>
        <span>{tech.name}</span>
    </Image>
  )
}

export default Tech;
