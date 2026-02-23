import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const projects = [
  {
    title: "Club Travel",
    category: "Travel Tech Platform",
    description:
      "A smart travel companion app designed to make group and club travel seamless — from itinerary planning to bookings, all in one place.",
    tags: ["Mobile App", "Travel", "Nepal"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format",
    gradient: "from-brand-500 to-indigo-600",
  },
  {
    title: "UGC Creator Platform",
    category: "Content Creator App for Nepal",
    description:
      "Nepal's first dedicated UGC (User Generated Content) platform empowering local creators to monetize their content, build communities, and collaborate with brands.",
    tags: ["Authentic Content", "Community-Driven", "Brand Collaborations"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop&auto=format",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            label="Featured Work"
            title="In-House Innovations"
            description="Ongoing projects developed internally to experiment, innovate, and deliver next-generation digital solutions."
          />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-xl hover:shadow-brand-100/40 dark:hover:shadow-brand-950/30 transition-colors duration-300 h-full"
              >
                {/* Project visual */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm border border-white/20 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/50 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
