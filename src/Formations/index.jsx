import { FormationsContainer, Title, Cards, Card, Imagem, FormationTitle, FormationYear, Techs } from './styles'
import unopar from '../imgs/unopar.png'
import alura from '../imgs/alura.svg'
import devclub from '../imgs/dc.webp'
import ebac from '../imgs/ebac.png'

const Formations = () => {
  return (
    <FormationsContainer id='formations'>
      <Title>Formação acadêmica</Title>
      <Cards>
        <Card>
          <Imagem src={unopar} alt="logo Unopar" />
          <FormationTitle>Análise e Desenvolvimento de Sistemas</FormationTitle>
          <FormationYear>2021 - 2024</FormationYear>
        </Card>
        <Card>
          <Imagem style={{ width: '160px' }} src={ebac} alt="logo DevClub" />
          <FormationTitle>Engenheiro Front End</FormationTitle>
          <Techs>HTML - CSS - SASS - JavaScript - TypeScript - React - Redux - VueJs - Jest - Cypress - Bootstrap - JQuery - Git</Techs>
          <FormationYear>2023</FormationYear>
        </Card>
        <Card>
          <Imagem src={alura} alt="logo Alura" />
          <FormationTitle>Oracle ONE</FormationTitle>
          <Techs>HTML - CSS - JavaScript - Git - Carreira - Mindset - Gestão - Empreendedorismo - Foco - Habitos </Techs>
          <FormationYear>2024</FormationYear>
        </Card>
        <Card>
          <Imagem style={{ width: '160px' }} src={devclub} alt="logo DevClub" />
          <FormationTitle>Desenvolvedor Full Stack</FormationTitle>
          <Techs>HTML - CSS - JavaScript - TypeScript - React - NodeJs - Docker - PostgresSQL - MongoDB - Git</Techs>
          <FormationYear>2024</FormationYear>
        </Card>
      </Cards>
    </FormationsContainer>
  )
}

export default Formations