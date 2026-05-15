import { SectionHeader, SectionDivider, ExerciceCard, CorrectionBlock, ExamChallenge } from '../components/UI.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

const exercices = [
  {
    number: 1,
    title: 'FACTORIEL',
    description: 'Calculer le factoriel d\'un entier positif N.',
    examples: ['N = 5 → 120', 'N = 4 → 24'],
    color: 'blue',
  },
  {
    number: 2,
    title: 'PUISSANCE',
    description: 'Calculer a puissance n grâce à une multiplication répétée.',
    examples: ['2^5 → 32', '3^4 → 81'],
    color: 'emerald',
  },
  {
    number: 3,
    title: 'NOMBRE PARFAIT',
    description: 'Vérifier si un entier est égal à la somme de ses diviseurs propres.',
    examples: ['6 → parfait  (1 + 2 + 3 = 6)', '8 → non parfait  (1 + 2 + 4 ≠ 8)'],
    color: 'blue',
  },
  {
    number: 4,
    title: 'INVERSION',
    description: 'Inverser les chiffres d\'un entier positif.',
    examples: ['1234 → 4321', '5608 → 8065'],
    color: 'emerald',
  },
];

const corrections = [
  {
    number: 1,
    title: 'Factoriel',
    color: 'emerald',
    hints: [
      'Le résultat commence à 1',
      'Multiplication répétée de 1 à N',
      'Une boucle FOR est parfaitement adaptée',
      'Cas particulier : 0! = 1',
    ],
    code: `Algorithm Factoriel;

Var
  entier : N, i, fact ;

Begin

  Read(N) ;

  fact <- 1 ;

  For i <- 1 to N do
    fact <- fact * i ;
  EndFor ;

  Write(fact) ;

End.`,
  },
  {
    number: 2,
    title: 'Puissance',
    color: 'blue',
    hints: [
      'Le résultat commence à 1',
      'Conserver la valeur de base, ne pas la modifier',
      'Utiliser une variable intermédiaire res',
      'Multiplier res par a, n fois',
    ],
    code: `Algorithm Puissance;

Var
  entier : a, n, i, res ;

Begin

  Read(a) ;
  Read(n) ;

  res <- 1 ;

  For i <- 1 to n do
    res <- res * a ;
  EndFor ;

  Write(res) ;

End.`,
  },
  {
    number: 3,
    title: 'Nombre Parfait',
    color: 'emerald',
    hints: [
      'Additionner les diviseurs propres (sauf N lui-même)',
      'Un diviseur vérifie : N MOD i = 0',
      'Parcourir de 1 à N-1 avec une boucle FOR',
      'Comparer la somme finale avec N',
    ],
    code: `Algorithm NombreParfait;

Var
  entier : N, i, somme ;

Begin

  Read(N) ;

  somme <- 0 ;

  For i <- 1 to N-1 do
    If N MOD i = 0 Then
      somme <- somme + i ;
    Endif ;
  EndFor ;

  If somme = N Then
    Write("Parfait") ;
  Else
    Write("Non parfait") ;
  Endif ;

End.`,
  },
  {
    number: 4,
    title: 'Inversion',
    color: 'blue',
    hints: [
      'Extraire le dernier chiffre : N MOD 10',
      'Supprimer le dernier chiffre : N DIV 10',
      'Construire l\'inversé progressivement',
      'Utiliser une boucle WHILE (on ne connaît pas le nombre de chiffres)',
    ],
    code: `Algorithm Inversion;

Var
  entier : N, inverse, chiffre ;

Begin

  Read(N) ;

  inverse <- 0 ;

  While N <> 0 do
    chiffre <- N MOD 10 ;
    inverse <- inverse * 10 + chiffre ;
    N <- N DIV 10 ;
  Done ;

  Write(inverse) ;

End.`,
  },
];

const examChallenge = {
  title: 'Conversion Décimal → Binaire',
  description: 'Écrire un algorithme qui lit un entier positif N et affiche son écriture en base 2 (binaire). Le résultat doit être construit progressivement et affiché à la fin.',
  hint: 'Réfléchis au principe de la division répétée par 2. Le reste de chaque division donne un chiffre binaire, mais dans quel ordre ?',
  structure: `While N <> 0 do
  reste <- N MOD 2 ;
  ...construire le résultat...
  N <- N DIV 2 ;
Done ;`,
  examples: [
    { input: 'N = 13', output: '1101' },
    { input: 'N = 25', output: '11001' },
    { input: 'N = 8', output: '1000' },
  ],
};

const examCorrection = {
  hints: [
    'MOD 2 récupère le dernier chiffre binaire',
    'DIV 2 réduit progressivement le nombre',
    'Les chiffres sont obtenus dans l\'ordre inverse → construire avec p (puissance de 10)',
    'Utiliser une variable p qui commence à 1 et multiplie par 10 à chaque tour',
  ],
  code: `Algorithm DecimalVersBinaire;

Var
  entier : N, binaire, reste, p ;

Begin

  Read(N) ;

  binaire <- 0 ;
  p <- 1 ;

  While N <> 0 do

    reste <- N MOD 2 ;

    binaire <- binaire + reste * p ;

    p <- p * 10 ;

    N <- N DIV 2 ;

  Done ;

  Write(binaire) ;

End.`,
};

export default function BouclesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-xl">🔄</div>
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Chapitre 01</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">Boucles & Conditions</h1>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          Les boucles et conditions sont les fondements de tout algorithme. Maîtriser FOR, WHILE et les structures conditionnelles, c'est pouvoir résoudre 80% des exercices.
        </p>
      </div>

      {/* Section 1: Exercices */}
      <SectionHeader
        badge="Exercices essentiels"
        title="Série 1 — Boucles & Conditions"
        subtitle="Essaie de résoudre chaque exercice avant de regarder les corrections."
      />

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {exercices.map((ex) => (
          <ExerciceCard key={ex.number} {...ex} />
        ))}
      </div>

      <SectionDivider />

      {/* Section 2: Corrections */}
      <SectionHeader
        badge="Corrections"
        badgeColor="emerald"
        title="Méthode & Pseudo-code"
        subtitle="Comprends la logique avant de mémoriser le code."
      />

      <div className="space-y-5">
        {corrections.map((cor) => (
          <CorrectionBlock key={cor.number} {...cor} />
        ))}
      </div>

      <SectionDivider />

      {/* Section 3: Exam challenge */}
      <SectionHeader
        badge="Mini défi"
        badgeColor="red"
        title="Exercice type examen"
        subtitle="Un problème complet qui combine plusieurs notions."
      />

      <ExamChallenge {...examChallenge} />

      <SectionDivider />

      {/* Section 4: Exam correction */}
      <SectionHeader
        badge="Correction du défi"
        badgeColor="slate"
        title="Décimal → Binaire : la solution"
        subtitle="Comprendre la logique de construction du résultat."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-5 space-y-3">
          {examCorrection.hints.map((h, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500 text-xs font-black mt-0.5">→</span>
              <span className="leading-relaxed">{h}</span>
            </div>
          ))}
          <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 p-4">
            <p className="text-xs font-bold text-slate-500 mb-2">Exemple :</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">13 → 1 → 0 → 1 → 1</p>
            <p className="text-emerald-700 dark:text-emerald-300 font-black text-2xl mt-2">1101</p>
          </div>
        </div>
        <CodeBlock code={examCorrection.code} title="DecimalVersBinaire.algo" />
      </div>

    </div>
  );
}
