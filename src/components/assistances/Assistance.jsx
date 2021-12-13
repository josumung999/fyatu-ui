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
    <div className="assistance">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="h2">
              Assisitance 24/7 pour vos <br />
              <span className="dynamic-text" ref={textRef}></span>
            </h2>
            <p className="lead my-4">
              Notre support client est actif 24 heures sur 7 jours pour vous assister.
              Une équipe déterminée pour vous apporter les solutions à tout problème 
              lié avec votre compte. Nous sommes très poli et très courtois envers nos clients
            </p>
            <div className="action-buttons my-4">
              <button className="btn btn-lg btn-info">
                Trouver la Solution <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn btn-lg btn-light mx-3">
                Contacter Fyatu <i className="fa fa-phone"></i>
              </button>
            </div>
            
          </div>
          <div className="col-4">
            <img src="https://sandbox.fyatu.com/assets/img/support.png" alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assistance
