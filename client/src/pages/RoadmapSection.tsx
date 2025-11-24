import { Check, Clock, Target } from 'lucide-react';

interface RoadmapSectionProps {
  language: 'fr' | 'en';
}

export default function RoadmapSection({ language }: RoadmapSectionProps) {
  const content = {
    fr: {
      sectionNumber: '04',
      title: 'ROADMAP',
      subtitle: 'Notre Feuille de Route vers 2030',
      phases: [
        {
          quarter: 'Q1 2025',
          status: 'completed',
          title: 'Fondation & Structuration',
          items: [
            'Création de MyCrypto Energy Holdings',
            'Développement du protocole Green Chain™',
            'Audits de sécurité initiaux',
            'Partenariats institutionnels',
          ],
        },
        {
          quarter: 'Q2 2025',
          status: 'current',
          title: 'Lancement ICO & Premiers Projets',
          items: [
            'Lancement de la vente publique (ICO)',
            'Déploiement des premiers projets pilotes',
            'Listing sur exchanges majeurs',
            'Certification MiCA 2',
          ],
        },
        {
          quarter: 'Q3-Q4 2025',
          status: 'upcoming',
          title: 'Expansion & Déploiement',
          items: [
            'Déploiement des 10 verticales écologiques',
            'Lancement du staking GRC',
            'Premiers crédits carbone BioCoin',
            'Partenariats avec villes européennes',
          ],
        },
        {
          quarter: '2026-2030',
          status: 'upcoming',
          title: 'Scale & Leadership Européen',
          items: [
            'Expansion dans 10 pays européens',
            'Infrastructure #1 en Europe',
            'Neutralité carbone totale',
            'Objectif 1 milliard d\'euros de capitalisation',
          ],
        },
      ],
    },
    en: {
      sectionNumber: '04',
      title: 'ROADMAP',
      subtitle: 'Our Roadmap to 2030',
      phases: [
        {
          quarter: 'Q1 2025',
          status: 'completed',
          title: 'Foundation & Structuring',
          items: [
            'Creation of MyCrypto Energy Holdings',
            'Development of Green Chain™ protocol',
            'Initial security audits',
            'Institutional partnerships',
          ],
        },
        {
          quarter: 'Q2 2025',
          status: 'current',
          title: 'ICO Launch & First Projects',
          items: [
            'Public sale (ICO) launch',
            'Deployment of first pilot projects',
            'Listing on major exchanges',
            'MiCA 2 certification',
          ],
        },
        {
          quarter: 'Q3-Q4 2025',
          status: 'upcoming',
          title: 'Expansion & Deployment',
          items: [
            'Deployment of 10 ecological verticals',
            'Launch of GRC staking',
            'First BioCoin carbon credits',
            'Partnerships with European cities',
          ],
        },
        {
          quarter: '2026-2030',
          status: 'upcoming',
          title: 'Scale & European Leadership',
          items: [
            'Expansion to 10 European countries',
            '#1 Infrastructure in Europe',
            'Total carbon neutrality',
            'Target 1 billion euros market cap',
          ],
        },
      ],
    },
  };

  const t = content[language];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="w-6 h-6 text-primary" />;
      case 'current':
        return <Clock className="w-6 h-6 text-primary" />;
      case 'upcoming':
        return <Target className="w-6 h-6 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-primary bg-primary/10';
      case 'current':
        return 'border-primary bg-primary/20 shadow-lg shadow-primary/20';
      case 'upcoming':
        return 'border-border bg-card';
      default:
        return 'border-border bg-card';
    }
  };

  return (
    <section id="roadmap" className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary mb-4">{t.sectionNumber}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.phases.map((phase, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-8 transition-all hover:scale-105 ${getStatusColor(
                  phase.status
                )}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {getStatusIcon(phase.status)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">{phase.quarter}</div>
                      <div className="text-xs text-muted-foreground">
                        {phase.status === 'completed'
                          ? language === 'fr'
                            ? 'Complété'
                            : 'Completed'
                          : phase.status === 'current'
                          ? language === 'fr'
                            ? 'En cours'
                            : 'Current'
                          : language === 'fr'
                          ? 'À venir'
                          : 'Upcoming'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{phase.title}</h3>

                {/* Items */}
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
