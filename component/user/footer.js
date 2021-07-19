export default function Home() {
  return (
    <div>
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>StudioPhotograph</h3>
              <p>
                Dengan Pelayanan Terbaik, Berkualitas dan Harga Terjangkau
              </p>
            </div>
            <div className="col item social">
              <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <p className="copyright">StudioPhotograph © 2021</p>
        </div>
      </footer>
    </div>
  );
}
