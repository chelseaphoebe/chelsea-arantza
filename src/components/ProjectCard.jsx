import React from "react";

export default function ProjectCard({ title, description, imagePath, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full max-w-[400px] h-60 sm:h-72 md:h-80 mx-auto group cursor-pointer overflow-hidden rounded-2xl shadow-lg block"
    >
      <img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover duration-300 group-hover:blur-sm group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm mx-4">{description}</p>
      </div>
    </a>
  );
}
