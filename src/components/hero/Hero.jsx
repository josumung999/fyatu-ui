import { useEffect, useRef } from 'react';
import { heroImages } from './../../data';
import './hero.scss'
import { init } from 'ityped';

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Créer les cartes virtuelles", "Recharger les mobiles", "Echanger le solde Perfect Money", "Acheter et dépenser ses Bitcoins"]
    })
  }, [])

  return (
    <section className="hero slice slice-lg bg-gradient-primary">
      <div className="container d-flex align-items-center text-center text-lg-left">
        <div className="row row-grid align-items-center">
          <div className="col-lg-8 col-sm-12">
          <h1 className="h1 text-white text-center text-lg-left my-4">
                La Plateforme Puissante pour <br/>
                <span ref={textRef}></span> 
              </h1>
              <p className="lead">
                Nous offrons les meilleures solutions pour
                 Développer votre Business dès maintenant.
                Les services disponibles partout dans le monde et sans limite.
              </p>
              <div className="mt-5 action-buttons">
                <button className="btn btn-primary">
                Ouvrir un Compte <i className="fa fa-user"></i>
                </button>
                <button className="btn btn-white  d-none d-lg-inline-block">
                  Télécharger Fyatu <i className="fa fa-download"></i>
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-left mt-5">
                <div className="client-group col">
                  <div className="row">
                    {heroImages.map(item => (
                      <div key={item.id} className="client col-3 py-3">
                        <img src={item.url} alt="Lorem"/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          <div className="right col-lg-4 col-sm-12 justify-content-center-sm">
            <div className="imgContainer">
              <img src="https://sandbox.fyatu.com/assets/img/home-hero-img.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
