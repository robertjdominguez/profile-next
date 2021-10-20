import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import { AppWrapper } from "../ctx";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppWrapper>
      <Layout>
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
