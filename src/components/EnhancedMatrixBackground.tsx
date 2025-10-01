"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"

const codeSnippets = [
  "const magic = () => creativity();",
  "function dream() { return reality; }",
  "while(true) { innovate(); }",
  "const future = await Promise.resolve();",
  "export default imagination;",
  "async function create() { await inspire(); }",
  "const ai = new Intelligence();",
  "render(<Future />);",
  "useEffect(() => { transform(); });",
  "const vision = await generate();",
]

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

const EnhancedMatrixBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [time, setTime] = useState(0)

  useEffect(() => {
    const initialParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: ["#10b981", "#06d6a0", "#118ab2", "#073b4c"][Math.floor(Math.random() * 4)],
      })
    }
    setParticles(initialParticles)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleClick = useCallback((e: React.MouseEvent) => {
    const newRipple: Ripple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: 0,
      opacity: 1,
    }
    setRipples((prev) => [...prev, newRipple])
  }, [])

  useEffect(() => {
    const animate = () => {
      setTime(Date.now() * 0.001)

      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.x > window.innerWidth || particle.x < 0 ? -particle.vx : particle.vx,
          vy: particle.y > window.innerHeight || particle.y < 0 ? -particle.vy : particle.vy,
        })),
      )

      setRipples((prev) =>
        prev
          .map((ripple) => ({
            ...ripple,
            size: ripple.size + 8,
            opacity: Math.max(0, ripple.opacity - 0.02),
          }))
          .filter((ripple) => ripple.opacity > 0),
      )
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 blur-[0.3px] cursor-crosshair" onClick={handleClick}>
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Enhanced Dynamic Code Matrix */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, i) => (
          <div
            key={i}
            className="absolute text-emerald-300 font-mono text-[10px]  select-none transition-all duration-1000"
            style={{
              left: `${(i * 12) % 95}%`,
              top: `${(i * 18) % 95}%`,
              transform: `
                translateY(${Math.sin(time + i) * 15}px) 
                translateX(${Math.cos(time * 0.5 + i) * 10}px)
                rotate(${Math.sin(time * 0.3 + i) * 2}deg)
              `,
              opacity: 0.7 + Math.sin(time + i) * 0.2,
              textShadow: "0 0 15px rgba(16, 185, 129, 0.8), 0 0 5px rgba(16, 185, 129, 0.6)",
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Interactive Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06d6a0" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="circuitGradientHorizontal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06d6a0" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#073b4c" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="diagonalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="diagonalGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06d6a0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#073b4c" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {[...Array(8)].map((_, i) => (
          <g key={`vertical-${i}`}>
            <line
              x1={`${(i * 12) % 100}%`}
              y1="0%"
              x2={`${(i * 12 + 30) % 100}%`}
              y2="100%"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              style={{
                opacity: 0.3 + Math.sin(time + i) * 0.2,
                strokeDasharray: "8,4",
                strokeDashoffset: time * 12 + i * 6,
              }}
            />
            <circle
              cx={`${(i * 12) % 100}%`}
              cy={`${(i * 20) % 100}%`}
              r="2.5"
              fill="#10b981"
              opacity={0.6 + Math.sin(time * 2 + i) * 0.3}
            />
          </g>
        ))}

        {[...Array(8)].map((_, i) => (
          <g key={`horizontal-${i}`}>
            <line
              x1="0%"
              y1={`${(i * 12) % 100}%`}
              x2="100%"
              y2={`${(i * 12 + 20) % 100}%`}
              stroke="url(#circuitGradientHorizontal)"
              strokeWidth="1"
              style={{
                opacity: 0.25 + Math.cos(time + i * 0.5) * 0.15,
                strokeDasharray: "6,8",
                strokeDashoffset: -time * 8 + i * 4,
              }}
            />
            <rect
              x={`${(i * 15 + 10) % 90}%`}
              y={`${(i * 12) % 100}%`}
              width="3"
              height="3"
              fill="#06d6a0"
              opacity={0.5 + Math.cos(time * 1.5 + i) * 0.2}
              transform={`rotate(${time * 20 + i * 15})`}
            />
          </g>
        ))}

        {[...Array(15)].map((_, i) => (
          <g key={`diagonal-tlbr-${i}`}>
            <line
              x1={`${(i * 7) % 100}%`}
              y1="0%"
              x2={`${(i * 7 + 35) % 100}%`}
              y2="100%"
              stroke="url(#diagonalGradient1)"
              strokeWidth="1.2"
              style={{
                opacity: 0.2 + Math.sin(time * 0.6 + i * 0.3) * 0.15,
                strokeDasharray: "5,3",
                strokeDashoffset: time * 8 + i * 4,
              }}
            />
            {/* Connection nodes at intersections */}
            <circle
              cx={`${(i * 7 + 17) % 100}%`}
              cy={`${(i * 12 + 25) % 100}%`}
              r="1.8"
              fill="#10b981"
              opacity={0.5 + Math.sin(time * 2.5 + i) * 0.2}
            />
          </g>
        ))}

        {[...Array(15)].map((_, i) => (
          <g key={`diagonal-trbl-${i}`}>
            <line
              x1={`${100 - ((i * 7) % 100)}%`}
              y1="0%"
              x2={`${100 - ((i * 7 + 35) % 100)}%`}
              y2="100%"
              stroke="url(#diagonalGradient2)"
              strokeWidth="1"
              style={{
                opacity: 0.15 + Math.cos(time * 0.8 + i * 0.4) * 0.1,
                strokeDasharray: "4,5",
                strokeDashoffset: -time * 6 + i * 3,
              }}
            />
            {/* Diamond-shaped connection nodes */}
            <rect
              x={`${100 - ((i * 7 + 20) % 100)}%`}
              y={`${(i * 15 + 30) % 100}%`}
              width="2.5"
              height="2.5"
              fill="#06d6a0"
              opacity={0.4 + Math.cos(time * 1.8 + i) * 0.15}
              transform={`rotate(45) translate(-1.25, -1.25)`}
            />
          </g>
        ))}

        {[...Array(20)].map((_, i) => {
          const x = (i * 13 + 15) % 90
          const y = (i * 17 + 20) % 80
          return (
            <g key={`intersection-${i}`}>
              <circle
                cx={`${x}%`}
                cy={`${y}%`}
                r="3"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.8"
                opacity={0.3 + Math.sin(time * 1.5 + i * 0.5) * 0.2}
                style={{
                  strokeDasharray: "2,2",
                  strokeDashoffset: time * 4 + i * 2,
                }}
              />
              <circle cx={`${x}%`} cy={`${y}%`} r="1" fill="#118ab2" opacity={0.6 + Math.sin(time * 3 + i) * 0.3} />
            </g>
          )
        })}

        {[...Array(6)].map((_, i) => (
          <g key={`diagonal-${i}`}>
            <line
              x1={`${(i * 16) % 80}%`}
              y1={`${(i * 14) % 80}%`}
              x2={`${(i * 16 + 25) % 100}%`}
              y2={`${(i * 14 + 35) % 100}%`}
              stroke="#118ab2"
              strokeWidth="0.8"
              style={{
                opacity: 0.2 + Math.sin(time * 0.8 + i) * 0.1,
                strokeDasharray: "4,6",
                strokeDashoffset: time * 6 + i * 3,
              }}
            />
            <circle
              cx={`${(i * 16 + 12) % 90}%`}
              cy={`${(i * 14 + 17) % 90}%`}
              r="1.5"
              fill="#118ab2"
              opacity={0.4 + Math.sin(time * 3 + i) * 0.2}
            />
          </g>
        ))}

        {[...Array(8)].map((_, i) => (
          <line
            key={`new-diagonal-${i}`}
            x1={`${(i * 12) % 100}%`}
            y1="0%"
            x2={`${(i * 12 + 30) % 100}%`}
            y2="100%"
            stroke="#10b981"
            strokeWidth="1"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 2)}s`,
            }}
          />
        ))}
      </svg>

      <div
        className="absolute pointer-events-none transition-all duration-200"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
        }}
      >
        <div
          className="w-40 h-40 bg-emerald-400/15 rounded-full blur-2xl"
          style={{
            transform: `scale(${1 + Math.sin(time * 2) * 0.1})`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + Math.cos(time * 3) * 0.15})`,
          }}
        />
      </div>

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none border-2 border-emerald-400 rounded-full"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            opacity: ripple.opacity,
            borderColor: `rgba(16, 185, 129, ${ripple.opacity})`,
          }}
        />
      ))}

      {/* Enhanced Coding-Related Objects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const codingObjects = [
            // Brackets
            { content: "{ }", fontSize: "text-lg" },
            { content: "< />", fontSize: "text-base" },
            // Function symbols
            { content: "fn()", fontSize: "text-sm" },
            { content: "=>", fontSize: "text-xl" },
            // Code symbols
            { content: "#", fontSize: "text-lg" },
            { content: "&&", fontSize: "text-base" },
            { content: "||", fontSize: "text-base" },
            { content: "!=", fontSize: "text-sm" },
          ]

          const obj = codingObjects[i % codingObjects.length]

          return (
            <div
              key={i}
              className={`absolute text-emerald-300 font-mono ${obj.fontSize} select-none`}
              style={{
                left: `${(i * 15 + 10) % 90}%`,
                top: `${(i * 20 + 15) % 80}%`,
                transform: `rotate(${time * 15 + i * 30}deg) scale(${1 + Math.sin(time * 2 + i) * 0.2})`,
                opacity: 0.8 + Math.sin(time + i) * 0.2,
                textShadow: "0 0 12px rgba(16, 185, 129, 0.7), 0 0 4px rgba(16, 185, 129, 0.5)",
              }}
            >
              {obj.content}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EnhancedMatrixBackground
