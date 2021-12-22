import { advantages } from '../../data';

import './advantages.scss'

const Advantages = () => {
  return (
    <section className="slice slice-lg bg-section-light">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-12">
            <h2 className="h1 text-black my-4">Une seule application, plusieurs avantages !</h2>
            <p className="lead lh-200 text-black">
              FYATU est au centre de plusieurs fonctionnalités vous aidant ainsi de vous retrouver dans l'une ou l'autre afin de développer votre propre Business autour de notre noyau.
            </p>
          </div>
        </div>
        <div className="row">
          {advantages.map(({id, img, title, desc}) => (
            <div key={id} className="col-lg-6 col-12 col-sm-12">
              <div className="card text-center hover-translate-y-n10 hover-shadow-lg">
                <div className="row px-4 pb-4 pt-4">
                  <div className="col-3 text-center">
                    <img src={img} alt="" className="img-fluid"/>
                  </div>
                  <div className="col-9 text-left">
                    <h5>{title}</h5>
                    <p className="mt-2 mb-0">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Advantages
