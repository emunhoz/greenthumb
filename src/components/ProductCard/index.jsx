import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { Sun, Water, Toxic } from '../SetIcon'
import * as S from './styles'

const ProductCard = ({
  items: { url, name, price, toxicity, sun, water, id },
  delay
}) => (
  <S.ProductCard duration='1s' delay={delay}>
    <img loading='lazy' src={url} alt={name} />
    <S.Title>{name}</S.Title>
    <S.Features>
      <S.Price>${price}</S.Price>
      <S.Icons>
        {toxicity && <img src={Toxic} />} <img src={Sun[sun]} /> <img src={Water[water]} />
      </S.Icons>
    </S.Features>
    <Link to={`/${id}`}>
      <Button shape='line'>
        buy now
      </Button>
    </Link>
  </S.ProductCard>
)

ProductCard.propTypes = {
  items: PropTypes.object,
  delay: PropTypes.number
}

export default ProductCard
