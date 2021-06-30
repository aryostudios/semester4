import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center">
        <div className="container">
          <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Regular</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      100k<small className="text-muted fw-light">/order</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>1 Lokasi</li>
                      <li>20 Foto</li>
                      <li>Kualitas Tinggi</li>
                      <li>Gratis Makanan</li>
                    </ul>
                    <Link href="/bayar">
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
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Medium</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      200k<small className="text-muted fw-light">/order</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>1 Lokasi</li>
                      <li>100 Foto</li>
                      <li>Kualitas Tinggi</li>
                      <li>Gratis Makanan</li>
                    </ul>
                    <Link href="/bayar">
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-warning text-white "
                      >
                        Beli Paket
                      </button>
                    </Link>
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
                      250k<small className="text-muted fw-light">/order</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>2 Lokasi</li>
                      <li>150 Foto</li>
                      <li>Kualitas Tinggi</li>
                      <li>Gratis Makanan</li>
                    </ul>
                    <Link href="/bayar">
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-warning text-white "
                      >
                        Beli Paket
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
