'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "UI/UX Design",
    slug: "UIUXDesign",
    description: "Crafting tailor-made software to solve your unique challenges.",
    image: "/assets/images/services/UIUX Design.jpg",
    tags: ["Intuitive Design", "Enhanced Usability", "Modern Aesthetics"],
    lottieImg:
      "https://lottie.host/5ec4fda7-7e1b-4bd7-b811-85c9c6da83c2/5Eo8m30kcz.lottie",
    url: "/components/servicesDetails/UIUXDesign",
    miniDetails:
      "Design an engaging product that is easy-to-use, attractive, and functional.",
    benefits: [
      {
        icon: "🎨",
        heading: "Modern Aesthetic Designs",
        details:
          "Our UI/UX designs focus on creating modern and visually appealing interfaces that align with your brand's identity. We ensure that every design element complements the overall theme, making your product stand out while maintaining user engagement and satisfaction.",
      },
      {
        icon: "🧩",
        heading: "Enhanced Usability",
        details:
          "We prioritize usability by conducting thorough user research and testing. By focusing on ease of navigation and accessibility, we create interfaces that cater to users of all skill levels, reducing friction and increasing user retention.",
      },
      {
        icon: "🚀",
        heading: "Improved User Engagement",
        details:
          "Our designs include intuitive features and interactive elements that encourage users to explore your product. By optimizing workflows and reducing complexities, we ensure that users can easily achieve their goals, leading to increased satisfaction and loyalty.",
      },
      {
        icon: "📈",
        heading: "Conversion-Optimized Design",
        details:
          "Our team specializes in creating designs that drive conversions. From strategic placement of CTAs to seamless checkout experiences, we focus on turning visitors into loyal customers while providing a hassle-free experience.",
      },
      {
        icon: "📱",
        heading: "Mobile-First Approach",
        details:
          "We design interfaces with a mobile-first approach, ensuring optimal user experiences on smaller screens and seamless transitions between mobile and desktop platforms.",
      },
      {
        icon: "🛠️",
        heading: "Prototype Testing",
        details:
          "We provide interactive prototypes that allow you to visualize and test the design before development, ensuring it meets your expectations and user needs.",
      },
    ],
  },
]
function UIUXDesign() {
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

export default UIUXDesign;
