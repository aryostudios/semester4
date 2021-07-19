import Navigation from "./navigation";
import Footer from "./footer";
import Head from "next/head"
export default function Home({ children }) {
  return (
    <div >
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
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
