import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Container, Button, Reveal } from "../ui";

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 px-8 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-24">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
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

            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to build something{" "}
                <span className="text-brand-200">extraordinary?</span>
              </h2>

              <p className="mt-5 text-lg text-brand-100/80 leading-relaxed">
                Let’s discuss your project. We’ll help you identify the best
                approach, timeline, and technology stack to bring your vision to
                life.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@auroraforge.com.np">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="!bg-white !text-brand-700 hover:!bg-brand-50 !shadow-xl hover:!shadow-2xl"
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    contact@auroraforge.com.np
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
