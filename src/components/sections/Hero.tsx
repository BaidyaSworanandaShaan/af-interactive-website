import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Button, Reveal } from "../ui";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-brand-100/60 via-brand-200/30 to-transparent dark:from-brand-950/40 dark:via-brand-900/20 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-l from-indigo-100/40 to-transparent dark:from-indigo-950/30 dark:to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-0 w-[500px] h-[300px] bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-950/20 dark:to-transparent rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 rounded-full text-sm font-medium text-brand-700 dark:text-brand-300 mb-8">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              Kathmandu, Nepal
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-900 dark:text-white leading-[1.1]">
              We build software that{" "}
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-500 bg-clip-text text-transparent">
                drives growth
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-6 text-md sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Based in{" "}
              <span className="font-bold text-brand-600 dark:text-brand-400">
                Nepal
              </span>
              , we design and develop apps, platforms, and long-term
              partnerships that shape the future of digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg" href="#projects">
                View Our Work
              </Button>
            </div>
          </Reveal>

          {/* Trust indicators */}
          <Reveal delay={0.65}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-400 dark:text-gray-500">
              {[
                "2+ Projects In Progress",
                "1 Global Partnership",
                "🇳🇵 Made in Nepal",
                "∞ Ambition",
              ].map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
