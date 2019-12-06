import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { getPlant } from '../../services/plants'
import OrderForm from '../../components/Forms/Order'
import { Sun, Water, Toxic, Pet } from '../../components/SetIcon'
import Envelop from '../../images/illustrations/envelop.png'
import * as S from './styles'

const DetailsPage = ({ match }) => {
  const [data, setData] = React.useState([])
  const { name, price, sun, toxicity, url, water } = data || {}
  const [success, setSuccess] = React.useState(false)
  const { id } = match.params

  React.useEffect(
    () => {
      async function fecthData () {
        const resp = await getPlant(id)
        setData(resp.data)
      }
      fecthData()
    },
    [id]
  )

  return (
    <Layout color='var(--white)'>
      <S.Main>
        <S.PlantInfo>
          <S.Title>{name}</S.Title>
          <S.Price>${price}</S.Price>
          <S.Img src={url} alt={name} />
          <S.List>
            <S.ListItem>
              {Sun[sun]} {sun} sunlight
            </S.ListItem>
            <S.ListItem>
              {Water[water]} Water {water}
            </S.ListItem>
            <S.ListItem>
              {toxicity && (
                <>
                  <Toxic />
                  <strong>Beware!</strong>Toxic for pets
                </>
              )}
              {!toxicity && (
                <>
                  <Pet />
                  Non-toxic for pets
                </>
              )}
            </S.ListItem>
          </S.List>
        </S.PlantInfo>
        <S.Contact>
          {!success && (
            <>
              <S.TitleForm>Nice pick!</S.TitleForm>
              <S.Description>
                Tell us your name and e-mail and we will get in touch regarding
                your order ;)
              </S.Description>
              <OrderForm setSuccess={setSuccess} />
            </>
          )}
          {success && (
            <S.SuccessMessage>
              <S.TitleForm>Thank you!</S.TitleForm>
              <S.Description>
                You will hear from us soon. Please check your e-mail!
              </S.Description>
              <img src={Envelop} alt='envelop' />
            </S.SuccessMessage>
          )}
        </S.Contact>
      </S.Main>
    </Layout>
  )
}

DetailsPage.propTypes = {
  match: PropTypes.object
}

export default DetailsPage
