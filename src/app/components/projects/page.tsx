"use client";
import React from "react";
import ProjectCard from "../projectsCard/page";
import { Project } from "../../../../types/types";
// import { client } from "@/sanity/lib/client";
// import { Project } from "../../../../types/types";
// import { Description } from "@mui/icons-material";

function ProjectPage() {
  // const [projects, setProjects] = useState<Project[]>([]);

  const project: Project[] = [
    { name: "IRTIQA AI",
      description: "Build A Better World Through Technology",
      image: "/assets/images/projects/irtiqa-ai-logo.png",
      path: "/components/details/IRTIQAAI",
    },
    { name: "Art Generator",
      description: "Imagine AI Art Generator.",
      image: "/assets/images/projects/art-generator.png",
      path: "/components/details/ArtGenerator",
    },
    { name: "PROSPECTX",
      description: "All In One Business Solution.",
      image: "/assets/images/projects/PROSPECTX.png",
      path: "/components/details/PROSPECTX",
    },
    { name: "Study.com",
      description: "Learn faster. Stay motivated. Study smarter",
      image: "/assets/images/projects/study.png",
      path: "/components/details/StudyCom",
    },
    { name: "Lazaza",
      description: "AI-Powered Ads.",
      image: "/assets/images/projects/lazaza.png",
      path: "/components/details/Lazaza",
    }
  ]
  // const CACHE_KEY = "projectsCache";
  // const CACHE_DURATION = 5 * 60 * 1000;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const cachedData = localStorage.getItem(CACHE_KEY);
  //       const cache = cachedData ? JSON.parse(cachedData) : null;

  //       if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
  //         setProjects(cache.data);
  //       } else {
  //         const data = await client.fetch(`*[_type == "projectSchema"]`);
  //         setProjects(data);
  //         localStorage.setItem(
  //           CACHE_KEY,
  //           JSON.stringify({ data, timestamp: Date.now() })
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="w-full py-28 from-blue-100 to-blue-50 bg-gradient-to-r min-h-screen flex justify-center items-center">
      {/* Vertical Divider - Hidden on smaller screens */}
      <div className="hidden lg:block fixed left-1/2 top-0 h-screen w-[2px] bg-gradient-to-r from-blue-500 to-cyan-400" />

      <div className="w-full max-w-screen-xl px-6">
        {/* Page Title */}
        <div className="mb-28 relative z-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-[24rem]">
            Explore some of our best projects showcasing innovation and creativity.
          </p>
        </div>
        {project.length > 0 ? (
          <div className="flex flex-col gap-16 md:gap-8 sm:gap-2">
            {project.map((project: Project, index: number) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} flex-col sm:flex-row`}
              >
                <div
                  className={`max-w-[30vh] sm:w-[45%] ${
                    index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight lg:mr-20"
                  }`}
                >
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    path={project.path}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
