import seta from '../imgs/seta.png'
import foto from '../imgs/foto_perfil.jpg'
import cv from '../About/cv.pdf'

import { AboutContainer, SocialsList, Title, SocialsListItem, Description, Foto, DescriptionContainer, SubTitle, SubtitleDescription } from './styles'

const About = () => {
  return (
    <>
      <AboutContainer>
        <div>
          <Title>Olá, meu nome é Cleiton e sou desenvolvedor Full Stack</Title>
          <Description>Sou formado em Análise e Desenvolvimento de Sistemas, e atualmente estou participando do projeto Oracle ONE na alura e cursando desenvolvimento Full Stack no DevClub.</Description>
          <SocialsList>
            <li>
              <SocialsListItem href="https://github.com/CleitonLahm" target='_blank'>Github</SocialsListItem>
              <img src={seta} alt="seta" />
            </li>
            <li>
              <SocialsListItem href="https://www.linkedin.com/in/cleitonlahm/" target='_blank'>Linkedin</SocialsListItem>
              <img src={seta} alt="seta" />
            </li>
            <li>
              <SocialsListItem href="https://www.instagram.com/clei_lahmm/" target='_blank'>Instagram</SocialsListItem>
              <img src={seta} alt="seta" />
            </li>
            <li>
              <SocialsListItem href={cv} download>Baixar currículo</SocialsListItem>
              <img src={seta} alt="seta" />
            </li>
          </SocialsList>
        </div>
        <Foto src={foto} alt="foto de perfil" />
      </AboutContainer>

      <DescriptionContainer>
        <SubTitle>Sobre mim</SubTitle>
        <SubtitleDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis blanditiis ad explicabo laudantium, veritatis expedita architecto iure debitis beatae laborum earum aliquam suscipit sit officiis, excepturi et dignissimos facere dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam itaque facere dolorem nihil quod. Nulla quia animi quidem fugiat, eos culpa repellendus ipsum veritatis sequi non, voluptatum, suscipit pariatur quae?</SubtitleDescription>
      </DescriptionContainer>
    </>
  )
}

export default About