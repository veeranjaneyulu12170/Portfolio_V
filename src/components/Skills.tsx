const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend Development",
        skills: ["JavaScript", "React", "CSS", "Three.js"],
        color: "bg-gradient-primary"
      },
      {
        title: "Backend Development", 
        skills: ["Node.js", "MongoDB"],
        color: "bg-gradient-warm"
      },
      {
        title: "Design Tools",
        skills: ["Figma", "Framer", "Spline"],
        color: "bg-earth-green"
      },
      {
        title: "Creative Software",
        skills: ["Blender", "After Effects", "Photoshop", "Premiere Pro"],
        color: "bg-warm-orange"
      }
    ];
  
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rich-brown mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit spanning development, design, and digital artistry
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                    {category.title.charAt(0)}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-rich-brown mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center justify-between p-2 bg-soft-beige rounded-lg hover:bg-muted transition-colors duration-200"
                        style={{ animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` }}
                      >
                        <span className="text-foreground font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-xl shadow-soft">
              <div className="text-2xl">🚀</div>
              <div>
                <div className="text-lg font-semibold text-rich-brown">Always Learning</div>
                <div className="text-muted-foreground">Constantly exploring new technologies and creative tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;