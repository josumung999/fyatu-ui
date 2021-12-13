import { advantages } from '../../data';

import './advantages.scss'

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="h2 my-4">Une seule application, plusieurs avantages !</h2>
        <p className="lead">
          FYATU est au centre de plusieurs fonctionnalités vous aidant ainsi de vous retrouver dans l'une ou l'autre afin de développer votre propre Business autour de notre noyau.
        </p>
        <div className="row">
          {advantages.map(({id, img, title, desc}) => (
            <div key={id} className="col-6">
              <div className="details-card row">
                <div className="col-3">
                  <img src={img} alt="" className="img-fluid"/>
                </div>
                <div className="col-9">
                  <h3 className="h3">
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

export default Advantages
