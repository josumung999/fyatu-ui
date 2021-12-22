import { whyUseUs } from '../../data';


const WhyChoosUs = () => {
  return (
    <section className="why slice bg-section-light">
      <div className="container position-relative zindex-100 mt-4">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-12">
            <h6 className="h1 text-black">
              Pourquoi +30,O00 clients nous font confiance ?
            </h6>
            <div className="mt-2">
              <p className="lead lh-200 text-black">
                Fyatu facilite l'achat des cartes virtuelles, la recharge et le transfert d'argent.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {whyUseUs.map(({ id, img, title, desc }) => (
            <div className="col-lg-4 col-12 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="mb-4">
                  <img src={img} alt=""/>
                </div>
                <div className="h3 text-black">
                  <span className="counter-extra">{title}</span>
                </div>
                <p className="lead lh-180 text-black">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoosUs
