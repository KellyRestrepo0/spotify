import { generarToken } from './metodoPost'
export async function consultarCanciones () {
  // const IDARTISTA = '2fiiGUBgPsIKDCE0bTthnl'
  const IDARTISTA = '4dpARuHxo51G3z768sgnrY'
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=co`

  const respuestaToken = await generarToken()
  const TOKEN = `Bearer ${respuestaToken.access_token}`

  const peticion = {
    method: 'GET',
    headers: {
      Authorization: TOKEN
    }
  }

  const respuesta = await fetch(URI, peticion)
  const canciones = await respuesta.json()

  return canciones
}
