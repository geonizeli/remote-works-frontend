import React from 'react'
import styled from 'styled-components'

import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import MessengerShortcut from '../components/MessengerShortcut'
import Autocomplete from '../components/Autocomplete'

import Card from '../components/Card'

export default function Jobs() {
  const suggestions = [
    "Alligator",
    "Bask",
    "Crocodilian",
    "Death Roll",
    "Eggs",
    "Jaws",
    "Reptile",
    "Solitary",
    "Tail",
    "Wetlands"
  ]

  return (
    <>
      <Topbar />

      <Filter>
        <form onSubmit={(e) => (e.preventDefault())}>
          <AutocompleteContainer>
            <Autocomplete
              suggestions={suggestions}
              placeholder="Pesquise por palavras chave."
            />
          </AutocompleteContainer>

          <button type="submit">
            Adicionar palavra chave
          </button>
        </form>
      </Filter>

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

const Filter = styled.div`
  min-height: 150px;
  margin-top: 24px;
  text-align: center;

  form {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
  }
`

const AutocompleteContainer = styled.div`
  position: relative;
  max-width: 500px;

  ul {
  }
`