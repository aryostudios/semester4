import '../styles/fixedtop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../component/layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp