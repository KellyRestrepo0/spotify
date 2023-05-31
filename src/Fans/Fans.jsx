import './Fans.css'

export function Fans () {
  return (
    <>
      <div className='col justify-content-center mb-5'>
        <div
          id='img'
          className='img-fluid'
        >
          <img src='https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/stiker2.png?alt=media&token=8bc9e358-47da-4cc4-b17d-fa964646c1e9' className='img fluid w-100' />
        </div>

        <div id='form' className='container w-400'>
          <form className='row g-3 p-3'>

            <h1> Cuanto conoces a morat?</h1>
            <div className='col-12 mb-3'>
              <label for='inputState' className='form-label'>
                ¿ CUANTOS INTEGRANTES TIENE LA BANDA?
              </label>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault1'>
                  4
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                <label className='form-check-label' for='flexRadioDefault2'>
                  6
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input ' type='radio' name='flexRadioDefault' id='flexRadioDefault3' />
                <label className='form-check-label' for='flexRadioDefault3'>
                  5
                </label>
              </div>
            </div>

            <div className='col-12 mb-3'>
              <label for='inputState' className='form-label'>
                ¿ DE DONDE PROVIENE LA BANDA??
              </label>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault1'>
                  Espana
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' />
                <label className='form-check-label' for='flexRadioDefault2'>
                  Chile
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault3' />
                <label className='form-check-label' for='flexRadioDefault3'>
                  Colombia
                </label>
              </div>
            </div>

            <div className='col-12 mb-3'>
              <label for='inputState' className='form-label'>
                ¿ NOMBRE DE LOS INTEGRANTES?
              </label>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault1'>
                  Martin vargas,Simn Vargas,Juan Pablo Izasa,Juan Pablo Villamil
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault2'>
                  Santiago Vargas,Juanes,Juan Pablo Loaiza
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault3'>
                  Martin Morales,James Jkson, Simon VArgas
                </label>
              </div>
            </div>

            <div className='col-12 mb-3'>
              <label for='inputState' className='form-label'>
                ¿PRIMERA CANCIÓN DE LA BANDA Y COLABORACIÓN CON PAULINA RUBIO?
              </label>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault1'>
                  Cuanto me duele
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault2'>
                  Mi nuevo vicio
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault3'>
                  Cuando nadie ve
                </label>
              </div>
            </div>

            <div className='col-12 mb-3'>
              <label for='inputState' className='form-label '>
                ¿QUIEN HACE QUÉ?
              </label>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault1'>
                  EH?SIMÓN PERCUSIÓN Y VOCALISTA, MARTÍN BAJO Y VOCALISTA, JP VILLA GUITARRAS Y COROS JP ISAZA BANJO
                </label>
              </div>
              <div className='form-check'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault2'>
                  Santiago Bajo y coros, Martin guitarra y percusion
                </label>
              </div>
              <div className='form-check mb-5'>
                <input className='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
                <label className='form-check-label' for='flexRadioDefault3'>
                  MARTÍN PERCUSIÓN Y COROS, SIMÓN BAJO Y COROS,JP VILLAMIL BANJO Y VOCALISTA Y JP ISAZA GUITARRAS Y
                </label>
              </div>
            </div>

            <div className='col-12 mb-3'>
              <label for='inputEmail4' className='form-label mb-0'>
                Email
              </label>
              <input type='email' className='form-control' id='inputEmail4' />
            </div>
            <div className='col-12'>
              <label for='inputPassword4' className='form-label mb-0'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='inputPassword4'
              />
            </div>
            <div className='col-12'>
              <label for='inputAddress' className='form-label mb-0'>
                Nombre
              </label>
              <input
                type='text'
                className='form-control'
                id='inputAddress'
                placeholder='EJ: kell Restrepo'
              />
            </div>
            <div className='col-12'>
              <label for='inputAddress2' className='form-label mb-0'>
                fecha de nacimiento
              </label>
              <input
                type='text'
                className='form-control'
                id='inputAddress2'
                placeholder='12/01/2023'
              />
            </div>

            <div className='col-12 d-flex justify-content-center '>
              <button type='submit' className='btn btn-primary col-lg-4 col-md-6 col-sm-12 my-3'>
                TEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
