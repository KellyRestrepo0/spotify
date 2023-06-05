
import { generarToken } from './metodoPost'
export async function consultarCanciones () {
  
  const IDARTISTA = '2fiiGUBgPsIKDCE0bTthnl'
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
  const TOKEN = `Bearer ${generarToken.TOKEN}`

  
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
