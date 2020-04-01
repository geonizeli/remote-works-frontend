import React from 'react'
import styled from 'styled-components'

import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import MessengerShortcut from '../components/MessengerShortcut'

import Card from '../components/Card'

export default function Jobs() {
  return (
    <>
      <Topbar />

      <JobsContainer>
        {[0, 1, 2 , 3, 4].map(job => (
          <Card title={'Full Stack Engineer'}
                imgUrl={'http://brand.vtex.com/static/media/VTEX_pink_RGB.751a9fb5.svg'}
                salary={2000}
                location={'Araruama, RJ'}
                keywords={['Node.js', 'Ruby+', 'React']}/>
        ))}
      </JobsContainer>

      <Footer />

      <MessengerShortcut />
    </>
  )
}

const JobsContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding-top: 24px;
  min-height: calc(100vh - 80px - 56px);
`