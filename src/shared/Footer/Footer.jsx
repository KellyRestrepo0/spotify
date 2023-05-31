import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="text-white py-4 bg-black">
        <div className="container">
          <nav className="row">
            <Link
              to="/"
              className="col-12 col-md-3 d-flex aling-items-center justify-content-center"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicoskvra.appspot.com/o/logo-morat%20blanco.png?alt=media&token=955ea20c-4a06-41a0-829a-b70774f8a3b3"
                className="mx-2"
                height="80"
              />
            </Link>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 text-center">Morat</li>
              <li className="text-center font-weight-bold">
                {" "}
                En este sitio podrás encontrar informacion de MORAT.
              </li>
            </ul>

            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2">Enlaces</li>
              <li>
                <Link to="/morat" className="text-reset">
                  {" "}
                  Morat
                </Link>
              </li>
              <li>
                <Link to="/items" className="text-reset">
                  Items{" "}
                </Link>
              </li>
            </ul>

            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 text-center">Síguenos</li>
              <li className="d-flex justify-content-between">
                <i className="bi bi-facebook"></i>  
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
              </li>
            </ul>
            <div className="container">
              <p className="text-center"> Realizado por Kelly R</p>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}
