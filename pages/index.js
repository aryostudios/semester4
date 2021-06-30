import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="text-dark">Aryo's Photograph</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            <b>
              Kepuasan pelanggan adalah nomer 1 dengan hasil foto yang
              berkualitas dan harga terjangkau yang telah dipercaya 1000 kali
              penyewaan.
            </b>
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link href="/paket">
              <button
                type="button"
                className="btn btn-warning text-white btn-lg px-4 me-sm-3"
              >
                Pilih Paket
              </button>
            </Link>
            <Link href="/bayar">
              <button
                type="button"
                className="btn btn-outline-warning text-dark btn-lg px-4"
              >
                Cara Pembayaran
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
