"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Eye, Star, Award, Heart, Bookmark, ArrowUpRight } from "lucide-react"

const animations = {
  fadeInUp: {
    animation: "fadeInUp 0.6s ease-out forwards",
  },
  float: {
    animation: "float 6s ease-in-out infinite",
  },
  pulse: {
    animation: "pulse 2s ease-in-out infinite",
  },
}

const keyframes = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`

interface Project {
  id: number
  title: string
  category: string
  tags: string[]
  image: string
  description: string
  size: string
  featured?: boolean
  year: string
  status: string
  likes: number
  views: string
  award?: string
  gradient: string
  video?:string
  demo?:string
  code?:string
  
}

interface ProjectCardProps {
  project: Project
  index: number
  isHovered: boolean
  onHover: (id: number | null) => void
}

export function ProjectCard({ project, index, isHovered, onHover }: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(project.likes)

  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "wide":
        return "col-span-2"
      case "tall":
        return "row-span-2"
      default:
        return ""
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-800/90 text-white border-green-600/50"
      case "In Progress":
        return "bg-yellow-800/90 text-white border-yellow-600/50"
      case "Completed":
        return "bg-blue-800/90 text-white border-blue-600/50"
      case "Private":
        return "bg-purple-800/90 text-white border-purple-600/50"
      default:
        return "bg-gray-800/90 text-white border-gray-600/50"
    }
  }

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
    setCurrentLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Share functionality would go here
    console.log("Sharing project:", project.title)
  }

  const getCardHeights = (size: string) => {
    switch (size) {
      case "large":
      case "tall":
        return { image: "h-3/5", content: "h-2/5" } // Taller cards can use 60/40 split
      case "wide":
      case "small":
      default:
        return { image: "h-1/2", content: "h-1/2" } // Shorter cards need 50/50 split for action bar visibility
    }
  }

  return (
    <>
      <style >{keyframes}</style>

      <Card
         className={`group relative overflow-hidden cursor-pointer bg-black/40 rounded-xl border-white/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${getGridClasses(project.size)}`}
         onMouseEnter={() => onHover(project.id)}
         onMouseLeave={() => onHover(null)}
        style={{
          ...animations.fadeInUp,
          animationDelay: `${index * 150}ms`,
        }}
      >
<div className={`relative ${getCardHeights(project.size).image} overflow-hidden group`}>
  {/* Default image */}
  <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className={`w-full h-full object-cover bg-white transition-opacity duration-700 
      ${project.video ? "group-hover:opacity-0" : "opacity-100"}`}
  />

  {/* Hover video preview */}
  {project.video && (
    <video
      src={project.video}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full bg-white object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-800"
    />
  )}
</div>



<div
  className={`relative ${getCardHeights(project.size).content} 
    bg-black backdrop-blur-sm flex flex-col text-white`}
>

          {/* Content header - flexible space */}
          <div className="backdrop-blur-lg flex-1 ml-2 mb-2 mt-2 mb-2 font-mono space-y-2 min-h-0 overflow-hidden ">
            {/* Category and year */}
            <div className="flex items-center justify-between ">
              <Badge
                variant="secondary"
                className="bg-gray-100 text-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
              >
                {project.category}
              </Badge>
              <span className="text-xs text-white font-medium bg-gray-800 px-2 py-1 m-2 rounded-full">{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg press-start-2p-regular1 font-bold text-white text-balance ml-2 leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-sm text-white/80 leading-relaxed line-clamp-2 overflow-hidden">{project.description}</p>

            <div className="flex flex-wrap gap-1 overflow-hidden">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                  style={{ transitionDelay: `${tagIndex * 50}ms` }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs text-gray-500 px-1">+{project.tags.length - 3} more</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2 flex-shrink-0">
            <div className="flex gap-2">
            {project.demo && (
  <a href={project.demo} target="_blank" rel="noopener noreferrer">
    <Button
      size="sm"
      className="bg-primary hover:bg-primary/90 text-white ml-2 shadow-md hover:shadow-lg transition-all duration-300 border-0"
      style={{ backgroundColor: "rgb(234, 88, 12)" }}
    >
      <Eye className="w-3 h-3 mr-1" />
      View
    </Button>
  </a>
)}
            {project.code && (
  <a href={project.code} target="_blank" rel="noopener noreferrer">
    <Button
      size="sm"
      variant="outline"
      className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 bg-transparent ml-2 mb-2"
    >
      <Github className="w-3 h-3 mr-1 " />
      Code
    </Button>
  </a>
)}

            </div>

            <Button
              size="sm"
              variant="ghost"
              className="text-gray-500 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              onClick={handleShare}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Award badge */}
          {project.award && (
            <div className="absolute -top-2 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1 transform -rotate-3 hover:rotate-0 transition-all duration-300 border border-yellow-800">
              <Award className="w-3 h-3" />
              {project.award}
            </div>
          )}
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 rounded-lg pointer-events-none" />
      </Card>
    </>
  )
}
