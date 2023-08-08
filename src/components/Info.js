import React from 'react';
import styled from 'styled-components';
import photo from "../images/image01.png";


const Wrapper = styled.div`

`;

const InfoWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 30px 0;
  top: 80px;

  @media screen and (max-width: 767px) {
    flex-direction: column;

  }

`;

const RightContent = styled.div`

  .title {
    font-size: 55px;
    color: ${props => props.theme.title};
    font-weight: 400;
    margin-bottom: 15px;
    padding-bottom: 7px; 
    border-bottom: 10px solid #383B6B;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
`;



const Container = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  .text-info {
    margin-top: 10px;
    font-size: 17px;
    line-height: 1.1rem;
  }
  .introduce {
    margin-top: 10px;
    font-size: 20px;
    line-height: 1.8rem;
  }
  .link {
    text-decoration: none;
    color: #000;
    &:hover {
      color: #625BC9;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const LeftContent = styled.div`

  .photo {
    width: 250px;
    height: 330px;
    margin: 30px 40px;
  }
`;


function Info(props) {
  return (
    <Wrapper id='1'>
      <InfoWrapper>

        <RightContent >
          <h1 className='title'>김지수</h1>
          <Container>
            <p className='text-info'>☎️ CONTACT</p>
            <p className='text-info'>TEL : 010-4136-5150</p>
            <p className='text-info'>E-MAIL : jasoo22@naver.com</p>
            <p className='text-info'>GITHUB : <a className='link' href='https://github.com/kiimjisoo'>https://github.com/kiimjisoo<br/></a></p>
            <p className='text-info'>NOTION : <a className='link' href='https://www.notion.so/684f56c7421340a9971216d25a4e696b'>https://www.notion.so/684f56c7421340a9971216d25a4e696b</a></p>
           </Container>

           <Container>
            <p className='introduce'>고객이 원하는 스타일의 홈페이지를 구현합니다.</p>
            <p className='introduce'>단순한 아이디어 구상부터 페이지 제작 등 가능합니다.</p>
            <p className='introduce'>빠른 적응력과 습득력으로 업무에 임하겠습니다.</p>
         
          </Container>
        </RightContent>  
  
        <LeftContent>
          <img className='photo' src={photo}/>
        </LeftContent>

      </InfoWrapper>
    </Wrapper>
  );
}

export default Info;