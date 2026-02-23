import { MapPin, MessageCircle } from "lucide-react";
import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const WHATSAPP_NUMBER = "9779768019397";

const contactItems = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    title: "+977 9768019397",
    subtitle: "Chat with us on WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    title: "Kathmandu, Nepal",
    subtitle: "Find us in the heart of Nepal",
    body: "Aurora Forge Interactive Pvt. Ltd.",
    href: null,
    external: false,
  },
];

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className=" lg:py-32 bg-gray-50/50">
      <Container>
        <Reveal>
          <SectionHeading
            label="Let's Talk"
            title="Get In Touch"
            description="Have a project in mind, or want to explore a partnership? We'd love to hear from you."
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactItems.map((item) => {
            const Icon = item.icon;

            const inner = (
              <div className="flex items-start gap-5">
                {/* Icon container with green gradient */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #4CAF50, #2E7D32)",
                  }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-base font-bold text-brand-900 dark:text-white leading-snug">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );

            return (
              <StaggerItem key={item.id}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/60">
                    {inner}
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
