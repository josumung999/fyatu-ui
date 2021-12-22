import './navbar.scss'

const Navbar = () => {
  return (
    <header className="header-collapse-show bg-white" id="header-main">
      <nav className="navbar navbar-sticky sticky navbar-expand-lg navbar-dark shadow bg-white" id="navbar-main">
        <div className="container">
              <a href="!#">
                <img src="https://sandbox.fyatu.com/new/img/brand/logo_dark.png" alt="" id="navbar-logo" width="150px" />
              </a>
              <button
                className="navbar-toggler bg-dark"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbar-main-collapse"
                aria-controls="navbar-main-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navbar-collapse-overlay" id="navbar-main-collapse">
                <div className="position-relative">
                  <button 
                    className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbar-main-collapse"
                    aria-controls="navbar-main-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i data-feather="x">X</i>
                  </button>
                </div>
                <ul className="navbar-nav ml-lg-auto">
                  <li className="nav-item nav-item-spaced dropdown dropdown-animate" data-toggle="hover">
                    <a className="nav-link text-dark" data-toggle="dropdown" href="!#" aria-expanded="false">SERVICES</a>
                      <div className="dropdown-menu dropdown-menu-xl p-0">
                        <div className="d-lg-none px-4 text-center">
                          <a className="btn btn-block btn-outline-dark" href="/login" target="_self">Connectez-vous</a>
                        </div>
                        <div className="d-lg-none px-4 mt-2 text-center">
                          <a className="btn btn-block btn-fyatu" href="/register" target="_self">Créer Un Compte</a>
                        </div>
                        <div className="row no-gutters">
                          <div className="col-12 col-lg-6 order-lg-2 mt-4 mt-lg-0">
                            <div className="dropdown-body">
                              <h6 className="dropdown-header">Produits &amp; Services</h6>
                              <div className="list-group list-group-flush">
                                <div className="list-group-item border-0">
                                  <div className="media d-flex">
                                    <figure width="40px">
                                      <img alt="" src="https://sandbox.fyatu.com/new/img/hm/creditcard.png" className="img-fluid" height="40px" />
                                    </figure>
                                    <div className="media-body ml-3">
                                      <a href="/cards" className="d-block h6 mb-0">Cartes Virtuelles</a>
                                      <small className="text-sm text-muted mb-0">En savoir plus sur les CV.</small>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item border-0">
                                  <div className="media d-flex">
                                    <figure width="40px" >
                                      <img alt="" src="https://sandbox.fyatu.com/new/img/hm/money.png" className="img-fluid" height="40px" />
                                    </figure>
                                    <div className="media-body ml-3">
                                      <a href="/transfer" className="d-block h6 mb-0">Transfert d'argent</a>
                                      <small className="text-sm text-muted mb-0">Tout ce qu'il faut savoir.</small>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item border-0">
                                  <div className="media d-flex align-items-center">
                                    <figure width="40px">
                                      <img alt="" src="https://sandbox.fyatu.com/new/img/hm/shield.png" className="img-fluid" height="40px" />
                                    </figure>
                                    <div className="media-body ml-3">
                                      <a href="/security" className="d-block h6 mb-0">Sécurité & Protection</a>
                                      <small className="text-sm text-muted mb-0">Découvrir comment ça marche.</small>
                                    </div>
                                  </div>
                                </div>
                                <div className="list-group-item border-0">
                                  <div className="media d-flex align-items-center">
                                    <figure width="40px" >
                                      <img alt="" src="https://sandbox.fyatu.com/new/img/hm/info.png" className="img-fluid" width="40px" />
                                    </figure>
                                    <div className="media-body ml-3">
                                      <a href="!#" className="d-block h6 mb-0">Recharge Mobile</a>
                                      <small className="text-sm text-muted mb-0">Comment ça fonctionne.</small>
                                    </div>
                                  </div>
                                </div>
                                <h6 className="dropdown-header mt-4">Développeurs</h6>
                                  <div className="list-group-item border-0">
                                    <div className="media d-flex align-items-center">
                                      <figure width="40px">
                                        <img alt="" src="https://sandbox.fyatu.com/new/img/svg/icons/DOC_File.svg" className="img-fluid" width="40px" />
                                      </figure>
                                      <div className="media-body ml-3">
                                        <a href="/docs/api" className="d-block h6 mb-0">API Documentation</a>
                                        <small className="text-sm text-muted mb-0">Intégration de Fyatu</small>
                                      </div>
                                    </div>
                                  </div>
                                 </div>
                              </div>
                            </div>
                            <div class="col-12 col-lg-6 order-lg-1">
                              <div class="dropdown-body dropdown-body-right bg-dropdown-secondary h-100">
                                <h6 class="dropdown-header mt-4">Aide et Assistance</h6>
                                <div class="list-group list-group-flush">
                                  <div class="list-group-item bg-transparent border-0 px-0 py-2">
                                    <div class="media d-flex">
                                      <span class="h6"><i data-feather="code"></i></span>
                                      <div class="media-body ml-2">
                                        <a href="!#" class="d-block h6 mb-0">Intégration E-Commerce</a>
                                        <small class="text-sm text-muted mb-0">Apprenez à intégrer Fyatu dans vos boutiques en ligne de manière la plus simple.</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list-group-item bg-transparent border-0 px-0 py-2">
                                    <div class="media d-flex">
                                      <span class="h6"><i data-feather="bar-chart"></i></span>
                                      <div class="media-body ml-2">
                                        <a href="https://docs.fyatu.com" class="d-block h6 mb-0">Support</a>
                                        <small class="text-sm text-muted mb-0">Contacter notre équipe technique pour vous fournir une assistance particulière à votre problème.</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list-group-item bg-transparent border-0 px-0 py-2">
                                    <div class="media d-flex">
                                      <span class="h6"><i data-feather="map"></i></span>
                                      <div class="media-body ml-2">
                                        <a href="/contact" class="d-block h6 mb-0">Contacter-nous</a>
                                        <small class="text-sm text-muted mb-0">Contacter le dépertement commerciale pour plus d'information sur nos produits et services</small>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="list-group-item bg-transparent border-0 px-0 py-2">
                                    <div class="media d-flex">
                                      <span class="h6"><i data-feather="credit-card"></i></span>
                                      <div class="media-body ml-2">
                                        <a href="!#" class="d-block h6 mb-0">Blog</a>
                                        <small class="text-sm text-muted mb-0">Découvrir les dernières actualités et tendances dans le secteur de paiement.</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  </li>
                  <li className="nav-item nav-item-spaced d-none d-block">
                    <a href="!#" className="nav-link">A PROPOS</a>
                  </li>
                  <li className="nav-item nav-item-spaced d-none d-block">
                    <a href="!#" className="nav-link">FAQ</a>
                  </li>
                  <li className="nav-item nav-item-spaced d-none d-block">
                    <a href="!#" className="nav-link">CONTACT</a>
                  </li>
                </ul>
                  <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
                    <li className="nav-item">
                      <button className="btn btn-sm btn-outline-dark btn-icon ml-3">
                        <i className="fa fa-lock"></i> CONNEXION
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-sm btn-dark btn-icon ml-3">
                        <i className="fa fa-user"></i> CRÉER UN COMPTE
                      </button>
                    </li>
                  </ul>
              </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
