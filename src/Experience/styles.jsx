import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Project = styled.div`
  display: flex;
  margin-bottom: 64px;
  gap: 16px;
`
export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: #464646;
  margin: 32px 0;
`
export const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: none;
`;

export const ProjectContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 60%;
`
export const ProjectContentTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #464646;
  margin-bottom: 8px;
`

export const ProjectContentDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #464646;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px auto;
`

export const LinkRepositorio = styled.a`
  width: 116px;
  height: 51px;
  border: 1px solid #2A7AE4;
  color: #2A7AE4;
  font-size: 16px;
  line-height: 19px;
  padding: 16px;
`
export const LinkDemo = styled.a`
  width: 116px;
  height: 51px;
  background-color: #2A7AE4;
  color: #ffffff;
  font-size: 16px;
  line-height: 19px;
  padding: 16px;
`