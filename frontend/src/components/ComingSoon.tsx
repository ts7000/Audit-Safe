import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const funnyMessages = [
  "Our auditors are still counting sheep... I mean, numbers!",
  "We're cooking up something so good, Gordon Ramsay would approve!",
  "This feature is still in stealth mode. Shhh!",
  "Our code monkeys are working overtime. Please stand by!",
  "We're crossing our T's, dotting our I's, and debugging our Z's!",
  "We're so close to launching, we can almost taste the bugs... I mean, features!",
  "Hold tight! We're currently bribing the IT gods with coffee and donuts.",
  "Our developers are in a coding trance. Please don't disturb their flow state!",
];

export default function ComingSoon() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funnyMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, #3498db 1px, transparent 1px), radial-gradient(circle, #3498db 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div className="z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-400 mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AuditSafe
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 mb-6 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Coming Soon!
        </motion.h2>

        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-8"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-full h-full text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            className="text-xl sm:text-2xl lg:text-3xl text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {funnyMessages[currentMessage]}
          </motion.p>
        </AnimatePresence>

        <motion.div
          className="mt-12 flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Notify Me When It's Ready!
          </motion.button>
          <motion.a
            href="#"
            className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      <motion.footer
        className="absolute bottom-4 left-0 right-0 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        © 2024 AuditSafe. All rights reserved.
      </motion.footer>
    </div>
  );
}
