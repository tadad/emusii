import React from "react";
import Head from "next/head";
import BackgrondImage from "./components/BackgroundImage";
import AppProvider from "./context/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>emusii</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 mainCol">
            <div className="mainContent">
              <AppProvider>
                <>
                  <BackgrondImage />
                  <Component {...pageProps} />
                </>
              </AppProvider>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
      </footer>
    </>
  );
}

export default MyApp;
