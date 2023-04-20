import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { getPlant, postPlant } from '../../services/plants'
import OrderForm from '../../components/Forms/Order'
import { Sun, Water, Toxic, Pet } from '../../components/SetIcon'
import Envelop from '../../images/illustrations/envelop.png'
import { CommentError } from 'styled-icons/boxicons-solid/CommentError'
import * as S from './styles'

const DetailsPage = ({ match }) => {
  // const [data, setData] = useState([])
  // const { name, price, sun, toxicity, url, water } = data || {}
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { id } = match.params

  // useEffect(
  //   () => {
  //     async function fecthData () {
  //       const resp = await getPlant(id)
  //       setData(resp.data)
  //     }
  //     fecthData()
  //   },
  //   [id]
  // )
  const data = {
    url: 'https://thumbs.dreamstime.com/b/yucca-potted-plant-11663745.jpg',
    name: 'Plant 1',
    price: '1,23',
    toxicity: true,
    sun: 'high',
    water: 'regularly',
    id: '1'
  }

  const onSubmitForm = async data => {
    const resp = await postPlant()
    console.log(resp.status, 'resp.status')
    if (resp.status === 200) return setSuccess(true)
    if (resp.status !== 200) return setError(true)
  }

  console.log(Sun[data.sun], 'asdasdasd')

  return (
    <Layout color='var(--white)'>
      <S.Main>
        <S.PlantInfo>
          <S.Title>{data.name}</S.Title>
          <S.Price>${data.price}</S.Price>
          <S.Img src={data.url} alt={data.name} />
          <S.List>
            <S.ListItem>
              <img src={Sun[data.sun]} /> {data.sun} sunlight
            </S.ListItem>
            <S.ListItem>
              <img src={Water[data.water]} /> Water {data.water}
            </S.ListItem>
            <S.ListItem>
              {data.toxicity && (
                <>
                  <img src={Toxic} />
                  <strong>Beware!</strong>Toxic for pets
                </>
              )}
              {!data.toxicity && (
                <>
                  <img src={Pet} />
                  Non-toxic for pets
                </>
              )}
            </S.ListItem>
          </S.List>
        </S.PlantInfo>
        <S.Contact>
          {error && (
            <S.ErrorMessage>
              <CommentError />
              <p>Something wrong :(</p>
            </S.ErrorMessage>
          )}
          {!success && (
            <>
              <S.TitleForm>Nice pick!</S.TitleForm>
              <S.Description>
                Tell us your name and e-mail and we will get in touch regarding
                your order ;)
              </S.Description>
              <OrderForm onSubmitForm={data => onSubmitForm(data)} />
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
