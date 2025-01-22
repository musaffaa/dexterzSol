'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "App Development",
    slug: "AppDevelopment",
    description: "Turning your ideas into innovative, high-performance apps.",
    image: "/assets/images/services/AppDevelopment.png",
    tags: ["Custom Apps", "iOS & Android", "User-Friendly"],
    lottieImg:
      "https://lottie.host/61621bcf-2bca-443c-9a5d-0a955f562bf8/ad85gOTX4h.lottie",
    url: "/components/servicesDetails/AppDevelopment",
    miniDetails:
      "Create custom, user-friendly mobile apps for iOS and Android that meet your specific business needs.",
    benefits: [
      {
        icon: "🚀",
        heading: "Customizable Solutions",
        details:
          "Our app development services offer tailored solutions designed specifically for your business goals. Whether you need a unique design, specialized functionality, or integration with existing systems, we ensure that the final product aligns perfectly with your needs. Our expertise helps deliver an app that stands out in the competitive market.",
      },
      {
        icon: "📱",
        heading: "Cross-Platform Compatibility",
        details:
          "We develop mobile apps that work seamlessly on both iOS and Android platforms, allowing your business to reach a broader audience. By using efficient frameworks, we minimize development time while maximizing compatibility, ensuring cost-effective solutions for your cross-platform needs.",
      },
      {
        icon: "🎨",
        heading: "User-Centric Design",
        details:
          "Our design philosophy revolves around creating intuitive and user-friendly interfaces. We carefully analyze user behavior to ensure the app is easy to navigate, visually appealing, and engaging, which enhances user satisfaction and boosts retention rates.",
      },
      {
        icon: "📈",
        heading: "Scalable Architecture",
        details:
          "Our apps are built to scale as your business grows. Whether your user base expands or your functionality requirements change, the app's architecture is designed to handle increasing demand seamlessly. This ensures long-term viability and reduces future development costs.",
      },
      {
        icon: "🛠️",
        heading: "Seamless Integration",
        details:
          "We ensure your app integrates effortlessly with existing tools and platforms, enhancing operational efficiency. This includes APIs, third-party services, and legacy systems, allowing your app to function as part of a cohesive digital ecosystem.",
      },
      {
        icon: "🔒",
        heading: "Robust Security",
        details:
          "Our development process prioritizes security by implementing best practices such as encryption, secure authentication, and regular testing. This protects sensitive user data and safeguards your app from vulnerabilities.",
      },
    ],
  },
]
function AppDevelopment() {
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

export default AppDevelopment;
