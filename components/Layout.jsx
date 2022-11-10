import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 100, y: 0 },
};

const Layout = ({ children }) => (
    <div>
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear", duration: 0.5 }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
