import Layout from "../component/layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3 fixed-top bg-dark">
        <h2 className="text-white">Aryo's</h2>
        <h2 className="text-warning">Photograph</h2>
        <i class="fas fa-h1    ">panjang</i>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link text-white" aria-current="page">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/paket">
              <a className="nav-link text-white">Paket</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/bayar">
              <a className="nav-link text-white">Bayar</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
