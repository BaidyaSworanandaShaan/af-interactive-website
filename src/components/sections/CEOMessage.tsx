import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "../ui";

export default function CEOMessage() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-brand-50 via-white to-indigo-50/40 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/80 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 md:px-16">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/25 ring-4 ring-white dark:ring-gray-900">
                  <span className="text-2xl font-bold text-white select-none">
                    KA
                  </span>
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white dark:border-gray-900" />
              </div>
              <div className="text-center">
                <p className="font-bold text-base md:text-lg text-gray-900 dark:text-white leading-tight">
                  Kusum Adhikari
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            {/* Divider (desktop) */}
            <div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-brand-200 dark:via-brand-800 to-transparent" />

            {/* Message */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Quote className="w-8 h-8 text-brand-300 dark:text-brand-700 mx-auto md:mx-0 mb-3" />
              </motion.div>

              <blockquote className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed">
                When I founded Aurora Forge Interactive Pvt. Ltd., my vision was
                clear — to create technology from Nepal that can stand
                confidently on the global stage. We design and build digital
                products, from travel technology to content platforms, that are
                rooted in local insight while meeting international expectations
              </blockquote>

              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                — Founding vision, Aurora Forge Interactive
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
