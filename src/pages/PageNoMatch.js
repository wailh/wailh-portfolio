import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../css-files/pages/_pageNoMatch.css'

const Page404 = () => {
  return (
    <motion.div
      className="page-not-found-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <Helmet>
        <title>Wail Hamdi | Page Not Found</title>
        <meta
          name="description"
          content="Page 404 for Djihad Hamdi's portfolio."
        />
      </Helmet>
      <section className="page-not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>
          Welcome to Wail Hamdi's portfolio. However, it seems like we can't find
          the page you're looking for.
        </p>
      </section>
    </motion.div>
  );
};

export default Page404;
