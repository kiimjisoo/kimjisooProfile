import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const AllBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const MenuWrapper = styled.div`
  height: 101px;
  width: 100%;
  background: ${props => props.theme.main};
  display: flex;
  justify-content: space-around;

  .sub {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.subtext};
    font-size: 26px;
    font-weight: 400;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 60px 0 10px; 

  .navWrapper {
    display: flex;
    flex-direction: row;
  }
  .nav-bar {
    font-size: 20px;
    color: ${props => props.theme.subtext};
    margin: 0 35px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.hover};
      transition: var(--trans,color .4s ease 0s);
    }
  }
  @media screen and (max-width: 767px) {
    .nav-bar {
      margin: 0 20px;
    }
  }
  
`;

function Header(props) {

  return (
    <AllBlock>
      <HeaderWrapper>

        <MenuWrapper>
            <span className='sub'>contact</span>            
          <Menu>
            <ul className='navWrapper'>
              <li>
                <Link to="1" spy={true} smooth={true} >
                  <a className='nav-bar'>소개</a>                  
                </Link>
              </li>
              <li>
                <Link to="2" spy={true} smooth={true} >
                  <a className='nav-bar'>경력</a>
                </Link>
              </li>
              <li>
                <Link to='3' spy={true} smooth={true} >
                  <a className='nav-bar'>스킬</a>                  
                </Link>
              </li>
              <li>
                <Link to='4' spy={true} smooth={true} >
                  <a className='nav-bar'>프로젝트</a>                  
                </Link>
              </li>
              <li>
                <Link to='5' spy={true} smooth={true} >
                  <a className='nav-bar'>문의</a>                  
                </Link>
              </li>
            </ul>
          </Menu>
        </MenuWrapper>
      </HeaderWrapper>
    </AllBlock>
    );
}

export default Header;