import React from 'react'
import styled from 'styled-components'

import ObcLogo from '../../assets/obc-logo.png'

export default function Footer(params) {
  return (
    <FooterContainer>
      <img src={ObcLogo} alt="Logo One Bit Code" />

      <FooterText>
        Feito com <span>S2</span> pelos alunos da OneBitCode
      </FooterText>
    </FooterContainer>
  )

}

const FooterContainer = styled.footer`
  height: 80px;
  display: flex;
  background-color: #142032;
  color: #ffffff;

  img {
    height: 50px;
    width: 160px;
    margin: auto;
  }
  `

const FooterText = styled.div`
  margin: auto;
  font-size: 16px;

  span {
    font-weight: 600;
  }

`
