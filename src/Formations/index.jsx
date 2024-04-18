import { FormationsContainer, Title, Cards, Card, Imagem, FormationTitle, FormationYear } from './styles'
import unopar from '../imgs/unopar.png'
import alura from '../imgs/alura.svg'
import devclub from '../imgs/dc.webp'

const Formations = () => {
  return (
    <FormationsContainer>
      <Title>Formação acadêmica</Title>
      <Cards>
        <Card>
          <Imagem src={unopar} alt="logo Unopar" />
          <FormationTitle>Análise e Desenvolvimento de Sistemas</FormationTitle>
          <FormationYear>2021 - 2024</FormationYear>
        </Card>
        <Card>
          <Imagem src={alura} alt="logo Alura" />
          <FormationTitle>Oracle ONE</FormationTitle>
          <FormationYear>2024</FormationYear>
        </Card>
        <Card>
          <Imagem src={devclub} alt="logo DevClub" />
          <FormationTitle>Desenvolvedor Full Stack</FormationTitle>
          <FormationYear>2021 - 2024</FormationYear>
        </Card>
      </Cards>
    </FormationsContainer>
  )
}

export default Formations