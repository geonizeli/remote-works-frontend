import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'

import brandImg from '../../assets/obc-icon.png'

export default function Topbar() {
  function AboutModal() {
    alert('click')
  }

  return (
    <Nav>
      <Brand>
        <BrandImg src={brandImg} alt="Logo da One Bit Code" />
        <BrandText>One Bit Code</BrandText>
      </Brand>

      <AboutBtn onClick={AboutModal} >
        <AiFillInfoCircle /> Sobre nós
      </AboutBtn>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: #142032;
  width: 100%;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  display: flex;
`

const Brand = styled.div`
  display: flex;
`

const BrandText = styled.div`
  margin: auto;
  color: #ffffff;
  font-size: 16px;
  padding-left: 8px;
`

const BrandImg = styled.img`
  width: 46px;
`

const AboutBtn = styled.button`
  color: #ffffff;
  background: none;
  border: none;
  font-size: 16px;
`