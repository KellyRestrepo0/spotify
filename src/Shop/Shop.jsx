import './Shop.css'

export function Shop () {
  const productos = [
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto1.webp?alt=media&token=cc8e5d1c-6031-401c-8982-22c8dc88ac77',
      banda: 'MORAT',
      nombre: 'Si Ayer Fuera Hoy (Doble Picture Disc Exclusivo 10 + Lámina firmada) - Importado',
      precio: '$362,950',
      id: 1
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto2.webp?alt=media&token=1e8e1637-7b3c-4a3d-ac3a-5be6958da8b6',
      banda: 'MORAT',
      nombre: 'Si Ayer Fuera Hoy (Vinilo) - Importado',
      precio: '$163,030',
      id: 2
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto3.webp?alt=media&token=86b86002-c5a8-4c4d-8665-6a707621b135',
      banda: 'MORAT',
      nombre: 'Si Ayer Fuera Hoy (CD) - Importado',
      precio: '$84.490',
      id: 3
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto4.webp?alt=media&token=5820a6a1-dddf-4290-8c13-31c187174b3a',
      banda: 'MORAT',
      nombre: 'The Black Collection Bucket Hat',
      precio: '$95.200',
      id: 4
    },

    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto5.webp?alt=media&token=d63e8f74-16a6-459b-bd0a-2ddb39a08e9e',
      banda: 'MORAT',
      nombre: 'Gorra Mor Edición Limitada Salir Con Vida',
      precio: '$95.200',
      id: 5
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto6.webp?alt=media&token=6c22d8fe-164f-4491-8157-bb6f9eb59910',
      banda: 'MORAT',
      nombre: 'Camiseta Mor Edición Limitada Salir Con Vida',
      precio: '$107.100',
      id: 6
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto7.webp?alt=media&token=06b60564-bded-4125-9fc8-7d38b7398ee9',
      banda: 'MORAT',
      nombre: 'The Black Collection Hoodie',
      precio: '$273.700',
      id: 7
    },
    {
      foto: 'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/producto8.webp?alt=media&token=c6c67649-121a-4eb6-ad8f-aa7296d7e941',
      banda: 'MORAT',
      nombre: 'The Black Collection Worker Shirt',
      precio: '$208.250',
      id: 8
    }

  ]
  function quehagocuandosedeelevento (evento) {
    (evento.target.classList.add('blancoYnegro'))
  }
  function quehagocuandosedeelotroevento (evento) {
    (evento.target.classList.remove('blancoYnegro'))
  }
  function zoomImagen (evento) {
    (evento.target.classList.add('zoom'))
  }
  // carrusel de productos

  return (
    <>
      <div
        id='fondo'
        className='container-fluid w-900'style={{
          backgroundImage: 'url(\'https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/moratTienda%20(2).jpg?alt=media&token=bde20e38-9595-4485-a55d-1ea412714180\')'
        }}
      >

        <p className='mt-5 mx-5 text-white w-50 fs-6'>
          <h1> New • The Black Collection</h1>
          <hr />
          "Desde que empezamos nuestra nueva gira el color negro se ha convertido en la base desde la cual hemos diseñado casi todo lo que hemos hecho. Toda la ropa que usamos durante los conciertos y en gran parte de nuestro día a día es negra; nos hemos dado cuentade lo útil que es, de cómo combina con todos los colores, todos los espacios, de lo fácil que es hacer que el negro sea casual o elegante, de que para trabajar es un color que funciona muy bien y que, al final, ha logrado darle un uniforme a todo nuestro equipo, desde la banda en escenario hasta nuestro equipo en backstage. Ahora queremos hacerlos a ustedes parte del mismo estilo al que tanto cariño le hemos ganado. Les presentamos nuestra nueva colección: The Black Collection.”-- Morat
        </p>
      </div>

      <div className='row row-cols1-1 row-cols-md-4 g-3 my-3 mx-5'>

        {
                    productos.map(function (producto) {
                      return (
                        <div key={producto.id}>
                          <div className='col'>
                            <div className='card h-400  shadow '>
                              <img src={producto.foto} alt='foto' className='img-fluid w-100 h-100' onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento} onMouseOut={zoomImagen} />
                              <h3 className='text-center fw-bold'>{producto.banda}</h3>
                              <h4 className='text-center'>{producto.nombre}</h4>
                              <h3 className='text-center fw-bold'>{producto.precio}</h3>
                            </div>
                          </div>
                        </div>
                      )
                    })
                }

      </div>

    </>
  )
}
