export default function Contacto() {
  return (
    <section id="contact">
      <h1 className="section-header">Contacto</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Carril Buen Orden, Callejón Talquenca S/N</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">San Martín, Mendoza</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Envía tu mensaje">
                    (263) 4280406
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:iglesiacristosalvabo@hotmail.com" title="Escribenos un email">
                  iglesiacristosalvabo@hotmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul className="social-media-list">
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          <div className="copyright">¡Esta es tu casa!</div>
        </div>
      </div>
    </section>
  );
}
