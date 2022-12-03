import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface MotionComponentProps {
  children: JSX.Element;
}

const MotionComponent: FunctionComponent<MotionComponentProps> = ({
  children,
}) => {
  // page transition

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        x: { duration: 0.3 },
        default: { ease: "linear" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;