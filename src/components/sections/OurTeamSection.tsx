import { useState } from "react";
import { Linkedin } from "lucide-react";
import { Container, Reveal, SectionHeading } from "../ui";

// ─── Config ───────────────────────────────────────────────────────────────────

interface TeamMember {
  name: string;
  role: string;
  image: string;

  linkedin: string;
  /** Tailwind gradient used as image placeholder background */
  gradient: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kusum Adhikari",
    role: "Director of Engineering | Co-founder",
    image: `${import.meta.env.BASE_URL}team/kusum.jpg`,
    linkedin: "https://www.linkedin.com/in/kusum-adhikari-96171b23/",
    gradient: "from-brand-500 via-indigo-500 to-purple-600",
  },
  {
    name: "Pratik Gautam",
    role: "Business Development Head | Co-founder",
    image: `${import.meta.env.BASE_URL}team/pratik.png`,
    linkedin: "https://www.linkedin.com/in/pratik-gautam-599476154/",
    gradient: "from-violet-500 via-brand-500 to-indigo-600",
  },
  {
    name: "Asutosh Adhikari",
    role: "Software Engineer",
    image: `${import.meta.env.BASE_URL}team/asutosh.jpg`,
    linkedin: "https://www.linkedin.com/in/asutoshadhikari/",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    name: "Roshan Chapagain",
    role: "Software Engineer",
    image: `${import.meta.env.BASE_URL}team/roshan.jpg`,
    linkedin: "https://linkedin.com",
    gradient: "from-brand-600 via-teal-500 to-cyan-500",
  },
  {
    name: "Shaan Sworananda Baidya",
    role: "UI / UX Developer",
    image: `${import.meta.env.BASE_URL}team/shaan.jpg`,
    linkedin: "https://www.linkedin.com/in/shaan-sworananda-baidya-045988322/",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
  },
  {
    name: "Sunil Shrestha",
    role: "QA",
    image: `${import.meta.env.BASE_URL}team/sunil.jpg`,
    linkedin: "https://www.linkedin.com/in/sunil-shrestha-682594134/",
    gradient: "from-teal-500 via-brand-500 to-violet-500",
  },
  {
    name: "Giri Raj BC",
    role: "Devops and Cloud Solution ",
    image: `${import.meta.env.BASE_URL}team/girirajbc.jpg`,
    linkedin: "https://www.linkedin.com/in/giri-raj-bc-82a7371b6/",
    gradient: "from-teal-500 via-brand-500 to-violet-500",
  },
  {
    name: "Saugat Subba",
    role: "Graphic Designer | Social Media Manager",
    image: "",
    linkedin: "https://www.linkedin.com/in/saugat-subba-34939b32a/",
    gradient: "from-teal-500 via-brand-500 to-violet-500",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative mx-3 flex-shrink-0 w-48 md:w-52 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:-translate-y-1 hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-300">
      {/* ── Square image / placeholder ── */}
      <div className="relative aspect-square overflow-hidden">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-end justify-center overflow-hidden">
            {/* Generic person silhouette */}
            <svg
              viewBox="0 0 100 110"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4/5 text-gray-300 dark:text-gray-600"
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Head */}
              <circle cx="50" cy="32" r="20" />
              {/* Body / shoulders */}
              <ellipse cx="50" cy="95" rx="38" ry="28" />
            </svg>
          </div>
        )}

        {/* Hover overlay with social icons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200 translate-y-4 group-hover:translate-y-0 delay-100"
            aria-label={`${member.name} LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div className="px-5 py-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200 truncate">
            {member.name}
          </p>
          <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
            {member.role}
          </p>
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="pointer-events-none absolute left-1/2 top-2/3 z-30 w-56 max-w-xs -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white rounded-xl shadow-lg px-4 py-3 text-center text-sm font-medium">
        <div>{member.name}</div>
        <div className="mt-1 text-xs text-gray-300">{member.role}</div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function OurTeamSection() {
  const [paused, setPaused] = useState(false);

  // Duplicate for seamless infinite loop
  const track = [...teamMembers, ...teamMembers];

  return (
    <section id="team" className="py-24 lg:py-32 overflow-hidden scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            label="The People"
            title="Our Team"
            description="A passionate group of engineers, designers, and strategists building products that matter."
          />
        </Reveal>

        {/* Marquee — contained within layout margins */}
        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Scrolling track */}
          <div className="overflow-hidden">
            <div
              className="flex items-stretch py-2"
              style={{
                animation: "marquee 40s linear infinite",
                animationPlayState: paused ? "paused" : "running",
                width: "max-content",
              }}
            >
              {track.map((member, i) => (
                <TeamCard key={`${member.name}-${i}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
