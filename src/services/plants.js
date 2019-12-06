import HTTP_CLIENT from './api'

export async function getPlants (sun, water, pets) {
  try {
    const resp = await HTTP_CLIENT.get(
      `?sun=${sun}&water=${water}&pets=${pets}`
    )
    return resp
  } catch (error) {
    return error
  }
}

export async function getPlant (id) {
  try {
    const resp = await HTTP_CLIENT.get(`/plant?id=${id}`)
    return resp
  } catch (error) {
    return error
  }
}

export async function postPlant (
  name = 'Raphael Fabeni',
  email = 'rfabeni@redventures.com',
  id = '1'
) {
  try {
    const resp = await HTTP_CLIENT.post('/', { name, email, id })
    return resp
  } catch (error) {
    return error
  }
}
