import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './assistance.scss'

const Assistance = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Questions Importantes", "Problèmes Techniques", "Difficultés Rencontrées"]
    })
  }, []);

  return (
    <section className="slice slice-lg bg-gradient-dark">
      <div className="container d-flex align-items-center text-center text-lg-left">
        <div className="row row-grid align-items-center">
          <div className="col-lg-8">
            <h1 className="h1 text-white text-center text-lg-left my-4">
              Assisitance 24/7 pour vos <br />
              <span className="text-warning" ref={textRef}></span>
            </h1>
            <p className="lead my-4 text-white text-center text-lg-left">
              Notre support client est actif 24 heures sur 7 jours pour vous assister.
              Une équipe déterminée pour vous apporter les solutions à tout problème 
              lié avec votre compte. Nous sommes très poli et très courtois envers nos clients
            </p>
            <div className="mt-5 d-flex">
              <button className="btn btn-primary">
                Trouver la Solution <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn btn-white d-none d-lg-block">
                Contacter Fyatu <i className="fa fa-phone"></i>
              </button>
            </div>
            
          </div>
          <div className="col-12 col-lg-4 mt-7 mt-lg-0">
            <div className="position-relative left-lg-0">
              <figure>
                <img src="https://sandbox.fyatu.com/assets/img/support.png" alt="" className="img-fluid mw-lg-120 rounded-top zindex-100"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Assistance
