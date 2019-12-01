import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import * as S from './styles'

const ProductCard = ({ items }) => (
  <S.Wrapper>
    {items.map((item, k) => (
      <S.ProductCard key={k}>
        <S.Img src={item.img} alt={item.title} />
        <S.Title>{item.title}</S.Title>
        <S.Features>
          <S.Price>{item.value}</S.Price>
          <S.Icons>{item.value}</S.Icons>
        </S.Features>
        <Button>buy bow</Button>
      </S.ProductCard>
    ))}
  </S.Wrapper>
)

ProductCard.propTypes = {
  items: PropTypes.array
}

export default ProductCard
