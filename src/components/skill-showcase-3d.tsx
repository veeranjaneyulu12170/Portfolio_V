"use client"

import { useState, useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Sphere, Html, Trail, Sparkles, useTexture } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import * as THREE from "three"
import { Text } from "@react-three/drei"

// Mobile detection utility
function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// WebGL context handling
function handleWebGL(renderer: THREE.WebGLRenderer) {
  if (typeof window === 'undefined') return
  
  renderer.domElement.addEventListener("webglcontextlost", (e) => {
    e.preventDefault()
    console.warn("WebGL context lost on this device.")
    // Could trigger fallback here if needed
  })

  renderer.domElement.addEventListener("webglcontextrestored", () => {
    console.warn("WebGL context restored.")
    // Could re-init scene here if needed
  })
}

function PlanetTexture({ skill, index }: { skill: any; index: number }) {
  // Generate different planet textures based on skill type
  const getTextureUrl = (skillIndex: number) => {
    const textures = [
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074067/moonmap1k_fd1xkz.jpg",
      
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074067/mars_1k_color_fuheoz.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/venusmap_b5jgnn.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/plutomap1k_p15ae6.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/mercurymap_ldffbr.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074067/moonbump1k_qnanpx.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/venusbump_k7gsuo.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/mercurybump_q9c5sb.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/plutobump1k_pq9ivy.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758076600/marsbump1k_meejld.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758076588/earthmap1k_cj4te3.jpg",
      "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758076587/earthbump1k_wyuhod.jpg"
    ]
    return textures[skillIndex % textures.length]
  }

  const texture = useTexture(getTextureUrl(index))

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  texture.flipY = false
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter

  return (
    <meshStandardMaterial
      map={texture}
      emissive={new THREE.Color(skill.color)}
      emissiveIntensity={0.00}
      roughness={0.8}
      metalness={0.1}
      bumpMap={texture}
      bumpScale={0.8}
      normalMap={texture}
      normalScale={new THREE.Vector2(0.5, 0.5)}
      opacity={1}
    />
  )
}

// 3D Skill Orb Component
function SkillOrb({ skill, position, isActive, onClick, index }: any) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05

      if (isActive) {
        meshRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
      } else if (hovered) {
        meshRef.current.scale.setScalar(1.1)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        {/* Main Planet Orb */}
        <Sphere
          ref={meshRef}
          args={[1, 128, 128]}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <PlanetTexture skill={skill} index={index} />
        </Sphere>

        <Sphere args={[1.02, 64, 64]}>
          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={isActive ? 0.15 : hovered ? 0.1 : 0.05}
            side={THREE.BackSide}
          />
        </Sphere>

        {/* Glowing Ring */}
        {isActive && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2, 0.02, 8, 64]} />
            <meshBasicMaterial color={skill.color} transparent opacity={0.9} />
          </mesh>
        )}

        {/* Sparkles around active orb */}
        {isActive && <Sparkles count={150} scale={3} size={2} speed={0.5} color={skill.color} />}
    

        {/* 3D Text Label */}
      <Html
          position={[0, 2, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: "none",
            userSelect: "none",
            
           
          }}
        >
          <div className="text-white text-3xl font-bold text-center bg-transparent px-1 py-2 mt-2 mb-2 rounded press-start-2p-regular1">
          <span className="mb-5 py-5">{skill.icon}</span> {skill.name.split(" ")[0]}
          </div>
        </Html>

        {/* Trail effect for active orb */}
        {isActive && (
          <Trail width={0.5} length={10} color={skill.color} attenuation={(t) => t * t}>
            <mesh>
              <sphereGeometry args={[0.1]} />
              <meshBasicMaterial color={skill.color} />
            </mesh>
          </Trail>
        )}
      </group>
    </Float>
  )
}

// Central Core Component
function CentralCore({ activeSkill }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  const coreTexture = useTexture("https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758074066/mercurymap_ldffbr.jpg")
  coreTexture.wrapS = coreTexture.wrapT = THREE.RepeatWrapping
  coreTexture.flipY = false
  coreTexture.generateMipmaps = true

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group>
      {/* Core Sphere */}
      <Sphere ref={meshRef} args={[0.8, 128, 128]}>
        <meshStandardMaterial
          map={coreTexture}
          emissive={new THREE.Color(activeSkill.color)}
          emissiveIntensity={0.1}
          roughness={0.7}
          metalness={0.05}
          bumpMap={coreTexture}
          bumpScale={0.2}
          transparent
          opacity={0.95}
        />
      </Sphere>

      {/* Inner Glow */}
      <Sphere args={[1.2, 16, 16]}>
        <meshBasicMaterial color={activeSkill.color} transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>

      {/* Rotating Rings */}
      {[1.5, 2, 2.5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 8, 32]} />
          <meshBasicMaterial color={activeSkill.color} transparent opacity={0.3 - i * 0.1} />
        </mesh>
      ))}

      {/* Central Sparkles */}
      <Sparkles count={30} scale={2} size={1} speed={0.3} color={activeSkill.color} />
    </group>
  )
}

// Camera Controller
function CameraController({ activeIndex }: { activeIndex: number }) {
  const { camera } = useThree()

  useFrame(() => {
    const angle = (activeIndex * Math.PI * 2) / 6
    const radius = 15
    const targetX = Math.cos(angle) * radius
    const targetZ = Math.sin(angle) * radius

    camera.position.lerp(new THREE.Vector3(targetX, 5, targetZ), 0.02)
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Mobile Fallback Component
function MobileFallback({ skills, activeSkillIndex, onSkillClick }: any) {
  return (
    <div className="relative min-h-screen bg-transparent overflow">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute  left-0 right-0 z-20 text-center px-4 "
      >
        <h2 className="press-start-2p-regular mb-2 text-2xl md:text-4xl font-bold  text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive Skills
        </h2>
        <p className="  text-gray-300 text-sm font-mono">Tap skills to explore • Swipe to navigate</p>
      </motion.div>

      {/* Mobile Skills Grid */}
      <div className="flex items-center justify-center px-8 pt-20 pb-80">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {skills.map((skill: any, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSkillClick(index)}
              className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                index === activeSkillIndex ? 'ring-2 ring-white/50' : ''
              }`}
              style={{
                background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                border: `1px solid ${skill.color}40`,
                boxShadow: index === activeSkillIndex 
                  ? `0 20px 40px ${skill.color}30, 0 0 20px ${skill.color}20` 
                  : `0 10px 20px rgba(0,0,0,0.3)`
              }}
            >
              {/* Skill Icon */}
              <div 
                className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 10px 25px ${skill.color}40`
                }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-white font-bold text-center text-xs mb-2">
                {skill.name.split(' ')[0]}
              </h3>

              {/* Active Indicator */}
              {index === activeSkillIndex && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: skill.color }}
                >
                  <span className="text-white text-xs">✓</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Skill Details */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="absolute bottom-0 left-0 right-0 z-10 p-4"
        >
          <div
            className="bg-black/90 backdrop-blur-xl border rounded-2xl p-4 shadow-2xl max-h-80 overflow-y-auto"
            style={{
              borderColor: skills[activeSkillIndex].color + "40",
              boxShadow: `0 25px 60px rgba(0,0,0,0.3), 0 0 20px ${skills[activeSkillIndex].color}30`
            }}
          >
            {/* Header */}
            <div className="flex items-center space-x-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-lg"
                style={{
                  backgroundColor: skills[activeSkillIndex].color,
                  boxShadow: `0 10px 25px ${skills[activeSkillIndex].color}40`
                }}
              >
                {skills[activeSkillIndex].icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{skills[activeSkillIndex].name}</h3>
                <p className="text-xs text-gray-300">{skills[activeSkillIndex].experience}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-xs mb-3 leading-relaxed">
              {skills[activeSkillIndex].description}
            </p>

            {/* Tech Stack */}
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-gray-300 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {skills[activeSkillIndex].tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                    style={{
                      borderColor: skills[activeSkillIndex].color + "40"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">
                {skills[activeSkillIndex].projects}
              </div>
              <div className="text-xs text-gray-400">Completed</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {skills.map((skill: any, index: number) => (
            <button
              key={skill.name}
              onClick={() => onSkillClick(index)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === activeSkillIndex ? skill.color : "rgba(255,255,255,0.3)",
                boxShadow: index === activeSkillIndex ? `0 0 15px ${skill.color}` : "none"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SkillShowcase3D = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(isMobile())
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const skills = [
    {
      name: "Frontend Development",
      icon: "⚛️",
      color: "#61DAFB",
      description:
        "Building responsive and dynamic web applications with modern JavaScript frameworks and cutting-edge technologies.",
      tech: ["React", "Next.js", "TypeScript", "Three.js"],
      knowledge: "⭐⭐⭐⭐",
      projects: "5+ Projects",
    },
    {
      name: "Backend Development",
      icon: "🔧",
      color: "#F7DF1E",
      description:
        "Developing robust server-side applications and APIs with scalable architecture and database management.",
      tech: ["Node.js", "MongoDB", "Express", "SQL"],
      experience: "",
      projects: "3+ Projects",
    },
    {
      name: "Design Tools",
      icon: "🎨",
      color: "#FF6B6B",
      description:
        "Creating intuitive user interfaces and seamless user experiences using industry-leading design tools.",
      tech: ["Figma", "Framer", "Spline", "Photoshop"],
      experience: "4-Months",
      projects: "20+ Designs",
    },
    {
      name: "Creative Software",
      icon: "🎬",
      color: "#4ECDC4",
      description:
        "Producing stunning visual content, animations, and 3D models for digital media and interactive experiences.",
      tech: ["Blender", "After Effects", "Davinci resolve", "Unity"],
      experience: "8+ Months",
      projects: "20+ Creations",
    },
    {
      name: "Web Technologies",
      icon: "🌐",
      color: "#45B7D1",
      description:
        "Mastering modern web technologies and frameworks to build fast, scalable, and maintainable applications.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Javascript"],
      experience: "+ Years",
      projects: "10+ Applications",
    },
    {
      name: "Motion Graphics",
      icon: "⚡",
      color: "#96CEB4",
      description:
        "Creating dynamic animations and visual effects that bring static designs to life with smooth transitions.",
      tech: ["Blender Animation", "After effects"],
      experience: "",
      projects: "10+ Animations",
    },
  ]

  // Calculate positions for skills in a circle
  const skillPositions = useMemo(() => {
    return skills.map((_, index) => {
      const angle = (index * Math.PI * 2) / skills.length
      const radius = 7
      return [Math.cos(angle) * radius, Math.sin(index * 0.5) * 2, Math.sin(angle) * radius]
    })
  }, [skills.length])

  const handleSkillClick = (index: number) => {
    setActiveSkillIndex(index)
    setShowDetails(true)
  }

  // Return mobile fallback if on mobile device
  if (isMobileDevice) {
    return (
      <MobileFallback 
        skills={skills}
        activeSkillIndex={activeSkillIndex}
        onSkillClick={handleSkillClick}
      />
    )
  }

  return (
    <section className="relative min-h-screen bg-transparent backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-0 right-0 z-10 text-center"
      >
        <h2 className="text-4xl press-start-2p-regular1 md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Interactive 3D Skills
        </h2>
        <p className="text-gray-300 text-lg font-mono">Click and drag to explore • Click orbs to learn more</p>
      </motion.div>

      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [15, 5, 15], fov: 60 }} 
        style={{ height: "120vh" }}
        dpr={[1, 1.5]}
        shadows={false}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          preserveDrawingBuffer: false
        }}
        onCreated={({ gl }) => {
          // Add WebGL context handling
          handleWebGL(gl)
        }}
      >
        <Environment preset="night" />

        <ambientLight intensity={0.8} />
        <directionalLight position={[-10,5,-10]} intensity={1.0} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color={skills[activeSkillIndex].color} />
        <pointLight position={[5, 15, 5]} intensity={0.6} color="#4a90e2" />

        {/* Central Core */}
        <CentralCore activeSkill={skills[activeSkillIndex]} />

        {/* Skill Orbs */}
        {skills.map((skill, index) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            position={skillPositions[index]}
            isActive={index === activeSkillIndex}
            onClick={() => handleSkillClick(index)}
            index={index}
          />
        ))}

        {/* Camera Controller */}
        <CameraController activeIndex={activeSkillIndex} />

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Skill Details Panel */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="absolute top-20 right-8 w-80 z-20"
          >
            <div
              className="mt-8 bg-black/80 backdrop-blur-xl border rounded-2xl p-6 shadow-2xl"
              style={{
                borderColor: skills[activeSkillIndex].color + "40",
                boxShadow: `0 25px 60px rgba(8, 167, 35, 0.1), 0 0 20px ${skills[activeSkillIndex].color}30`,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                  style={{
                    backgroundColor: skills[activeSkillIndex].color,
                    boxShadow: `0 10px 25px ${skills[activeSkillIndex].color}40`,
                  }}
                >
                  {skills[activeSkillIndex].icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{skills[activeSkillIndex].name}</h3>
                  <p className="text-sm text-gray-300">{skills[activeSkillIndex].experience}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm mb-4 leading-relaxed">{skills[activeSkillIndex].description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-300 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills[activeSkillIndex].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                      style={{
                        borderColor: skills[activeSkillIndex].color + "40",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{skills[activeSkillIndex].projects}</div>
                <div className="text-xs text-gray-400">Completed</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              onClick={() => handleSkillClick(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === activeSkillIndex ? skill.color : "rgba(255,255,255,0.3)",
                boxShadow: index === activeSkillIndex ? `0 0 20px ${skill.color}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 right-8 z-10 text-right font-mono">
        <div className="text-gray-400 text-sm space-y-1">
          <div>🖱️ Drag to rotate view</div>
          <div>🔍 Scroll to zoom</div>
          <div>👆 Click orbs to explore</div>
        </div>
      </div>
    </section>
  )
}

export default SkillShowcase3D
