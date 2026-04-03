import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h4>John Doe</h4>
            <address className="mb-3">
              40 rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              10 20 30 40 50
              <br />
              john.doe@gmail.com
            </address>

            <div className="social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h4>Liens utiles</h4>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Mes dernières réalisations</h4>
            <ul className="footer-links">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d'une API</Link></li>
              <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer