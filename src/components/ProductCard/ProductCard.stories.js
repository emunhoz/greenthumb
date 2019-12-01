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
    img: 'https://media.gettyimages.com/photos/closeup-of-potted-plant-against-white-background-picture-id1032762284?s=2048x2048',
    title: 'Title example',
    value: '$30',
    features: 'test'
  },
  {
    id: 2,
    img: 'https://media.gettyimages.com/photos/closeup-of-potted-plant-against-white-background-picture-id1032762284?s=2048x2048',
    title: 'Title example',
    value: '$30',
    features: 'test'
  },
  {
    id: 3,
    img: 'https://media.gettyimages.com/photos/closeup-of-potted-plant-against-white-background-picture-id1032762284?s=2048x2048',
    title: 'Title example',
    value: '$30',
    features: 'test'
  }
]

export const primary = () => (
  <Background><ProductCard items={data} /></Background>
)
