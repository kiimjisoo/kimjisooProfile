import React from 'react';
import { styled } from 'styled-components';
import Amkor from "../images/Amkor.jpg";
import Automation from "../images/automation.png";

const CareerWrapper = styled.div`
  padding: 100px 0 100px;
`;

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

const SubContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  .photoimg {
    width: 330px;
    height: 220px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .container {
      margin: 10px 0;
    }
  }
`;

const ContainerText = styled.div`
  width: 330px;
  height: 200px;
  background: #CCD0E3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .context {
    font-size: 22px;
    line-height: 1.6rem;
    color: #383B6B;
    margin: 20px 0 0;
    text-align: center;
  }
  .date {
    font-size: 14px;
    margin: 8px 0

  }
  .subcontainer {
    color: #3B3A3A;
    font-size: 15px;
    line-height: 1.1rem;
    margin-bottom: 30px;
    text-align: center;
  }
`;

function Career(props) {
  return (
    <CareerWrapper id='2'>
      <MainContent>
        <h2 className='content' >Career</h2>
      </MainContent>

      <SubContent>

        <div className='container'>
          <img className='photoimg' alt='img' src={Automation}/>
          <ContainerText>
            <h2 className='context'>프론트엔드_웹코딩 개발자<br/> 정규과정</h2>
            <p className='date'>2023.03 ~ 2023.07</p>
            <p className='subcontainer'>웹퍼블리셔<br/>React.js</p>
          </ContainerText>
        </div>        
       
        <div className='container'>
          <img className='photoimg' alt='img' src={Amkor}/>
          <ContainerText>
            <h2 className='context'>앰코 코리아</h2>
            <p className='date'>2021.12 ~ 2023.02</p>
            <p className='subcontainer'>반도체 장비 운용</p>
          </ContainerText>
        </div>
        
        <div className='container'>
          <img className='photoimg' alt='img' src={Automation}/>
          <ContainerText>
            <h2 className='context'>엘파스</h2>
            <p className='date'>2019.09 ~ 2020.11</p>
            <p className='subcontainer'>PLC 프로그램 개발 보조<br/>전자회로 설계</p>
          </ContainerText>
        </div>



      </SubContent>      
    </CareerWrapper>
  );
}

export default Career;