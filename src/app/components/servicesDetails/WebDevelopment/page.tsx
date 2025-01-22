'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "Web Development",
    slug: "WebDevelopment",
    description: "Building responsive and scalable websites tailored to your needs.",
    image: "/assets/images/services/WebDev.jpg",
    tags: ["Responsive Design", "SEO-Optimized", "Fast Loading"],
    lottieImg:
      "https://lottie.host/21454b07-1152-4135-9d23-148900b7812b/uDxNM1EnZt.lottie",
    url: "/components/servicesDetails/WebDevelopment",
    miniDetails:
      "Build responsive, fast-loading, and SEO-optimized websites tailored to your audience.",
    benefits: [
      {
        icon: "📐",
        heading: "Responsive Design",
        details:
          "Our web development services focus on creating responsive designs that adapt seamlessly to all devices, including desktops, tablets, and smartphones. This ensures your website offers a consistent and professional user experience across platforms.",
      },
      {
        icon: "🔍",
        heading: "SEO Optimization",
        details:
          "We integrate the latest SEO strategies into your website to improve its visibility in search engines. From optimizing site speed to crafting search-friendly content, we ensure your website ranks higher and attracts more organic traffic.",
      },
      {
        icon: "⚡",
        heading: "High Performance",
        details:
          "Speed matters when it comes to websites. We optimize loading times, server performance, and resource management to deliver a fast, efficient, and smooth browsing experience for your users.",
      },
      {
        icon: "⚙️",
        heading: "Custom Features",
        details:
          "Our team develops tailored features, whether it's e-commerce functionality, interactive tools, or a content management system. These customizations make your website unique and better aligned with your business objectives.",
      },
      {
        icon: "📈",
        heading: "Analytics Integration",
        details:
          "We integrate analytics tools to help you track user behavior, monitor performance, and make data-driven improvements to your website over time.",
      },
      {
        icon: "🌐",
        heading: "Global Accessibility",
        details:
          "Our websites are designed to be accessible globally, with multilingual support and compliance with accessibility standards, ensuring an inclusive experience for all users.",
      },
    ],
  },
]
function WebDevelopment() {
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

export default WebDevelopment;
