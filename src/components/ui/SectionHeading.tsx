interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-16 ${alignment}`}>
      {label && (
        <span className="inline-block text-sm font-semibold text-gray-600 dark:text-brand-400 tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
