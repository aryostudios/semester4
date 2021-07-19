export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient"
        style={{ background: "var(--bs-dark)" }}
      >
        <div className="container">
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <h2>Studio</h2>
            <h2 style={{ color: "var(--bs-yellow)" }}>Photograph</h2>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/user/cv">
                  CV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/layanan">
                  Layanan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/booking">
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/admin/login"
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "rgba(227,173,12,0.88)" }}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}
