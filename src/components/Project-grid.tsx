"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, ExternalLink, Eye, Star } from "lucide-react"
import { ProjectCard } from "./Project-card"

const animations = {
  float: {
    animation: "float 6s ease-in-out infinite",
  },
  floatDelayed: {
    animation: "floatDelayed 8s ease-in-out infinite",
    animationDelay: "1s",
  },
  pulse: {
    animation: "pulse 2s ease-in-out infinite",
  },
}

const keyframes = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes floatDelayed {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`

const projects = [
  {
    id: 7,
    title: "MINI-LINK",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Tailwind,Node Js,MongoDb atlas"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183056/minilink_pvk0x9.png",
    video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758083614/MiniLink_-_Brave_2025-09-17_10-01-54_tzwuvz.mp4",
    description: "MiniLink is a modern URL shortening and link management platform built with React, TypeScript, and Node.js. It helps users create, manage, and track shortened links with advanced analytics..",
    size: "large",
    featured: true,
    year: "2024",
    status: "Live",
    likes: 12,
    views: "15",
    award: "Inspired Design",
    gradient: "from-blue-600/20 to-purple-600/20",
    demo:"https://mini-link-frontend.onrender.com/",
    code:"https://github.com/veeranjaneyulu12170/MINI-LINK",
  },
  {id: 8,
  title: "CNNCT",
  category: "Full Stack",
  tags: ["React", "TypeScript", "Tailwind,Node Js,MongoDb atlas"],
  image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183799/modern-browser-mockup_1_kdhtfn.png",
  video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758083471/CNNCT_f12bzo.mp4",
  description: "A modern web application for scheduling and managing meetings and events. Built with React, Node.js, Express, and MongoDB.",
  size: "large",
  featured: true,
  year: "2025",
  status: "Live",
  likes: 7,
  views: "15",
  award: "Inspired Design",
  gradient: "from-blue-600/20 to-purple-600/20",
  demo:"https://cnnct-1.onrender.com",
  code:"https://github.com/veeranjaneyulu12170/CNNCT",
},
{id: 1,
    title: "Portfolio",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Tailwind,Node Js,MongoDb atlas"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183632/imac-screen-mockup_sttyo5.png",
    video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758086021/aesthetic-portfolio-showcase-pro_-_Brave_2025-09-17_09-51-31_qlwzmy.mp4",
    description: "A dynamic 3D portfolio built with Spline, Three.js, React, and Tailwind, delivering an immersive and interactive experience.",
    size: "large",
    featured: true,
    year: "2024",
    status: "Live",
    likes: 127,
    views: "23",
    award: "unique Design",
    gradient: "from-blue-600/20 to-purple-600/20",
    demo:"https://portfolio-el0t.onrender.com/",
    code:"https://github.com/veeranjaneyulu12170/portfolio",
  },
 { id: 10,
    title: "Banking-Bot",
    category: "Web Desgin",
    tags: ["Framer", "Chatbot", "Prototyping"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183748/modern-browser-mockup_o4mcvb.png",
    video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758090852/Screen-Recording_1_ioijcf.mkv",
    description: "A dynamic 3D portfolio built with Spline, Three.js, React, and Tailwind, delivering an immersive and interactive experience.",
    size: "large",
    featured: true,
    year: "2024",
    status: "Live",
    likes: 127,
    views: "23",
    award: "unique Design",
    gradient: "from-blue-600/20 to-purple-600/20",
    demo:"https://bankingbot.framer.website/",
    code:"https://framer.com/projects/BankingBot--uF4NSicy0uqGZVl67EmJ-7rLKu?node=augiA20Il",
  },
  {
    id: 2,
    title: "Digital Nexus AI",
    category: "UI/UX Desgin",
    tags: ["Mobile", "Web Desgin", "Components" , "Figma"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758096898/MacBook_Air_2022_yktour.png",
    description: "Redgine Mobile version for the existing web version",
    size: "tall",
    year: "202",
    status: "Completed",
    likes: 89,
    views: "1.8k",
    video:"",
    gradient: "from-amber-600/20 to-orange-600/20",
    demo:"https://www.figma.com/design/8IlWTlmTxfVNas6W8psUJo/Nexas_work?node-id=11-3643&t=SbTqUVlQOlAoCWku-0",
    code:"",
  },
  {
    id: 3,
    title: "Movie ticket",
    category: "UI/UX Design",
    tags: ["Mobile", "Figma", "Prototyping"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183052/iphone-multiple-screens-mockup_t1ktsc.png",
    description: "Easy to use and More atractive layout desgined for convinence.",
    size: "tall",
    year: "2023",
    video:"",
    demo:"https://www.figma.com/design/JwY3zC2qMBkLDAT21Hvtk9/movie-booking?node-id=0-1&p=f&t=SbTqUVlQOlAoCWku-0",
    code:"",
    status: "Completed",
    likes: 156,
    views: "3.1k",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: 12,
    title: "Taxi Service",
    category: "UI/UX Design",
    tags: ["Mobile", "Figma", "Prototyping"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758091087/iPhone_16_Pro_gvct86.png",
    description: "Easy to use and More atractive layout desgined for taxi service .",
    size: "large",
    year: "2025",
    video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758094426/WhatsApp_Video_2025-09-17_at_12.53.42_521633c7_oz0rei.mp4",
    demo:"https://www.figma.com/file/FNeeZCDPvFDAcQkNMLaE2f?node-id=0:1&locale=en&type=design",
    code:"",
    status: "Completed",
    likes: 156,
    views: "3.1k",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id:11,
    title: "Quantumzyme blog",
    category: "UI/UX Design",
    tags: ["BLog", "Figma", "Components"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758091713/Rectangle_qv10u0.png",
    description: "Designed and developed a modern biotech landing page for Quantumzyme, featuring dynamic molecular graphics, interactive blog sections, and a clean, user-focused layout for science-driven innovation.",
    size: "large",
    year: "2025",
    video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758092291/Screen-Recording52_zio86q.mkv",
    demo:"https://www.figma.com/design/pambi3lB8DSZOiQ8TjzvhT/Quantumzyne?node-id=0-1&p=f&t=QwvV9jXhJugqELI8-0",
    code:"",
    status: "completed",
    likes: 10,
    views: "13",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: 9,
    title: "Beyond Chat Web",
    category: "Web Development",
    tags: ["Responsive", "React", "Three.JS" , "Desgin"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183057/betond_dzp78e.png",
    description: "BeyondChats is a modern AI-powered chatbot platform that helps businesses provide exceptional customer service through intelligent automation. Built with React, TypeScript, and Three.js, it features a beautiful UI with glass-morphism design and 3D animations.",
    size: "tall",
    year: "2024",
    video:"",
    demo:"https://beyondchat-kdq7umhxs.vercel.app/",
    code:"https://github.com/veeranjaneyulu12170/beyondchat",
    status: "Completed",
    likes: 1,
    views: "3",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: 4,
    title: "Inetrior Booking",
    category: "UI/UX Desgin",
    tags: ["Prototype", "UI", "Figma"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758091087/MacBook_13_n5zhiu.png",
    description: "Desgined a web service that aids in crating better workplace environment ",
    size: "wide",
    year: "2024",
    video:"",
    demo:"https://www.figma.com/design/SNGdR3OCFhr93LQrmuiaZw/Harmoni-Landig-page?node-id=0-1&p=f&t=SbTqUVlQOlAoCWku-0",
    code:"",
    status: "Live",
    likes: 203,
    views: "4.7k",
    award: "Innovation Award",
    gradient: "from-indigo-600/20 to-blue-600/20",
  },
  {
    id: 5,
    title: "WEB Navigator",
    category: "Web Development",
    tags: ["react", "MediaPipe model", "typescript"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183018/clean-ipad-screen-mockup-with-keyboard_qvehmn.png",
    video:"",
    demo:"https://webnavigator-ysip.onrender.com",
    code:"https://github.com/veeranjaneyulu12170/web_Navgation_handgestures",
    description: "Elegant Hand gesture navigation website with live gesture recognition .",
    size: "large",
    year: "2025",
    status: "Live",
    likes: 74,
    views: "1.2k",
    gradient: "from-red-600/20 to-pink-600/20",
  },
  {
    id: 6,
    title: "Journal App",
    category: "APP Development",
    video:"",
    demo:"",
    code:"https://github.com/veeranjaneyulu12170/Journal-app",
    tags: ["ReactNative", "API", "Expo SDK"],
    image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758183027/white-blank-screens-mockup_hl1cbc.png",
    description: "A clean and intuitive journaling app built using React Native with Expo. Designed with usability and minimalism in mind, it lets users create, view, and reflect on daily entries. It also offers AI-generated inspirations and visual insights based on journal content.",
    size: "tall",
    year: "2023",
    status: "Private",
    likes: 312,
    views: "5.9k",
    gradient: "from-yellow-600/20 to-orange-600/20",
  },
]

const categories = ["All", "Full Stack", "UI/UX Design", "Web Development", "APP Development"]

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  // Limit projects shown when "All" is selected and Load More not clicked
  const displayedProjects =
    selectedCategory === "All" && !showAllProjects
      ? filteredProjects.slice(0, 4) // show only first 6 projects initially
      : filteredProjects

  return (
    <>
      <style >{keyframes}</style>

      <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center text-white press-start-2p-regular1 mb-16">
        <h2 className="text-5xl font-black mb-6">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-xl text-white font-mono max-w-2xl mx-auto">
          A collection of my latest work spanning web development, design, and branding projects
        </p>
        <div className="flex justify-center font-mono text-white gap-8 mt-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>{projects.reduce((acc, p) => acc + p.likes, 0)} Total Likes</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-500" />
            <span>{projects.length} Projects</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap text-white font-mono justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory(category)
              setShowAllProjects(false) // reset when switching categories
            }}
            className="rounded-full px-6 transition-all duration-300 hover:scale-105"
          >
            {category}
            {category !== "All" && (
              <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {projects.filter((p) => p.category === category).length}
              </span>
            )}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredProject === project.id}
            onHover={setHoveredProject}
          />
        ))}
      </div>

      {/* Load More / Show Less Buttons */}
      {selectedCategory === "All" && (
        <div className="text-center mt-12">
          {!showAllProjects ? (
            <Button
              variant="outline"
              size="lg"
              className="px-8 font-mono bg-white border-slate-600 text-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setShowAllProjects(true)}
            >
              Load More Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="px-8 font-mono bg-white border-slate-600 text-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setShowAllProjects(false)}
            >
              Show Less
              <ArrowUp className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      )}
    </section>
    </>
  )
}
