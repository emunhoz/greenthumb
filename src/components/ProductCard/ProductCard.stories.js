import ProductCard from '.'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

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
  }
]

export const primary = () => (
  <BrowserRouter>
    <Background>
      {data.map((item, k) => (
        <ProductCard items={item} key={k} delay={2 * k} />
      ))}
    </Background>
  </BrowserRouter>
)
