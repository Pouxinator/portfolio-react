import PageBanner from '../assets/components/PageBanner'

function MentionsLegales() {
  return (
    <main className="page-main">
      <PageBanner title="Mentions légales" />

      <section className="py-5">
        <div className="container">
          <div className="legal-box">
            <div className="accordion" id="legalAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Éditeur du site
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#legalAccordion"
                >
                  <div className="accordion-body">
                    <p><strong>John Doe</strong></p>
                    <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                    <p>10 20 30 40 50</p>
                    <p>john.doe@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Hébergeur
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#legalAccordion"
                >
                  <div className="accordion-body">
                    <p><strong>alwaysdata</strong></p>
                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <p>
                      <a
                        href="https://www.alwaysdata.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.alwaysdata.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Crédits
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#legalAccordion"
                >
                  <div className="accordion-body">
                    <p>Site développé par John Doe, étudiant du CEF.</p>
                    <p>Les images libres de droit sont issues du site Pixabay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MentionsLegales