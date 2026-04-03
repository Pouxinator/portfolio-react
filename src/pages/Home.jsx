import heroBg from '../assets/images/hero-bg.jpg'
import aboutImg from '../assets/images/john-doe-about.jpg'

function Home() {
  return (
    <>
      <header>
        <section
          className="hero d-flex align-items-center justify-content-center text-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="hero-overlay"></div>

          <div className="container hero-content">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <a href="#about" className="btn btn-danger hero-btn">
              En savoir plus
            </a>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="about-skills-section">
          <div className="container">
            <div className="card about-skills-card border-0">
              <div className="card-body p-4 p-lg-5">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <h3 className="section-title">A propos</h3>

                    <img
                      src={aboutImg}
                      alt="John Doe au travail"
                      className="img-fluid about-image"
                    />

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio, necessitatibus consectetur tempore perferendis
                      nostrum, ex delectus reiciendis impedit aut iure enim
                      placeat? Natus, neque at?
                    </p>
                  </div>

                  <div className="col-lg-6">
                    <h3 className="section-title">Mes compétences</h3>

                    <div className="skill-item">
                      <div className="skill-label">HTML5 90%</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: '90%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-label">CSS3 80%</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-label">JAVASCRIPT 70%</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: '70%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-label">PHP 60%</div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </div>

                    <div className="skill-item">
                      <div className="skill-label">REACT 50%</div>
                      <div className="progress">
                        <div
                          className="progress-bar react-bar"
                          style={{ width: '50%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home