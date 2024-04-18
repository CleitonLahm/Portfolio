import { Container, Project, SectionTitle, StyledIframe, ProjectContent, ProjectContentTitle, ProjectContentDescription, ProjectLinks, LinkRepositorio, LinkDemo } from "./styles"

const Experiences = () => {
  return (
    <Container id="projects">
      <SectionTitle>Experiência profissional</SectionTitle>
      <Project>
        <StyledIframe
          src="https://efood-opal.vercel.app/"
          title="EFOOD!">
        </StyledIframe>
        <ProjectContent>
          <ProjectContentTitle>EFOOD!</ProjectContentTitle>
          <ProjectContentDescription>Desenvolvi um sistema completo de entregas de delivery utilizando tecnologias     modernas como React, Redux, Typescript e Styled-Components.</ProjectContentDescription>
          <ProjectLinks>
              <LinkRepositorio href="https://github.com/CleitonLahm/Efood" target="_blank">Repositório</LinkRepositorio>
              <LinkDemo href="https://efood-opal.vercel.app/" target="_blank">Ver demo</LinkDemo>
          </ProjectLinks>
        </ProjectContent>
      </Project>

      <Project>
        <ProjectContent>
          <ProjectContentTitle>EPLAY!</ProjectContentTitle>
          <ProjectContentDescription>Loja de games onde o usuário consegue navegar pelas categorias, adicionar um jogo ao carrinho caso o mesmo esteja disponível e finalizar a compra passando pelas validações dos campos. </ProjectContentDescription>
          <ProjectLinks>
              <LinkRepositorio href="https://github.com/CleitonLahm/E-play" target="_blank">Repositório</LinkRepositorio>
              <LinkDemo href="https://e-play-xi.vercel.app/" target="_blank">Ver demo</LinkDemo>
          </ProjectLinks>
        </ProjectContent>
          <StyledIframe
            src="https://e-play-xi.vercel.app/"
            title="EPLAY!">
          </StyledIframe>
      </Project>

      <Project>
        <StyledIframe
          src="https://king-store-six.vercel.app/"
          title="KingStore">
        </StyledIframe>
        <ProjectContent>
          <ProjectContentTitle>KingStore - Projeto Freelance 2024</ProjectContentTitle>
          <ProjectContentDescription>Neste projeto estou desenvolvendo uma loja completa que contara com diversos tipos de produtos, estou fazendo o frontend e quando terminar pretendo utilizar NodeJs para o backend, ainda irei implementar o sistema de cadastro/login, processo de validação de compras e todas as demais funcionalides necessárias. </ProjectContentDescription>
          <ProjectLinks>
              <LinkRepositorio href="https://github.com/CleitonLahm/KingStore" target="_blank">Repositório</LinkRepositorio>
              <LinkDemo href="https://king-store-six.vercel.app/" target="_blank">Ver demo</LinkDemo>
          </ProjectLinks>
        </ProjectContent>
      </Project>
    </Container>
  )
}

export default Experiences