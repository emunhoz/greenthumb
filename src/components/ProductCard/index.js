import React from 'react'
import PropTypes from 'prop-types'
import BtnLink from '../BtnLink'
import { Sun, Water, Toxic } from '../SetIcon'
import * as S from './styles'

const ProductCard = ({ items }) => (
  <S.ProductCard>
    <S.Img src={items.url} alt={items.name} />
    <S.Title>{items.name}</S.Title>
    <S.Features>
      <S.Price>${items.price}</S.Price>
      <S.Icons>
        {items.toxicity ? <Toxic /> : null} {Sun[items.sun]}{' '}
        {Water[items.water]}
      </S.Icons>
    </S.Features>
    <BtnLink shape='line' to={`/${items.id}`}>
      buy now
    </BtnLink>
  </S.ProductCard>
)

ProductCard.propTypes = {
  items: PropTypes.object
}

export default ProductCard
