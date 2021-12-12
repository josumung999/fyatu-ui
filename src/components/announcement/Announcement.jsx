import './announcement.scss'

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="imgContainer">
              <img src="https://sandbox.fyatu.com/assets/img/methods.png" alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col">
            <h2 className="h2">Les modes de <br /> paiement locaux et internationaux. </h2>
            <p className="lead"> Fyatu vous offre la possibilité d'alimenter votre compte ou de retirer l'argent dans votre compte via les modes de paiements locaux dans 14 pays et d'autres modes de paiements internationaux pour les restes des pays du monde.</p>
            <button className="btn btn-demo btn-lg btn-info">
              Demander une Démonstration <i className="fa fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement
