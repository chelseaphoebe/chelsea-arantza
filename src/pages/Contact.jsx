import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "../styles/custom.css";



export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chelsea",
        "template_1ij5ypn",
        form.current,
        "2S6FxwEcgL5fi-GGv"
      )
      .then(
        () => navigate("/success"),
        () => navigate("/failed")
      );
  };

  return (
    <div className="px-8 py-16 max-w-4xl mx-auto w-full">
      <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
        <p className="text-lg font-medium tracking-wider md:text-xl">
          Dear Chelsea Arantza,
        </p>

        <textarea
          name="message"
          placeholder="Write your message here..."
          className="w-full h-32 border font-medium tracking-wider text-gray-400 border-gray-300 p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <p className="text-lg font-medium tracking-wider md:text-xl">Best,</p>

        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="w-full border font-medium tracking-wider text-gray-400 border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          className="w-full border font-medium tracking-wider text-gray-400 border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all"
        >
          Send email
        </button>
      </form>
    </div>
  );
}
