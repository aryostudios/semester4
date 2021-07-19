import Layout from "../../component/user/layout";
import { useState } from "react";
const form = () => {
  const [paket, setPaket] = useState('')
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomer, setNomer] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jadwal, setJadwal] = useState("");

  console.log(setPaket)
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambah", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paket,
          nama,
          email,
          nomer,
          alamat,
          jadwal,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Berhasil Di Booking");
      window.alert(
        "Info Selanjutnya akan dihubungi oleh admin melalui kontak tertera"
      );
      window.location.href = "/user/booking";
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <Layout>
        <main className="page hire-me-page">
          <section className="portfolio-block hire-me">
            <div className="container">
              <div className="heading">
                <h2>Booking</h2>
              </div>
              <main>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                  <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                      <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Regular</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          100k
                          <small className="text-muted fw-light">/order</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>1 Lokasi</li>
                          <li>20 Foto</li>
                          <li>Kualitas Tinggi</li>
                          <li>Gratis Makanan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                      <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Medium</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          200k
                          <small className="text-muted fw-light">/order</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>1 Lokasi</li>
                          <li>100 Foto</li>
                          <li>Kualitas Tinggi</li>
                          <li>Gratis Makanan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-warning">
                      <div className="card-header py-3 text-white bg-warning border-warning">
                        <h4 className="my-0 fw-normal">VIP</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                          250k
                          <small className="text-muted fw-light">/order</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>2 Lokasi</li>
                          <li>150 Foto</li>
                          <li>Kualitas Tinggi</li>
                          <li>Gratis Makanan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <form
                style={{ background: "rgb(217,216,211)" }}
                onSubmit={submitHandler}
              >
                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    Paket
                  </label>
                  <div class="row">
                    <select
                      style={{
                        width: 331,
                        background: "var(--bs-dark)",
                        color: "var(--bs-light)",
                      }}
                      className="form-select"
                      name= ""
                      value = {paket}
                      onChange={(e) => setPaket(e.target.value)}
                      required
                    >
                        <option value="Regular" selected>
                          Regular
                        </option>
                        <option value="Medium">Medium</option>
                        <option value="VIP">VIP</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    Nama Lengkap
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    NO HP / Whatsapp
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    required
                    onChange={(e) => setNomer(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Alamat
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    onChange={(e) => setAlamat(e.target.value)}
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="hire-date">
                        Tanggal
                      </label>
                      <input
                        className="form-control"
                        id="hire-date"
                        type="date"
                        onChange={(e) => setJadwal(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6 button">
                      <button
                        className="btn btn-primary d-block w-100"
                        type="submit"
                        style={{ background: "var(--bs-yellow)" }}
                      >
                        Booking
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};
export default form;
