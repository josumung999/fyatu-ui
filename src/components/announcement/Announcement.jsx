import './announcement.scss'

const Announcement = () => {
  return (
    <section className="slice bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 p-2">
            <img class='coins-img p-4' alt="" src="https://sandbox.fyatu.com/assets/img/methods.png" width='100%' />
          </div>
          <div className="col-lg-5 col-12">
            <h1 className="text-black pt-4">
              Les modes de paiement locaux et internationaux. 
            </h1>
            <p className="mt-2 text-black">
              Fyatu vous offre la possibilité d'alimenter votre compte ou de retirer l'argent dans votre compte via les modes de paiements locaux dans 14 pays et d'autres modes de paiements internationaux pour les restes des pays du monde.
            </p>
            <button className="btn btn-primary mt-4">
              Demander une Démonstration <i className="fa fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcement
