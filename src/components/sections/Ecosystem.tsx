import {
  Container,
  SectionHeading,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "../ui";

const badges = [
  "Private Cloud",
  "OpenStack",
  "Enterprise Infrastructure",
  "Nepal Market",
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <Container>
        <Reveal>
          <SectionHeading
            label="Ecosystem"
            title="Strategic Partnership"
            description="Sales Partnership with OpenMetal"
          />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {/* Partner Logos */}
          <Reveal>
            <div className="mb-12 flex items-center justify-center">
              {/* OpenMetal Logo */}
              <a
                href="https://openmetal.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-24 w-auto"
              >
                <img
                  src="/logos/openmetal.svg"
                  alt="OpenMetal"
                  className="h-12 object-contain"
                />
              </a>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal>
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Aurora Forge Interactive is an official sales partner of{" "}
                <a
                  href="https://openmetal.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  OpenMetal
                </a>{" "}
                — a leading provider of on-demand private cloud infrastructure
                powered by OpenStack.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Together, we bring enterprise-grade, cost-effective cloud
                solutions to businesses in Nepal and the broader South Asian
                market.
              </p>
            </div>
          </Reveal>

          {/* Badges */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <StaggerContainer className="flex flex-wrap justify-center gap-3 w-full">
                {badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <span className="inline-block px-4 py-2 rounded-xl text-sm font-semibold text-white bg-brand-600 dark:bg-brand-700 hover:bg-brand-700 dark:hover:bg-brand-600 transition-colors duration-200">
                      {badge}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
