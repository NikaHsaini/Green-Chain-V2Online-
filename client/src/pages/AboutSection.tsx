import { Leaf, Shield, Recycle } from 'lucide-react';

interface AboutSectionProps {
  language: 'fr' | 'en';
}

export default function AboutSection({ language }: AboutSectionProps) {
  const content = {
    fr: {
      sectionNumber: '01',
      title: 'VISION ET CONFORMITÉ',
      visionTitle: 'Une Vision Stratégique pour 2030',
      visionText:
        "Green Chain™ vise à devenir la première infrastructure énergétique tokenisée d'Europe. Notre objectif est de fédérer les énergies renouvelables, la blockchain, les quotas carbone, le minage vert et les data centers décarbonés. Nous ambitionnons de transformer Paris en capitale mondiale de l'énergie intelligente et 100% traçable, en parfaite adéquation avec les objectifs de neutralité carbone 2050.",
      complianceTitle: 'Cadre Réglementaire et Protection',
      complianceText:
        "Le protocole Green Chain™ est conçu pour répondre aux exigences strictes du règlement européen MiCA 2 (Markets in Crypto-Assets Regulation). Cette conformité garantit une documentation technique complète, une gouvernance identifiée, des Smart Contracts audités (par des cabinets comme Deloitte ou PwC), une conformité AML/CFT, la protection des investisseurs et une transparence totale sur l'allocation des fonds. De plus, tous les projets sélectionnés respectent la Taxonomie Verte de l'UE, assurant un impact écologique mesurable.",
      features: [
        { icon: Recycle, label: '100% Renouvelable' },
        { icon: Leaf, label: 'Impact Positif' },
        { icon: Shield, label: 'Sécurité Maximale' },
      ],
    },
    en: {
      sectionNumber: '01',
      title: 'VISION AND COMPLIANCE',
      visionTitle: 'A Strategic Vision for 2030',
      visionText:
        "Green Chain™ aims to become Europe's first tokenized energy infrastructure. Our goal is to unite renewable energies, blockchain, carbon quotas, green mining and decarbonized data centers. We aim to transform Paris into the world capital of intelligent and 100% traceable energy, in perfect alignment with the 2050 carbon neutrality objectives.",
      complianceTitle: 'Regulatory Framework and Protection',
      complianceText:
        "The Green Chain™ protocol is designed to meet the strict requirements of the European MiCA 2 regulation (Markets in Crypto-Assets Regulation). This compliance guarantees complete technical documentation, identified governance, audited Smart Contracts (by firms like Deloitte or PwC), AML/CFT compliance, investor protection and total transparency on fund allocation. In addition, all selected projects comply with the EU Green Taxonomy, ensuring measurable ecological impact.",
      features: [
        { icon: Recycle, label: '100% Renewable' },
        { icon: Leaf, label: 'Positive Impact' },
        { icon: Shield, label: 'Maximum Security' },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="relative py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary mb-4">{t.sectionNumber}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.visionTitle}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.visionText}
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.complianceTitle}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.complianceText}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-center text-foreground">
                      {feature.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Hexagon Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rotate-45 rounded-3xl border-2 border-primary/30"></div>
              </div>

              {/* Stats */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                <div className="bg-card border-2 border-primary rounded-lg p-6 text-center shadow-lg">
                  <div className="text-4xl font-black text-primary mb-1">-99%</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    CONSOMMATION
                  </div>
                </div>

                <div className="bg-card border-2 border-primary rounded-lg p-6 text-center shadow-lg">
                  <div className="text-4xl font-black text-primary mb-1">+200%</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    EFFICACITÉ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
