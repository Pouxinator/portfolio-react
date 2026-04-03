import PageBanner from '../assets/components/PageBanner'

import freshFood from '../assets/images/fresh-food.jpg'
import restaurant from '../assets/images/restaurant-japonais.jpg'
import bienEtre from '../assets/images/espace-bien-etre.jpg'
import seo from '../assets/images/seo.jpg'
import coder from '../assets/images/coder.jpg'
import screens from '../assets/images/screens.jpg'

const projects = [
  {
    title: 'Fresh Food',
    image: freshFood,
    description: 'Réalisation d’un site avec commande en ligne.',
    footer: 'Site réalisé avec PHP et MySQL',
  },
  {
    title: 'Restaurant Akira',
    image: restaurant,
    description: 'Réalisation d’un site vitrine.',
    footer: 'Site réalisé avec WordPress',
  },
  {
    title: 'Espace bien-être',
    image: bienEtre,
    description: 'Réalisation d’un site vitrine.',
    footer: 'Site réalisé en HTML/CSS',
  },
  {
    title: 'SEO',
    image: seo,
    description: 'Optimisation SEO d’un site.',
    footer: 'Utilisation des outils SEO',
  },
  {
    title: "Création d'une API",
    image: coder,
    description: 'Création d’une API REST.',
    footer: 'API développée en PHP',
  },
  {
    title: "Maquette d'un site",
    image: screens,
    description: 'Conception d’une maquette.',
    footer: 'Réalisée avec Figma',
  },
]

function Portfolio() {
  return (
    <main className="page-main">
      <PageBanner
        title="Portfolio"
        subtitle="Voici quelques-unes de mes réalisations."
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="portfolio-card h-100">
                  
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-card-body text-center">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <button className="btn btn-outline-primary">
                      Voir
                    </button>
                  </div>

                  <div className="portfolio-card-footer text-center">
                    {project.footer}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio