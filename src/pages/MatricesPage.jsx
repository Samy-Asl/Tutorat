import { SectionHeader, SectionDivider, ExerciceCard, CorrectionBlock, ExamChallenge, RappelCard } from '../components/UI.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

const exercices = [
  {
    number: 1,
    title: 'TROUVER LE PLUS GRAND ÉLÉMENT',
    description: 'Trouver la plus grande valeur d\'une matrice M de taille N × P.',
    examples: ['| 5  8  2 |\n| 9  1  7 |\n| 4  6  3 |  →  Max = 9'],
    color: 'blue',
  },
  {
    number: 2,
    title: 'SOMME DES COLONNES',
    description: 'Calculer la somme de chaque colonne d\'une matrice M de taille N × P.',
    examples: ['| 1  2  3 |\n| 4  5  6 |  →  S = [5, 7, 9]'],
    color: 'emerald',
  },
  {
    number: 3,
    title: 'MATRICE SYMÉTRIQUE',
    description: 'Vérifier si une matrice carrée M est symétrique (M[i][j] = M[j][i]).',
    examples: ['| 1  2  3 |\n| 2  5  6 |\n| 3  6  9 |  →  Symétrique ✓'],
    color: 'blue',
  },
  {
    number: 4,
    title: 'ÉCHANGE DES DIAGONALES',
    description: 'Échanger les valeurs de la diagonale principale et de la diagonale secondaire d\'une matrice carrée.',
    examples: ['Avant : [1 2 3 / 4 5 6 / 7 8 9]', 'Après  : [3 2 1 / 4 5 6 / 9 8 7]'],
    color: 'emerald',
  },
];

const corrections = [
  {
    number: 1,
    title: 'Plus grand élément',
    color: 'blue',
    hints: [
      'Initialiser max avec M[1][1] (premier élément)',
      'Parcourir toutes les cases avec deux boucles FOR',
      'Si M[i][j] > max, mettre à jour max',
      'Afficher max après le parcours complet',
    ],
    code: `max <- M[1][1] ;

For i <- 1 to N do
  For j <- 1 to P do
    If M[i][j] > max Then
      max <- M[i][j] ;
    Endif ;
  EndFor ;
EndFor ;

Write(max) ;`,
  },
  {
    number: 2,
    title: 'Somme des colonnes',
    color: 'emerald',
    hints: [
      'La boucle externe parcourt les colonnes (j)',
      'La boucle interne additionne les lignes pour cette colonne (i)',
      'Réinitialiser somme à 0 pour chaque colonne',
      'Stocker le résultat dans S[j]',
    ],
    code: `For j <- 1 to P do
  somme <- 0 ;
  For i <- 1 to N do
    somme <- somme + M[i][j] ;
  EndFor ;
  S[j] <- somme ;
  Write(S[j]) ;
EndFor ;`,
  },
  {
    number: 3,
    title: 'Matrice symétrique',
    color: 'blue',
    hints: [
      'Une matrice est symétrique si M[i][j] = M[j][i] pour tout i, j',
      'La diagonale (i = j) ne change jamais — pas besoin de la tester',
      'Commencer j à i+1 pour ne tester que la moitié supérieure',
      'Une seule différence suffit pour conclure "non symétrique"',
    ],
    code: `sym <- Vrai ;

For i <- 1 to N do
  For j <- i + 1 to N do
    If M[i][j] <> M[j][i] Then
      sym <- Faux ;
    Endif ;
  EndFor ;
EndFor ;

If sym = Vrai Then
  Write("Symétrique") ;
Else
  Write("Non symétrique") ;
Endif ;`,
  },
  {
    number: 4,
    title: 'Échange des diagonales',
    color: 'emerald',
    hints: [
      'Diagonale principale : M[i][i]',
      'Diagonale secondaire : M[i][N+1-i]',
      'Utiliser une variable temp avant tout échange',
      'Une seule boucle FOR suffit (parcourir les lignes)',
    ],
    code: `For i <- 1 to N do
  temp <- M[i][i] ;
  M[i][i] <- M[i][N+1-i] ;
  M[i][N+1-i] <- temp ;
EndFor ;`,
  },
];

const examChallenge = {
  title: 'Transposition d\'une matrice',
  description: 'Écrire un algorithme qui calcule la transposée d\'une matrice M de taille N × P. Dans la matrice transposée, les lignes deviennent des colonnes et les colonnes deviennent des lignes.',
  hint: 'La valeur M[i][j] doit se retrouver en position T[j][i] dans la matrice transposée. La taille N×P devient P×N.',
  structure: `For i <- 1 to N do
  For j <- 1 to P do
    T[?][?] <- M[?][?] ;
  EndFor ;
EndFor ;`,
  examples: [
    { input: 'Matrice initiale (2×3)', output: '| 1  2  3 |\n| 4  5  6 |' },
    { input: 'Résultat transposé (3×2)', output: '| 1  4 |\n| 2  5 |\n| 3  6 |' },
    { input: 'Observation', output: 'M[1][2] = 2  →  T[2][1] = 2' },
  ],
};

const examCode = `Algorithm Transposee;

Var
  entier : N, P, i, j ;
  M : Array[100][100] of Integer ;
  T : Array[100][100] of Integer ;

Begin

  Read(N) ;
  Read(P) ;

  For i <- 1 to N do
    For j <- 1 to P do
      Read(M[i][j]) ;
    EndFor ;
  EndFor ;

  For i <- 1 to N do
    For j <- 1 to P do
      T[j][i] <- M[i][j] ;
    EndFor ;
  EndFor ;

  Write("Matrice transposee :") ;

  For i <- 1 to P do
    For j <- 1 to N do
      Write(T[i][j]) ;
    EndFor ;
  EndFor ;

End.`;

export default function MatricesPage() {
  const mat = [[5, 8, 2], [9, 1, 7], [4, 6, 3]];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-xl">🔢</div>
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Chapitre 03</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">Matrices 2D</h1>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          Une matrice est un tableau à deux dimensions : elle possède des lignes et des colonnes. Chaque case est identifiée par deux indices M[i][j].
        </p>
      </div>

      {/* Rappel */}
      <SectionHeader badge="Rappel essentiel" badgeColor="slate" title="Structure d'une matrice 2D" />

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <RappelCard color="blue" title="Idée essentielle">
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4">
            <p>→ Un tableau à 2 dimensions : lignes × colonnes</p>
            <p>→ <code className="code-font text-blue-600 dark:text-blue-400">M[i][j]</code> : i = ligne, j = colonne</p>
            <p>→ Double boucle FOR pour parcourir</p>
            <p>→ i varie les lignes, j varie les colonnes</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 p-3">
            <p className="text-xs text-slate-500 mb-1">Exemple : M[1][2] = 7</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">→ ligne 1, colonne 2, valeur 7</p>
          </div>
        </RappelCard>

        <RappelCard color="emerald" title="Visualisation 3×3">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 p-3 mb-3">
            <div className="grid grid-cols-3 gap-1 text-center text-xs font-bold text-slate-400 mb-1">
              {['col 1','col 2','col 3'].map(l => <div key={l}>{l}</div>)}
            </div>
            {mat.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-1 mb-1">
                {row.map((n, j) => (
                  <div key={j} className="py-2 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-center font-black text-sm text-slate-700 dark:text-slate-200">
                    {n}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">i = ligne (1→3), j = colonne (1→3)</p>
        </RappelCard>
      </div>

      <SectionDivider />

      {/* Exercices */}
      <SectionHeader badge="Exercices essentiels" title="Série 3 — Matrices 2D" subtitle="Pense bien aux deux indices avant d'écrire la boucle." />
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {exercices.map((ex) => <ExerciceCard key={ex.number} {...ex} />)}
      </div>

      <SectionDivider />

      {/* Corrections */}
      <SectionHeader badge="Corrections" badgeColor="emerald" title="Méthode & Pseudo-code" />
      <div className="space-y-5">
        {corrections.map((cor) => <CorrectionBlock key={cor.number} {...cor} />)}
      </div>

      <SectionDivider />

      {/* Exam */}
      <SectionHeader badge="Mini défi" badgeColor="red" title="Exercice type examen" subtitle="Transposition — un grand classique." />
      <ExamChallenge {...examChallenge} />

      <SectionDivider />

      {/* Exam correction */}
      <SectionHeader badge="Correction du défi" badgeColor="slate" title="Transposition — La solution" />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-5">
          <h3 className="font-black text-emerald-700 dark:text-emerald-300 mb-4">Points clés</h3>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>→ M[i][j] devient T[j][i] — les indices s'inversent</p>
            <p>→ La taille N×P devient P×N</p>
            <p>→ Deux boucles imbriquées suffisent</p>
            <p>→ Ne pas modifier M pendant le calcul</p>
          </div>
          <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 p-3">
            <p className="text-xs text-slate-500 mb-1">Vérification :</p>
            <p className="code-font text-sm text-slate-700 dark:text-slate-300">M[1][2] = 2 → T[2][1] = 2 ✓</p>
          </div>
        </div>
        <CodeBlock code={examCode} title="Transposee.algo" />
      </div>

    </div>
  );
}
