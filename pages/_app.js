import MainPages from '../components/layout/MainPages'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainPages>
      <Component {...pageProps} />
    </MainPages>
  )
}

export default MyApp
