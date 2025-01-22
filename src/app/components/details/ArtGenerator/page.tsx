import React from "react";
import Image from "next/image";
import Link from "next/link";


type Project = {
  title: string;
  image: string;
  slug: string;
  miniDetails: string;
  benefits: Benefit[];
};

type Benefit = {
  icon: string;
  heading: string;
  details: string;
};

const project: Project[] = [
  {
    title: "Art Generator",
    image: "/assets/images/projects/art-generator.png",
    slug: "ArtGenerator",
    miniDetails:
      "Explore the innovative and design-driven features of Marvan Artify Web, blending creativity with technology for captivating digital experiences.",
    benefits: [
      {
        icon: "🎨",
        heading: "Creative Web Design and Development",
        details:
          "Tailored web solutions for personal portfolios, business websites, and more, blending creativity with technology.",
      },
      {
        icon: "📱",
        heading: "Responsive Design",
        details:
          "Ensures websites function seamlessly across devices, delivering a smooth and consistent user experience.",
      },
      {
        icon: "⚙️",
        heading: "Modern Frameworks and Tools",
        details:
          "Leverages cutting-edge technologies to build high-performance, SEO-optimized websites.",
      },
      {
        icon: "✨",
        heading: "Custom Features and Functionalities",
        details:
          "Integrates unique and interactive features, helping clients stand out in the digital space.",
      },
      {
        icon: "🎥",
        heading: "Immersive Visual Content",
        details:
          "Enhances engagement with high-quality graphics, animations, and multimedia integration.",
      },
      {
        icon: "💡",
        heading: "Design-Driven Development",
        details:
          "Focuses on innovative and professional presentation, ideal for businesses and creatives.",
      },
      {
        icon: "🤝",
        heading: "Client-Centric Approach",
        details:
          "Collaborates closely with clients to ensure their vision is realized with care and precision.",
      },
      {
        icon: "🔧",
        heading: "End-to-End Services",
        details:
          "Provides complete support from concept design to launch and maintenance, ensuring a stress-free experience.",
      },
      {
        icon: "🌟",
        heading: "Creative Excellence",
        details:
          "Delivers visually captivating websites, reflecting a perfect blend of art and technology.",
      },
    ],
  },
];

function IrtiqaAI() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row bg-white mx-4 lg:mx-20 min-h-[40vh] justify-center items-center gap-8 lg:gap-16 py-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">{project[0].title}</h1>
          <p className="mt-5 text-lg lg:text-2xl max-w-[550px] mx-auto lg:mx-0">
            {project[0].miniDetails || "Discover the features of this project."}
          </p>
        </div>
        <div className="max-w-7xl lg:w-1/3 flex justify-center">
          {project[0].image ? (
            <Image
              src={project[0].image}
              alt={project[0].title || "Project Image"}
              width={400}
              height={400}
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              priority
            />
          ) : (
            <p className="text-red-500">Image not available</p>
          )}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project[0].benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-4xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">{benefit.heading}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{benefit.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center py-10 bg-gray-50">
        <Link
          href="/components/contact"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-3 px-8 rounded-full text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 10c0 3.866-3.582 7-8 7a8.767 8.767 0 01-3.536-.728L2 17l1.5-3.872A8.091 8.091 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
          </svg>
          Get in Touch
        </Link>
      </div>
    </>
  );
}

export default IrtiqaAI;
