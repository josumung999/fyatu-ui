import './whychooseus.scss'
import { whyUseUs } from '../../data';


const WhyChoosUs = () => {
  return (
    <div className="why">

      <div className="container">
        <h1 className="display-1">
          Pourquoi +30,O00 clients nous font confiance ?
        </h1>
        <p className="lead">
          Fyatu facilite l'achat des cartes virtuelles, la recharge et le transfert d'argent.
        </p>
        <div className="row">
          {whyUseUs.map(({ id, img, title, desc }) => (
            <div className="col">
              <div className="card text-center">
                <div className="card-body">
                  <img src={img} alt=""/>
                  <h3 className="card-title">
                    {title}
                  </h3>
                  <p className="card-text">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChoosUs
