import React from 'react'
import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import Pick from '../../images/illustrations/pick.png'
import { getPlants } from '../../services/plants'
import * as S from './styles'

const PickPage = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fecthData () {
      const resp = await getPlants()
      setData(resp.data)
    }
    fecthData()
  }, [])

  return (
    <Layout>
      <S.Main>
        <S.Wrapper>
          <img src={Pick} alt='' />
          <S.Title>Our picks for you</S.Title>
        </S.Wrapper>
        <S.WrapperCards />
        {data.map((item, k) => (
          <ProductCard items={item} key={k} />
        ))}
      </S.Main>
    </Layout>
  )
}

export default PickPage
