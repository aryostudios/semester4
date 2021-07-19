import NavbarAdmin from "./navbarAdmin";
import FooterAdmin from "./footerAdmin";
import Head from 'next/head'
export default function Home({ children }) {
  return (
    <>
    <Head>
      <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
    </Head>
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <NavbarAdmin />
        <div className="col">{children}</div>
      </div>
      <div className="col py-3">
        <FooterAdmin />
      </div>
    </div>
    </>
  );
}
