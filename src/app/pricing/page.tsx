'use client'
import { FaCheck, FaFlask, FaChartBar, FaRocket } from 'react-icons/fa'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "99 MAD",
      period: "/mois",
      description: "Parfait pour les étudiants et petits laboratoires",
      icon: <FaFlask className="text-blue-500 text-2xl" />,
      features: [
        "5 rapports/mois",
        "Analyse basique",
        "Modèles standards",
        "Support par email",
        "Stockage 1GB"
      ],
      featured: false,
      cta: "Commencer"
    },
    {
      name: "Professionnel",
      price: "499 MAD",
      period: "/mois",
      description: "Solution complète pour les laboratoires professionnels",
      icon: <FaChartBar className="text-purple-500 text-2xl" />,
      features: [
        "20 rapports/mois",
        "Analyse avancée",
        "Modèles premium",
        "Support prioritaire",
        "Stockage 10GB",
        "Export PDF/Excel",
        "Collaboration (3 users)"
      ],
      featured: true,
      cta: "Essai gratuit"
    },
    {
      name: "Entreprise",
      price: "1,499 MAD",
      period: "/mois",
      description: "Solution sur mesure pour les grands laboratoires",
      icon: <FaRocket className="text-orange-500 text-2xl" />,
      features: [
        "Rapports illimités",
        "Analyse premium + IA",
        "Modèles personnalisés",
        "Support 24/7",
        "Stockage 100GB",
        "API intégration",
        "Collaboration illimitée",
        "Formation dédiée"
      ],
      featured: false,
      cta: "Contactez-nous"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Tarifs adaptés à vos besoins
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Choisissez loffre qui correspond à votre laboratoire. Sans engagement, annulation à tout moment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                plan.featured ? "ring-2 ring-purple-600" : "ring-1 ring-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 transform translate-x-2 -translate-y-2 rounded-bl-lg">
                  Plus populaire
                </div>
              )}
              <div className="p-8 bg-white">
                <div className="flex items-center mb-4">
                  {plan.icon}
                  <h2 className="ml-3 text-2xl font-bold text-gray-900">{plan.name}</h2>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-lg font-medium text-gray-500">{plan.period}</span>
                </div>
                <p className="mb-8 text-gray-500">{plan.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === "Entreprise" ? "/contact" : "/signup"}
                  className={`block w-full py-3 px-6 text-center rounded-md font-medium ${
                    plan.featured
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 bg-white shadow rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Besoin dune solution personnalisée ?</h3>
          <p className="text-gray-600 mb-6">
            Nous proposons des tarifs spéciaux pour les universités, hôpitaux et laboratoires gouvernementaux.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-md"
          >
            Demander un devis
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Questions fréquentes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Puis-je changer de plan plus tard ?</h4>
              <p className="text-gray-600">
                Oui, vous pouvez améliorer ou réduire votre abonnement à tout moment. Les changements prennent effet immédiatement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Y a-t-il des frais cachés ?</h4>
              <p className="text-gray-600">
                Non, tous nos prix sont TTC. Les seuls frais supplémentaires seraient pour des services personnalisés en option.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Quels moyens de paiement acceptez-vous ?</h4>
              <p className="text-gray-600">
                Carte bancaire, virement bancaire, et pour les entreprises marocaines, nous acceptons également les chèques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">Offrez-vous des réductions pour les étudiants ?</h4>
              <p className="text-gray-600">
                Oui, les étudiants marocains bénéficient de 50% de réduction sur le plan Starter avec une preuve d inscription valide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}