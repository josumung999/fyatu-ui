import {footerLinks} from '../../data';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="h4 my-4">Services</h4>
            <ul className="list-group">
              {footerLinks.map(({ id, text }) => (
                <li key={id} className="list-group-item">
                  <a href="!#" className="footerLink text-dark">
                    {text}
                  </a>
                </li>   
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h4 className="h4 my-4">Services</h4>
            <ul className="list-group">
              {footerLinks.map(({ id, text }) => (
                <li key={id} className="list-group-item">
                  <a href="!#" className="footerLink text-dark">
                    {text}
                  </a>
                </li>   
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h4 className="h4 my-4">Informations</h4>
            <ul className="list-group">
              {footerLinks.map(({ id, text }) => (
                <li key={id} className="list-group-item">
                  <a href="!#" className="footerLink text-dark">
                    {text}
                  </a>
                </li>   
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h4 className="h4 my-4">Entreprise</h4>
            <ul className="list-group">
              {footerLinks.map(({ id, text }) => (
                <li key={id} className="list-group-item">
                  <a href="!#" className="footerLink text-dark">
                    {text}
                  </a>
                </li>   
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="lead my-4">
        Fyatu est un produit de MerciPro. Une entreprise agréée par le gouvernement congolais et enregistrée sous les numéros: 
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            RCCM: CD/BKV/RCCM/18-A-3358
          </li>
          <li className="list-group-item">
            ID.NAT: 5-73-N44630X 
          </li>
          <li className="list-group-item">
            Adresse: 82 Av. PE Lumumba, Ibanda - Bukavu 
          </li>
        </ul>
        <hr className="my-4" />
        <div className="row">
          <div className="col">
            <p className="h6">
              © 2020 FYATU - Tous droits réservés.
            </p>
          </div>
          <div className="col">
            <div className="row justify-content-end">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <a href="!#" className="text-secondary">
                    Termes et Conditions
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="!#" className="text-secondary">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
