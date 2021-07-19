import Layout from "../../component/user/layout";
import { useState } from "react";
const form = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomer, setNomer] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jadwal, setJadwal] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambah", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          email,
          nomer,
          alamat,
          jadwal
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Berhasil Di Rental");
      window.alert('Info Selanjutnya akan dihubungi oleh admin melalui kontak tertera');
      window.location.href='/user/booking';
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
              <div className="row text-center">
                <div className="col-xl-4 offset-xl-4">
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
              <form style={{ background: "rgb(217,216,211)" }} onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="number">
                    Nama Lengkap
                  </label>
                  <input className="form-control" type="text" required onChange={(e) => setNama(e.target.value)}/>
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
                  <input className="form-control" type="number" required onChange={(e) => setNomer(e.target.value)}/>
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
}
export default form;