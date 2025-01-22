'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = [
  {
    title: "Blockchain Development",
    slug: "BlockchainDevelopment",
    description: "Unlocking Innovation Through Decentralized Technology",
    image: "/assets/images/services/blockchain.jpg",
    tags: ["Smart Contracts", "Decentralized Apps", "Secure Transactions"],
    lottieImg:
      "https://lottie.host/0bbca5ce-f628-4e5d-a730-29b4f8c0c8d0/eSsaAJGhLZ.lottie",
    url: "/components/servicesDetails/BlockchainDevelopment",
    miniDetails:
      "Develop decentralized apps, smart contracts, and secure blockchain solutions.",
    benefits: [
      {
        icon: "🔗",
        heading: "Secure Transactions",
        details:
          "Our blockchain solutions ensure secure and tamper-proof transactions by leveraging cryptographic protocols. This guarantees data integrity and protects your business from fraud and unauthorized access, creating a trusted environment for all stakeholders.",
      },
      {
        icon: "🛠️",
        heading: "Smart Contract Development",
        details:
          "We specialize in developing self-executing smart contracts that automate processes and reduce the need for intermediaries. These contracts are highly secure, transparent, and reliable, ensuring efficient operations and minimizing risks.",
      },
      {
        icon: "🌐",
        heading: "Decentralized Applications (dApps)",
        details:
          "Our team builds decentralized applications tailored to your business needs. dApps enhance transparency, security, and user control by operating on blockchain networks, offering a more robust and resilient solution compared to traditional apps.",
      },
      {
        icon: "📈",
        heading: "Scalable Blockchain Solutions",
        details:
          "Our blockchain architecture is designed to scale with your business. Whether you're handling thousands of transactions or expanding your user base, our solutions can seamlessly adapt to meet growing demands without compromising performance.",
      },
      {
        icon: "🛡️",
        heading: "Immutable Ledger",
        details:
          "We implement immutable ledger systems to ensure that all data entries are permanent and tamper-proof, enhancing trust and accountability in your operations.",
      },
      {
        icon: "⚙️",
        heading: "Custom Blockchain Solutions",
        details:
          "Our developers create tailored blockchain solutions to meet your specific requirements, whether it's private blockchains, hybrid systems, or token development.",
      },
    ],
  },
]
function BlockchainDevelopment() {
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

export default BlockchainDevelopment;
