import {footerLinks} from '../../data';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer footer-light bg-light">
        <div className="container pt-2">
          <div className="row">
            <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 ml-lg-0">
              <h6 className="heading mb-3">Services</h6>
              <ul className="list-unstyled">
                {footerLinks.map(({ id, text }) => (
                  <li key={id}>
                    <a href="!#" className="footerLink text-dark">
                      {text}
                    </a>
                  </li>   
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 ml-lg-0">
              <h6 className="heading mb-3">Services</h6>
              <ul className="list-unstyled">
                {footerLinks.map(({ id, text }) => (
                  <li key={id}>
                    <a href="!#" className="footerLink text-dark">
                      {text}
                    </a>
                  </li>   
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 ml-lg-0">
              <h6 className="heading mb-3">Informations</h6>
              <ul className="list-unstyled">
                {footerLinks.map(({ id, text }) => (
                  <li key={id}>
                    <a href="!#" className="footerLink text-dark">
                      {text}
                    </a>
                  </li>   
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 ml-lg-0">
              <h6 className="heading mb-3">Entreprise</h6>
              <ul className="list-unstyled">
                {footerLinks.map(({ id, text }) => (
                  <li key={id}>
                    <a href="!#" className="footerLink text-dark">
                      {text}
                    </a>
                  </li>   
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <p className="mt-4 text-black pr-lg-4">
            Fyatu est un produit de <stron>MerciPro.</stron> Une entreprise agréée par le gouvernement congolais et enregistrée sous les numéros:<br/>
            RCCM: <strong>CD/BKV/RCCM/18-A-3358</strong><br/> ID.NAT: <strong>5-73-N44630X</strong><br />
            Adresse: <strong>82 Av. PE Lumumba, Ibanda - Bukavu</strong>
          </p>
          <hr/>
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6 text-center">
              <p className="copyright text-black">
                © 2022 FYATU - Tous droits réservés.
              </p>
            </div>
            <div className="col">
              <div className="row justify-content-md-end mt-3 mt-md-0">
                <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                  <li className="nav-item">
                    <a href="!#" className='nav-link'>
                      Termes et Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="!#" className='nav-link'>
                      Confidentialité
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
