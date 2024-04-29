import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Products = () => {
  return (
    <div>

  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <b>Mediartrade</b>  
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Prossime Aste</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Private Sale</a></li>
        <li><Link to="/contact" className="nav-link px-2 link-dark">Contact</Link></li>
        <li><Link to="/login" className="nav-link px-2 link-dark">Accedi</Link></li>
        <div className="dropdown text-end mt-2">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            IT
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="#">exampe</a></li>
          </ul>
        </div>
      </ul>
    </header>
  </div>

  <main>
  
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Giorgio De Chirico</h1>

        </div>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt="" />

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-2.jpg" width="100%" height="225" alt="" />

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br />
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt="" />

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br />
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt=""/>

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt=""/>

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">

              <img src="../assets/prod-1.jpg" width="100%" height="225" alt="" />

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt=""/>

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt=""/>

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src="../assets/prod-1.jpg" width="100%" height="225" alt=""/>

              <div className="card-body">
                <p className="card-text">Spilla in argento e oro a forma di rana stilizzata.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Asta <br/>
                    <strong> Arte Moderna e Contemporanea
                      Milano, 21-22 Dicembre 2021</strong>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>


</div>
  );
}

export default Products;