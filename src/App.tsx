import {
  Navbar,
  Hero,
  Services,
  FeaturedProjects,
  TechStack,
  Ecosystem,
  CTAContactSection,
  OurTeamSection,
  Footer,
} from "./components/sections";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services /> <FeaturedProjects /> <TechStack />
        <Ecosystem />
        <OurTeamSection />
        <CTAContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
