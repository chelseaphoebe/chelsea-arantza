import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/contact"); // back to Contact page
    }, 5000); 
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
        <p className="text-2xl md:text-3xl font-medium">Thank you!</p>
        <p className="text-sm md:text-base text-gray-600">
          Thanks for reaching out to me! I’ll check out your message soon.
          Taking you back to the contact page...
        </p>
      </motion.div>
    </div>
  );
}
