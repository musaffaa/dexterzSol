'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "Game Development",
    slug: "GameDevelopment",
    description: "Bringing Your Game Visions to Life with Precision and Passion.",
    image: "/assets/images/services/game.png",
    tags: ["Immersive Experiences", "Cross-Platform", "Advanced Graphics"],
    lottieImg:
      "https://lottie.host/d54fad76-4ee7-4210-9dbb-24d27764fb59/Am6ob0nDN0.lottie",
    url: "/components/servicesDetails/GameDevelopment",
    miniDetails:
      "Create immersive, cross-platform games with advanced graphics and engaging gameplay.",
    benefits: [
      {
        icon: "🎮",
        heading: "Immersive Gameplay",
        details:
          "Our game development services focus on creating immersive gameplay experiences that captivate players. From compelling storylines to intricate game mechanics, we ensure every aspect of your game keeps users engaged for hours.",
      },
      {
        icon: "🌍",
        heading: "Cross-Platform Compatibility",
        details:
          "We develop games that are compatible across multiple platforms, including PC, consoles, and mobile devices. This ensures a seamless experience for players, regardless of their device, maximizing your game's reach and impact.",
      },
      {
        icon: "🖥️",
        heading: "Advanced Graphics and Visuals",
        details:
          "Our team utilizes cutting-edge tools and technologies to create stunning visuals and realistic graphics. From 3D rendering to advanced lighting effects, we make your game visually appealing and technically impressive.",
      },
      {
        icon: "⚙️",
        heading: "Custom Game Mechanics",
        details:
          "We design unique and innovative game mechanics tailored to your vision. Whether it's action-packed combat, engaging puzzles, or simulation-based interactions, our developers bring your ideas to life with precision and creativity.",
      },
      {
        icon: "🎨",
        heading: "Dynamic Sound Design",
        details:
          "We create immersive soundscapes and adaptive audio effects that enhance gameplay, ensuring your players feel truly connected to the game's world.",
      },
      {
        icon: "📊",
        heading: "Player Analytics Integration",
        details:
          "We implement analytics tools to track player behavior and engagement, helping you understand your audience and make data-driven improvements to the game.",
      },
    ],
  },
]
function GameDevelopment() {
  return (
    <>
      {/* Service Header Section */}
      <div className="flex flex-col lg:flex-row bg-white mx-4 lg:mx-20 min-h-[40vh] justify-center items-center gap-8 lg:gap-16 py-10">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            {Services[0].title || "Service Title"}
          </h1>
          <p className="mt-5 text-lg lg:text-2xl max-w-[550px] mx-auto lg:mx-0">
            {Services[0].miniDetails ||
              "Short description about the service."}
          </p>
        </div>
        <div className="max-w-[81rem] lg:w-1/3 flex justify-center">
          {Services[0].lottieImg ? (
            <DotLottieReact
              src={Services[0].lottieImg}
              loop
              autoplay
              width={153}
              height={153}
              style={{ width: "97%", height: "97%" }}
            />
          ) : (
            <p>No animation available</p>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-10">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services[0].benefits?.length ? (
              Services[0].benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-4xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                    {benefit.heading}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {benefit.details}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No benefits available at this time.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10 bg-gray-50">
        <Link
          href={"/components/contact"}
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

export default GameDevelopment;
