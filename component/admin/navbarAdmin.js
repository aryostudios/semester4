const navbar = () => {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="/"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Studio</span>
            <span className="fs-5 d-none d-sm-inline text-warning">
              Photograph
            </span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
                style={{ color: "var(--bs-white)" }}
                href="/admin/konfirmasi"
              >
                <ion-icon name="alarm"></ion-icon>{" "}
                <span className="ms-1 d-none d-sm-inline">Konfirmasi</span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-0 align-middle"
                style={{ color: "var(--bs-white)" }}
                href="/admin/tambahAkun"
              >
                <ion-icon name="add-circle"></ion-icon>{" "}
                <span className="ms-1 d-none d-sm-inline">Add Account</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/akun"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
                style={{ color: "var(--bs-white)" }}
              >
                <ion-icon name="person"></ion-icon>{" "}
                <span className="ms-1 d-none d-sm-inline">Account</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/admin/login"
                className="nav-link align-middle px-0"
                style={{ color: "var(--bs-white)" }}
              >
                <ion-icon name="close-circle"></ion-icon>{" "}
                <span className="ms-1 d-none d-sm-inline">Log out</span>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
};

export default navbar;
