import vector from '../imgs/Vector.svg'
import { SectionName, HeaderContent, List, ListItem, Name } from './styles'

const Header = () => {
  return (
    <HeaderContent>
      <SectionName>
        <img src={vector} alt="estrela" />
        <Name>Cleiton Lahm</Name>
      </SectionName>
      <List>
        <li>
          <ListItem href="#">Sobre mim</ListItem>
        </li>
        <li>
          <ListItem href="#skills">Skills</ListItem>
        </li>
        <li>
          <ListItem href="#hobbies">Hobbies</ListItem>
        </li>
        <li>
          <ListItem href="#formations">Formação</ListItem>
        </li>
        <li>
          <ListItem href="#projects">Projetos</ListItem>
        </li>
        <li>
          <ListItem href="#contact">cleijllahm@gmail.com</ListItem>
        </li>
      </List>
    </HeaderContent>

  )
}

export default Header