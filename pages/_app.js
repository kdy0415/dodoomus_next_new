import '../styles/common.css'
import '../styles/globals.css'
//import '../styles/GmarketSans.css';
import 'sweetalert2/dist/sweetalert2.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Head from "next/head";

function MyApp({ Component, pageProps, router}) {
  return (
    <>
    <Head>
      <meta charSet="utf-8"/>
      <title>DODOOM</title>
      <meta name="keywords" content="dodoom,website,shopping mall,app,Application,solution,homepage,brand,editorial design,design,marketing,regional development,consulting,blockchain"></meta>
      <meta name='description' content='Commerce platform building, Kiosk/Vending systems, Blockchain development, Services' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="icon" href="/favicon/favicon.ico"></link>

      <meta property="og:title" content="DODOOM"></meta>
      <meta property="og:url" content="https://www.dodoom.us"></meta>
      <meta property="og:image" content="https://www.dodoom.us/favicon/meta.jpg"></meta>
      <meta property="og:site_name" content="DODOOM"></meta>
      <meta property="og:description" content="Commerce platform building, Kiosk/Vending systems, Blockchain development, Services"></meta>

      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    </Head>

    <TransitionGroup>
      <CSSTransition
        key={router.pathname}
        timeout={500}
        classNames="page-transition"
        unmountOnExit
      >
        <div className={Component.headerStyle}>
          <Component {...pageProps} />
        </div>
      </CSSTransition>
    </TransitionGroup>
    </>
  )
}

export default MyApp
