import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WebDevelopment from '@/components/WebDevelopment';
import UIUXDesign from '@/components/UIUXDesign';
import FullStack from '@/components/FullStack';
import GraphicDesign from '@/components/GraphicDesign';
import ProjectShowcase from '@/components/ProjectShowcase';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { ProjectGrid } from '@/components/Project-grid';
import SkillShowcase3D from '@/components/skill-showcase-3d';
import AnimatedExperience from '@/components/Experience';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SkillShowcase3D />
   <ProjectGrid/>
  
       <GraphicDesign />
     
      <AnimatedExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
