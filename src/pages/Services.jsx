import PageBanner from '../assets/components/PageBanner'

function Services() {
  return (
    <main className="page-main">
      <PageBanner
        title="Mon offre de services"
        subtitle="Voici les prestations sur lesquelles je peux intervenir."
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            
            <div className="col-md-6 col-lg-4">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-brush"></i>
                </div>
                <h2>UX Design</h2>
                <p>
                  L’UX Design est une méthode de conception centrée sur
                  l’utilisateur. Son but est d’offrir une expérience de navigation optimale.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h2>Développement web</h2>
                <p>
                  Développement de sites web en HTML, CSS, JavaScript et Bootstrap,
                  avec une attention particulière portée au responsive design.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mx-md-auto">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h2>Référencement</h2>
                <p>
                  Optimisation SEO pour améliorer la visibilité d’un site sur les moteurs de recherche.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Services