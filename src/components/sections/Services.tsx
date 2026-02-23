import { motion } from "framer-motion";
import { Globe, Smartphone, Blocks, Check } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Blazing-fast, responsive web applications built with modern frameworks like React, Next.js, and TypeScript. Pixel-perfect UI with accessibility baked in.",
    features: [
      "SPAs & PWAs",
      "Server-Side Rendering",
      "API Integrations",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that feel native. We use React Native and Flutter to deliver beautiful experiences on both iOS and Android.",
    features: [
      "Cross-Platform",
      "Native Performance",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    icon: Blocks,
    title: "Custom Software Solutions",
    description:
      "Bespoke software tailored to your business processes. From SaaS platforms to internal tools, we engineer solutions that scale with your growth.",
    features: [
      "SaaS Platforms",
      "Internal Tools",
      "Cloud Architecture",
      "Third-Party Integrations",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <Container>
        <Reveal>
          <SectionHeading
            label="Services"
            title="Everything you need to ship great software"
            description="From concept to deployment, we offer end-to-end development services that help ambitious teams build products users love."
          />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-100/50 dark:hover:shadow-brand-950/30 transition-colors duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-brand-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 text-brand-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
