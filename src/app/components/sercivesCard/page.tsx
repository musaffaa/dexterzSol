import React from "react";
import Image from "next/image"; // Import the Next.js Image component
import { ServicesCardProp } from "../../../../types/types";

const ServicesCard: React.FC<ServicesCardProp> = ({
  name,
  description,
  image,
  slug,
}) => {
  return (
    /*Made* Changes here of flex flex-col justify-around min-h-[500px]*/
    <div className="flex flex-col bg-white justify-around border min-h-[500px] rounded-lg p-4">
      {/* Project Image */}
      <div className="mt-4 w-full h-64 relative">
        {/* Use Next.js Image with fixed layout */}
        <Image
          src={image} // Generate the image URL
          alt={name || "Image"}
          fill // Make the image fill the parent container
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define sizes for responsive behavior
          priority // Optimize loading for LCP
          className="rounded-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Project Name */}
      <h1 className="mt-5 text-xl font-bold">{name}</h1>

      {/* Project Description */}
      <p className="mt-2 text-gray-700">{description}</p>

      {/* Project Link (slug) */}
      {slug && (
        <div className="mt-10">
          <a
            href={`/components/servicesDetails/${slug}`}
            className="text-blue-700 hover:text-blue-800"
          >
            View Details
          </a>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
