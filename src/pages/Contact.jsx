import PageBanner from '../assets/components/PageBanner'

function Contact() {
  return (
    <main className="page-main">
      <PageBanner
        title="Contact"
        subtitle="Pour me contacter en vue d’un entretien ou d’une future collaboration."
      />

      <section className="py-5">
        <div className="container">
          <div className="contact-box">
            <div className="row g-5">
              <div className="col-lg-6">
                <h2 className="contact-title">Formulaire de contact</h2>

                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Votre nom" />
                  </div>

                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Votre adresse email" />
                  </div>

                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Votre numéro de téléphone" />
                  </div>

                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Sujet" />
                  </div>

                  <div className="mb-3">
                    <textarea className="form-control" rows="7" placeholder="Votre message"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary px-4">
                    Envoyer
                  </button>
                </form>
              </div>

              <div className="col-lg-6">
                <h2 className="contact-title">Mes coordonnées</h2>
                <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                <p>10 20 30 40 50</p>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    title="Carte John Doe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact