interface EcosystemSectionProps {
  language: 'fr' | 'en';
}

export default function EcosystemSection({ language }: EcosystemSectionProps) {
  const content = {
    fr: {
      sectionNumber: '02',
      title: 'LES PILIERS DE L\'ÉCOSYSTÈME',
      tokensTitle: 'Les Deux Tokens Officiels',
      greenCoinTitle: 'Green Coin (GRC)',
      greenCoinDesc:
        "Token d'investissement écologique mondial. Sert à lever des capitaux mondiaux (institutions, entreprises, public) pour financer les projets écologiques. Il donne accès aux projets, à la gouvernance (DAO), à une part des revenus générés et au staking.",
      bioCoinTitle: 'BioCoin (BIO)',
      bioCoinDesc:
        "Token carbone de l'écosystème Green Chain. Représente 1 unité de quota carbone certifiée, issue d'un audit des projets. Il est revendu sur les marchés européens (EU ETS) pour permettre aux entreprises de réduire leur empreinte carbone officielle. C'est un actif spéculatif basé sur la rareté réglementaire.",
      verticalesTitle: 'Les 10 Verticales Écologiques',
      verticalesDesc:
        'Les liquidités collectées via le GRC financent 10 verticales écologiques, chacune recevant 10% des fonds. Ces projets sont la source des quotas carbone tokenisés par le BioCoin.',
      verticales: [
        {
          title: '1. Dalles Piézo-électriques',
          desc: 'Production d\'énergie à partir du passage piéton et du trafic léger (Champs-Élysées & axes touristiques).',
        },
        {
          title: '2. Data Centers Verts',
          desc: 'Centres à Paris et en Île-de-France utilisant le refroidissement naturel, l\'énergie verte et la récupération de chaleur pour le chauffage urbain.',
        },
        {
          title: '3. Micro-éoliennes Verticales Urbaines',
          desc: 'Installées sur les toits d\'immeubles, écoles et bâtiments municipaux.',
        },
        {
          title: '4. Solaires Photovoltaïques Publics',
          desc: 'Exploitation des toitures des équipements municipaux.',
        },
        {
          title: '5. Batteries Urbaines de Stockage',
          desc: 'Stockage nocturne et stabilisation du réseau.',
        },
        {
          title: '6. Rénovation Énergétique des Bâtiments Publics',
          desc: 'Isolation, LED et IA thermique pour une efficacité maximale.',
        },
        {
          title: '7. Mobilité Verte & Bornes de Recharge',
          desc: 'Bornes électriques alimentées par énergie verte locale.',
        },
        {
          title: '8. Agriculture Urbaine & Serres Solaires',
          desc: 'Fermes verticales énergétiquement autonomes.',
        },
        {
          title: '9. Recyclage Énergétique des Déchets',
          desc: 'Valorisation énergétique des déchets urbains.',
        },
        {
          title: '10. Éclairage Public Intelligent',
          desc: 'LED intelligents avec détection de présence et énergie solaire.',
        },
      ],
    },
    en: {
      sectionNumber: '02',
      title: 'ECOSYSTEM PILLARS',
      tokensTitle: 'The Two Official Tokens',
      greenCoinTitle: 'Green Coin (GRC)',
      greenCoinDesc:
        'Global ecological investment token. Used to raise global capital (institutions, companies, public) to finance ecological projects. It provides access to projects, governance (DAO), a share of generated revenues and staking.',
      bioCoinTitle: 'BioCoin (BIO)',
      bioCoinDesc:
        "Green Chain ecosystem carbon token. Represents 1 certified carbon quota unit, resulting from project audits. It is resold on European markets (EU ETS) to allow companies to reduce their official carbon footprint. It's a speculative asset based on regulatory scarcity.",
      verticalesTitle: 'The 10 Ecological Verticals',
      verticalesDesc:
        'Liquidity collected via GRC finances 10 ecological verticals, each receiving 10% of funds. These projects are the source of carbon quotas tokenized by BioCoin.',
      verticales: [
        {
          title: '1. Piezoelectric Tiles',
          desc: 'Energy production from pedestrian traffic and light traffic (Champs-Élysées & tourist areas).',
        },
        {
          title: '2. Green Data Centers',
          desc: 'Centers in Paris and Île-de-France using natural cooling, green energy and heat recovery for urban heating.',
        },
        {
          title: '3. Urban Vertical Micro-wind Turbines',
          desc: 'Installed on rooftops of buildings, schools and municipal buildings.',
        },
        {
          title: '4. Public Photovoltaic Solar',
          desc: 'Exploitation of municipal equipment rooftops.',
        },
        {
          title: '5. Urban Storage Batteries',
          desc: 'Night storage and grid stabilization.',
        },
        {
          title: '6. Energy Renovation of Public Buildings',
          desc: 'Insulation, LED and thermal AI for maximum efficiency.',
        },
        {
          title: '7. Green Mobility & Charging Stations',
          desc: 'Electric stations powered by local green energy.',
        },
        {
          title: '8. Urban Agriculture & Solar Greenhouses',
          desc: 'Energy-autonomous vertical farms.',
        },
        {
          title: '9. Energy Recycling of Waste',
          desc: 'Energy recovery from urban waste.',
        },
        {
          title: '10. Smart Public Lighting',
          desc: 'Smart LEDs with presence detection and solar energy.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="ecosystem" className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary mb-4">{t.sectionNumber}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Tokens Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t.tokensTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Green Coin Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all">
              <h4 className="text-2xl font-bold text-primary mb-4">{t.greenCoinTitle}</h4>
              <p className="text-base text-foreground leading-relaxed">{t.greenCoinDesc}</p>
            </div>

            {/* BioCoin Card */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-2xl p-8 hover:shadow-2xl hover:shadow-secondary/20 transition-all">
              <h4 className="text-2xl font-bold text-secondary-foreground mb-4">
                {t.bioCoinTitle}
              </h4>
              <p className="text-base text-foreground leading-relaxed">{t.bioCoinDesc}</p>
            </div>
          </div>
        </div>

        {/* Verticales Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            {t.verticalesTitle}
          </h3>
          <p className="text-base text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {t.verticalesDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.verticales.map((verticale, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-3">{verticale.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{verticale.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
