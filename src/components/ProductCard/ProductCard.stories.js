import React from 'react'
import ProductCard from '.'
import styled from 'styled-components'

export default {
  title: 'ProductCard'
}

const Background = styled.div`
  background: rgb(246, 246, 246);
  height: 100vh;
  padding: 30px;
`

const data = [
  {
    id: 1,
    name: 'Succulent Bowl',
    sun: 'high',
    water: 'rarely',
    url: 'https://front-static-recruitment.s3.amazonaws.com/succulent-bowl.jpg',
    price: 10,
    toxicity: false
  },
  {
    id: 2,
    name: 'Succulent Bowl',
    sun: 'high',
    water: 'rarely',
    url: 'https://front-static-recruitment.s3.amazonaws.com/succulent-bowl.jpg',
    price: 20,
    toxicity: false
  },
  {
    id: 3,
    name: 'Succulent Bowl',
    sun: 'high',
    water: 'rarely',
    url: 'https://front-static-recruitment.s3.amazonaws.com/succulent-bowl.jpg',
    price: 30,
    toxicity: true
  }
]

export const primary = () => (
  <Background>
    <ProductCard items={data} />
  </Background>
)
