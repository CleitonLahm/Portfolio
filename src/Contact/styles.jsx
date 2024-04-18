import styled from "styled-components"

export const Container = styled.div`
background-color: #EAF2FD;
  display: flex;
  padding: 64px;
`
export const ImgTel = styled.img`
  width: 464px;
  height: 593px;
`

export const ContactContainer = styled.div`
  width: 656px;
  gap: 32px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContactTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: #464646;
`
export const ContactSubTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #464646;
`

export const ContactInput = styled.input`
  width: 100%;
  gap: 8px;
  padding: 12px;
  border: none;
  border-radius: 4px;
`

export const Button = styled.button`
  width: 165px;
  height: 51px;
  padding: 16px;
  background-color: #2a7ae4;
  color: #ffffff;
  border: none;
`
export const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 12px;
`;