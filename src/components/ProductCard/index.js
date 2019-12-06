import React from 'react'
import PropTypes from 'prop-types'
import BtnLink from '../Button/BtnLink'
import { Sun, Water, Toxic } from '../SetIcon'
import * as S from './styles'

const ProductCard = ({ items, delay }) => (
  <S.ProductCard duration='1s' delay={delay}>
    <S.Img loading='lazy' src={items.url} alt={items.name} />
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
  items: PropTypes.object,
  delay: PropTypes.number
}

export default ProductCard
