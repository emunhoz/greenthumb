import React from 'react'
import PropTypes from 'prop-types'
import BtnLink from '../Button/BtnLink'
import { Sun, Water, Toxic } from '../SetIcon'
import * as S from './styles'

const ProductCard = ({
  items: { url, name, price, toxicity, sun, water, id },
  delay
}) => (
  <S.ProductCard duration='1s' delay={delay}>
    <S.Img loading='lazy' src={url} alt={name} />
    <S.Title>{name}</S.Title>
    <S.Features>
      <S.Price>${price}</S.Price>
      <S.Icons>
        {toxicity ? <Toxic /> : null} {Sun[sun]} {Water[water]}
      </S.Icons>
    </S.Features>
    <BtnLink shape='line' to={`/${id}`}>
      buy now
    </BtnLink>
  </S.ProductCard>
)

ProductCard.propTypes = {
  items: PropTypes.object,
  delay: PropTypes.number
}

export default ProductCard
