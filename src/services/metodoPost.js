export async function generarToken () {
  const clientId = '5938fd7d0e5f4d889ba4db749d5780ad'
  const clientSecret = '63d8eca3cf88416ca881b4f92588b05b'
  const URL = 'https://accounts.spotify.com/api/token'
  const authParameter = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'grant_type=client_credentials&client_id=' +
      clientId +
      '&client_secret=' +
      clientSecret
  }

  const result = await fetch(URL, authParameter)
  const TOKEN = await result.json()

  return TOKEN
}
