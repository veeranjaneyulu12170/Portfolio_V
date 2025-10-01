"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Coffee, Heart, MapPin, Calendar, Sparkles, Download, Mail, Github, Linkedin } from "lucide-react"


// Enhanced Background with multiple animated elements
const EnhancedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
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
        className="absolute top-10 left-10 w-96 h-96 bg-black rounded-full blur-3xl"
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
        className="absolute top-1/2 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      />

      {/* Floating Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3],
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
          {i % 3 === 0 && <div className="w-4 h-4 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full" />}
          {i % 3 === 1 && <div className="w-3 h-3 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rotate-45" />}
          {i % 3 === 2 && <div className="w-2 h-6 bg-gradient-to-b from-cyan-400/40 to-blue-400/40 rounded-full" />}
        </motion.div>
      ))}

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </svg>

      {/* Particle System */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
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

      {/* Glowing Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ["#3B82F6", "#8B5CF6", "#EC4899", "#06B6D4"][i % 4]
            }40 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

// Animated counter with hover reveal
const StatCard = ({
  icon,
  value,
  label,
  suffix = "",
  hoverFact,
}: {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  hoverFact: string
}) => {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < value) {
            return prev + Math.ceil((value - prev) / 10)
          }
          clearInterval(timer)
          return value
        })
      }, 100)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Card className=" bg-gray-800/50 backdrop-blur-sm text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700/50">
        <CardContent className="p-6 text-center relative">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 mx-auto mb-4 bg-black rounded-full flex items-center justify-center text-white shadow-lg"
          >
            {icon}
          </motion.div>
          <div className="text-2xl font-bold mb-1 text-white">
            {count}
            {suffix}
          </div>
          <div className="text-sm mb-2 text-gray-300">{label}</div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/95 to-purple-500/95 rounded-lg flex items-center justify-center p-4"
              >
                <p className="text-white text-xs font-medium text-center">{hoverFact}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Interactive skill badge
const SkillBadge = ({ skill, delay = 0 }: { skill: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay, type: "spring", stiffness: 300 }}
    >
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-700/80 to-gray-800/80 hover:from-gray-600/80 hover:to-gray-700/80 border border-gray-600/50 text-white backdrop-blur-sm transition-all duration-300"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}

export default function AboutSection() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "Three.js",
    "c++/#C",
    "UI/UX Design",
    "MongoDB",
    "Figma",
    "SQL"
  ]

  const stats = [
    {
      icon: <Code2 className="w-6 h-6" />,
      value: 15,
      suffix: "+",
      label: "Projects Built ",
      
      hoverFact: "From simple landing pages to complex SaaS platforms",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      value: 1247,
      suffix: "",
      label: "Cups of Coffee",
      hoverFact: "Fueling late-night coding sessions since 2020",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: 5,
      suffix: "+",
      label: "Happy Clients",
      hoverFact: "Building lasting relationships through quality work",
    },
  ]

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-transparent">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto ">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 50px rgba(147, 51, 234, 0.6)",
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-80 h-90 relative rounded-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-90 h-100 rounded-2xl overflow-hidden rounded-full border-4 border-white/10 shadow-2xl backdrop-blur-sm"
                >
                  <img
                    src="https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758039018/dced_bdxlsb.png"
                    alt="Profile"
                    width={320}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full shadow-lg border-2 bg-gray-800/80 border-purple-500/50 text-white backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   
                   <span className="typewriter">Available for work</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-2xl font-bold text-white"
            >
              <div className="press-start-2p-regular1 ">Hi, <br/>I'm Veeranjaneyulu 🤖 </div>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 leading-relaxed text-gray-300 font-mono"
            >
              <p>
              I'm a passionate creative developer who bridges the gap between design and technology. 
                  With expertise spanning full-stack development, UI/UX design, and visual effects, 
                  I create immersive digital experiences that captivate and inspire.

              </p>
              <p className="font-mono">
              My journey combines technical precision with artistic vision, allowing me to craft 
                  solutions that are not only functional but also visually stunning. From responsive 
                  web applications to captivating product animations, I bring ideas to life through code and creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <Badge
                variant="outline"
                className="flex items-center gap-2 border-gray-600/50 text-gray-300 bg-gray-800/30 backdrop-blur-sm"
              >
                <MapPin className="w-3 h-3" />
                Andhra Pradesh, India
              </Badge>
              <Badge
                variant="outline"
                className="flex items-center gap-2 border-gray-600/50 text-gray-300 bg-gray-800/30 backdrop-blur-sm"
              >
                <Calendar className="w-3 h-3" />
                7+ Months Experience
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
             <a href="mailto:veeranjaneyulupepakayala@gmail.com">
  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
    <Mail className="w-4 h-4 mr-2" />
    Get In Touch
  </Button>
</a>

              <a
  href="https://drive.google.com/file/d/1jawMpe7L4aqmuaUH7sN_zd_4D9a-aLAh/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="border-gray-600/50 text-gray-300 hover:bg-gray-800/50 backdrop-blur-sm bg-transparent"
  >
    <Download className="w-4 h-4 mr-2" />
    Download CV
  </Button>
</a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/veeranjaneyulu-pepakayala-629392351/"
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              hoverFact={stat.hoverFact}
            />
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white"><span className="press-start-2p-regular1">Technologies I Love</span></h3>
          <div className="flex justify-center items-center overflow-x-auto whitespace-nowrap gap-3 px-2 py-4 scrollbar-hide">
  {skills.map((skill, index) => (
    <SkillBadge key={skill} skill={skill} delay={index * 0.1} />
  ))}
</div>

        </motion.div>
      </div>
    </section>
  )
}
