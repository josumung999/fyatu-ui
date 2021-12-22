import { countries } from '../../data';

import './countries.scss'

const Countries = () => {
  return (
    <section className="slice slice-lg bg-white">
      <div className="container position-relative zindex-100">
        <h2 className="h2 text-center text-black">
        Réjoignez notre Communauté Globale
        </h2>
        <p className="lead text-center lh-180 text-black">
          De millier d'utilisateurs dans le monde ont choisit Fyatu pour simplifier et sécuriser leur paiement en ligne.
        </p>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <h4 className="font-weight-bold text-black mb-5">Pays Populaires</h4>
            {/* Countries */}
            {countries.map(({ id, code, name }) => (
              <div className="d-flex align-items-center mb-3">
                <div key={id}>
                  <span>{code}</span>
                  <span className="ml-3 text-black">{name}</span> 
                </div>
              </div>
            ))}
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <h4 className="font-weight-bold text-black mb-5">Pays Actifs</h4>
            {/* Countries */}
            {countries.map(({ id, code, name }) => (
              <div className="d-flex align-items-center mb-3">
                <div key={id}>
                  <span>{code}</span>
                  <span className="ml-3 text-black">{name}</span> 
                </div>
              </div>
            ))}
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <h4 className="font-weight-bold text-black mb-5">Autres Pays</h4>
            {/* Countries */}
            {countries.map(({ id, code, name }) => (
              <div className="d-flex align-items-center mb-3">
                <div key={id}>
                  <span>{code}</span>
                  <span className="ml-3 text-black">{name}</span> 
                </div>
              </div>
            ))}
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            {/* Countries */}
            <h4 className="font-weight-bold text-white mb-5">
              <span className="opacity-0">Europe</span>
            </h4>
            {countries.map(({ id, code, name }) => (
              <div className="d-flex align-items-center mb-3">
                <div key={id}>
                  <span>{code}</span>
                  <span className="ml-3 text-black">{name}</span> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countries
