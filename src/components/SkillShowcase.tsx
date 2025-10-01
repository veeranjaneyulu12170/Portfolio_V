"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Enhanced Background Component with black theme
const EnhancedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Large Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />

      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {i % 3 === 0 && <div className="w-4 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full" />}
          {i % 3 === 1 && <div className="w-3 h-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-45" />}
          {i % 3 === 2 && <div className="w-2 h-6 bg-gradient-to-b from-cyan-400/20 to-blue-400/20 rounded-full" />}
        </motion.div>
      ))}

      {/* Particle System */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

const SkillShowcase = () => {
  const [rotation, setRotation] = useState(0)
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [cardHovered, setCardHovered] = useState(false)

  const skills = [
    {
      name: "Frontend Development",
      icon: "F",
      color: "#3B82F6",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      description:
        "Building responsive and dynamic web applications with modern JavaScript frameworks and cutting-edge technologies.",
      tech: ["JavaScript", "React", "CSS", "Three.js"],
      experience: "5+ Years",
      projects: "50+ Projects",
    },
    {
      name: "Backend Development",
      icon: "B",
      color: "#A16207",
      gradient: "from-yellow-600 via-amber-600 to-orange-600",
      description:
        "Developing robust server-side applications and APIs with scalable architecture and database management.",
      tech: ["Node.js", "MongoDB", "Express", "PostgreSQL"],
      experience: "4+ Years",
      projects: "35+ Projects",
    },
    {
      name: "Design Tools",
      icon: "🎨",
      color: "#7C3AED",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      description:
        "Creating intuitive user interfaces and seamless user experiences using industry-leading design tools.",
      tech: ["Figma", "Framer", "Spline", "Adobe XD"],
      experience: "6+ Years",
      projects: "80+ Designs",
    },
    {
      name: "Creative Software",
      icon: "🎬",
      color: "#DC2626",
      gradient: "from-red-400 via-red-500 to-red-600",
      description:
        "Producing stunning visual content, animations, and 3D models for digital media and interactive experiences.",
      tech: ["Blender", "After Effects", "Photoshop", "Premiere Pro"],
      experience: "4+ Years",
      projects: "60+ Creations",
    },
    {
      name: "Web Technologies",
      icon: "🌐",
      color: "#059669",
      gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
      description:
        "Mastering modern web technologies and frameworks to build fast, scalable, and maintainable applications.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      experience: "5+ Years",
      projects: "45+ Applications",
    },
    {
      name: "Motion Graphics",
      icon: "⚡",
      color: "#EA580C",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      description:
        "Creating dynamic animations and visual effects that bring static designs to life with smooth transitions.",
      tech: ["Lottie", "GSAP", "Framer Motion", "CSS Animations"],
      experience: "3+ Years",
      projects: "40+ Animations",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSkillIndex((prev) => (prev + 1) % skills.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovered, skills.length])

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => prev + 0.5)
    }, 50)

    return () => clearInterval(rotationInterval)
  }, [])

  const handleSkillClick = (index: number) => {
    setActiveSkillIndex(index)
  }

  // Calculate position of active skill circle
  const getActiveSkillPosition = () => {
    const angle = (activeSkillIndex * 360) / skills.length
    const currentAngle = (angle - rotation) % 360
    const normalizedAngle = currentAngle < 0 ? currentAngle + 360 : currentAngle

    const centerX = 192 // Half of container width (384px / 2)
    const centerY = 192 // Half of container height (384px / 2)
    const radius = 160 // Distance from center

    const x = centerX + Math.cos((normalizedAngle * Math.PI) / 180) * radius
    const y = centerY + Math.sin((normalizedAngle * Math.PI) / 180) * radius

    return { x, y }
  }

  const activePosition = getActiveSkillPosition()

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      <EnhancedBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg">A diverse toolkit spanning development, design, and digital artistry</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Rotating Skills Showcase */}
        <div className="flex justify-center items-center min-h-[600px] relative">
          <div className="relative w-96 h-96">
            {/* Central Glowing Sphere */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`w-24 h-24 rounded-full shadow-2xl relative overflow-hidden transition-all duration-300 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
                style={{
                  transform: `rotate(${rotation * 2}deg) ${isHovered ? "scale(1.1)" : "scale(1)"}`,
                  boxShadow: `0 0 40px ${skills[activeSkillIndex]?.color}80, 0 0 80px ${skills[activeSkillIndex]?.color}60, 0 0 120px ${skills[activeSkillIndex]?.color}40`,
                  background: `conic-gradient(from 0deg, ${skills[activeSkillIndex]?.color}, ${skills[activeSkillIndex]?.color}dd, ${skills[activeSkillIndex]?.color})`,
                  animation: isHovered ? "none" : "pulse 3s ease-in-out infinite alternate",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/20"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm"></div>

                {/* Core Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                  {skills[activeSkillIndex]?.icon}
                </div>

                {/* Sparkle Effects */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      top: `${20 + Math.sin((i * 45 * Math.PI) / 180) * 25}%`,
                      left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 25}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "2s",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Outer Ring with Skills */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
              }}
            >
              <div className="w-80 h-80 rounded-full relative">
                {/* Ring Glow */}
                <div
                  className="absolute inset-0 rounded-full border-2 opacity-30"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, ${skills[activeSkillIndex]?.color}40, transparent)`,
                    filter: "blur(2px)",
                  }}
                ></div>

                {/* Skill Dots */}
                {skills.map((skill, index) => {
                  const angle = (index * 360) / skills.length
                  const isActive = index === activeSkillIndex

                  return (
                    <div
                      key={skill.name}
                      className="absolute cursor-pointer transition-all duration-500 z-15"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px) rotate(${
                          -angle + rotation
                        }deg)`,
                      }}
                      onClick={() => handleSkillClick(index)}
                    >
                      <motion.div
                        className="w-10 h-10 rounded-full relative overflow-hidden transition-all duration-500 cursor-pointer"
                        style={{
                          backgroundColor: skill.color,
                          background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                        }}
                        animate={{
                          scale: isActive ? 1.5 : 1,
                          boxShadow: isActive ? `0 0 40px ${skill.color}` : `0 0 20px ${skill.color}`,
                        }}
                        whileHover={{ scale: isActive ? 1.6 : 1.25 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-90`}></div>
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                        <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                          {skill.icon}
                        </div>

                        {/* Active Ring */}
                        {isActive && (
                          <div
                            className="absolute inset-0 rounded-full border-2 border-white/80 animate-ping"
                            style={{ animationDuration: "1s" }}
                          ></div>
                        )}
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Enhanced Background Effects */}
            <div
              className="absolute inset-0 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, ${skills[activeSkillIndex]?.color}40 0%, transparent 70%)`,
                animation: "pulse 4s ease-in-out infinite alternate",
              }}
            ></div>
          </div>

          {/* Animated Skill Card - Emerges from active skill circle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillIndex}
              className="absolute z-40"
              initial={{
                x: activePosition.x - 144, // Center the card (288px width / 2)
                y: activePosition.y - 200, // Center the card (400px height / 2)
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: -400, // Final position to the left
                y: -200, // Center vertically
                scale: 1,
                opacity: 1,
              }}
              exit={{
                x: activePosition.x - 144,
                y: activePosition.y - 200,
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                scale: { duration: 0.4 },
                opacity: { duration: 0.4 },
              }}
            >
              <motion.div
                className={`relative p-6 w-72 h-80 transition-all duration-300 cursor-pointer ${
                  cardHovered ? "scale-105" : "scale-100"
                }`}
                style={{
                  background: "rgba(15, 15, 15, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${skills[activeSkillIndex].color}60`,
                  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${skills[activeSkillIndex].color}30`,
                  borderRadius: "16px",
                }}
                onMouseEnter={() => setCardHovered(true)}
                onMouseLeave={() => setCardHovered(false)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glass Shine Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `linear-gradient(135deg, transparent, ${skills[activeSkillIndex].color}40, transparent)`,
                    animation: cardHovered ? "shine 2s ease-in-out infinite" : "none",
                  }}
                ></div>

                {/* Card Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br ${skills[activeSkillIndex].gradient} transition-all duration-300 font-bold text-white`}
                    style={{
                      boxShadow: `0 10px 25px ${skills[activeSkillIndex].color}40`,
                      transform: cardHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {skills[activeSkillIndex].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{skills[activeSkillIndex].name}</h3>
                    <p className="text-xs text-gray-300">{skills[activeSkillIndex].experience}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-3">
                  {skills[activeSkillIndex].description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-300 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills[activeSkillIndex].tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20 transition-all duration-300 hover:bg-white/20"
                        style={{
                          boxShadow: `0 0 10px ${skills[activeSkillIndex].color}15`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-300">Portfolio</span>
                    <span className="text-xs text-white font-semibold">{skills[activeSkillIndex].projects}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${skills[activeSkillIndex].gradient} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {skills.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            i === activeSkillIndex ? "bg-white" : "bg-white/30"
                          }`}
                          onClick={() => handleSkillClick(i)}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400">
                      {activeSkillIndex + 1} / {skills.length}
                    </div>
                  </div>
                </div>

                {/* Floating Particles Inside Card */}
                {cardHovered &&
                  [...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style >{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default SkillShowcase
