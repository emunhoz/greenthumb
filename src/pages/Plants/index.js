import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import Pick from '../../images/illustrations/pick.png'
import { getPlants } from '../../services/plants'
import * as S from './styles'

import { FadeInUp } from 'animate-css-styled-components'

const PlantsPage = ({ sun, water, pets }) => {
  const [data, setData] = React.useState([])

  React.useEffect(
    () => {
      async function fecthData () {
        const resp = await getPlants(sun, water, pets)
        setData(resp.data)
      }
      fecthData()
    },
    [sun, water, pets]
  )

  return (
    <Layout>
      <S.Main>
        <S.Wrapper>
          <FadeInUp duration='0.5s' delay='.1s' style={{ margin: 0 }}>
            <img src={Pick} alt='' />
          </FadeInUp>
          <FadeInUp duration='0.5s' delay='.2s'>
            <S.Title>Our picks for you</S.Title>
          </FadeInUp>
        </S.Wrapper>
        <S.WrapperCards>
          {data.map((item, k) => (
            <ProductCard items={item} key={k} delay={2 * k} />
          ))}
        </S.WrapperCards>
      </S.Main>
    </Layout>
  )
}

PlantsPage.propTypes = {
  sun: PropTypes.string,
  water: PropTypes.string,
  pets: PropTypes.bool
}

const mapStateToProps = ({ features: { sun, water, pets } }) => ({
  sun,
  water,
  pets
})

export default connect(mapStateToProps)(PlantsPage)
