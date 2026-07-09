import { useEffect, useRef, useState } from "react";
import DomeGallery from "../ui/domegallery";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors } from "../../hooks/useThemeColors";
import { withAlpha } from "../../hooks/useThemeColors";
import techStackIcons from "../../assets/techstack";

const Skills = () => {
  const [scale, setScale] = useState(0.5);
  const sectionRef = useRef<HTMLDivElement>(null);
  const domeContainerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visibility based on how centered the section is
      let visibilityRatio = 0;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionHeight = rect.height;
        const sectionCenter = rect.top + sectionHeight / 2;
        const windowCenter = windowHeight / 2;
        const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
        const maxDistance = windowHeight / 2 + sectionHeight / 2;

        // Smooth curve that peaks when section is centered
        visibilityRatio = 1 - distanceFromCenter / maxDistance;
        visibilityRatio = Math.max(0, Math.min(1, visibilityRatio));

        // Apply easing curve for more natural growth
        visibilityRatio =
          visibilityRatio * visibilityRatio * (3 - 2 * visibilityRatio);
      }

      // Scale from 0.5 to 1 instead of 0 to 1 for better starting size
      const minScale = 0.5;
      const maxScale = 1;
      const finalScale = minScale + (maxScale - minScale) * visibilityRatio;
      setScale(finalScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        ["Python", techStackIcons.python],
        ["Java", techStackIcons.JavaLight],
        ["JavaScript", techStackIcons.JavaScript],
        ["PHP", techStackIcons.php],
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        ["React", techStackIcons.ReactLight],
        ["HTML5", techStackIcons.HTML],
        ["CSS3", techStackIcons.CSS],
        ["TypeScript", techStackIcons.TypeScript],
        ["Tailwind", techStackIcons.TailwindCSSLight],
        ["Bootstrap", techStackIcons.Bootstrap],
      ],
    },
    {
      title: "Backend Development",
      skills: [
        ["FastAPI", techStackIcons.fastapi],
        ["Laravel", techStackIcons.laravel],
        ["Spring", techStackIcons.spring],
        // ["Node.js", techStackIcons.NodeJSLight],
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        ["Scikit-learn", techStackIcons.scikitlearn],
        ["TensorFlow", techStackIcons.TensorFlowLight],
        ["NumPy", techStackIcons.numpy],
        ["Pandas", techStackIcons.pandas],
      ],
    },
    {
      title: "Databases",
      skills: [
        ["PostgreSQL", techStackIcons.postgresql],
        ["MySQL", techStackIcons.mysql],
        // ["MongoDB", techStackIcons.MongoDB],
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        ["Docker", techStackIcons.Docker],
        ["Git", techStackIcons.git],
        ["GitHub", techStackIcons.GithubLight],
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-20 relative"
      style={{
        background:
          themeColors.background.sections?.skills ||
          themeColors.background.gradient,
        transition: "background 0.3s ease-in-out",
      }}
    >
      {/* Gradient overlay for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "300px",
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500],
          }}
        >
          Skills
        </h2>
        <div
          ref={domeContainerRef}
          className="relative w-full"
          style={{
            height: window.innerWidth < 640 ? "300px" : "600px",
            transform: `scale(${window.innerWidth < 640 ? scale * 0.55 : scale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <DomeGallery />
          {/* Faded edges overlay with performance-optimized blending */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: isDarkMode
                ? `radial-gradient(ellipse at center, transparent 40%, ${withAlpha(themeColors.colors.dark[900], 0.1)} 70%, ${withAlpha(themeColors.colors.dark[900], 0.6)} 90%, ${withAlpha(themeColors.colors.dark[900], 0.8)} 100%)`
                : `radial-gradient(ellipse at center, transparent 40%, ${withAlpha(themeColors.colors.pink[50], 0.1)} 70%, ${withAlpha(themeColors.colors.pink[50], 0.6)} 90%, ${withAlpha(themeColors.colors.pink[50], 0.8)} 100%)`,
              maskImage:
                "radial-gradient(ellipse at center, black 50%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 50%, transparent 85%)",
            }}
          />
        </div>
      </div>
      {/* Skills Categories */}
      <div className="container mx-auto px-6 mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl p-6"
              style={{
                background: isDarkMode
                  ? "rgba(30,41,59,.55)"
                  : "rgba(255,255,255,.75)",
                border: `1px solid ${themeColors.colors.pink[200]}`,
                backdropFilter: "blur(14px)",
                boxShadow: "0 10px 35px rgba(0,0,0,.08)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  color: themeColors.colors.pink[500],
                }}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map(([name, icon]) => (
                  <div
                    key={name}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={icon as string}
                      alt={name}
                      className="w-12 h-12 object-contain"
                    />

                    <p
                      className="mt-2 text-sm font-medium"
                      style={{
                        color: isDarkMode
                          ? themeColors.colors.dark[200]
                          : themeColors.colors.dark[600],
                      }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
