import { countries } from '../../data';

import './countries.scss'

const Countries = () => {
  return (
    <div className="countries">
      <div className="container">
        <h2 className="h2 text-center">
        Réjoignez notre Communauté Globale
        </h2>
        <p className="lead text-center">
          De millier d'utilisateurs dans le monde ont choisit Fyatu pour simplifier et sécuriser leur paiement en ligne.
        </p>
        <div className="row country-list">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <h3 className="h3">Pays Populaires</h3>
                {/* Countries */}
                {countries.map(({ id, code, name }) => (
                  <ul key={id} className="list-group list-group-horizontal">
                    <li className="country-code list-group-item">
                      {code}
                    </li>
                    <li className="list-group-item">
                      {name}
                    </li>
                  </ul>
                ))}
              </div>
              <div className="col-6">
                <h3 className="h3">Pays Actifs</h3>
                {/* Countries */}
                {countries.map(({ id, code, name }) => (
                  <ul key={id} className="list-group list-group-horizontal">
                    <li className="country-code list-group-item">
                      {code}
                    </li>
                    <li className="list-group-item">
                      {name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <h3 className="h3">Autres Pays</h3>
              <div className="col-6">
              {countries.map(({ id, code, name }) => (
                  <ul key={id} className="list-group list-group-horizontal">
                    <li className="country-code list-group-item">
                      {code}
                    </li>
                    <li className="list-group-item">
                      {name}
                    </li>
                  </ul>
                ))}
              </div>
              <div className="col-6">
              {countries.map(({ id, code, name }) => (
                  <ul key={id} className="list-group list-group-horizontal">
                    <li className="country-code list-group-item">
                      {code}
                    </li>
                    <li className="list-group-item">
                      {name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countries
