import bannerImg from '../images/banner.jpg'

function PageBanner({ title, subtitle }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container text-center">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <div className="title-underline mx-auto"></div>
      </div>
    </section>
  )
}

export default PageBanner