import { SectionHeader, SectionDivider, PiegeCard } from '../components/UI.jsx';

const piegesBoucles = [
  {
    number: 1,
    title: 'Compteur mal initialisé',
    color: 'blue',
    badCode: `For i <- 1 to 10 do
  cpt <- cpt + 1 ;
EndFor ;`,
    explanation: 'La variable cpt n\'a jamais été initialisée. Sa valeur de départ est indéterminée. Il faut écrire cpt ← 0 ; avant la boucle.',
  },
  {
    number: 2,
    title: 'Accumulateur écrasé',
    color: 'emerald',
    badCode: `somme <- 0 ;
For i <- 1 to 5 do
  somme <- i ;   // ← ERREUR
EndFor ;`,
    explanation: 'La variable somme est réécrite à chaque tour au lieu d\'être accumulée. Il faut écrire somme ← somme + i ; pour additionner progressivement.',
  },
  {
    number: 3,
    title: 'Condition impossible',
    color: 'slate',
    badCode: `If x < 5 And x > 10 Then
  Write(x) ;
Endif ;`,
    explanation: 'Un nombre ne peut pas être simultanément inférieur à 5 ET supérieur à 10. Cette condition ne sera jamais vraie. Voulait-on peut-être utiliser Or ?',
  },
  {
    number: 4,
    title: 'Boucle infinie',
    color: 'slate',
    badCode: `x <- 1 ;
While x < 10 do
  Write(x) ;
  // x n'est jamais modifié !
Done ;`,
    explanation: 'La variable x ne change jamais. La boucle tourne indéfiniment. Il faut ajouter x ← x + 1 ; à l\'intérieur de la boucle pour que la condition devienne Fausse.',
  },
];

const piegesTableaux = [
  {
    number: 1,
    title: 'Dépassement d\'indice',
    color: 'blue',
    badCode: `T : Array[5] of Integer ;
// T a les indices 1 à 5

For i <- 1 to 6 do   // ← ERREUR
  Write(T[i]) ;
EndFor ;`,
    explanation: 'Le tableau possède 5 cases (indices 1 à 5). L\'accès à T[6] dépasse les bornes du tableau et provoque une erreur d\'exécution. La boucle doit aller de 1 à 5.',
  },
  {
    number: 2,
    title: 'Indice ou valeur ?',
    color: 'emerald',
    badCode: `// Objectif : trouver les valeurs paires
For i <- 1 to N do
  If i MOD 2 = 0 Then   // ← ERREUR
    Write(T[i]) ;
  Endif ;
EndFor ;`,
    explanation: 'La condition teste si l\'INDICE i est pair, pas si la VALEUR T[i] est paire. Pour tester les valeurs paires, il faut écrire T[i] MOD 2 = 0.',
  },
  {
    number: 3,
    title: 'Échange incorrect sans variable temporaire',
    color: 'slate',
    badCode: `temp <- T[i] ;
T[i] <- T[j] ;
T[j] <- T[i] ;    // ← ERREUR : T[i] est déjà écrasé !`,
    explanation: 'À la troisième ligne, T[i] a déjà été remplacé par T[j]. La valeur initiale de T[i] est perdue. Il faut écrire T[j] ← temp ; pour restaurer l\'ancienne valeur de T[i].',
  },
  {
    number: 4,
    title: 'Maximum non initialisé',
    color: 'slate',
    badCode: `// max n'est pas initialisé !
For i <- 1 to N do
  If T[i] > max Then
    max <- T[i] ;
  Endif ;
EndFor ;`,
    explanation: 'La variable max doit impérativement être initialisée avant la boucle. La bonne pratique est d\'écrire max ← T[1] ; avant de parcourir le tableau.',
  },
];

const piegesMatrices = [
  {
    number: 1,
    title: 'Lignes et colonnes inversées',
    color: 'blue',
    badCode: `For i <- 1 to N do
  For j <- 1 to P do
    Write(M[j][i]) ;   // ← ERREUR
  EndFor ;
EndFor ;`,
    explanation: 'La notation correcte est M[i][j] avec i pour les lignes et j pour les colonnes. Écrire M[j][i] parcourt la matrice transposée au lieu de la matrice originale.',
  },
  {
    number: 2,
    title: 'Mauvaises bornes de boucle',
    color: 'emerald',
    badCode: `// Matrice de taille N×P
For i <- 1 to N+1 do   // ← ERREUR
  For j <- 1 to P+1 do  // ← ERREUR
    Write(M[i][j]) ;
  EndFor ;
EndFor ;`,
    explanation: 'Si les indices commencent à 1, les boucles doivent aller de 1 à N (pas N+1) et de 1 à P (pas P+1). Vérifier toujours les bornes exactes selon la convention utilisée.',
  },
  {
    number: 3,
    title: 'Diagonale secondaire — formule incorrecte',
    color: 'slate',
    badCode: `// Objectif : parcourir la diagonale secondaire
If i + j = N Then    // ← ERREUR
  Write(M[i][j]) ;
Endif ;`,
    explanation: 'La diagonale secondaire vérifie i + j = N + 1 (si les indices commencent à 1). Écrire i + j = N est faux et pointe sur la mauvaise case.',
  },
  {
    number: 4,
    title: 'Somme par colonne non réinitialisée',
    color: 'slate',
    badCode: `somme <- 0 ;         // ← ERREUR : hors boucle
For j <- 1 to P do
  For i <- 1 to N do
    somme <- somme + M[i][j] ;
  EndFor ;
  Write(somme) ;       // ← cumule les colonnes précédentes !
EndFor ;`,
    explanation: 'La variable somme doit être réinitialisée à 0 à l\'intérieur de la boucle externe, au début de chaque colonne. Sinon, les sommes s\'accumulent entre les colonnes.',
  },
];

const piegesFonctions = [
  {
    number: 1,
    title: 'Oubli du Return dans une fonction',
    color: 'blue',
    badCode: `Function Somme(a, b : entier) : entier ;

Begin
  s <- a + b ;
  // Return manquant !
End ;`,
    explanation: 'Une fonction doit obligatoirement retourner une valeur via Return. Sans Return s ;, la valeur calculée est perdue et la fonction ne retourne rien.',
  },
  {
    number: 2,
    title: 'Procédure qui retourne une valeur',
    color: 'emerald',
    badCode: `// On veut retourner la valeur max
Procedure Maximum(a, b : entier) ;   // ← ERREUR

Begin
  If a > b Then
    Return a ;   // ← ERREUR : une procédure n'a pas de Return
  Else
    Return b ;
  Endif ;
End ;`,
    explanation: 'Une procédure ne peut pas retourner de valeur. Si on veut retourner un résultat, il faut utiliser une Function. Ou utiliser un paramètre IO pour transmettre le résultat.',
  },
  {
    number: 3,
    title: 'Paramètre I (entrée seule) modifié',
    color: 'slate',
    badCode: `// On veut modifier x dans le programme appelant
Procedure Incrementer(I x : entier) ;

Begin
  x <- x + 1 ;   // ← x est modifié localement seulement !
End ;`,
    explanation: 'Le paramètre I (entrée) est une copie locale. La variable originale dans le programme appelant n\'est pas modifiée. Pour modifier la variable d\'origine, il faut déclarer le paramètre en IO.',
  },
  {
    number: 4,
    title: 'Variable locale utilisée hors de la fonction',
    color: 'slate',
    badCode: `Function Double(x : entier) : entier ;

Begin
  y <- x * 2 ;   // y est locale à cette fonction
  Return y ;
End ;

// Programme principal :
Write(y) ;    // ← ERREUR : y n'existe pas ici !`,
    explanation: 'La variable y est locale à la fonction Double. Elle n\'existe que pendant l\'exécution de cette fonction. Dans le programme principal, il faut utiliser le résultat retourné par la fonction, pas la variable y.',
  },
];

const categories = [
  { id: 'boucles', icon: '🔄', label: 'Boucles & Conditions', pièges: piegesBoucles },
  { id: 'tableaux', icon: '📋', label: 'Tableaux 1D', pièges: piegesTableaux },
  { id: 'matrices', icon: '🔢', label: 'Matrices 2D', pièges: piegesMatrices },
  { id: 'fonctions', icon: '🧩', label: 'Fonctions & Procédures', pièges: piegesFonctions },
];

export default function PiegesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Chapter header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center text-xl">⚠️</div>
          <div>
            <span className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-wider">Chapitre 05</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">Pièges Classiques</h1>
          </div>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
          Ces erreurs se retrouvent dans presque tous les examens. Reconnaître un piège est aussi important que savoir écrire l'algorithme correct.
        </p>
      </div>

      {/* Summary box */}
      <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#pieges-${cat.id}`}
            className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center hover:border-red-200 dark:hover:border-red-800 transition-colors"
          >
            <div className="text-2xl mb-1">{cat.icon}</div>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-400">{cat.label}</p>
            <p className="text-xs text-red-500 dark:text-red-400 font-bold mt-1">4 pièges</p>
          </a>
        ))}
      </div>

      {/* Pièges sections */}
      {categories.map((cat, ci) => (
        <div key={cat.id} id={`pieges-${cat.id}`}>
          <SectionHeader
            badge={`Pièges — ${cat.label}`}
            badgeColor="red"
            title={`${cat.icon} ${cat.label}`}
            subtitle="Identifie l'erreur avant de lire l'explication."
          />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {cat.pièges.map((piege) => (
              <PiegeCard key={piege.number} {...piege} />
            ))}
          </div>
          {ci < categories.length - 1 && <SectionDivider />}
        </div>
      ))}

      {/* Final summary */}
      <div className="mt-12 bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 border border-slate-800">
        <h3 className="text-white font-black text-lg mb-4">🧠 Mémo rapide — Les réflexes à avoir</h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ['Avant une boucle', 'Initialiser tous les accumulateurs et compteurs'],
            ['Avant un échange', 'Sauvegarder une valeur dans temp'],
            ['Dans une fonction', 'Ne pas oublier le Return'],
            ['Dans une procédure', 'Pas de Return — utiliser IO si besoin'],
            ['Accès à un tableau', 'Vérifier les bornes (1 à N, pas 0 ou N+1)'],
            ['Condition de boucle', 'Vérifier que la variable de contrôle change bien'],
          ].map(([label, text], i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-emerald-400 text-xs font-black mt-0.5 shrink-0">✓</span>
              <div>
                <span className="text-slate-300 font-bold text-xs">{label} : </span>
                <span className="text-slate-400 text-xs">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
