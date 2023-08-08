import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";

const ContactWrapper = styled.div``; 

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  .content {
    color: ${props => props.theme.title};
    font-size: 55px;
    margin: 40px 0 10px;
    border-bottom: 10px solid ${props => props.theme.main};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 100px 0 50px;
  
`; 
const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  font-size: 20px;
  .info-title {
    font-weight: 600;
    margin-right: 10px;
  }
`; 

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 80px;
`;

const Move = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  color: ${props => props.theme.main};

  .link {
    margin-left: 10px;
    color: black;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.hover};
      text-decoration: underline;

    }
  }
`;



function Contact(props) {
  return (
    <ContactWrapper id='5'>
      <MainContent>
        <h2 className='content' >Contact</h2>
      </MainContent>

      <Wrapper>
        <Container>
          <ContainerText>
            <p className='info-title'>전화번호</p>
            <p className='info-content'>010-4136-5150</p>            
          </ContainerText>
  
          <ContainerText>
            <p className='info-title'>이메일</p>
            <p className='info-content'>jasoo22@naver.com</p>            
          </ContainerText>
  
          <ContainerText>
            <p className='info-title'>주소</p>
            <p className='info-content'>인천시 남동구 문화로145번길</p>            
          </ContainerText>

        </Container> 
      </Wrapper>

      <IconWrapper>
        

      <Move>
        <AiFillGithub />
        <a className='link' href='https://github.com/kiimjisoo'>깃허브</a>
      </Move>       
      <Move>
        <RxNotionLogo />
        <a className='link' href='https://www.notion.so/684f56c7421340a9971216d25a4e696b'>노션</a>
      </Move> 
      </IconWrapper>        
       

    </ContactWrapper>
  );
}

export default Contact;