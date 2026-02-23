import { Twitter, Github, Linkedin } from "lucide-react";
import { Container, Reveal } from "../ui";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Custom Software", href: "#services" },
    { label: "Consulting", href: "#contact" },
  ],
  Company: [
    { label: "Projects", href: "#projects" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Teams", href: "#team" },
  ],
};

const socialLinks = [
  { label: "X (Twitter)", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 pt-16 pb-8">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
            {/* Brand — logo + tagline */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2.5 mb-4">
                <img
                  src="/logos/af-secondary-logo.svg"
                  alt="AuroraForge Logo"
                  className="h-6 w-auto"
                />
              </a>
              <p className="text-sm leading-relaxed">
                Building premium software solutions for ambitious teams. From
                idea to launch and beyond.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-brand-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Company info — name, location & socials */}
            <div className="col-span-2 md:col-span-1">
              <a
                href="#"
                className="text-sm font-semibold text-gray-200 hover:text-brand-400 transition-colors"
                aria-label="Aurora Forge Interactive Pvt. Ltd."
              >
                Aurora Forge Interactive Pvt. Ltd.
              </a>
              <p className="text-xs text-gray-500 mt-1 mb-5">
                Tokha 5, Kathmandu
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Aurora Forge Interactive. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
