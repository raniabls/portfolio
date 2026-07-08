import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors } from "../../hooks/useThemeColors";

const education = [
  {
    degree: "Master's Degree in Intelligent Information Systems Engineering",
    school: "University of Algiers 1",
    location: "Algiers, Algeria",
    period: "2024 – 2026",
    description:
      "Specialized in Artificial Intelligence, Machine Learning, Data Science, Information Systems, Big Data, and Software Engineering.",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of Algiers 1",
    location: "Algiers, Algeria",
    period: "2021 – 2024",
    description:
      "Built strong foundations in programming, databases, algorithms, software engineering, networking, and web development.",
  },
];

const Education = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <section
      id="education"
      className="py-24 relative"
      style={{
        background:
          themeColors.background.sections?.certifications ||
          themeColors.background.gradient,
      }}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2
          className="text-4xl font-bold text-center mb-16"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500],
          }}
        >
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl px-6 py-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: isDarkMode
                  ? "rgba(30,41,59,.55)"
                  : "rgba(255,255,255,.75)",
                border: `1px solid ${
                  isDarkMode
                    ? "rgba(255,255,255,.08)"
                    : themeColors.colors.pink[200]
                }`,
                backdropFilter: "blur(14px)",
                boxShadow: "0 10px 35px rgba(0,0,0,.08)",
              }}
            >
              <div className="flex gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: themeColors.colors.pink[100],
                  }}
                >
                  <GraduationCap
                    size={26}
                    color={themeColors.colors.pink[500]}
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.white
                        : themeColors.colors.pink[600],
                    }}
                  >
                    {item.degree}
                  </h3>

                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.pink[300]
                        : themeColors.colors.dark[700],
                    }}
                  >
                    {item.school}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <div
                      className="flex items-center gap-2"
                      style={{
                        color: isDarkMode
                          ? themeColors.colors.dark[300]
                          : themeColors.colors.dark[500],
                      }}
                    >
                      <Calendar size={18} />
                      <span>{item.period}</span>
                    </div>

                    <div
                      className="flex items-center gap-2"
                      style={{
                        color: isDarkMode
                          ? themeColors.colors.dark[300]
                          : themeColors.colors.dark[500],
                      }}
                    >
                      <MapPin size={18} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p
                    className="leading-6"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.dark[200]
                        : themeColors.colors.dark[600],
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "60px",
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
        }}
      />
    </section>
  );
};

export default Education;