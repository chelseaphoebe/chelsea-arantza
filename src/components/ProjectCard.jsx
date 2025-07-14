import React from "react";

export default function ProjectCard({ title, description, imagePath, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative md:h-80 w-[400px] mx-auto group cursor-pointer overflow-hidden rounded-2xl shadow-lg block"
    >
      {/* Project Image */}
      <img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover duration-300 group-hover:blur-sm group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mx-6">{description}</p>
      </div>
    </a>
  );
}
