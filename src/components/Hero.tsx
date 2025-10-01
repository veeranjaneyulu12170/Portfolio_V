import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Cpu, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import SkillShowcase from './SkillShowcase';
const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState([]);
  const [currentTip, setCurrentTip] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Parallax and delay state

  const [scrollY, setScrollY] = useState(0);

  // Show sections after 3 seconds


  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadingTips = [
    "Initializing quantum processors...",
    "Compiling reality matrices...",
    "Synchronizing digital dimensions...",
    "Calibrating creative algorithms...",
    "Loading artistic neural networks...",
    "Booting imagination engine...",
    "Rendering infinite possibilities..."
  ];

  const codeSnippets = [
    "const magic = () => creativity();",
    "function dream() { return reality; }",
    "while(true) { innovate(); }",
    "const future = await Promise.resolve();",
    "export default imagination;",
    "async function create() { await inspire(); }"
  ];

  const headingWords = ["Creative", "Developer", "+", "Designer"];
  const taglineText = "Building digital products that not only work—but move, feel, and connect.";

  // Typing animation for heading
  const [headingIndex, setHeadingIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState("");
  const [displayedHeading, setDisplayedHeading] = useState([]);

  useEffect(() => {
    let timeout;
    if (headingIndex < headingWords.length) {
      let currentWord = headingWords[headingIndex];
      let charIndex = 0;
      setTypedHeading("");
      timeout = setInterval(() => {
        setTypedHeading((prev) => {
          const next = currentWord.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentWord.length + 1) {
            clearInterval(timeout);
            setDisplayedHeading((prevArr) => [...prevArr, currentWord]);
            setTimeout(() => setHeadingIndex((prev) => prev + 1), 400);
          }
          return next;
        });
      }, 70);
    }
    return () => clearInterval(timeout);
  }, [headingIndex]);
  const [typedCreative, setTypedCreative] = useState("");
  const [creativePhase, setCreativePhase] = useState("typing"); // typing, pausing, erasing
  useEffect(() => {
    const text = "Creative";
    const typingSpeed = 100;   // speed while typing
    const eraseSpeed = 50;     // speed while erasing
    const pauseTime = 1200;    // pause after complete word
  
    let timeout;
  
    if (creativePhase === "typing") {
      if (typedCreative.length < text.length) {
        timeout = setTimeout(() => {
          setTypedCreative(text.substring(0, typedCreative.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setCreativePhase("pausing"), pauseTime);
      }
    } else if (creativePhase === "pausing") {
      timeout = setTimeout(() => setCreativePhase("erasing"), pauseTime);
    } else if (creativePhase === "erasing") {
      if (typedCreative.length > 0) {
        timeout = setTimeout(() => {
          setTypedCreative(text.substring(0, typedCreative.length - 1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => setCreativePhase("typing"), 400);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [typedCreative, creativePhase]);
    
  // Typing animation for tagline
  const [typedTagline, setTypedTagline] = useState("");
  useEffect(() => {
    let idx = 0;
    setTypedTagline("");
    const interval = setInterval(() => {
      setTypedTagline(taglineText.substring(0, idx + 1));
      idx++;
      if (idx > taglineText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const headingLines = [
    { text: "Creative", className: "text-5xl md:text-7xl" },
    { text: "Developer", className: "text-5xl md:text-7xl" },
    { text: "+", className: "text-3xl md:text-4xl text-center w-full block" },
    { text: "Designer", className: "text-5xl md:text-7xl" },
  ];

  // Typing animation for heading lines
  const [headingLineIndex, setHeadingLineIndex] = useState(0);
  const [typedHeadingLine, setTypedHeadingLine] = useState("");
  const [displayedHeadingLines, setDisplayedHeadingLines] = useState([]);

  useEffect(() => {
    let timeout;
    if (headingLineIndex < headingLines.length) {
      let currentLine = headingLines[headingLineIndex].text;
      let charIndex = 0;
      setTypedHeadingLine("");
      timeout = setInterval(() => {
        setTypedHeadingLine((prev) => {
          const next = currentLine.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentLine.length + 1) {
            clearInterval(timeout);
            setDisplayedHeadingLines((prevArr) => [...prevArr, currentLine]);
            setTimeout(() => setHeadingLineIndex((prev) => prev + 1), 400);
          }
          return next;
        });
      }, 70);
    }
    return () => clearInterval(timeout);
  }, [headingLineIndex]);

  // Repeated typing animation for tagline
  const [taglinePhase, setTaglinePhase] = useState("typing"); // typing, pausing, erasing
  const taglineTypingSpeed = 30;
  const taglinePause = 1200;
  const taglineEraseSpeed = 18;

  useEffect(() => {
    let timeout;
    if (taglinePhase === "typing") {
      if (typedTagline.length < taglineText.length) {
        timeout = setTimeout(() => {
          setTypedTagline(taglineText.substring(0, typedTagline.length + 1));
        }, taglineTypingSpeed);
      } else {
        timeout = setTimeout(() => setTaglinePhase("pausing"), taglinePause);
      }
    } else if (taglinePhase === "pausing") {
      timeout = setTimeout(() => setTaglinePhase("erasing"), taglinePause);
    } else if (taglinePhase === "erasing") {
      if (typedTagline.length > 0) {
        timeout = setTimeout(() => {
          setTypedTagline(taglineText.substring(0, typedTagline.length - 1));
        }, taglineEraseSpeed);
      } else {
        timeout = setTimeout(() => setTaglinePhase("typing"), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedTagline, taglinePhase]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Interactive particles system
  useEffect(() => {
    const createParticle = (x, y) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
        size: Math.random() * 4 + 2,
        color: `hsl(${Math.random() * 60 + 140}, 70%, 60%)`,
        type: Math.random() > 0.5 ? 'circle' : 'square'
      };
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const interval = setInterval(() => {
      if (!isSplineLoaded) {
        createParticle(
          mousePosition.x + (Math.random() - 0.5) * 100,
          mousePosition.y + (Math.random() - 0.5) * 100
        );
      }
    }, 200);

    return () => clearInterval(interval);
  }, [mousePosition, isSplineLoaded]);

  // Particle animation
  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life - 0.02,
        size: particle.size * 0.98
      })).filter(particle => particle.life > 0));

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Loading progress and tips
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) return prev;
        const increment = Math.random() * 12 + 3;
        return Math.min(prev + increment, 90);
      });
    }, 300);

    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length);
    }, 2000);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);

    const fallbackTimer = setTimeout(() => {
      if (!isSplineLoaded) {
        setShowFallback(true);
        setLoadingProgress(100);
      }
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tipInterval);
      clearInterval(glitchInterval);
      clearTimeout(fallbackTimer);
    };
  }, [isSplineLoaded]);

  // Typing effect
  useEffect(() => {
    if (!isSplineLoaded) {
      const text = loadingTips[currentTip];
      let index = 0;
      setTypedText('');
      setIsTyping(true);

      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setTypedText(text.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentTip, isSplineLoaded]);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
    setLoadingProgress(100);
    setParticles([]);
    setTimeout(() => setLoadingProgress(0), 500);
  };

  const handleInteractiveClick = (e) => {
    if (!isSplineLoaded) {
      setClickCount(prev => prev + 1);
      
      // Create explosion effect
      for (let i = 0; i < 10; i++) {
        const newParticle = {
          id: Date.now() + Math.random() + i,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 15,
          vy: (Math.random() - 0.5) * 15,
          life: 1,
          size: Math.random() * 6 + 3,
          color: `hsl(${Math.random() * 60 + 140}, 80%, 70%)`,
          type: 'star'
        };
        setParticles(prev => [...prev, newParticle]);
      }
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col  justify-between relative overflow-hidden">
      {/* Interactive Particles Overlay */}
     

      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full bg-transparent">
      <iframe
  src="https://my.spline.design/chatgptkeyboard-ZMB3GS2L1zFsCZbGik3Yvr31/"
  width="100%"
  height="100%"
  allow="fullscreen; vr; camera"
  style={{border:0}}
></iframe>

        
        {/* Enhanced Interactive Fallback */}
        
        
        {/* Ultra-Interactive Loading Screen */}
      
        
        {/* Dynamic overlay */}
        <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
      </div>

      {/* Main content */}
      <div
  className="container mx-auto px-6 relative z-10 pt-20 transition-opacity duration-700 opacity-100"
  style={{
    transform: `translateY(${scrollY * 0.2}px)`,
    transition: 'opacity 0.7s, transform 0.7s',
    willChange: 'transform, opacity',
  }}
>

        <div className="animate-fade-in">
          <div className="text-left">
          <h1 className="text-8xl md:text-10xl font-bold text-white m-4 leading-tight drop-shadow-2xl">
  <span className="font-mono bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent press-start-2p-regular1">
    {typedCreative}
    <span className="inline-block w-2 h-6 bg-emerald-400 ml-1 animate-pulse"></span>
  </span>
  <span className="m-7 block bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 text-4xl bg-clip-text text-transparent ">
    <span className="press-start-2p-regular1">
      Developer <br />
      <span className="ml-[300px]">+</span> <br />
      <span className="ml-[350px]">Designer</span>
    </span>
  </span>
</h1>

          
          </div>

        </div>
      
      </div>
      

      {/* Bottom section */}
      <div
  className="container mt-[500px] px-6 absolute z-10 pb-20 transition-opacity duration-700 opacity-100"
  style={{
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: 'opacity 0.7s, transform 0.7s',
    willChange: 'transform, opacity',
  }}
>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pointer-events-auto">
            <a
              href="https://github.com/veeranjaneyulu12170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/veeranjaneyulu-pepakayala-629392351/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:veeranjaneyulupepakyala@gmail.com"
              className="text-emerald-400/90 hover:text-emerald-400 transition-all duration-300 hover:scale-110 transform p-3 rounded-full backdrop-blur-sm hover:bg-emerald-400/10"
            >
              <Mail size={24} />
            </a>
            
          </div>

          <button
            onClick={scrollToAbout}
            className="text-emerald-400/80 hover:text-emerald-400 transition-colors duration-300 animate-bounce p-2 rounded-full backdrop-blur-sm hover:bg-emerald-400/10 pointer-events-auto"
          >
            <ArrowDown size={32} />
          </button>
          
          <div className="relative bottom-[100px] mb-2 flex flex-col items-center">
          <p className="text-lg mr-12 md:text-xl text-white/90 max-w-4xl leading-relaxed drop-shadow-xl from-stone-400 font-mono">
            {/* Animated tagline */}
            {typedTagline}
            {typedTagline.length < taglineText.length && <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 animate-pulse"></span>}
          </p>
            </div>
             
        </div>
       
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis et, optio dolorum sequi, ipsam magnam odit aliquid omnis deleniti veritatis accusantium distinctio doloribus earum exercitationem minima! Quidem, molestiae consectetur!</p>
      </div>

      <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
  
  <div className="absolute fixed bottom-[10px] left-[1180px] z-30 w-36 h-16 bg-black rounded-md shadow-md flex items-center justify-center text-white text-sm font-medium">
  </div>
    </section>
  );
};

export default Hero;