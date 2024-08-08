import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #4d3c56;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #4d3c56;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80;
  left: ${({ $sidebar }) => ($sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);

  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: 'rgb(232, 215, 250)' }}>
        <Nav>
          <NavIcon to='#' onMouseEnter={showSidebar} onMouseLeave={hideSidebar} >
            <FaIcons.FaBars />
          </NavIcon>
        </Nav>
        <SidebarNav $sidebar={sidebar ? 1: 0} onMouseEnter={showSidebar} onMouseLeave={hideSidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            
          </SidebarWrap>
        </SidebarNav>
        
      </IconContext.Provider>
      
    </>
  );
};

export default Sidebar;