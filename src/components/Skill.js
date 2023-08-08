import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 0;
`;
const SkillWrapper = styled.div`
  background: rgba(155, 150, 203, 0.1);
  padding: 80px 0 100px;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  .maintitle {
    font-size: 55px;
    color: ${props => props.theme.title};
  }
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .skilltitle {
    font-size: 30px;
    color: #3D5975;
    display: flex;
    padding: 0 70px;
  }
  @media screen and (max-width: 767px) {
    .skilltitle {
      padding: 0 30px;
    }
  }
`;


function Skill(props) {
  return (
    <Wrapper id='3'>

    
    <SkillWrapper >
      <Skills>
        <h1 className='maintitle'>SKILLS</h1>
      </Skills>
      <SkillName>
        <h1 className='skilltitle'>HTML</h1>
        <h1 className='skilltitle'>CSS</h1>
        <h1 className='skilltitle'>JavaScript</h1>
        <h1 className='skilltitle'>React</h1>
        <h1 className='skilltitle'>HTML5</h1>

      </SkillName>
    </SkillWrapper>
    </Wrapper>
  );
}

export default Skill;