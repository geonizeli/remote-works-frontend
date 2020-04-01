import React from 'react'
import styled from 'styled-components'

import MsgIcon from '../../assets/messenger-icon.png'

export default function MessengerShortcut() {
  return (
    <MsgContainer href="https://facebook.com.br" target="_blank">
      <img src={MsgIcon} alt="Logo do Facebook Messenger" />
    </MsgContainer>
  )
}

const MsgContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;

  img {
    width: 48px;
  }
`
