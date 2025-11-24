interface FooterProps {
  language: 'fr' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      tagline: "L'Infrastructure Crypto-Énergie-Carbone n°1 en Europe",
      links: {
        about: 'À propos',
        whitepaper: 'Whitepaper',
        contact: 'Contact',
        legal: 'Mentions légales',
        privacy: 'Confidentialité',
      },
      copyright: '© 2025 MyCrypto Energy Holdings. Tous droits réservés.',
    },
    en: {
      tagline: "Europe's #1 Crypto-Energy-Carbon Infrastructure",
      links: {
        about: 'About',
        whitepaper: 'Whitepaper',
        contact: 'Contact',
        legal: 'Legal Notice',
        privacy: 'Privacy',
      },
      copyright: '© 2025 MyCrypto Energy Holdings. All rights reserved.',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 bg-background rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-foreground">
                GREEN CHAIN<span className="text-primary">™</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">
              {language === 'fr' ? 'Liens rapides' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.links.about}
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.links.whitepaper}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">
              {language === 'fr' ? 'Légal' : 'Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#legal"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.links.legal}
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.links.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
