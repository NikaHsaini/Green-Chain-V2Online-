import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface StakingSectionProps {
  language: 'fr' | 'en';
}

export default function StakingSection({ language }: StakingSectionProps) {
  const [stakingAmount, setStakingAmount] = useState(1000);
  const [stakingPeriod, setStakingPeriod] = useState(12);

  const content = {
    fr: {
      sectionNumber: '05',
      title: 'STAKING GRC',
      subtitle: 'Gagnez des Récompenses en Stakant vos Tokens',
      calculator: 'Calculateur de Staking',
      amount: 'Montant à Staker',
      period: 'Période de Staking',
      months: 'mois',
      estimatedRewards: 'Récompenses Estimées',
      apy: 'APY',
      startStaking: 'Commencer le Staking',
      benefits: [
        {
          title: 'Récompenses Élevées',
          description: 'Jusqu\'à 15% APY selon la période de staking',
        },
        {
          title: 'Gouvernance DAO',
          description: 'Participez aux décisions de l\'écosystème',
        },
        {
          title: 'Sécurité Maximale',
          description: 'Smart contracts audités et sécurisés',
        },
      ],
    },
    en: {
      sectionNumber: '05',
      title: 'GRC STAKING',
      subtitle: 'Earn Rewards by Staking Your Tokens',
      calculator: 'Staking Calculator',
      amount: 'Amount to Stake',
      period: 'Staking Period',
      months: 'months',
      estimatedRewards: 'Estimated Rewards',
      apy: 'APY',
      startStaking: 'Start Staking',
      benefits: [
        {
          title: 'High Rewards',
          description: 'Up to 15% APY depending on staking period',
        },
        {
          title: 'DAO Governance',
          description: 'Participate in ecosystem decisions',
        },
        {
          title: 'Maximum Security',
          description: 'Audited and secured smart contracts',
        },
      ],
    },
  };

  const t = content[language];

  // Calculate APY based on period
  const calculateAPY = (months: number) => {
    if (months >= 12) return 15;
    if (months >= 6) return 10;
    if (months >= 3) return 7;
    return 5;
  };

  const apy = calculateAPY(stakingPeriod);
  const estimatedRewards = (stakingAmount * apy * stakingPeriod) / (100 * 12);

  return (
    <section id="staking" className="relative py-20 bg-muted/30">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-card border-2 border-primary rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">{t.calculator}</h3>

              {/* Amount Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    {t.amount}
                  </label>
                  <span className="text-2xl font-bold text-primary">{stakingAmount} GRC</span>
                </div>
                <Slider
                  value={[stakingAmount]}
                  onValueChange={(value) => setStakingAmount(value[0])}
                  min={100}
                  max={100000}
                  step={100}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>100 GRC</span>
                  <span>100,000 GRC</span>
                </div>
              </div>

              {/* Period Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    {t.period}
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {stakingPeriod} {t.months}
                  </span>
                </div>
                <Slider
                  value={[stakingPeriod]}
                  onValueChange={(value) => setStakingPeriod(value[0])}
                  min={1}
                  max={24}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 {t.months}</span>
                  <span>24 {t.months}</span>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4 mb-8">
                <div className="bg-primary/10 rounded-xl p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2">
                    {t.estimatedRewards}
                  </div>
                  <div className="text-4xl font-black text-primary">
                    {estimatedRewards.toFixed(2)} GRC
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.apy}</div>
                  <div className="text-4xl font-black text-primary">{apy}%</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full text-lg py-6">
                {t.startStaking}
              </Button>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {t.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all"
                >
                  <h4 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-base text-muted-foreground">{benefit.description}</p>
                </div>
              ))}

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {language === 'fr' ? 'Pourquoi Staker ?' : 'Why Stake?'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground">
                      {language === 'fr'
                        ? 'Revenus passifs réguliers'
                        : 'Regular passive income'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground">
                      {language === 'fr'
                        ? 'Soutien à l\'écosystème Green Chain'
                        : 'Support for Green Chain ecosystem'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground">
                      {language === 'fr'
                        ? 'Accès prioritaire aux nouveaux projets'
                        : 'Priority access to new projects'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
