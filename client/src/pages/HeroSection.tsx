import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

export default function HeroSection({ language }: HeroSectionProps) {
  const content = {
    fr: {
      title: 'GREEN CHAIN™',
      subtitle: "L'Infrastructure Crypto-Énergie-Carbone n°1 en Europe",
      description:
        "Green Chain™ est une infrastructure décentralisée révolutionnaire, portée par MyCrypto Energy Holdings. Notre mission est de financer et d'exploiter des projets écologiques de grande échelle en Europe, en utilisant la blockchain, la tokenisation et une transparence énergétique totale.",
      buyTokens: 'Acheter des tokens',
      whitepaper: 'Explorer le whitepaper',
      stats: {
        tokens: 'TOKENS (GRC)',
        objective: 'OBJECTIF DE LEVÉE',
        carbon: 'EMPREINTE CARBONE',
      },
    },
    en: {
      title: 'GREEN CHAIN™',
      subtitle: "Europe's #1 Crypto-Energy-Carbon Infrastructure",
      description:
        "Green Chain™ is a revolutionary decentralized infrastructure, powered by MyCrypto Energy Holdings. Our mission is to finance and operate large-scale ecological projects in Europe, using blockchain, tokenization and total energy transparency.",
      buyTokens: 'Buy tokens',
      whitepaper: 'Explore whitepaper',
      stats: {
        tokens: 'TOKENS (GRC)',
        objective: 'FUNDING TARGET',
        carbon: 'CARBON FOOTPRINT',
      },
    },
  };

  const t = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tight">
              {t.title}
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-primary">
              {t.subtitle}
            </p>

            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                {t.buyTokens}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent"
              >
                {t.whitepaper}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                100M
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {t.stats.tokens}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                100M€
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {t.stats.objective}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                0%
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {t.stats.carbon}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-sm font-medium text-muted-foreground">Scroll</div>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
