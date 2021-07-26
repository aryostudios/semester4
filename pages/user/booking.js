import Layout from "../../component/user/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const form = () => {
  const [_namaPaket, setNamaPaket] = useState("");
  const [_harga, setHarga] = useState("");
  const [_lokasi, setLokasi] = useState("");
  const [_foto, setFoto] = useState("");

  const router = useRouter();
  const { namaPaket, harga, lokasi, foto} = router.query;

  useEffect(() => {
    if (typeof namaPaket == "string") {
      setNamaPaket(namaPaket);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
    if (typeof lokasi == "string") {
      setLokasi(lokasi);
    }
    if (typeof foto == "string") {
      setFoto(foto);
    }
  }, [namaPaket, harga, lokasi, foto]);

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
          namaPaket:_namaPaket,
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
                  <div className="col"></div>
                  <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-warning">
                      <div className="card-header py-3 text-white bg-warning border-warning">
                        <h4 className="my-0 fw-normal">{_namaPaket}</h4>
                      </div>
                      <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                        {_harga}
                          <small className="text-muted fw-light">/order</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>{_lokasi} Lokasi</li>
                          <li>{_foto} Foto</li>
                          <li>Kualitas Tinggi</li>
                          <li>Gratis Makanan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </main>
              <form
                style={{ background: "rgb(217,216,211)" }}
                onSubmit={submitHandler}
              >
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
