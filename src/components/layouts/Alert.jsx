import { motion, AnimatePresence } from "motion/react";
import { inView } from "motion/react";
import { useContext } from "react";
import AlertContext from "../../context/Alerts/AlertContext";
function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-center ">
          <div role="alert" className="alert alert-error max-w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{alert.message}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Alert;
