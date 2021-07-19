export default function Home() {
  return (
    <div>
      <div id="wrapper">
        <div className="container" style={{ width: 979 }}>
          <div className="row justify-content-center align-items-center">
            <div className="col offset-xl-5">
              <i
                className="fa fa-check-circle"
                style={{
                  fontSize: 175,
                  textAlign: "center",
                  color: "var(--bs-blue)",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="text-center">Account Added</h2>
            </div>
          </div>
          <div className="row">
            <div className="col offset-xl-5">
              <a href="/admin/login"
                className="btn btn-primary"
                type="button"
                style={{ width: "147.7031px" }}
              >
                Login Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
