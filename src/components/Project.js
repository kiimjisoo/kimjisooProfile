import React, { useState } from 'react';
import styled from 'styled-components';
import Movie from "../images/MovieSize.png";
import aqua from "../images/Aqua.png";
import starbucks from "../images/starbucks.png";

const ProjectWrapper = styled.div`
  padding: 100px 0;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  .title {
    font-size: 60px;
    color: ${props => props.theme.title};
    border-bottom: 10px solid ${props => props.theme.main};
  }
`;

const AllContain = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 40px 0;

  .movie {
    border-radius: 8px;
    &:hover {
      opacity: 0.3; 
      transition: 0.5s ease-in-out;
    }
  }

  @media screen and (max-width: 767px) {
    .movie {
    width: 600px;
    height: 380px;      
    }

  }
`;

const Title = styled.div`
  position: absolute;
  top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #E8D9FF;
  border-radius: 10px;
  width: 380px;
  height: 420px;
  background: rgba(255, 255, 255, 0.7);
  text-align: center;

  .title {
    font-size: 40px;
    font-weight: 600;
    color: #3D5975;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .content {
    font-size: 20px;
    margin: 10px 0;
  }
  .subcontent {
    font-size: 17px;
  }
  @media screen and (max-width: 767px) {
    height: 340px;
    weight: 280px;
    
  }
  

`;




function Project(props) {

  const [isShow, setIsShow] = useState(false);
  const [isShowAqua, setIsShowAqua] = useState(false);
  const [isShowStar, setIsShowStar] = useState(false);

  return (
    <ProjectWrapper id='4'>

      <MainTitle>
        <h1 className='title'>Project</h1>
      </MainTitle>
      
      <AllContain>

       <MainContainer >
          <img className='movie' 
            alt='screen' 
            src={Movie} 
            onMouseEnter={ () => {setIsShow(true)} } 
            onMouseLeave={ () => {setIsShow(false)} }/>
          { isShow ?  
            <Title>
              <h1 className='title'>Movie Green</h1>   
              <p className='content'>극장, OTT영화 등 다양한 영화 형태에 대한<br/> 접근성을 개선하기 위해 개발</p>         
              <p className='subcontent'>사용자들이 한 곳에서 다양한 영화를 검색하고,<br/> 리뷰를 확인 할 수 있도록 통합적인 플랫폼 제공</p>
            </Title> 
            : ""}
      </MainContainer>

      <MainContainer >
        <img className='movie' 
          alt='screen' 
          src={aqua} 
          onMouseEnter={ () => {setIsShowAqua(true)} } 
          onMouseLeave={ () => {setIsShowAqua(false)} }/>          
        { isShowAqua ?  
          <Title>
            <h1 className='title'>AQUA</h1>   
            <p className='content'>가상 아쿠아리움 페이지<br/></p>
            <p className='subcontent'>HTML로 구성한 모방 페이지입니다.<br/>수업시간에 배운 기본 기능 활용</p>

          </Title> : 
        ""}
      </MainContainer> 

      <MainContainer >
        <img className='movie' 
          alt='screen' 
          src={starbucks} 
          onMouseEnter={ () => {setIsShowStar(true)} } 
          onMouseLeave={ () => {setIsShowStar(false)} }/>          
        { isShowStar ?  
          <Title>
            <h1 className='title'>Starbucks</h1>   
            <p className='content'>클론코딩<br/></p>
            <p className='subcontent'>프론트엔드 스터디 첫 프로젝트<br/>수업시간에 배운 기능 활용</p>
          </Title> : 
        ""}
      </MainContainer> 




      </AllContain>

    </ProjectWrapper>
  );
}

export default Project;