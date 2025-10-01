import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false); // ✅ new state for toggle
  const designProjects = [
    {
      title: "Grano Foods - Prfoduct Advertisement",
      description: "Brand identity and coming soon campaign for sustainable food brand",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758167468/vlcsnap-2025-09-18-09h15m23s067_uuqsf2.png",
      Video: "https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758170968/besan_vlibie.mp4",
      category: "VFX",
      tools: ["Photoshop", "After Effects", "Blender"]
    },
    {
      title: "Mitti & Co - Coming Soon Campaign",
      description: "Brand identity and campaign for sustainable food brand",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758179937/vlcsnap-2025-09-18-09h17m20s829-Picsart-AiImageEnhancer_irnkmp.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758167435/vfff_khksv1.mp4",
      category: "VFX",
      tools: ["Photoshop", "After Effects", "Blender"]
    }, 
    {
      title: "Mitti & Co - Campaign",
      description: "Brand identity and coming soon campaign for sustainable food brand",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758167467/vlcsnap-2025-09-18-09h13m54s428_c2vwhp.png",
      Video: "https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758179111/gt_iogtps.mp4",
      category: "VFX",
      tools: ["Photoshop", "After Effects", "Blender"]
    },
    {
      title: "Logo Animation - Brand Reveal",
      description: "Dynamic logo animation with particle effects",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758171349/vlcsnap-2025-09-18-10h24m49s580_q9gspd.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165440/logo0001-0150_xzmivh.mkv",
      category: "Logo Animation",
      tools: ["Blender", "Cinema 4D"]
    },
     {
      title: "Mitti & Co-logo ",
      description: "Brand identity and logo reveal animztion ",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758167465/vlcsnap-2025-09-18-09h14m48s511_x9swjf.png",
      Video: "https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758171606/final_ogo_ezq9un.mp4",
      category: "Logo Animation",
      tools: [ "After Effects","Photoshop"]
    },  {
      title: "Mitti & Co ",
      description: "Brand identity and logo reveal animation",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758167468/vlcsnap-2025-09-18-09h16m50s841_dxqyto.png",
      Video: "https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758167440/gvvf_ekfbmi.mp4",
      category: "Logo Animation",
      tools: ["Photoshop", "After Effects"]
    },
   
    {
      title: " Motion Graphics",
      description: "3D product showcase with dynamic camera movements",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165443/vlcsnap-2025-07-11-17h19m54s183_yqalbw.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165441/parasite0001-0120_mcxahq.mkv",
      category: "Motion Graphics",
      tools: ["Blender", "Geometry Nodes"]
    },
    {
      title: " Node Structure",
      description: "3D product showcase with dynamic camera movements",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165443/vlcsnap-2025-07-11-17h18m44s166_dlqco5.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165435/cube0001-0174_dd7fs8.mkv",
      category: "Motion Graphics",
      tools: ["Blender", "Geometry Nodes"]
    },
    {
      title: " Distorted Structure",
      description: "3D product showcase with dynamic camera movements",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165444/vlcsnap-2025-07-11-17h19m12s772_uvw4ox.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165432/cam_oriented0001-0240_jx4mt5.mkv",
      category: "Motion Graphics",
      tools: ["Blender", "Geometry Nodes"]
    },
    {
      title: " Glitch Distortion ",
      description: "3D product showcase with dynamic camera movements",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758172159/vlcsnap-2025-09-18-10h38m45s629_vcxoul.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758172182/grid_blur0001-0120_povlze.mkv",
      category: "Motion Graphics",
      tools: ["Blender", "Geometry Nodes"]
    },
    {
      title: "Grano Foods - Product Packaging",
      description: "Premium product packaging design for chickpea flour brand",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165439/Mockup_o28qje.png",
      category: "Packaging/Product Design",
      tools: ["Photoshop", "Blender"]
    },
    {
      title: "WWH Pet Supplements",
      description: "Minimalist packaging design for premium pet vitamin supplements",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758173195/sdfsdf_g6gef3.png",
      category: "Packaging/Product Design",
      tools: ["Photoshop", "Blender"]
    },
    {
      title: "Brinda - Product Packaging",
      description: "Premium product packaging design for mixture flour brand",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165434/chips-bag-mockup_1_bj9woj.png",
      category: "Packaging/Product Design",
      tools: ["Photoshop", "Blender"]
    },
    {
      title: "Riview Card",
      description: "Desgined review card for the 90's Kid",
      image:"https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165441/rtrtgrtgrtf_n7wb24.png",
      category: "Packaging/Product Design",
      tools: ["Photoshop", "3D Rendering"]
    },
    {
      title: "Phyto Craft - Multivitamin Package",
      description: "Pet supplement packaging with clean, professional aesthetic",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165438/mockup_design_1_rzoay0.png",
      category: "Packaging/Product Design",
      tools: ["Photoshop", "3D Rendering"]
    },
   
    {
      title: "Blender Product Visualization",
      description: "High-quality 3D product renders and animations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758173622/WhatsApp_Image_2025-09-18_at_11.03.02_9f078ee0_wcey7f.jpg",
      category: "Blender",
      tools: ["Blender", "Substance Painter"]
    },
    {
      title: "Blender Product Visualization",
      description: "High-quality 3D product renders and animations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758173868/honey_stick_irvuvc_ckeyrg.png",
      category: "Blender",
      tools: ["Blender", "Substance Painter"]
    },
    {
      title: "Blender Product Visualization",
      description: "High-quality 3D product renders and animations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758167433/dd_knrdsq.jpg",
      category: "Blender",
      tools: ["Blender", "Substance Painter"]
    },
    {
      title: "Corporate Motion Graphics",
      description: "Professional motion graphics for corporate presentations",
      image: "/lovable-uploads/2b93e50f-2120-4e11-996c-2ccbebab71cc.png",
      category: "Motion Graphics",
      tools: ["After Effects", "Photoshop"]
    },
    {
      title: "Animation Suite",
      description: "Complete logo animation package with multiple variations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758174644/vlcsnap-2025-09-18-11h20m04s231_is2zha.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165434/cplugin_rsqrap.mkv",
      category: "Animation",
      tools: ["After Effects", "Illustrator"]
    },
    {
      title: "Parasite Suite",
      description: "Complete logo animation package with multiple variations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758180373/vlcsnap-2025-09-18-12h55m40s949_h8vcdw.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758165433/cling0001-0120_j0kck3.mkv",
      category: "Animation",
      tools: ["After Effects", "Illustrator"]
    },
    {
      title: "Product Animation",
      description: "Product animation package with multiple variations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758180580/0055_idqxce.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758180581/besan2_ccuyoi.mp4",
      category: "Animation",
      tools: ["After Effects", "Illustrator"]
    },
    {
      title: "Nature Animation",
      description: "Product animation package with multiple variations",
      image: "https://res.cloudinary.com/dvvhyfrjr/image/upload/v1758165430/0102_gynjik.png",
      Video:"https://res.cloudinary.com/dvvhyfrjr/video/upload/v1758180554/p1_mrywsq.mp4",
      category: "Animation",
      tools: ["After Effects", "Illustrator"]
    },
  ];

  const categories = ["All", "Motion Graphics", "Packaging/Product Design", "Logo Animation", "VFX", "Blender", "Animation"];
  const [activeCategory, setActiveCategory] = useState("All");
  const normalizeCategory = (category: string) => category.trim().toLowerCase();

  const filteredProjects =
    activeCategory === "All"
      ? designProjects
      : designProjects.filter(
          (project) =>
            normalizeCategory(project.category) === normalizeCategory(activeCategory)
        );

  // ✅ Limit projects if "showAll" is false
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Dynamic layout
  const getLayoutConfig = (category, itemCount) => {
    switch (category) {
      case "Motion Graphics":
        return {
          containerClass: "grid gap-6",
          gridClass:
            itemCount <= 2
              ? "grid-cols-1 md:grid-cols-2"
              : itemCount <= 4
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-video",
          layoutStyle: "hero",
        };

      case "Packaging/Product Design":
        return {
          containerClass: "grid gap-4",
          gridClass:
            itemCount === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : itemCount === 2
              ? "grid-cols-1 md:grid-cols-2"
              : itemCount <= 4
              ? "grid-cols-2 lg:grid-cols-4"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-[3/4]",
          layoutStyle: "masonry",
        };

      case "Logo Animation":
        return {
          containerClass: "grid gap-8",
          gridClass:
            itemCount <= 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-square",
          layoutStyle: "centered",
        };

      case "VFX":
        return {
          containerClass: "grid gap-6 m-6",
          gridClass:
            itemCount === 1
              ? "grid-cols-1 max-w-4xl mx-auto"
              : itemCount === 2
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-video",
          layoutStyle: "cinematic",
        };

      case "Blender":
        return {
          containerClass: "grid gap-6",
          gridClass:
            itemCount <= 3
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-[4/5]",
          layoutStyle: "showcase",
        };

      default:
        return {
          containerClass: "grid gap-6",
          gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          itemClass: "group cursor-pointer",
          aspectRatio: "aspect-[4/5]",
          layoutStyle: "default",
        };
    }
  };

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const layoutConfig = getLayoutConfig(activeCategory, visibleProjects.length);

  return (
    <section id="graphics" className="py-20 bg-transparent backdrop-blur-sm min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="press-start-2p-regular1 text-3xl md:text-5xl font-bold text-white mb-6">
            Graphic Design & VFX
          </h2>
          <p className="font-mono text-gray-300 text-lg max-w-2xl mx-auto">
            Visual storytelling through product animation, brand identity, and creative design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              } transition-all duration-300 px-6 py-2 font-mono`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Adaptive Project Gallery */}
        <div className={`${layoutConfig.containerClass} ${layoutConfig.gridClass}`}>
          {visibleProjects.map((project, index) => {
            const isHero =
              layoutConfig.layoutStyle === "hero" &&
              index === 0 &&
              visibleProjects.length > 1;
            const heroClass = isHero ? "md:col-span-2 lg:col-span-2" : "";

            const isCinematic = layoutConfig.layoutStyle === "cinematic";
            const cinematicClass = isCinematic && index === 0 ? "lg:col-span-2" : "";

            return (
              <div
                key={`${project.title}-${project.category}-${index}`}
                className={`${layoutConfig.itemClass} ${heroClass} ${cinematicClass} animate-fade-in font-mono`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(project.image)}
              >
                <div className="relative overflow-hidden rounded-xl bg-transparent backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 border border-gray-700">
                  <div className={`${layoutConfig.aspectRatio} overflow-hidden relative`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        project.Video
                          ? "group-hover:scale-110 group-hover:opacity-0"
                          : "opacity-100"
                      }`}
                    />

                    {project.Video && (
                      <video
                        src={project.Video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white" size={32} />
                    </div>

                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {(project.tools || []).map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full border border-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ Show More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 font-mono bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}

        {/* Category-specific info panel */}
        {activeCategory !== "All" && (
          <div className="mt-16 bg-transparent backdrop-blur-sm font-mono rounded-2xl p-8 border border-gray-600">
            <div className="text-center">
              <h3 className="press-start-2p-regular1 text-2xl font-bold text-white mb-4">
                {activeCategory} Services
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {activeCategory === "Motion Graphics" &&
                  "Dynamic animations and motion design for brands, products, and digital experiences."}
                {activeCategory === "Packaging/Product Design" &&
                  "Complete packaging solutions from concept to production-ready designs."}
                {activeCategory === "Logo Animation" &&
                  "Bringing brand identities to life with engaging animated logos and brand reveals."}
                {activeCategory === "VFX" &&
                  "Professional visual effects and compositing for film, advertising, and digital content."}
                {activeCategory === "Blender" &&
                  "3D modeling, animation, and rendering services using industry-leading Blender software."}
              </p>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full">
              <img
                src={selectedImage}
                alt="Selected design"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 border-white/30 text-white"
                onClick={closeLightbox}
              >
                <X size={20} />
              </Button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default GraphicDesign;