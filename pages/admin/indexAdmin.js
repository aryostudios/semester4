import LayoutAdmin from "../../component/admin/layoutAdmin";
export default function Home() {
  return (
    <>
      <LayoutAdmin>
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">UPDATE DATA</h3>
              </div>
              <div className="row">
                <div
                  className="col-md-6 col-xl-3 offset-xl-5 text-center mb-4"
                  style={{
                    textAlign: "center",
                    color: "var(--bs-red)",
                    background: "var(--bs-red)",
                  }}
                >
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col">
                          <h4 style={{ color: "var(--red)" }}>CONFIRM</h4>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-6 col-xl-3 mb-4"
                  style={{ background: "var(--bs-red)" }}
                >
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col">
                          <h4 style={{ color: "var(--bs-red)" }}>DIRAWAT</h4>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-3 mb-4"
                  style={{ background: "var(--bs-red)" }}
                >
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col">
                          <h4 style={{ color: "var(--bs-red)" }}>SEMBUH</h4>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-3 mb-4"
                  style={{ background: "var(--bs-red)" }}
                >
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col">
                          <h4 style={{ color: "var(--bs-red)" }}>MENINGGAL</h4>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-3 mb-4"
                  style={{ background: "var(--bs-green)" }}
                >
                  <div
                    className="card shadow border-start-primary py-2"
                    style={{ color: "var(--gray)" }}
                  >
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col">
                          <h4 style={{ color: "var(--bs-green)" }}>SUSPECT</h4>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Projects</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small fw-bold">
                        Server migration<span className="float-end">20%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-danger"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "20%" }}
                        >
                          <span className="visually-hidden">20%</span>
                        </div>
                      </div>
                      <h4 className="small fw-bold">
                        Sales tracking<span className="float-end">40%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-warning"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "40%" }}
                        >
                          <span className="visually-hidden">40%</span>
                        </div>
                      </div>
                      <h4 className="small fw-bold">
                        Customer Database<span className="float-end">60%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-primary"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        >
                          <span className="visually-hidden">60%</span>
                        </div>
                      </div>
                      <h4 className="small fw-bold">
                        Payout Details<span className="float-end">80%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-info"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "80%" }}
                        >
                          <span className="visually-hidden">80%</span>
                        </div>
                      </div>
                      <h4 className="small fw-bold">
                        Account setup
                        <span className="float-end">Complete!</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-success"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "100%" }}
                        >
                          <span className="visually-hidden">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card textwhite bg-primary text-white shadow">
                        <div className="card-body">
                          <p className="m-0">Primary</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card textwhite bg-success text-white shadow">
                        <div className="card-body">
                          <p className="m-0">Success</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card textwhite bg-info text-white shadow">
                        <div className="card-body">
                          <p className="m-0">Info</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card textwhite bg-warning text-white shadow">
                        <div className="card-body">
                          <p className="m-0">Warning</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div className="card textwhite bg-danger text-white shadow">
                        <div className="card-body">
                          <p className="m-0">Danger</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
}