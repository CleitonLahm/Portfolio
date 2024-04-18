import styled from "styled-components"

export const FormationsContainer = styled.div`
  background-color: #eaf2fd;
  margin-top: 90px;
  padding: 64px;
  gap: 32px;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: #464646;
  text-align: center;
  margin-bottom: 32px;
`
export const Cards = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Card = styled.div`
  background-color: #ffffff;
  width: 320px;
  height: 340px;
  padding: 16px;
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  flex-direction: column; 
  gap: 10px;
`;

export const FormationTitle = styled.h2`
  margin-top: 24px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #464646;
  text-align: center;
`
export const FormationYear = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #464646;
`

export const Imagem = styled.img`
  max-width: 100%;
`;

export const Techs = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #464646;
`