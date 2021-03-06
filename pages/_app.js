import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { AppWrapper } from "../ctx";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppWrapper>
      <Layout>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-KE72QC3G9M`}
        />

        <Script strategy='lazyOnload'>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KE72QC3G9M', {
        page_path: window.location.pathname,
      });
  `}
        </Script>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              },
              pageAnimate: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
