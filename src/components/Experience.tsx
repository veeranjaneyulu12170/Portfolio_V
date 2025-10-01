"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const AnimatedExperience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [lineHeight, setLineHeight] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const experiences = [
    {
      title: "UI/UX Design Intern",
      company: "Zummit Infolabs",
      period: "6 months",
      location: "Remote",
      description:
        "A design and development studio specializing in digital solutions. Led the UI/UX design for QuantumZyme blog website and designed AI Aiden chatbot interface.",
      achievements: [
        "Led the UI/UX design for QuantumZyme, a blog website, ensuring an intuitive and engaging interface",
        "Designed the logo and chatbot user interface for AI Aiden, an AI-powered chatbot, enhancing its usability and brand identity",
        "Collaborated with developers to ensure seamless implementation of design concepts",
        "Published a research paper",
        "Developed a user-friendly to-do list application to help users manage tasks efficiently",
      ],
      skills: ["UI/UX Design", "Figma", "Logo Design", "Chatbot Design", "Research"],
    },
    {
      title: "Banking Bot Developer",
      company: "Personal Project",
      period: "Project",
      location: "Self-directed",
      description: "A banking bot designed to improve customer interaction and support using advanced AI technologies.",
      achievements: [
        "Developed a sophisticated banking bot using Botpress.com, designed to enhance customer service in the banking sector",
        "The bot efficiently handles various customer inquiries, such as account balance checks, transaction history, and account number queries",
        "Implemented natural language processing for better customer interaction",
      ],
      skills: ["Botpress", "AI Development", "Customer Service", "Banking Systems", "NLP"],
    },
    {
      title: "HR Intern",
      company: "Cook & Klean",
      period: "1 month",
      location: "On-site",
      description:
        "A service provider specializing in hygiene and sanitation solutions. Managed various HR functions and facilitated workplace culture.",
      achievements: [
        "Managed recruitment, employee onboarding, and performance evaluations, ensuring a smooth HR process",
        "Coordinated training sessions and facilitated a positive workplace culture",
        "Streamlined HR processes and improved efficiency",
      ],
      skills: ["HR Management", "Recruitment", "Training", "Performance Evaluation", "Workplace Culture"],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🎨",
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      year: "2022",
      icon: "⚛️",
    },
    {
      title: "Adobe Certified Expert",
      issuer: "Adobe",
      year: "2021",
      icon: "🏆",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3, rootMargin: "-50px 0px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))

      setLineHeight(scrollProgress * 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="experience"
      className="py-20 bg-transparent"
    >
      <div className="container mx-auto px-6 bg-transparent ">
        <div className="text-center mb-16">
          <h2 className="press-start-2p-regular1 h-10 text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-m font-mono text-white max-w-lg mx-auto">
            Crafting digital experiences through innovation, design excellence, and technical expertise
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="max-w-6xl mx-auto mb-16" ref={timelineRef}>
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-200 dark:bg-slate-700 h-full">
              <div
                className="w-full bg-gradient-to-b from-blue-500 to-green-600 transition-all duration-1000 ease-out"
                style={{ height: `${lineHeight}%` }}
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className="relative flex items-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 transition-all duration-500 ${
                        visibleItems.includes(index)
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-110"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                    <Card
                      className={`transform transition-all duration-700 ${
                        visibleItems.includes(index)
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-8 scale-95"
                      } hover:shadow-xl hover:scale-105 bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700`}
                    >
                      <CardHeader>
                        <div className="flex flex-col font-mono">
                          <CardTitle className="text-xl text-slate-800 dark:text-slate-100 mb-1">{exp.title}</CardTitle>
                          <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                            {exp.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 font-mono">
                            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="font-mono text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="mb-4">
                          <h4 className="font-mono font-bold text-slate-800 dark:text-slate-200 mb-2">Key Achievements:</h4>
                          <ul className="font-mono space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start text-sm text-slate-600 dark:text-slate-400"
                              >
                                <div className="font-mono w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl  press-start-2p-regular1 font-bold text-white
           dark:text-slate-100 text-center mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="text-center font-mono text-lg group hover:scale-105 transition-all duration-300 p-4 bg-green  backdrop-blur-sm border border-slate-200 dark:border-slate-600 rounded-full shadow-sm hover:shadow-md animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="text-3xl mb-3 text-white transform transition-transform duration-300 group-hover:scale-110">{cert.icon}</div>
                <h4 className="font-semibold text-white text-slate-800 dark:text-slate-200 mb-2 text-sm leading-tight">
                  {cert.title}
                </h4>
                <p className="text-xs text-white text-slate-500 dark:text-slate-400 mb-1">{cert.issuer}</p>
                <p className="text-xs t text-blue-600 dark:text-blue-400 font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-green backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full shadow-lg">
            <div className="text-2xl">📈</div>
            <div>
              <div className="text-lg font-mono text-white font-semibold text-slate-800 dark:text-slate-200">Continuous Evolution</div>
              <div className="text-white font-mono text-slate-600 dark:text-slate-400">
                Embracing innovation and pushing the boundaries of digital excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedExperience
