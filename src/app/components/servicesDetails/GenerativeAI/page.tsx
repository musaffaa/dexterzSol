'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "Generative AI",
    slug: "GenerativeAI",
    description: "Bringing Your Game Visions to Life with Precision and Passion.",
    image: "/assets/images/services/genAI.png",
    tags: ["AI-Powered Solutions", "Machine Learning", "Cutting-Edge Tech"],
    lottieImg:
      "https://lottie.host/18c67767-e41a-477f-93cf-790920be4def/3qw6cOiCXq.lottie",
    url: "/components/servicesDetails/GenerativeAI",
    miniDetails:
      "Harness AI-powered tools and machine learning to create innovative, cutting-edge solutions.",
    benefits: [
      {
        icon: "🤖",
        heading: "Advanced Automation",
        details:
          "Generative AI enables automation of complex tasks, such as data analysis, content creation, and customer support. By reducing human effort in repetitive tasks, businesses can focus on strategic goals and innovation, leading to improved efficiency and productivity.",
      },
      {
        icon: "📊",
        heading: "Data-Driven Insights",
        details:
          "Leverage AI to analyze large datasets and extract actionable insights. Our generative AI solutions identify patterns, trends, and anomalies that can empower businesses to make informed decisions, improve forecasting, and stay competitive in dynamic markets.",
      },
      {
        icon: "🌟",
        heading: "Innovative Product Development",
        details:
          "With generative AI, we help you build innovative products tailored to customer preferences. From creating unique designs to developing intelligent recommendation systems, AI unlocks endless possibilities for enhancing customer experience and engagement.",
      },
      {
        icon: "🎯",
        heading: "Personalized Experiences",
        details:
          "Our AI solutions enable real-time personalization of customer interactions. By adapting to user preferences and behavior, businesses can provide highly customized services, increasing customer satisfaction and loyalty.",
      },
      {
        icon: "💡",
        heading: "Creative Content Generation",
        details:
          "Our generative AI tools assist in creating unique and high-quality content, from written text to images and videos, enabling you to maintain a consistent and innovative brand presence.",
      },
      {
        icon: "📂",
        heading: "Enhanced Knowledge Management",
        details:
          "Utilize AI to organize, retrieve, and present information efficiently, helping teams access the knowledge they need to work smarter and faster.",
      },
    ],
  },
]
function GenerativeAI() {
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

export default GenerativeAI;
