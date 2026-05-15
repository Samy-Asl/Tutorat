import { SectionHeader, SectionDivider, ExerciceCard, CorrectionBlock, ExamChallenge, RappelCard, HintBox } from '../components/UI.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

const exercices = [
  {
    number: 1,
    title: 'COMPTER LES NOMBRES PAIRS',
    description: 'Écrire un algorithme qui compte le nombre de valeurs paires dans un tableau T de taille N.',
    examples: ['T = [4, 7, 2, 9, 8] → 3 valeurs paires', 'T = [1, 3, 5, 7] → 0 valeur paire'],
    color: 'blue',
  },
  {
    number: 2,
    title: 'TROUVER LES DOUBLONS',
    description: 'Écrire un algorithme qui détecte les valeurs répétées dans un tableau T de taille N.',
    examples: ['T = [4, 7, 2, 7, 9] → 7 est un doublon', 'T = [5, 1, 3, 5, 1] → 5 et 1 sont des doublons'],
    color: 'emerald',
  },
  {
    number: 3,
    title: 'TRIER UN TABLEAU',
    description: 'Écrire un algorithme qui trie un tableau T de taille N dans l\'ordre croissant.',
    examples: ['T = [7, 2, 9, 1] → [1, 2, 7, 9]', 'T = [5, 3, 8, 4] → [3, 4, 5, 8]'],
    color: 'blue',
  },
  {
    number: 4,
    title: 'DÉCALAGE CIRCULAIRE',
    description: 'Écrire un algorithme qui effectue un décalage circulaire vers la droite d\'un tableau T.',
    examples: ['T = [4, 7, 2, 9] → [9, 4, 7, 2]', 'T = [1, 5, 8, 3] → [3, 1, 5, 8]'],
    color: 'emerald',
  },
];

const corrections = [
  {
    number: 1,
    title: 'Compter les nombres pairs',
    color: 'blue',
    hints: [
      'Parcourir tout le tableau avec une boucle FOR',
      'Un nombre pair vérifie : T[i] MOD 2 = 0',
      'Initialiser le compteur à 0 avant la boucle',
      'Incrémenter le compteur à chaque valeur paire',
    ],
    code: `Algorithm CompterPairs;

Var
  entier : N, i, cpt ;
  T : Array[100] of Integer ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  cpt <- 0 ;

  For i <- 1 to N do
    If T[i] MOD 2 = 0 Then
      cpt <- cpt + 1 ;
    Endif ;
  EndFor ;

  Write(cpt) ;

End.`,
  },
  {
    number: 2,
    title: 'Trouver les doublons',
    color: 'emerald',
    hints: [
      'Une seule boucle ne suffit pas — il faut comparer chaque élément avec les suivants',
      'Utiliser une boucle imbriquée : i de 1 à N-1, j de i+1 à N',
      'Comparer T[i] avec T[j]',
      'Si T[i] = T[j], on a trouvé un doublon',
    ],
    code: `Algorithm TrouverDoublons;

Var
  entier : N, i, j ;
  T : Array[100] of Integer ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  For i <- 1 to N-1 do
    For j <- i + 1 to N do
      If T[i] = T[j] Then
        Write(T[i]) ;
      Endif ;
    EndFor ;
  EndFor ;

End.`,
  },
  {
    number: 3,
    title: 'Trier un tableau',
    color: 'slate',
    hints: [
      'Comparer les éléments deux à deux',
      'Échanger les valeurs si T[i] > T[j]',
      'Utiliser une variable temporaire temp avant tout échange',
      'Répéter le parcours plusieurs fois (double boucle)',
    ],
    code: `Algorithm TrierTableau;

Var
  entier : N, i, j, temp ;
  T : Array[100] of Integer ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  For i <- 1 to N-1 do
    For j <- i + 1 to N do
      If T[i] > T[j] Then
        temp <- T[i] ;
        T[i] <- T[j] ;
        T[j] <- temp ;
      Endif ;
    EndFor ;
  EndFor ;

  For i <- 1 to N do
    Write(T[i]) ;
  EndFor ;

End.`,
  },
  {
    number: 4,
    title: 'Décalage circulaire à droite',
    color: 'blue',
    hints: [
      'Sauvegarder le dernier élément T[N] avant de déplacer',
      'Décaler de droite vers gauche : T[i] ← T[i-1]',
      'Utiliser une boucle downto (de N-1 à 1)',
      'Placer la valeur sauvegardée en T[1] à la fin',
    ],
    code: `Algorithm DecalageDroite;

Var
  entier : N, i, derniere ;
  T : Array[100] of Integer ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  derniere <- T[N] ;

  For i <- N downto 2 do
    T[i] <- T[i-1] ;
  EndFor ;

  T[1] <- derniere ;

  For i <- 1 to N do
    Write(T[i]) ;
  EndFor ;

End.`,
  },
];

const examChallenge = {
  title: 'Trouver 3 valeurs dont la somme vaut X',
  description: 'Écrire un algorithme qui cherche dans un tableau T de taille N trois valeurs dont la somme est égale à une valeur X donnée. Les trois valeurs doivent provenir de cases différentes.',
  hint: 'Une seule boucle ne suffit pas. Il faut tester toutes les combinaisons possibles de trois indices différents.',
  structure: `For i <- 1 to N-2 do
  For j <- i+1 to N-1 do
    For k <- j+1 to N do
      If T[i] + T[j] + T[k] = X Then
        ...
      Endif ;
    EndFor ;
  EndFor ;
EndFor ;`,
  examples: [
    { input: 'T = [2, 7, 11, 15, 4], X = 22', output: '7 + 11 + 4 = 22 ✓' },
    { input: 'T = [1, 5, 9, 3, 8], X = 17', output: '5 + 9 + 3 = 17 ✓' },
    { input: 'T = [4, 2, 10, 6], X = 30', output: 'Aucune combinaison' },
  ],
};

const examCode = `Algorithm SommeX;

Var
  entier : N, X, i, j, k ;
  T : Array[100] of Integer ;
  booleen : trouve ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  Read(X) ;

  trouve <- Faux ;

  For i <- 1 to N-2 do
    For j <- i + 1 to N-1 do
      For k <- j + 1 to N do
        If T[i] + T[j] + T[k] = X Then
          Write(T[i], T[j], T[k]) ;
          trouve <- Vrai ;
        Endif ;
      EndFor ;
    EndFor ;
  EndFor ;

  If trouve = Faux Then
    Write("Aucune combinaison trouvée") ;
  Endif ;

End.`;

export default function TableauxPage() {
  const visuel = [5, 8, 2, 9, 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl">📋</div>
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Chapitre 02</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">Tableaux 1D</h1>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          Un tableau permet de stocker plusieurs valeurs du même type dans une seule structure. Chaque valeur est accessible via son indice.
        </p>
      </div>

      {/* Rappel */}
      <SectionHeader
        badge="Rappel essentiel"
        badgeColor="slate"
        title="Structure d'un tableau 1D"
        subtitle="Bien comprendre avant de manipuler."
      />

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <RappelCard color="blue" title="Idée essentielle">
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4">
            <p>→ Stocker plusieurs valeurs du même type</p>
            <p>→ Chaque case possède un indice unique</p>
            <p>→ <code className="code-font text-blue-700 dark:text-blue-300">T[i]</code> = valeur à la position i</p>
            <p>→ Les indices commencent souvent à 1 ou 0</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 p-3">
            <p className="text-xs text-slate-500 mb-1">Exemple : T[1] = 5</p>
            <p className="code-font text-blue-700 dark:text-blue-300 font-bold">→ 1 est l'indice, 5 est la valeur</p>
          </div>
        </RappelCard>

        <RappelCard color="emerald" title="Visualisation">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 p-3 mb-3">
            <div className="grid grid-cols-5 gap-1 text-center text-xs font-bold text-slate-400 mb-1">
              {[1,2,3,4,5].map(n => <div key={n}>T[{n}]</div>)}
            </div>
            <div className="grid grid-cols-5 gap-1">
              {visuel.map((n, i) => (
                <div key={i} className="py-2 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-center font-black text-slate-700 dark:text-slate-200 text-sm">
                  {n}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <p>→ T[1] = 5, T[2] = 8, T[3] = 2...</p>
            <p>→ FOR est idéale pour parcourir</p>
          </div>
        </RappelCard>
      </div>

      <div className="mb-12">
        <HintBox color="blue">
          <span className="font-bold">Parcours standard : </span>
          <code className="code-font">For i &lt;- 1 to N do ... EndFor</code>
          — toujours initialiser les accumulateurs avant la boucle.
        </HintBox>
      </div>

      <SectionDivider />

      {/* Exercices */}
      <SectionHeader
        badge="Exercices essentiels"
        title="Série 2 — Tableaux 1D"
        subtitle="Note : les tableaux sont de taille maximale N. Essaie avant de voir les corrections."
      />

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {exercices.map((ex) => <ExerciceCard key={ex.number} {...ex} />)}
      </div>

      <SectionDivider />

      {/* Corrections */}
      <SectionHeader
        badge="Corrections"
        badgeColor="emerald"
        title="Méthode & Pseudo-code"
      />

      <div className="space-y-5">
        {corrections.map((cor) => <CorrectionBlock key={cor.number} {...cor} />)}
      </div>

      <SectionDivider />

      {/* Exam */}
      <SectionHeader badge="Mini défi" badgeColor="red" title="Exercice type examen" subtitle="Triple boucle — un classique des examens." />
      <ExamChallenge {...examChallenge} />

      <SectionDivider />

      {/* Exam correction */}
      <SectionHeader badge="Correction du défi" badgeColor="slate" title="Somme X — La solution" />

      <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-2xl p-5">
          <h3 className="font-black text-blue-700 dark:text-blue-300 mb-4">Points clés</h3>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>→ Triple boucle imbriquée : i, j, k</p>
            <p>→ j commence toujours à i+1 (éviter les doublons)</p>
            <p>→ k commence toujours à j+1</p>
            <p>→ Une variable booléenne <code className="code-font text-blue-600 dark:text-blue-400">trouve</code> permet d'afficher "Aucune" si rien n'est trouvé</p>
          </div>
          <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 p-3">
            <p className="text-xs font-bold text-slate-500 mb-1">Astuce :</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">Si i = j ou j = k, on comparerait la même case — d'où l'importance des bornes.</p>
          </div>
        </div>
        <CodeBlock code={examCode} title="SommeX.algo" />
      </div>

    </div>
  );
}
