interface TokenomicsSectionProps {
  language: 'fr' | 'en';
}

export default function TokenomicsSection({ language }: TokenomicsSectionProps) {
  const content = {
    fr: {
      sectionNumber: '03',
      title: 'TOKENOMICS',
      subtitle: 'Distribution et Allocation des Tokens',
      totalSupply: 'Supply Total',
      totalSupplyValue: '100 000 000 GRC',
      distribution: [
        { label: 'Vente Publique (ICO)', percentage: '40%', amount: '40M GRC', color: 'bg-green-500' },
        { label: 'Réserve Écologique', percentage: '25%', amount: '25M GRC', color: 'bg-green-600' },
        { label: 'Équipe & Advisors', percentage: '15%', amount: '15M GRC', color: 'bg-green-700' },
        { label: 'Staking & Rewards', percentage: '10%', amount: '10M GRC', color: 'bg-green-800' },
        { label: 'Liquidité & Exchanges', percentage: '10%', amount: '10M GRC', color: 'bg-green-900' },
      ],
      priceInfo: {
        initialPrice: 'Prix Initial',
        initialPriceValue: '1 GRC = 1€',
        hardCap: 'Hard Cap',
        hardCapValue: '100M€',
      },
    },
    en: {
      sectionNumber: '03',
      title: 'TOKENOMICS',
      subtitle: 'Token Distribution and Allocation',
      totalSupply: 'Total Supply',
      totalSupplyValue: '100,000,000 GRC',
      distribution: [
        { label: 'Public Sale (ICO)', percentage: '40%', amount: '40M GRC', color: 'bg-green-500' },
        { label: 'Ecological Reserve', percentage: '25%', amount: '25M GRC', color: 'bg-green-600' },
        { label: 'Team & Advisors', percentage: '15%', amount: '15M GRC', color: 'bg-green-700' },
        { label: 'Staking & Rewards', percentage: '10%', amount: '10M GRC', color: 'bg-green-800' },
        { label: 'Liquidity & Exchanges', percentage: '10%', amount: '10M GRC', color: 'bg-green-900' },
      ],
      priceInfo: {
        initialPrice: 'Initial Price',
        initialPriceValue: '1 GRC = 1€',
        hardCap: 'Hard Cap',
        hardCapValue: '100M€',
      },
    },
  };

  const t = content[language];

  return (
    <section id="tokenomics" className="relative py-20 bg-muted/30">
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

        <div className="max-w-6xl mx-auto">
          {/* Total Supply */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-2xl px-12 py-8">
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {t.totalSupply}
              </div>
              <div className="text-5xl font-black text-primary">{t.totalSupplyValue}</div>
            </div>
          </div>

          {/* Distribution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.distribution.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 ${item.color} rounded-lg`}></div>
                  <div className="text-3xl font-black text-primary">{item.percentage}</div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.amount}</p>
              </div>
            ))}
          </div>

          {/* Price Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card border-2 border-primary rounded-xl p-8 text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {t.priceInfo.initialPrice}
              </div>
              <div className="text-3xl font-black text-primary">
                {t.priceInfo.initialPriceValue}
              </div>
            </div>

            <div className="bg-card border-2 border-primary rounded-xl p-8 text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {t.priceInfo.hardCap}
              </div>
              <div className="text-3xl font-black text-primary">{t.priceInfo.hardCapValue}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
