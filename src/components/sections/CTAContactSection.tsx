import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Reveal } from "../ui";

// ─── Config ──────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "9779768019397";

const contactItems = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    title: "contact@auroraforge.com.np",
    subtitle: "Drop us a line anytime",
    href: "mailto:contact@auroraforge.com.np",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    title: "+977 9768019397",
    subtitle: "Chat with us on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    title: "Kathmandu, Nepal",
    subtitle: "Aurora Forge Interactive Pvt. Ltd.",
    href: null,
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function CTAContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />
            </div>

            {/* Content */}
            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to build something{" "}
                <span className="text-brand-200">extraordinary?</span>
              </h2>

              <p className="mt-5 text-lg text-brand-100/80 leading-relaxed">
                Let's discuss your project. We'll help you identify the best
                approach, timeline, and technology stack to bring your vision to
                life.
              </p>
            </div>

            {/* Contact cards */}
            <div className="relative mt-12 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-4xl mx-auto">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const inner = (
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Icon bubble */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>

                    {/* Text */}
                    <div className="text-left min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-200/70 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white leading-snug break-all">
                        {item.title}
                      </p>
                      <p className="text-xs text-brand-100/70 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );

                const baseCard =
                  "flex-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-5 transition-all duration-200";

                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseCard} hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.id} className={baseCard}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
