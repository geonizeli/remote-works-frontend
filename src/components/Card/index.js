import React from 'react'
import styled from 'styled-components'
import Modali, { useModali } from 'modali';
import { FaSuitcase, FaMoneyBill, FaLocationArrow } from 'react-icons/fa'


export default function Card({imgUrl, title, salary, location, keywords, link}) {
  const [modal, toggleModal] = useModali({
    title: title,
    animated: true,
    overlayClose: true,
    buttons: [
      <Modali.Button
        label="Candidatar-se"
        isStyleDefault
        onClick={() => alert('levar usuário a vaga')}
      />
    ]
  });

  return (
    <CardContainer onClick={toggleModal} >
      <Img src={imgUrl} alt="Company Logo"/>

      <Block>
        <Title>
          <FaSuitcase /><span>{title}</span>
        </Title>

        <Salary>
          < FaMoneyBill />
          <span>
            {Intl.NumberFormat(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL'
              }).format(salary)}
          </span>
        </Salary>

        <Keywords>{keywords}</Keywords>
      </Block>

      <Location>
        <FaLocationArrow />
        {location}
      </Location>

      <Modali.Modal {...modal}>
        <Img src={imgUrl} alt="Company Logo"/>

        <Salary>
          < FaMoneyBill />
          <span>
            {Intl.NumberFormat(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL'
              }).format(salary)}
          </span>
        </Salary>

        <Keywords>{keywords}</Keywords>

        <Location>
          <FaLocationArrow />
          {location}
        </Location>
      </Modali.Modal>

    </CardContainer>
  )
}

const CardContainer = styled.div`
  color: #7F7F7F;
  font-size: 14px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  height: 105px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  transition: all ease 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  }
`

const Img = styled.img`
  width: 150px;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: auto;

  svg {
    margin-right: 8px;
  }
`

const Title = styled.div`
  padding: 8px 16px;
`

const Salary = styled.div`
  padding: 8px 16px;
`

const Keywords = styled.div`
  padding: 8px 16px;
`

const Location = styled.div`
  margin: auto 0;
  padding: 8px 16px;
`