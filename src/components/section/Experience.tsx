import { BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors } from "../../hooks/useThemeColors";

const experiences = [
  {
    title: "Master's Internship",
    company: "Djezzy (Siège social d'Optimum Telecom Algérie)",
    location: "Dar El Beïda, Algiers, Algeria",
    period: "Jan 2026 – Jun 2026",
    description: [
      "Developed an AI-powered conversational assistant based on a Retrieval-Augmented Generation (RAG) architecture.",
      "Combined semantic search, SQL retrieval and Large Language Models (Llama 3 & Qwen) to provide contextual responses.",
      "Collected, cleaned and structured data from multiple sources.",
      "Designed and queried PostgreSQL databases using SQL.",
      "Evaluated and optimized AI response quality using appropriate evaluation metrics.",
    ],
  },
  {
    title: "Final Year Internship",
    company: "Djezzy (Siège social d'Optimum Telecom Algérie)",
    location: "Dar El Beïda ,Algiers, Algeria",
    period: "Jan 2024 – May 2024",
    description: [
      "Developed a Laravel platform to automate Excel data import and visualization.",
      "Designed PostgreSQL databases for business data management.",
      "Implemented authentication, file history, and search features.",
      "Collaborated with the Big Data & Data Warehouse team.",
    ],
  },
  {
    title: "Web Development Training",
    company: "Company Name",
    location: "El Mohammadia, Algeria",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Developed responsive web interfaces.",
      "HTML, CSS, JavaScript.",
    ],
  },
];

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <section
      id="experience"
      className="py-24 relative"
      style={{
        background:
          themeColors.background.sections?.experience ||
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
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-3xl px-5 sm:px-6 py-6 transition-all duration-300 hover:-translate-y-1"
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
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 mx-auto sm:mx-0"
                  style={{
                    background: themeColors.colors.pink[100],
                  }}
                >
                  <BriefcaseBusiness
                    size={30}
                    color={themeColors.colors.pink[500]}
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2 leading-tight"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.white
                        : themeColors.colors.pink[600],
                    }}
                  >
                    {exp.title}
                  </h3>

                  <h4
                    className="text-base sm:text-lg font-semibold mb-3"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.pink[300]
                        : themeColors.colors.dark[700],
                    }}
                  >
                    {exp.company}
                  </h4>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-5 items-center sm:items-start justify-center sm:justify-start">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-left">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="relative pl-6 leading-7 text-[15px] sm:text-base"
                        style={{
                          color: isDarkMode
                            ? themeColors.colors.dark[200]
                            : themeColors.colors.dark[600],
                        }}
                      >
                        <span
                          className="absolute left-0 top-0"
                          style={{
                            color: themeColors.colors.pink[500],
                            fontSize: "1.2rem",
                            lineHeight: "1.5rem",
                          }}
                        >
                          •
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
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

export default Experience;
