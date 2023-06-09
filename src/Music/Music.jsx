import { consultarCanciones } from '../services/servicioCanciones'
import { useState, useEffect } from 'react'
import { generarToken } from '../services/metodoPost'
import { MdSecurity} from 'react-icons/md'
import './Music.css'
import CalificacionEstrellas from '../CalificacionEstrellas/CalificacionEstrellas';


export function Music () {
  const [canciones, setCanciones] = useState(null)
  const [estacargando, setEstacargando] = useState(true)
  const [accessToken, setAccessToken] = useState(null)
  

  useEffect(function () {
    consultarCanciones().then(function (respuesta) {
      console.log(respuesta)
      setCanciones(respuesta.tracks)
      setEstacargando(false)
    })
  }, [])
  useEffect(function () {
    generarToken().then(function (result) {
      setAccessToken(result.access_token)
      console.log(accessToken)
    })
  }, [])

  if (estacargando) {
    return (
      <>
        <h1>EStamso cargando</h1>
      </>
    )
  } else {
    return (
      <>
        <section id='contenedor_music'>
          {canciones?.map(function (cancion) {
            const valorCalificacion = cancion.popularity
            return (
              <div key={cancion.id}>
                <div className='col w-50 h-25 p-3 mx-auto d-block'>
                  <div className='card shadow my-3 mx-1 py-4'>
                    <img
                      src={cancion.album.images[0].url}
                      alt='foto'
                      className='img-fluid w-25 h-50 rounded-circle mx-auto d-block'
                    />

                    <h3 className='text-center fw-bold'>{cancion.name}</h3>
                    <h3 className='text-center fw-bold'>
                    <CalificacionEstrellas valor={valorCalificacion} />
                    
                    </h3>
                  
                    <h4 className='text-center'>{cancion.album.name}</h4>
                   {/*  <h4 className='text-center'>{cancion.duration_ms}</h4> */}
                    <audio
                      className='mx-auto d-block'
                      controls
                      src={cancion.preview_url}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </section>
      </>
    )
  }
}
