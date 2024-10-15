import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, XCircle, InfoIcon, X } from "lucide-react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type: AlertType;
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  autoClose?: number;
}

const alertVariants = {
  initial: { opacity: 0, y: -50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  info: "bg-blue-100 border-blue-500 text-blue-700",
};

const iconComponents: Record<AlertType, React.ReactElement> = {
  success: <CheckCircle className="w-6 h-6" />,
  error: <XCircle className="w-6 h-6" />,
  warning: <AlertCircle className="w-6 h-6" />,
  info: <InfoIcon className="w-6 h-6" />,
};

export const CustomAlert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  isOpen,
  onClose,
  autoClose = 5000,
}) => {
  React.useEffect(() => {
    if (isOpen && autoClose > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="alert" // Accessibility improvement
          aria-live="assertive" // Accessibility improvement
          className={`fixed top-4 right-4 w-96 border-l-4 rounded-lg shadow-lg overflow-hidden ${alertStyles[type]}`}
          variants={alertVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">{iconComponents[type]}</div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-1 text-sm">{message}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
          <motion.div
            className="h-1 bg-current opacity-25"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: autoClose / 1000, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
