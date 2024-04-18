import { Container, ContactContainer, ContactTitle, ContactSubTitle, ContactInput, Button, StyledTextarea } from "./styles"
import tel from '../imgs/tel.png'

const Contact = () => {
  return (
    <Container id="contact">
      <img src={tel} alt="telefone" />
      <ContactContainer>
        <ContactTitle>Contato</ContactTitle>
        <ContactSubTitle>Quer entrar em contato comigo? <br />
        Preencha o formulário ao lado e entrarei em contato o mais rápido possível.</ContactSubTitle>
        <ContactInput type="text" placeholder="Nome"/>
        <ContactInput type="email" placeholder="E-mail"/>
        <ContactInput type="text" placeholder="Assunto"/>
        <StyledTextarea placeholder="Mensagem"></StyledTextarea>
        <Button type="submit">Enviar Mensagem</Button>
      </ContactContainer>
    </Container>
  )
}

export default Contact