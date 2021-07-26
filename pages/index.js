import Layout from "../component/user/layout";
import Link from "next/dist/client/link";
import { usePaket } from "../lib/swr-fetch";
export default function Home() {
  const { data, error } = usePaket();
  if (error) {
    return <div>Error Loading</div>;
  }
  if (!data) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <Layout>
        <div>
          <main className="page lanidng-page">
            <section
              className="portfolio-block block-intro"
              style={{
                transform: "scale(1)",
                filter: "brightness(100%) contrast(100%)",
                background: 'url("header.jpg") no-repeat',
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-xxl-12"
                    style={{
                      textAlign: "center",
                      opacity: 1,
                      borderWidth: 65,
                      borderRadius: 76,
                      boxShadow: "inset 0px 0px 14px 2px var(--bs-gray)",
                    }}
                  >
                    <h1
                      style={{
                        color: "var(--bs-light)",
                        textShadow: "0px 0px 20px var(--bs-dark)",
                      }}
                    >
                      Studio
                    </h1>
                    <h1
                      style={{
                        color: "var(--bs-yellow)",
                        textShadow: "0px 0px 20px var(--bs-dark)",
                        textAlign: "center",
                      }}
                    >
                      Photograph
                      <br />
                    </h1>
                  </div>
                </div>
                <div className="about-me">
                  <p
                    style={{
                      color: "var(--bs-white)",
                      textShadow: "0px 0px 20px var(--bs-dark)",
                    }}
                  >
                    <strong>
                      Kepuasan pelanggan adalah nomer 1 dengan hasil foto
                      berkualitas dan harga terjangkau yang telah dipercaya 1000
                      kali penyewaan.
                    </strong>
                    <br />
                  </p>
                  <a
                    className="btn btn-outline-light"
                    role="button"
                    href="/#gallery"
                    id="gallery"
                  >
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
            </section>
            <hr />
            <section className="portfolio-block photography">
              <div className="container">
                <div className="heading">
                  <h2>gallery</h2>
                </div>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-4 item zoom-on-hover">
                    <a href="#">
                      <img className="img-fluid image" src="image5.jpg" />
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4 item zoom-on-hover">
                    <a href="#">
                      <img className="img-fluid image" src="image2.jpg" />
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4 item zoom-on-hover">
                    <a href="#">
                      <img className="img-fluid image" src="image4.jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="portfolio-block call-to-action border-bottom" />
            <section className="portfolio-block skills">
              <div className="container">
                <div className="heading">
                  <h2>Paket</h2>
                </div>
                <div className="px-4 pt-5 my-5 text-center">
                  <div className="container">
                    <main>
                      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                      {data.map((paket, idx) => (
                        <div className="col">
                          <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3 bg-warning">
                              <h4 className="my-0 fw-normal">{paket.nama}</h4>
                            </div>
                            <div className="card-body">
                              <h1 className="card-title pricing-card-title">
                                {paket.harga}
                                <small className="text-muted fw-light">
                                  /order
                                </small>
                              </h1>
                              <ul className="list-unstyled mt-3 mb-4">
                                <li>{paket.lokasi} Lokasi</li>
                                <li>{paket.foto} Foto</li>
                                <li>Kualitas Tinggi</li>
                                <li>Gratis Makanan</li>
                              </ul>
                              <Link href={`/user/booking?namaPaket=${paket.nama}&harga=${paket.harga}&lokasi=${paket.lokasi}&foto=${paket.foto}`}>
                                <button
                                  type="button"
                                  className="w-100 btn btn-lg btn-outline-warning text-dark"
                                >
                                  Beli Paket
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </div>
  );
}
