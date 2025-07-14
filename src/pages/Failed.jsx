import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Failed() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/contact"); // back to Contact page
    }, 5000); // 5 seconds to match Success
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-[600px] flex flex-col items-center justify-center px-6 text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="text-2xl md:text-3xl font-medium text-red-600">Oops!</p>
        <p className="text-sm md:text-base text-gray-600">
          Something went wrong and your message didn’t go through. Please try
          again later. Taking you back to the contact page...
        </p>
      </motion.div>
    </div>
  );
}
