import { useEffect, useRef } from 'react';
import './hero.scss';
import { heroImages } from './../../data';
import { init } from 'ityped';

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Créer les cartes virtuels", "Recharger les mobiles", "Echanger le solde Perfect Money", "Acheter et dépenser ses Bitcoins"]
    })
  }, [])

  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">
            La Plateforme Puissante pour <br/>
            <span ref={textRef}></span> 
          </h1>
          <p className="h6"> Nous offrons les meilleures solutions pour Développer votre Business dès maintenant. Les services disponibles partout dans le monde et sans limite.</p>
          <div className="action-buttons">
            <button className="btn btn-lg btn-info mx-3">
             Ouvrir un Compte <i className="fa fa-user"></i>
            </button>
            <button className="btn btn-light btn-lg">
              Télécharger Fyatu <i className="fa fa-download"></i>
            </button>
          </div>
          <div className="row">
            {heroImages.map(item => (
              <div key={item.id} className="col">
                <img width="120" src={item.url} alt="Lorem"/>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="https://sandbox.fyatu.com/assets/img/home-hero-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
