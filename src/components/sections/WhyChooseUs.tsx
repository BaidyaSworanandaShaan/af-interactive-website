import { motion } from "framer-motion";
import { Zap, Maximize2, Code2, RefreshCw } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const reasons = [
  {
    icon: Zap,
    title: "Exceptional Performance",
    description:
      "We obsess over every millisecond. Our solutions are optimized for speed with Lighthouse scores that consistently hit 95+.",
  },
  {
    icon: Maximize2,
    title: "Built to Scale",
    description:
      "Architecture designed for growth. From microservices to serverless, we build systems that handle your next 10x without breaking a sweat.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "React, TypeScript, Node.js, cloud-native — we use battle-tested, modern technologies that keep your product ahead of the curve.",
  },
  {
    icon: RefreshCw,
    title: "Agile Workflow",
    description:
      "Two-week sprints, daily standups, and continuous delivery. Full transparency with real-time progress updates at every milestone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            label="Why Choose Us"
            title="Engineering excellence, delivered"
            description="We combine deep technical expertise with a product-minded approach to deliver software that truly moves the needle."
          />
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title}>
                <motion.div
                  whileHover={{
                    y: -4,
                    backgroundColor: "rgba(139, 92, 246, 0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative p-6 rounded-2xl transition-colors duration-300"
                >
                  {/* number */}
                  <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 dark:text-gray-800 group-hover:text-brand-100 dark:group-hover:text-brand-900/50 transition-colors duration-300 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-5 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-brand-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
