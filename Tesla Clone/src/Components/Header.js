import { React } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
// import {useSelector, Provider} from 'react-redux';
// import {selectCars } from "../Components/Features/Car/carSlice";


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars)
  // console.log(cars);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <a href="#">Menu</a>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}></CustomClose>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  // width : 100vw;
  position : fixed;
  display : flex;
  align-items:center;
  padding: 0 20px;
  top :0;
  left :0;
  right :0;
  justify-content: space-between;
  z-index:1;
`
const Menu = styled.div`
  display : flex;
  align-items:center;
  flex:1;
  justify-content : center;
  a {
    font-weight : 600;
    text-teansform : uppercase;
    padding: 0 10px;
    flex-wrap : no-wrap;
  }

  @media(max-width : 1218px) {
    display : none;
  }

`

const RightMenu = styled.div`
display:flex;
align-items:center;
a {
  font-weight : 600;
  text-teansform : uppercase;
  margin-right: 10px;
  flex-wrap : no-wrap;
}

`

const CustomMenu = styled.div`

`
const BurgerNav = styled.div`
  position : fixed;
  top:0;
  bottom:0;
  right:0;
  background-color: white;
  width:300px;
  z-index:100;
  list-style :none;
  padding:20px;
  display: flex;
  flex-direction: column;
  text-align:start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition : transform 0.2s;
  li{
    padding : 15px 0;
    border-bottom : 1px solid rgba(0,0,0,.2);
    a{
      font-weight : 600;
    }
  }

`
const CustomClose = styled(CloseIcon)`
  cursor : pointer;
`

const CloseWrapper = styled.div`
display : flex;
justify-content : flex-end;
`