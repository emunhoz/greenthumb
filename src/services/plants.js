import HTTP_CLIENT from './api'

export async function getPlants () {
  try {
    const resp = await HTTP_CLIENT.get('?sun=high&water=rarely&pets=false')
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
