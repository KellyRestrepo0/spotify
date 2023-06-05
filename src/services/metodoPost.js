/* export async function generarToken() {


    const client_id='5938fd7d0e5f4d889ba4db749d5780ad'
    const client_secret='63d8eca3cf88416ca881b4f92588b05b'
    //const URI = 'https://accounts.spotify.com/api/token'

    const peticion={
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:
            'grant_type=client_credentials&client_id=' +client_id+ '&client_secret=' +client_secret         
}
        fetch('https://accounts.spotify.com/api/token',peticion)
        const respuesta = await fetch(URI, peticion)
        const token = await respuesta.data.access_token

  return token
} */
export async function generarToken () {
    const client_id='5938fd7d0e5f4d889ba4db749d5780ad'
    const client_secret='63d8eca3cf88416ca881b4f92588b05b'
    const URL = 'https://accounts.spotify.com/api/token'
    const authParameter = {
    method:'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret 
    }

    const result = await fetch (URL, authParameter)
    const TOKEN = await result.json()

    return TOKEN
}

