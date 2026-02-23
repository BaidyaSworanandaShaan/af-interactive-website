import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const testimonials = [
  {
    quote:
      "Aurora Forge transformed our scattered internal tools into a unified platform that our team actually enjoys using. The performance gains alone justified the investment within weeks.",
    name: "Sarah Chen",
    role: "CTO, Nimbus Analytics",
    avatar: "SC",
  },
  {
    quote:
      "Their mobile development expertise is outstanding. They delivered a polished, cross-platform app in half the time we expected — and it's been rock-solid in production ever since.",
    name: "Marcus Rivera",
    role: "Product Lead, PulseHealth",
    avatar: "MR",
  },
  {
    quote:
      "We needed a team that understood fintech security requirements and could move fast. Aurora Forge delivered on both fronts with a PCI-compliant payment platform that our customers love.",
    name: "Aisha Patel",
    role: "CEO, VaultPay",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            label="Testimonials"
            title="Trusted by ambitious teams"
            description="Don't just take our word for it — here's what our clients have to say about working with us."
          />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-100/40 dark:hover:shadow-brand-950/30 transition-colors duration-300 h-full"
              >
                <Quote className="w-8 h-8 text-brand-200 dark:text-brand-800 mb-4" />

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center text-sm font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
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
