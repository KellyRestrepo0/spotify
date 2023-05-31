export async function consultarCanciones () {
  // receta para consumir apis para JS

  // 1. PARA DONDE VAMOS
  // URL+EP DEL SERvICIO
  const IDARTISTA = '2fiiGUBgPsIKDCE0bTthnl'
  const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
  const TOKEN = 'Bearer BQA5RnERdmx5Er3na64eypPrDruqkcq4PVlXJlC7w9b-zL489N3hUtnFIM2-NWugz3fxpHiQWLA-MCBElGSOw3-Gqb8HYoHsn8Li3GDCrmyw5y8ZjsQ'

  // 2. QUE VAS HACER ALLA OME..
  // CONFIGURAR LA PETICION
  const peticion = {
    method: 'GET',
    headers: {
      Authorization: TOKEN
    }
  }
  // PIDA EL TAXI
  // utilice la promesa FETCH para ir al back y consumir el api
  const respuesta = await fetch(URI, peticion)
  const canciones = await respuesta.json()

  return canciones
}
