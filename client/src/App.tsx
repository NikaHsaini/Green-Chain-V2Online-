import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import EcosystemSection from "./pages/EcosystemSection";
import TokenomicsSection from "./pages/TokenomicsSection";
import RoadmapSection from "./pages/RoadmapSection";
import StakingSection from "./pages/StakingSection";

function HomePage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <EcosystemSection language={language} />
        <TokenomicsSection language={language} />
        <RoadmapSection language={language} />
        <StakingSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
