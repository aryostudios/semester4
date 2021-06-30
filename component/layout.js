import Header from "./header";
import Footer from "./footer";
export default function Home({ children }) {
  return (
    <div >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
