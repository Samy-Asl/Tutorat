import { SectionHeader, SectionDivider, ExerciceCard, CorrectionBlock, ExamChallenge, RappelCard } from '../components/UI.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

const exercices = [
  {
    number: 1,
    title: 'VALEUR ABSOLUE',
    description: 'Écrire une fonction ValeurAbsolue qui reçoit un entier x et retourne sa valeur absolue.',
    examples: ['x = -7 → 7', 'x = 5 → 5'],
    color: 'blue',
  },
  {
    number: 2,
    title: 'FONCTION MAXIMUM',
    description: 'Écrire une fonction Maximum qui retourne la plus grande valeur entre deux entiers.',
    examples: ['a = 4, b = 9 → 9', 'a = 15, b = 2 → 15'],
    color: 'emerald',
  },
  {
    number: 3,
    title: 'AFFICHER UN TABLEAU',
    description: 'Écrire une procédure AfficherTableau qui affiche tous les éléments d\'un tableau T de taille N.',
    examples: ['T = [4, 7, 2, 9] → 4  7  2  9'],
    color: 'blue',
  },
  {
    number: 4,
    title: 'SOMME D\'UN TABLEAU',
    description: 'Écrire une fonction SommeTableau qui retourne la somme des éléments d\'un tableau T de taille N.',
    examples: ['T = [3, 5, 2, 8] → 18'],
    color: 'emerald',
  },
];

const corrections = [
  {
    number: 1,
    title: 'Valeur absolue',
    color: 'blue',
    hints: [
      'Si x < 0, retourner -x',
      'Sinon retourner x directement',
      'Une fonction retourne obligatoirement une valeur via Return',
    ],
    code: `Function ValeurAbsolue(x : entier) : entier ;

Begin

  If x < 0 Then
    Return -x ;
  Else
    Return x ;
  Endif ;

End.`,
  },
  {
    number: 2,
    title: 'Maximum entre deux entiers',
    color: 'emerald',
    hints: [
      'Comparer les deux valeurs',
      'Retourner la plus grande',
      'Une simple condition suffit',
    ],
    code: `Function Maximum(a, b : entier) : entier ;

Begin

  If a > b Then
    Return a ;
  Else
    Return b ;
  Endif ;

End.`,
  },
  {
    number: 3,
    title: 'Afficher un tableau (procédure)',
    color: 'slate',
    hints: [
      'Aucune valeur n\'est retournée → utiliser une procédure',
      'Parcourir le tableau avec une boucle FOR',
      'Afficher chaque élément avec Write',
    ],
    code: `Procedure AfficherTableau(T : Array ; N : entier) ;

Var
  entier : i ;

Begin

  For i <- 1 to N do
    Write(T[i]) ;
  EndFor ;

End.`,
  },
  {
    number: 4,
    title: 'Somme d\'un tableau (fonction)',
    color: 'blue',
    hints: [
      'Initialiser un accumulateur somme à 0',
      'Additionner chaque T[i] avec une boucle FOR',
      'Retourner la somme finale via Return',
    ],
    code: `Function SommeTableau(T : Array ; N : entier) : entier ;

Var
  entier : i, somme ;

Begin

  somme <- 0 ;

  For i <- 1 to N do
    somme <- somme + T[i] ;
  EndFor ;

  Return somme ;

End.`,
  },
];

const examChallenge = {
  title: 'Analyse des nombres premiers d\'un tableau',
  description: 'Écrire un programme complet qui, à partir d\'un tableau T, extrait les nombres premiers dans un tableau P, puis calcule leur moyenne. Contrainte : utiliser une fonction EstPremier(x), une procédure ExtrairePremiers(...) et une fonction Moyenne(...).',
  hint: 'Décompose le problème : d\'abord décider si un nombre est premier (EstPremier), puis construire P (ExtrairePremiers), puis calculer la moyenne (Moyenne).',
  examples: [
    { input: 'T = [4, 7, 11, 8, 13, 10, 5]', output: 'P = [7, 11, 13, 5]' },
    { input: 'Moyenne', output: '(7+11+13+5) / 4 = 9' },
    { input: 'Conseil', output: 'Identifier entrées/sorties de chaque bloc avant de coder' },
  ],
};

const code1 = `Function EstPremier(x : entier) : booleen ;

Var
  entier : i ;

Begin

  If x <= 1 Then
    Return Faux ;
  Endif ;

  For i <- 2 to x-1 do
    If x MOD i = 0 Then
      Return Faux ;
    Endif ;
  EndFor ;

  Return Vrai ;

End.`;

const code2 = `Procedure ExtrairePremiers(T, N, P, NP) ;

Var
  entier : i ;

Begin

  NP <- 0 ;

  For i <- 1 to N do
    If EstPremier(T[i]) = Vrai Then
      NP <- NP + 1 ;
      P[NP] <- T[i] ;
    Endif ;
  EndFor ;

End.`;

const code3 = `Function Moyenne(T : Array ; N : entier) : reel ;

Var
  entier : i ;
  reel : somme ;

Begin

  somme <- 0 ;

  For i <- 1 to N do
    somme <- somme + T[i] ;
  EndFor ;

  Return somme / N ;

End.`;

const codePrincipal = `Algorithm AnalysePremiers;

Var
  entier : N, NP, i ;
  reel : moy ;
  T, P : Array[50] of Integer ;

Begin

  Read(N) ;

  For i <- 1 to N do
    Read(T[i]) ;
  EndFor ;

  ExtrairePremiers(T, N, P, NP) ;

  If NP > 0 Then
    moy <- Moyenne(P, NP) ;
    For i <- 1 to NP do
      Write(P[i]) ;
    EndFor ;
    Write("Moyenne =", moy) ;
  Else
    Write("Aucun nombre premier") ;
  Endif ;

End.`;

export default function FonctionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl">🧩</div>
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Chapitre 04</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">Fonctions & Procédures</h1>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          Découper un programme en blocs réutilisables est la clé d'un algorithme lisible et bien structuré. Fonction vs Procédure : une distinction fondamentale à maîtriser.
        </p>
      </div>

      {/* Rappel */}
      <SectionHeader badge="Rappel essentiel" badgeColor="slate" title="Fonction vs Procédure" />

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <RappelCard color="blue" title="Fonction">
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4">
            <p>→ Retourne une valeur (obligatoire)</p>
            <p>→ Utilisée dans un calcul ou une condition</p>
            <p>→ Possède un <code className="code-font text-blue-600 dark:text-blue-400">Return</code></p>
            <p>→ Appelée dans une expression</p>
          </div>
          <pre className="bg-white dark:bg-slate-800 border border-blue-100 dark:border-blue-800 rounded-xl p-3 text-xs text-slate-700 dark:text-slate-300 code-font leading-5">
{`Function Somme(a, b) : entier ;
Begin
  Return a + b ;
End.

// Appel :
x <- Somme(4, 2)`}
          </pre>
        </RappelCard>

        <RappelCard color="emerald" title="Procédure">
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 mb-4">
            <p>→ Ne retourne pas de valeur</p>
            <p>→ Exécute une action (afficher, modifier)</p>
            <p>→ Pas de <code className="code-font text-emerald-600 dark:text-emerald-400">Return</code></p>
            <p>→ Appelée directement dans le programme</p>
          </div>
          <pre className="bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-800 rounded-xl p-3 text-xs text-slate-700 dark:text-slate-300 code-font leading-5">
{`Procedure AfficherMsg() ;
Begin
  Write("Bonjour") ;
End.

// Appel :
AfficherMsg()`}
          </pre>
        </RappelCard>
      </div>

      <div className="mb-12 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-4">
        <h4 className="font-black text-slate-800 dark:text-slate-200 mb-3 text-sm">Déroulement d'un appel</h4>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          {['Programme principal', '→', 'Appel', '→', 'Exécution du bloc', '→', 'Résultat retourné'].map((s, i) => (
            s === '→' ? <span key={i} className="text-blue-500">→</span>
            : <span key={i} className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-3 py-1 rounded-lg font-medium">{s}</span>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* Exercices */}
      <SectionHeader badge="Exercices essentiels" title="Série 4 — Fonctions & Procédures" subtitle="Pour chaque exercice : décide d'abord si c'est une fonction ou une procédure." />
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
      <SectionHeader badge="Mini défi" badgeColor="red" title="Exercice type examen" subtitle="Décomposer un problème complexe en plusieurs blocs." />
      <ExamChallenge {...examChallenge} />

      <SectionDivider />

      {/* Exam correction */}
      <SectionHeader badge="Correction du défi" badgeColor="slate" title="Analyse des nombres premiers — La solution complète" />

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">1. Fonction EstPremier</h3>
            <CodeBlock code={code1} title="EstPremier.algo" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-2">2. Procédure ExtrairePremiers</h3>
            <CodeBlock code={code2} title="ExtrairePremiers.algo" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">3. Fonction Moyenne</h3>
            <CodeBlock code={code3} title="Moyenne.algo" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">4. Programme principal</h3>
            <CodeBlock code={codePrincipal} title="AnalysePremiers.algo" />
          </div>
        </div>
      </div>

    </div>
  );
}
