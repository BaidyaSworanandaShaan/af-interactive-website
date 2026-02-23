import { Search, Paintbrush, Code, Rocket } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Planning",
    description:
      "We dive deep into your vision, map your requirements, define the scope, and craft a strategic roadmap tailored to your goals.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Design & Prototype",
    description:
      "Our designers create intuitive interfaces and interactive prototypes so you can experience and validate the product before a single line of code is written.",
  },
  {
    step: "03",
    icon: Code,
    title: "Development & Iteration",
    description:
      "In focused two-week sprints, our engineers build, test, and refine — keeping you in the loop with demos and transparent progress updates.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "From deployment to monitoring, we ensure a smooth launch and provide ongoing maintenance, performance tuning, and feature enhancements.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <Container>
        <Reveal>
          <SectionHeading
            label="How We Work"
            title="A proven development process"
            description="Transparency and collaboration at every stage. Here's how we turn your ideas into production-ready software."
          />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.step}>
                <div className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-200 dark:from-brand-800 to-transparent z-0" />
                  )}

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-brand-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
