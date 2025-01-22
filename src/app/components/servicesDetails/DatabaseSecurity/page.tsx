'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "Database Security",
    slug: "DatabaseSecurity",
    description: "Fortifying your data with cutting-edge security solutions.",
    image: "/assets/images/services/DatabaseSecurity.png",
    tags: ["Data Encryption", "Access Control", "Secure Architecture"],
    lottieImg:
      "https://lottie.host/0d1fcf45-e2cb-447d-ad2b-98c40c8a1fb9/sg9mYTAEsp.lottie",
    url: "/components/servicesDetails/DatabaseSecurity",
    miniDetails:
      "Ensure secure database architecture with encryption and robust access control measures.",
    benefits: [
      {
        icon: "🔒",
        heading: "Advanced Encryption",
        details:
          "We use cutting-edge encryption techniques to secure your data both at rest and in transit. This ensures that sensitive information remains protected from unauthorized access or breaches, safeguarding your business reputation.",
      },
      {
        icon: "🔑",
        heading: "Access Control",
        details:
          "Our solutions include role-based access controls to ensure only authorized personnel can access specific data. This minimizes risks of insider threats and enhances overall system security.",
      },
      {
        icon: "📜",
        heading: "Regulatory Compliance",
        details:
          "We help you achieve compliance with data protection regulations such as GDPR, HIPAA, or CCPA. Meeting these standards not only protects your business legally but also builds trust with customers and stakeholders.",
      },
      {
        icon: "🛡️",
        heading: "Real-Time Threat Monitoring",
        details:
          "Our systems continuously monitor for potential threats, such as malware or unauthorized access attempts. Proactive threat detection ensures your database remains secure, reducing the likelihood of data breaches.",
      },
      {
        icon: "⚙️",
        heading: "Disaster Recovery",
        details:
          "We implement robust disaster recovery solutions to safeguard your data in case of unexpected incidents. This ensures quick recovery and minimal downtime for your business.",
      },
      {
        icon: "📂",
        heading: "Data Integrity Assurance",
        details:
          "Our security protocols ensure the integrity of your data by preventing unauthorized modifications, ensuring that your business information remains accurate and reliable.",
      },
    ],
  },
]
function DatabaseSecurity() {
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

export default DatabaseSecurity;
