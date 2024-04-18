import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBootstrap, FaGit, FaTools, FaCog, FaCode, FaGamepad, FaHeadset, FaMapMarked} from 'react-icons/fa';

import { PiMonitorFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";

import { ContainerCards, Card, SectionTitle, NameTech } from './styles'

const Cards = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <ContainerCards>
        <Card>
          <FaHtml5 />
          <NameTech>HTML 5</NameTech>
        </Card>
        <Card>
          <FaCss3Alt />
          <NameTech>CSS 3</NameTech>
        </Card>
        <Card>
          <FaJs />
          <NameTech>JavaScript</NameTech>
        </Card>
        <Card>
          <FaReact />
          <NameTech>React</NameTech>
        </Card>
        <Card>
          <FaNodeJs />
          <NameTech>Node Js</NameTech>
        </Card>
        <Card>
          <FaPython />
          <NameTech>Python</NameTech>
        </Card>
        <Card>
          <FaBootstrap />
          <NameTech>Bootstrap</NameTech>
        </Card>
        <Card>
          <FaCode />
          <NameTech>JQuery</NameTech>
        </Card>
        <Card>
          <FaGit />
          <NameTech>Git</NameTech>
        </Card>
        <Card>
          <FaTools />
          <NameTech>Jest</NameTech>
        </Card>
        <Card>
          <FaCog />
          <NameTech>Cypress</NameTech>
        </Card>
      </ContainerCards>

      <SectionTitle>Hobbies</SectionTitle>
      <ContainerCards>
      <Card>
        <FaGamepad />
        <NameTech>Jogar video game</NameTech>
      </Card>
      <Card>
        <PiMonitorFill />
        <NameTech>Assistir séries</NameTech>
      </Card>
      <Card>
        <FaHeadset />
        <NameTech>Ouvir música</NameTech>
      </Card>
      <Card>
        <FaMapMarked />
        <NameTech>Viajar</NameTech>
      </Card>
      <Card>
        <CgGym />
        <NameTech>Treinar</NameTech>
      </Card>
      </ContainerCards>
    </>
  )
}

export default Cards