interface Logo {
  name: string;
  src?: string;
  /** Brand color used for the text-logo fallback */
  color?: string;
}

interface TrustedByProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { name: "Vercel", color: "#000000" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Linear", color: "#5E6AD2" },
  { name: "Notion", color: "#000000" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Loom", color: "#625DF5" },
  { name: "Resend", color: "#000000" },
];

export default function TrustedBy({ logos = defaultLogos }: TrustedByProps) {
  // Duplicate for seamless infinite loop
  const track = [...logos, ...logos];

  return (
    <section className="py-6 md:py-8 bg-gray-50 dark:bg-gray-900/60 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Label */}
          <p className="shrink-0 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Trusted by
          </p>

          {/* Divider */}
          <div className="hidden sm:block h-5 w-px bg-gray-200 dark:bg-gray-700 shrink-0" />

          {/* Marquee track */}
          <div className="relative w-full overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900/60 to-transparent" />

            <div
              className="flex items-center gap-0"
              style={{
                animation: "marquee 28s linear infinite",
                width: "max-content",
              }}
            >
              {track.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="mx-6 flex items-center justify-center h-10 md:h-12 hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  ) : (
                    <span
                      className="text-sm md:text-base font-bold tracking-tight opacity-50 hover:opacity-90 transition-opacity duration-200 dark:opacity-40 dark:hover:opacity-80 select-none"
                      style={{ color: logo.color ?? "#6b7280" }}
                    >
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
