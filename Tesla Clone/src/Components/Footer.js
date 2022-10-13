import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <Container>
        <a href="#"> Tesla 2022</a>
        <a href="">Privacy and Legal</a>
        <a href="">Vehicle Recalls</a>
        <a href="">Contact</a>
        <a href="">Careers</a>
        <a href="">News</a>
        <a href="">Engage</a>
        <a href="">Locations</a>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    height : 60px;
    font-size : 13px;
    font-weight : 600;
    a{
        padding : 6px;
        letter-spacing : 1px;
    }
`
const Copyright = styled(CopyrightIcon)`
    cursor : pointer;
`