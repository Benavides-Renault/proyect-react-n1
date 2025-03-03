import { motion } from 'framer-motion';

function FlipContainer({ flip, children }) {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      key={flip}
    >
      <motion.div
        className="flip-image"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: flip ? 180 : 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {children} 
      </motion.div>
    </motion.div>
  );
}

export default FlipContainer;
