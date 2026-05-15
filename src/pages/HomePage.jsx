const chapters = [
  {
    id: 'boucles',
    icon: '🔄',
    number: '01',
    title: 'Boucles & Conditions',
    description: 'FOR, WHILE, conditions imbriquées — les mécanismes fondamentaux de tout algorithme.',
    topics: ['Factoriel, Puissance', 'Nombres parfaits', 'Conversion décimal → binaire'],
    color: 'blue',
  },
  {
    id: 'tableaux',
    icon: '📋',
    number: '02',
    title: 'Tableaux 1D',
    description: 'Stocker, parcourir et manipuler des séquences de données efficacement.',
    topics: ['Compter, chercher, trier', 'Doublons & décalage', 'Triple boucle imbriquée'],
    color: 'emerald',
  },
  {
    id: 'matrices',
    icon: '🔢',
    number: '03',
    title: 'Matrices 2D',
    description: 'Données à deux dimensions : lignes, colonnes, diagonales et opérations matricielles.',
    topics: ['Parcours & recherche', 'Symétrie & diagonale', 'Transposition'],
    color: 'blue',
  },
  {
    id: 'fonctions',
    icon: '🧩',
    number: '04',
    title: 'Fonctions & Procédures',
    description: 'Découper un programme en blocs réutilisables — la clé de la lisibilité.',
    topics: ['Fonctions vs Procédures', 'Paramètres I / IO', 'Analyse de tableau'],
    color: 'emerald',
  },
  {
    id: 'pieges',
    icon: '⚠️',
    number: '05',
    title: 'Pièges Classiques',
    description: 'Les erreurs les plus fréquentes en algorithmique — apprendre à les éviter.',
    topics: ['Compteurs non initialisés', 'Boucles infinies', 'Indices et Return oubliés'],
    color: 'red',
  },
];

const steps = [
  { icon: '📖', title: 'Exercices essentiels', desc: 'Entraîne-toi sur les mécanismes de base.' },
  { icon: '🔍', title: 'Méthode & Correction', desc: 'Comprends la logique derrière chaque solution.' },
  { icon: '⚡', title: 'Mini défi examen', desc: 'Résous un problème complet, niveau réel.' },
  { icon: '✅', title: 'Correction détaillée', desc: 'Vérifie ton raisonnement pas à pas.' },
];

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold px-4 py-2 rounded-full mb-6">
          L1 Math-Informatique · Algorithmique
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-5">
          Tutorat d'Algorithmique
          <span className="block text-blue-600 dark:text-blue-400 mt-1">Maîtrise des bases</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Comprendre un énoncé · Exploiter les indispensables du S1 · Réussir l'examen
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate('boucles')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Commencer le tutorat →
          </button>
          <button
            onClick={() => onNavigate('pieges')}
            className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors text-sm"
          >
            Pièges classiques ⚠️
          </button>
        </div>
      </div>

      {/* Method steps */}
      <div className="mb-16">
        <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center mb-6">
          Comment fonctionne ce tutorat ?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 text-center">
              <div className="text-2xl mb-3">{s.icon}</div>
              <p className="font-black text-slate-900 dark:text-white text-sm mb-1">{s.title}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters grid */}
      <div>
        <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">
          Chapitres du tutorat
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {chapters.map((ch) => {
            const bg = ch.color === 'blue'
              ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700'
              : ch.color === 'emerald'
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-700'
              : 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900 hover:border-red-300 dark:hover:border-red-700';
            const num = ch.color === 'blue' ? 'text-blue-300 dark:text-blue-700'
              : ch.color === 'emerald' ? 'text-emerald-300 dark:text-emerald-700'
              : 'text-red-300 dark:text-red-700';
            const title = ch.color === 'blue' ? 'text-blue-700 dark:text-blue-300'
              : ch.color === 'emerald' ? 'text-emerald-700 dark:text-emerald-300'
              : 'text-red-700 dark:text-red-300';
            return (
              <button
                key={ch.id}
                onClick={() => onNavigate(ch.id)}
                className={`rounded-2xl border p-6 text-left transition-all duration-200 group ${bg}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ch.icon}</span>
                    <div>
                      <span className={`text-xs font-black ${num}`}>{ch.number}</span>
                      <h3 className={`font-black text-base ${title}`}>{ch.title}</h3>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:translate-x-1 transition-transform text-lg">→</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{ch.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ch.topics.map((t, i) => (
                    <span key={i} className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
        <p className="text-slate-400 dark:text-slate-600 text-sm">
          Réalisé par <span className="font-semibold text-slate-600 dark:text-slate-400">Asselah Samy</span> · samy.asselah@esst-sup.com
        </p>
      </div>
    </div>
  );
}
