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
          <ListItem href="#">Skills</ListItem>
        </li>
        <li>
          <ListItem href="#">Hobbies</ListItem>
        </li>
        <li>
          <ListItem href="#">Formação</ListItem>
        </li>
        <li>
          <ListItem href="#">Projetos</ListItem>
        </li>
        <li>
          <ListItem href="#">cleijllahm@gmail.com</ListItem>
        </li>
      </List>
    </HeaderContent>

  )
}

export default Header