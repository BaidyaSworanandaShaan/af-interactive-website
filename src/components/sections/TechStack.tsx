import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiTailwindcss,
  SiGraphql,
  SiRedis,
  SiFlutter,
} from "react-icons/si";
import { Container, Reveal } from "../ui";
import { useTheme } from "../../hooks";

const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "#000000",
    darkColor: "#e5e7eb",
  },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
];

export default function TechStack() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Duplicate for seamless infinite loop
  const track = [...technologies, ...technologies];

  return (
    <section className="pb-24 lg:pb-32">
      <Container>
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-12">
          {/* Left: Section Info */}
          <Reveal className="flex-shrink-0 lg:max-w-sm">
            <div>
              <span className="inline-block text-sm font-semibold text-gray-600 dark:text-brand-400 tracking-wide uppercase mb-3">
                Tech Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white tracking-tight mb-4">
                Technologies we love
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                We choose the right tool for the job — leveraging a modern,
                battle-tested tech stack to build reliable, scalable software.
              </p>
            </div>
          </Reveal>

          {/* Right: Carousel */}
          <div className="flex-1 w-full min-w-0">
            <div className="relative w-full overflow-hidden rounded-xl">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-12 z-10 dark:from-gray-900/50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-12 z-10   dark:from-gray-900/50 to-transparent" />

              <div
                className="flex items-center gap-0"
                style={{
                  animation: "marquee 40s linear infinite",
                  width: "max-content",
                }}
              >
                {track.map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="px-4 md:px-6 flex flex-col items-center justify-center gap-2 h-24 md:h-28 hover:scale-110 transition-transform duration-200 cursor-default flex-shrink-0"
                  >
                    <tech.Icon
                      className="w-8 h-8 md:w-10 md:h-10 shrink-0 transition-all duration-300 opacity-50 hover:opacity-100"
                      style={{
                        color:
                          tech.darkColor && isDark
                            ? tech.darkColor
                            : tech.color,
                      }}
                    />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center opacity-50 hover:opacity-100 transition-opacity duration-200 select-none whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
