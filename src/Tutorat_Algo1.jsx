export default function TutoratSlides() {
  const exerciseCards = [
    {
      title: 'EX 1 — FACTORIEL',
      desc: 'Calculer le factoriel d’un entier positif N.',
      ex1: 'N = 5 → 120',
      ex2: 'N = 4 → 24',
    },
    {
      title: 'EX 2 — PUISSANCE',
      desc: 'Calculer a puissance n grâce à une multiplication répétée.',
      ex1: '2^5 → 32',
      ex2: '3^4 → 81',
    },
    {
      title: 'EX 3 — NOMBRE PARFAIT',
      desc: 'Vérifier si un entier est égal à la somme de ses diviseurs propres.',
      ex1: '6 → parfait - Explication : 2 + 3 = 6',
      ex2: '8 → non parfait - Explication : 2 + 4 =/= 8',
    },
    {
      title: 'EX 4 — INVERSION',
      desc: 'Inverser les chiffres d’un entier positif.',
      ex1: '1234 → 4321',
      ex2: '5608 → 8065',
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen p-10 space-y-16">
      {/* SLIDE 1 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden relative p-16">
        <div className="absolute top-0 left-0 h-3 w-full bg-gradient-to-r from-blue-500 to-emerald-400" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100 opacity-50" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-100 opacity-50" />

        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="inline-block w-fit px-5 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100 text-sm mb-7">
            L1 Math-Informatique
          </div>

          <h1 className="text-6xl font-black text-slate-800 leading-tight max-w-5xl">
            Tutorat d’Algorithmique
            <span className="block text-blue-600 mt-2">Maîtrise des bases</span>
          </h1>

          <p className="mt-8 text-2xl text-slate-600 max-w-4xl leading-relaxed">
            Comprendre un énoncé · Exploiter rapidement les indispensables du S1 · Réussir l’examen
          </p>

          <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 px-6 py-4 shadow-sm">
            <p className="font-bold text-slate-700">Réalisé par Asselah Samy</p>
            <p className="text-slate-500 text-sm">samy.asselah@esst-sup.com</p>
          </div>
        </div>
      </section>

      {/* SLIDE 2 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-10">
          <h2 className="text-5xl font-black text-slate-800">Organisation du tutorat</h2>
          <p className="text-slate-500 text-lg mt-3">Chaque thème sera travaillé en 4 étapes.</p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[72%]">
          {[
            {
              title: 'Exercices essentiels',
              items: ['Exercices rapides', 'Méthodes indispensables', 'Réflexes de base'],
              goal: 'Objectif : comprendre les mécanismes.',
              color: 'blue',
            },
            {
              title: 'Analyse & Méthode',
              items: ['Comment lire l’énoncé', 'Quelle structure utiliser', 'Erreurs fréquentes'],
              goal: 'Objectif : apprendre à réfléchir.',
              color: 'emerald',
            },
            {
              title: 'Exercice type examen',
              items: ['Niveau plus complet', 'Mélange de notions', 'Réflexion autonome'],
              goal: 'Objectif : se rapprocher du niveau réel.',
              color: 'blue',
            },
            {
              title: 'Correction détaillée',
              items: ['Trace d’exécution', 'Raisonnement logique', 'Correction des pièges'],
              goal: 'Objectif : comprendre la logique complète.',
              color: 'emerald',
            },
          ].map((block, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 border shadow-sm flex flex-col justify-between ${
                block.color === 'blue'
                  ? 'bg-blue-50 border-blue-100'
                  : 'bg-emerald-50 border-emerald-100'
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-black mb-5 ${
                    block.color === 'blue' ? 'text-blue-700' : 'text-emerald-700'
                  }`}
                >
                  {block.title}
                </h3>

                <div className="space-y-3 text-slate-700 text-lg">
                  {block.items.map((item, j) => (
                    <p key={j}>• {item}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-white rounded-2xl px-4 py-3 border border-white/50 text-slate-500 text-sm font-medium">
                {block.goal}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SLIDE 3 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black text-slate-800">
              Exercices essentiels — Boucles & Conditions
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              Résoudre les exercices avant de regarder les corrections.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold">
            Série 1
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[76%]">
          {exerciseCards.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-emerald-50 p-7 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-white border border-blue-100 text-blue-700 font-bold text-sm mb-5">
                  {card.title}
                </div>

                <p className="text-slate-700 text-lg leading-relaxed">{card.desc}</p>
              </div>

              <div className="space-y-3 mt-6">
                <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                  {card.ex1}
                </div>

                <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                  {card.ex2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SLIDE 4 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Comment résoudre ces exercices ?
          </h2>

          <p className="text-slate-500 mt-2 text-lg">
            Comprendre la logique avant d’écrire le pseudo-code.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white border border-emerald-100 text-emerald-700 font-bold text-sm mb-5">
              EX 1 — FACTORIEL
            </div>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Le résultat commence à 1</p>
              <p>• Multiplication répétée</p>
              <p>• Une boucle FOR est adaptée</p>
              <p>• 0! = 1</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 overflow-hidden">
              Algorithm Factoriel; <br /><br />

              Var <br />
              entier : N, i, fact ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              fact {'<-'} 1 ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;fact {'<-'} fact * i ; <br />
              EndFor ; <br /><br />

              Write(fact) ; <br /><br />

              End.
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white border border-blue-100 text-blue-700 font-bold text-sm mb-5">
              EX 2 — PUISSANCE
            </div>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Le résultat commence à 1</p>
              <p>• Conserver la valeur précédente</p>
              <p>• Ne pas modifier directement a</p>
              <p>• Utiliser une variable res</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 overflow-hidden">
              Algorithm Puissance; <br /><br />

              Var <br />
              entier : a, n, i, res ; <br /><br />

              Begin <br /><br />

              Read(a) ; <br />
              Read(n) ; <br /><br />

              res {'<-'} 1 ; <br /><br />

              For i {'<-'} 1 to n do <br />
              &nbsp;&nbsp;res {'<-'} res * a ; <br />
              EndFor ; <br /><br />

              Write(res) ; <br /><br />

              End.
            </div>
          </div>

        </div>
      </section>
      {/* NOUVELLE SLIDE — EX 3 & EX 4 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Comment résoudre ces exercices ?
          </h2>

          <p className="text-slate-500 mt-2 text-lg">
            Suite des corrections — Boucles & Conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white border border-emerald-100 text-emerald-700 font-bold text-sm mb-5">
              EX 3 — NOMBRE PARFAIT
            </div>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Additionner les diviseurs propres</p>
              <p>• Ne pas compter le nombre lui-même</p>
              <p>• Comparer la somme avec N</p>
              <p>• Utiliser une boucle FOR</p>
            </div>

           <div className="mt-6 h-[600px] bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 overflow-y-auto">
              Algorithm NombreParfait; <br /><br />

              Var <br />
              entier : N, i, somme ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              somme {'<-'} 0 ; <br /><br />

              For i {'<-'} 1 to N-1 do <br />
              &nbsp;&nbsp;If N MOD i = 0 Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;somme {'<-'} somme + i ; <br />
              &nbsp;&nbsp;Endif ; <br />
              EndFor ; <br /><br />

              If somme = N Then <br />
              &nbsp;&nbsp;Write("Parfait") ; <br />
              Else <br />
              &nbsp;&nbsp;Write("Non parfait") ; <br />
              Endif ; <br /><br />

              End.

            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7 flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white border border-blue-100 text-blue-700 font-bold text-sm mb-5">
              EX 4 — INVERSION
            </div>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Récupérer le dernier chiffre</p>
              <p>• Utiliser MOD 10</p>
              <p>• Réduire progressivement le nombre</p>
              <p>• Construire le résultat à l’envers</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 overflow-y-auto">
              Algorithm Inversion; <br /><br />

              Var <br />
              entier : N, r, inv ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              inv {'<-'} 0 ; <br /><br />

              While N {'<>'} 0 do <br />
              &nbsp;&nbsp;r {'<-'} N MOD 10 ; <br />
              &nbsp;&nbsp;inv {'<-'} inv * 10 + r ; <br />
              &nbsp;&nbsp;N {'<-'} N DIV 10 ; <br />
              Done ; <br /><br />

              Write(inv) ; <br /><br />

              End.

            </div>
          </div>
        </div>
      </section>
      {/* SLIDE 5 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-y-auto p-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black text-slate-800">
                Mini défi — Niveau examen
              </h2>
              <p className="text-slate-500 mt-2 text-lg">
                Combiner plusieurs notions dans un seul algorithme.
              </p>
            </div>

            <div className="px-5 py-2 rounded-xl bg-red-50 border border-red-100 text-red-600 font-bold">
              Niveau examen
            </div>
          </div>

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-8 flex-1">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block px-4 py-2 rounded-xl bg-white border border-blue-100 text-blue-700 font-bold mb-6">
                  Conversion Décimal → Binaire
                </div>

                <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
                  <p>• Lire un entier positif N</p>
                  <p>• Construire progressivement l’écriture binaire</p>
                  <p>• Utiliser les transformations nécessaires</p>
                  <p>• Afficher le résultat final</p>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5 text-amber-800 leading-relaxed">
                    <span className="font-bold">Indice :</span> réfléchir au principe de division répétée par 2.
                  </div>

                  <div className="rounded-2xl bg-white border border-slate-200 p-5">
                    <h4 className="text-slate-800 font-black text-lg mb-4">
                      Méthode de réflexion
                    </h4>

                    <div className="space-y-3 text-slate-700 leading-relaxed">
                      <p>• Le reste de la division par 2 donne le prochain chiffre binaire</p>

                      <p>• Tant que N n’est pas égal à 0, on continue les divisions</p>

                      <p>• Les chiffres binaires sont obtenus dans l’ordre inverse</p>

                      <p>• Il faut donc reconstruire progressivement le résultat</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-900 p-5 text-slate-100 font-mono text-sm leading-7">
                    N = 13 <br />
                    13 MOD 2 = 1 <br />
                    13 DIV 2 = 6 <br /><br />

                    6 MOD 2 = 0 <br />
                    6 DIV 2 = 3 <br /><br />

                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {[
                ['13', '1101'],
                ['25', '11001'],
                ['8', '1000'],
              ].map((e, i) => (
                <div key={i} className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 shadow-sm">
                  <p className="text-slate-500 text-sm mb-2">Exemple {i + 1}</p>
                  <p className="text-slate-800 text-xl font-bold">N = {e[0]}</p>
                  <p className="text-emerald-700 text-3xl font-black mt-4">{e[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Correction — Conversion Décimal → Binaire
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre la logique de construction du résultat.
          </p>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 h-[78%]">
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-emerald-700 mb-5">
                Méthode de réflexion
              </h3>

              <div className="space-y-4 text-slate-700 leading-relaxed text-[17px]">
                <p>• MOD 2 récupère le dernier chiffre binaire</p>
                <p>• DIV 2 réduit progressivement le nombre</p>
                <p>• Les chiffres sont obtenus dans l’ordre inverse</p>
                <p>• Une boucle WHILE est adaptée</p>
              </div>

              <div className="mt-7 bg-white rounded-2xl border border-emerald-100 p-5">
                <p className="font-bold text-slate-700 mb-3">Exemple :</p>
                <p className="text-slate-600">13 → 1 → 0 → 1 → 1</p>
                <p className="text-emerald-700 font-black text-2xl mt-4">1101</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-7 text-slate-100 overflow-hidden flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-blue-200 font-bold text-sm mb-5">
              Pseudo-code
            </div>
            <div className="font-mono text-[14px] leading-6 overflow-y-auto h-full pr-2">
              Algorithm DecimalVersBinaire; <br /><br />

              Var <br />
              entier : N, binaire, reste, p ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              binaire {'<-'} 0 ; <br />
              p {'<-'} 1 ; <br /><br />

              While N {'<>'} 0 do <br /><br />

              &nbsp;&nbsp;reste {'<-'} N MOD 2 ; <br /><br />

              &nbsp;&nbsp;binaire {'<-'} binaire + reste * p ; <br /><br />

              &nbsp;&nbsp;p {'<-'} p * 10 ; <br /><br />

              &nbsp;&nbsp;N {'<-'} N DIV 2 ; <br /><br />

              Done ; <br /><br />

              Write(binaire) ; <br /><br />

              End.
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-10 flex flex-col">

        {/* TITRE */}
        <div className="mb-6">
          <h2 className="text-4xl font-black text-slate-800">
            Rappel — Tableaux 1D (Vecteurs)
          </h2>

          <p className="text-slate-500 text-base mt-2">
            Voir clairement la structure d’un tableau avant de le manipuler.
          </p>
        </div>

        {/* HAUT */}
        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">

          {/* GAUCHE */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-5">
              Idée essentielle
            </h3>

            <p className="text-slate-700 text-[16px] leading-7">
              Un tableau 1D sert à stocker plusieurs valeurs du même type
              dans une seule structure.
            </p>

            <div className="mt-6 space-y-3 text-slate-700 text-[16px]">
              <p>• l’indice : la position dans le tableau</p>
              <p>• la valeur : le contenu de la case</p>
              <p>• chaque case possède un seul indice</p>
              <p>• les éléments sont stockés côte à côte</p>
            </div>

            <div className="mt-6 bg-white border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-slate-600 leading-6">
                Exemple :
              </p>

              <p className="mt-2 font-mono text-blue-700 text-lg font-bold">
                T[1] = 5
              </p>

              <p className="text-slate-600 text-sm mt-1">
                0 est l’indice, 5 est la valeur.
              </p>
            </div>
          </div>

          {/* DROITE */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-5">
              Visualisation
            </h3>

            <div className="rounded-2xl bg-white border border-slate-200 p-4">
              <div className="grid grid-cols-5 gap-2 text-center text-sm font-semibold text-slate-500 mb-2">
                {[0, 1, 2, 3, 4].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-2 text-center text-lg font-bold text-slate-700">
                {[5, 8, 2, 9, 1].map((n) => (
                  <div
                    key={n}
                    className="py-3 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3 text-slate-700 text-[16px] leading-7">
              <p>
                T[2] = 2 → T représente le tableau.
              </p>

              <p>
                [2] correspond à l’indice.
              </p>

              <p>
                2 est la valeur stockée dans cette case.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-emerald-100 p-4">
              <p className="text-sm text-slate-600 mb-2">
                Lecture du tableau :
              </p>

              <div className="font-mono text-sm leading-6 text-slate-700">
                T[1] → 5 <br />
                T[1] → 8 <br />
                T[2] → 2
              </div>
            </div>
          </div>
        </div>

        {/* BAS */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-8 mt-6 h-[28%]">

          {/* PARCOURS */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h4 className="text-xl font-black text-slate-800 mb-4">
              Parcours du tableau
            </h4>

            <div className="font-mono text-[13px] text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl p-4 leading-5 overflow-hidden">
              Algorithm ParcoursTableau; <br /><br />

              Var <br />
              entier : i, N ; <br />
              tableau T[100] ; <br /><br />

              Begin <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              EndFor ; <br /><br />

              End.
            </div>
          </div>

          {/* POINTS */}
          <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm overflow-hidden">
            <h4 className="text-xl font-black text-slate-800 mb-4">
              Points à retenir
            </h4>

            <div className="space-y-3 text-slate-700 text-[16px] leading-7">
              <p>• l’indice commence souvent à 0</p>
              <p>• distinguer indice et valeur</p>
              <p>• FOR est idéale pour parcourir</p>
              <p>• chaque case contient une seule donnée</p>
              <p>• T[i] signifie : valeur située à la position i</p>
            </div>
          </div>

        </div>
      </section>
      {/* SLIDE 8 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Exercices essentiels — Tableaux 1D
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Manipuler, parcourir et modifier un tableau efficacement.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 mb-7 text-slate-600 leading-relaxed">
          Dans tous les exercices suivants : les tableaux seront considérés de taille maximale N.
          La variable N sera utilisée comme une constante représentant la taille du tableau.
        </div>

        <div className="grid grid-cols-2 gap-8 h-[72%]">
          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 1 — COMPTER LES NOMBRES PAIRS
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de compter le nombre de valeurs paires dans un tableau T de taille N.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [4, 7, 2, 9, 8] → 3 valeurs paires
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [1, 3, 5, 7] → 0 valeur paire
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 2 — TROUVER LES DOUBLONS D’UN TABLEAU
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de détecter les valeurs répétées dans un tableau T de taille N.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [4, 7, 2, 7, 9] → 7 est un doublon
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [5, 1, 3, 5, 1] → 5 est un doublon / 1 est un doublon
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 3 — TRIER UN TABLEAU
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de trier un tableau T de taille N dans l’ordre croissant.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [7, 2, 9, 1] → [1, 2, 7, 9]
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [5, 3, 8, 4] → [3, 4, 5, 8]
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 4 — DÉCALAGE D’UN TABLEAU
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet d’effectuer un décalage circulaire vers la droite d’un tableau T.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [4, 7, 2, 9] → [9, 4, 7, 2]
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                T = [1, 5, 8, 3] → [3, 1, 5, 8]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Comment résoudre ces exercices ?
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre la logique de parcours et de manipulation des tableaux.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">
              EX 1 — Compter les pairs
            </h3>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Parcourir tout le tableau</p>
              <p>• Vérifier chaque valeur</p>
              <p>• Un nombre pair vérifie : T[i] MOD 2 = 0</p>
              <p>• Le compteur est initialisé à 0</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-6 h-[calc(100%-220px)] overflow-y-auto">
              Algorithm CompterPairs; <br /><br />

              Var <br />
              entier : N, i, cpt ; <br />
              tableau T[100] ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Read(T[i]) ; <br />
              EndFor ; <br /><br />

              cpt {'<-'} 0 ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;If T[i] MOD 2 = 0 Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;cpt {'<-'} cpt + 1 ; <br />
              &nbsp;&nbsp;Endif ; <br />
              EndFor ; <br /><br />

              Write(cpt) ; <br /><br />

              End.
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">
              EX 2 — Trouver les doublons
            </h3>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Une seule boucle ne suffit pas</p>
              <p>• Il faut une boucle imbriquée</p>
              <p>• Chaque T[i] est comparé avec T[j]</p>
              <p>• j commence à i + 1</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-6 h-[calc(100%-220px)] overflow-y-auto">
              Algorithm TrouverDoublons; <br /><br />

              Var <br />
              entier : N, i, j ; <br />
              tableau T[100] ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Read(T[i]) ; <br />
              EndFor ; <br /><br />

              For i {'<-'} 1 to N-1 do <br />
              &nbsp;&nbsp;For j {'<-'} i + 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;If T[i] = T[j] Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write(T[i]) ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Endif ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              End.
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9.5 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Comment résoudre ces exercices ?
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre la logique de tri et de décalage d’un tableau.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              EX 3 — Trier un tableau
            </h3>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Comparer les éléments</p>
              <p>• Échanger les valeurs mal placées</p>
              <p>• Répéter le parcours plusieurs fois</p>
              <p>• Utiliser une variable temp avant d’écraser</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-6 h-[calc(100%-220px)] overflow-y-auto">
              Algorithm TrierTableau; <br /><br />

              Var <br />
              entier : N, i, j, temp ; <br />
              tableau T[100] ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Read(T[i]) ; <br />
              EndFor ; <br /><br />

              For i {'<-'} 1 to N-1 do <br />
              &nbsp;&nbsp;For j {'<-'} i + 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;If T[i] {'>'} T[j] Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp {'<-'} T[i] ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T[i] {'<-'} T[j] ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T[j] {'<-'} temp ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Endif ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              EndFor ; <br /><br />

              End.
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">
              EX 4 — Décalage d’un tableau
            </h3>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Le dernier élément devient le premier</p>
              <p>• Sauvegarder la dernière valeur</p>
              <p>• Déplacer de droite vers gauche</p>
              <p>• Si une valeur est écrasée trop tôt, elle est perdue</p>
            </div>

            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-6 h-[calc(100%-220px)] overflow-y-auto">
              Algorithm DecalageDroite; <br /><br />

              Var <br />
              entier : N, i, derniere ; <br />
              tableau T[100] ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Read(T[i]) ; <br />
              EndFor ; <br /><br />

              derniere {'<-'} T[N-1] ; <br /><br />

              For i {'<-'} N-1 downto 1 do <br />
              &nbsp;&nbsp;T[i] {'<-'} T[i-1] ; <br />
              EndFor ; <br /><br />

              T[1] {'<-'} derniere ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              EndFor ; <br /><br />

              End.
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black text-slate-800">
                Mini défi tableaux
              </h2>

              <p className="text-slate-500 mt-2 text-lg">
                Combiner boucles imbriquées et tableaux.
              </p>
            </div>

            <div className="px-5 py-2 rounded-xl bg-red-50 border border-red-100 text-red-600 font-bold">
              Niveau examen
            </div>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 flex-1">

            {/* GAUCHE */}
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-between">

              <div>
                <div className="inline-block px-4 py-2 rounded-xl bg-white border border-blue-100 text-blue-700 font-bold mb-6">
                  Trouver 3 valeurs dont la somme vaut X
                </div>

                <p className="text-slate-700 text-lg leading-relaxed">
                  Écrire un algorithme qui permet de trouver trois valeurs d’un tableau T de taille N dont la somme est égale à une valeur X donnée.
                </p>

                <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-amber-800 leading-relaxed">
                  <span className="font-bold">Important :</span> les trois valeurs doivent provenir de cases différentes.
                </div>

                <div className="mt-6 space-y-4 text-slate-700 text-[17px] leading-relaxed">
                  <p>• Une seule boucle ne suffit pas</p>

                  <p>• Chaque valeur doit être comparée avec les autres</p>

                  <p>• On utilise généralement 3 boucles imbriquées</p>

                  <p>• Les indices doivent être différents : i ≠ j ≠ k</p>

                  <p>• Dès qu’une somme correcte est trouvée, on peut afficher la combinaison</p>
                </div>

                <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5">
                  <h4 className="text-slate-800 font-black text-lg mb-3">
                    Structure logique
                  </h4>

                  <div className="font-mono text-sm leading-7 text-slate-700">
                    For ? to ? do <br />
                    &nbsp;&nbsp;For ? to ? do <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;For ? to ? do <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tester la somme <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;EndFor ; <br />
                    &nbsp;&nbsp;EndFor ; <br />
                    EndFor ;
                  </div>
                </div>
              </div>
            </div>

            {/* DROITE */}
            <div className="space-y-5">
              {[
                ['T = [2, 7, 11, 15, 4]', 'X = 22', '7 + 11 + 4 = 22'],
                ['T = [1, 5, 9, 3, 8]', 'X = 17', '5 + 9 + 3 = 17'],
                ['T = [4, 2, 10, 6]', 'X = 30', 'Aucune combinaison trouvée'],
              ].map((e, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-emerald-50 border border-emerald-100 p-5 shadow-sm"
                >
                  <p className="text-slate-500 text-sm mb-2">
                    Exemple {i + 1}
                  </p>

                  <p className="text-slate-800 font-semibold">
                    {e[0]}
                  </p>

                  <p className="text-slate-800 font-semibold mt-1">
                    {e[1]}
                  </p>

                  <p className="text-emerald-700 text-xl font-black mt-3">
                    {e[2]}
                  </p>
                </div>
              ))}

              <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
                <h4 className="text-slate-800 font-black text-lg mb-3">
                  Difficulté principale
                </h4>

                <div className="space-y-3 text-slate-700 leading-relaxed">
                  <p>• éviter de tester plusieurs fois les mêmes valeurs</p>

                  <p>• gérer correctement les indices</p>

                  <p>• comprendre la logique des boucles imbriquées</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SLIDE 11 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Correction — Trouver 3 valeurs dont la somme vaut X
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre comment tester plusieurs combinaisons dans un tableau.
          </p>
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-blue-700 mb-5">Méthode de réflexion</h3>
              <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
                <p>• Parcourir le tableau plusieurs fois</p>
                <p>• Tester plusieurs combinaisons</p>
                <p>• Vérifier si la somme vaut X</p>
                <p>• Une triple boucle FOR est adaptée</p>
              </div>

              <div className="mt-7 bg-white rounded-2xl border border-blue-100 p-5 text-slate-700 leading-relaxed">
                <p className="font-bold mb-2">Astuce :</p>
                <p>j commence à i + 1 et k commence à j + 1.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-7 text-slate-100 overflow-hidden flex flex-col">
            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-blue-200 font-bold text-sm mb-5">
              Pseudo-code
            </div>

            <div className="font-mono text-[15px] leading-7 overflow-y-auto flex-1 pr-2">
              Algorithm SommeX; <br /><br />
              Var <br />
              entier : N, X, i, j, k ; <br />
              T : Array[100] of Integer ; <br />
              booleen : trouve ; <br /><br />
              Begin <br /><br />
              Read(N) ; <br /><br />
              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Read(T[i]) ; <br />
              EndFor ; <br /><br />
              Read(X) ; <br /><br />
              trouve {'<-'} Faux ; <br /><br />
              For i {'<-'} 1 to N-2 do <br />
              &nbsp;&nbsp;For j {'<-'} i + 1 to N-1 do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;For k {'<-'} j + 1 to N-1 do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If T[i] + T[j] + T[k] = X Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write(T[i]) ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write(T[j]) ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write(T[k]) ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trouve {'<-'} Vrai ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Endif ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;EndFor ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />
              If trouve = Faux Then <br />
              &nbsp;&nbsp;Write("Aucune combinaison trouvée") ; <br />
              Endif ; <br /><br />
              End.
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 12 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-7">
          <h2 className="text-5xl font-black text-slate-800">
            Rappel — Matrices 2D
          </h2>

          <p className="text-slate-500 text-lg mt-2">
            Comprendre comment stocker et parcourir des données sur plusieurs lignes et colonnes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          
          {/* BLOC GAUCHE */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7">
            <h3 className="text-2xl font-black text-blue-700 mb-5">
              Idée essentielle
            </h3>

            <p className="text-slate-700 text-[17px] leading-relaxed">
              Une matrice 2D est un tableau composé de lignes et de colonnes.
            </p>

            <div className="mt-5 space-y-3 text-slate-700 text-[17px]">
              <p>• un indice de ligne</p>
              <p>• un indice de colonne</p>
              <p>• chaque case possède deux positions</p>
              <p>• M[i][j] représente une valeur précise</p>
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5">
              <p className="text-slate-500 text-sm mb-3">Exemple :</p>

              <p className="text-blue-700 font-black text-2xl">
                M[1][2] = 7
              </p>

              <p className="text-slate-600 mt-2">
                [1] représente la ligne.
              </p>

              <p className="text-slate-600">
                [2] représente la colonne.
              </p>

              <p className="text-slate-600">
                7 est la valeur stockée.
              </p>
            </div>
          </div>

          {/* BLOC DROITE */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7">
            <h3 className="text-2xl font-black text-emerald-700 mb-5">
              Visualisation
            </h3>

            <div className="rounded-2xl bg-white border border-slate-200 p-4">
              
              <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold text-slate-500 mb-2">
                {[0, 1, 2].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>

              <div className="space-y-2">
                {[[5, 8, 2], [9, 1, 7], [4, 6, 3]].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-2">
                    {row.map((n, j) => (
                      <div
                        key={j}
                        className="py-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-lg font-bold text-slate-700"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3 text-slate-700 text-[16px]">
              <p>• la première valeur est M[1][1]</p>
              <p>• i représente souvent les lignes</p>
              <p>• j représente souvent les colonnes</p>
            </div>
          </div>
        </div>

        {/* BAS */}
        <div className="grid grid-cols-2 gap-8">
          
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h4 className="text-xl font-black text-slate-800 mb-4">
              Parcours d’une matrice
            </h4>

            <div className="font-mono text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl p-4 leading-7 h-[260px] overflow-y-auto">
              Algorithm ParcoursMatrice; <br /><br />

              Var <br />
              entier : i, j, N, P ; <br />
              matrice M[100][100] ; <br /><br />

              Begin <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Write(M[i][j]) ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              End.
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <h4 className="text-xl font-black text-slate-800 mb-4">
              Points à retenir
            </h4>

            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• une matrice possède plusieurs lignes et colonnes</p>
              <p>• chaque case possède deux indices</p>
              <p>• M[i][j] désigne une seule valeur</p>
              <p>• une double boucle FOR parcourt toute la matrice</p>
              <p>• i change la ligne</p>
              <p>• j change la colonne</p>
            </div>
          </div>
        </div>
      </section>
      {/* SLIDE 13 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Exercices essentiels — Matrices 2D
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Parcourir, comparer et manipuler une matrice efficacement.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[72%]">
          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 1 — TROUVER LE PLUS GRAND ÉLÉMENT
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de trouver la plus grande valeur d’une matrice M de taille N × P.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 whitespace-pre-line font-mono text-sm leading-6">
                | 5  8  2 |
| 9  1  7 |
| 4  6  3 |
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 font-semibold">
                Résultat : 9
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 2 — SOMME DES COLONNES
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de calculer la somme de chaque colonne d’une matrice M de taille N × P.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 whitespace-pre-line font-mono text-sm leading-6">
                | 1  2  3 |
| 4  5  6 |
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 font-semibold">
                S = [5, 7, 9]
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 3 — MATRICE SYMÉTRIQUE
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet de vérifier si une matrice carrée M est symétrique.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 whitespace-pre-line font-mono text-sm leading-6">
                | 1  2  3 |
| 2  5  6 |
| 3  6  9 |
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 font-semibold">
                Résultat : Matrice symétrique
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 4 — ÉCHANGE DES DIAGONALES
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire un algorithme qui permet d’échanger les valeurs de la diagonale principale et de la diagonale secondaire d’une matrice carrée M.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 font-mono text-sm leading-6">
                Avant : [1 2 3 / 4 5 6 / 7 8 9]
              </div>
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700 font-mono text-sm leading-6">
                Après : [3 2 1 / 4 5 6 / 9 8 7]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 14 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Corrections — Parcours & Calculs matriciels
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre comment parcourir efficacement une matrice.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">EX 1 — Plus grand élément</h3>
            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Parcourir toutes les cases</p>
              <p>• Comparer les valeurs</p>
              <p>• Conserver le maximum trouvé</p>
              <p>• Initialiser max avec M[1][1]</p>
            </div>
            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
              max {'<-'} M[1][1] ; <br />
              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;If M[i][j] {'>'} max Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max {'<-'} M[i][j] ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Endif ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ;
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">EX 2 — Somme des colonnes</h3>
            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Parcourir les colonnes une par une</p>
              <p>• Additionner les valeurs de chaque colonne</p>
              <p>• Stocker les résultats dans un tableau</p>
              <p>• Réinitialiser la somme à chaque colonne</p>
            </div>
            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
              For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;somme {'<-'} 0 ; <br />
              &nbsp;&nbsp;For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;somme {'<-'} somme + M[i][j] ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              &nbsp;&nbsp;S[j] {'<-'} somme ; <br />
              EndFor ;
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 15 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Corrections — Réflexion matricielle avancée
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre les relations entre les positions d’une matrice.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">EX 3 — Matrice symétrique</h3>
            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Comparer M[i][j] avec M[j][i]</p>
              <p>• La symétrie se fait par rapport à la diagonale principale</p>
              <p>• Les cases i = j sont sur la diagonale et ne changent pas</p>
              <p>• Une seule différence suffit pour conclure non symétrique</p>
            </div>
            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
              sym {'<-'} Vrai ; <br />
              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} i + 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;If M[i][j] {'<>'} M[j][i] Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sym {'<-'} Faux ; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Endif ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ;
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">EX 4 — Échange des diagonales</h3>
            <div className="space-y-3 text-slate-700 text-[17px] leading-relaxed">
              <p>• Identifier la diagonale principale : i = j</p>
              <p>• Identifier la diagonale secondaire : i + j = N - 1</p>
              <p>• Utiliser une variable temporaire</p>
              <p>• Conserver les anciennes valeurs avant l’échange</p>
            </div>
            <div className="mt-6 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;temp {'<-'} M[i][i] ; <br />
              &nbsp;&nbsp;M[i][i] {'<-'} M[i][N+1-i] ; <br />
              &nbsp;&nbsp;M[i][N+1-i] {'<-'} temp ; <br />
              EndFor ;
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 16 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12 relative">

        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col h-full">

          <div className="flex items-start justify-between mb-8">

            <div>
              <h2 className="text-4xl font-black text-slate-800">
                Mini défi matrices
              </h2>

              <p className="text-slate-500 mt-2 text-lg">
                Réfléchir aux positions des éléments dans une matrice.
              </p>
            </div>

            <div className="px-5 py-2 rounded-xl bg-red-50 border border-red-100 text-red-600 font-bold">
              Niveau examen
            </div>

          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 flex-1">

            {/* GAUCHE */}
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-between">

              <div>

                <div className="inline-block px-4 py-2 rounded-xl bg-white border border-blue-100 text-blue-700 font-bold mb-6">
                  Transposition d’une matrice
                </div>

                <p className="text-slate-700 text-lg leading-relaxed">
                  Écrire un algorithme qui permet de calculer la transposée d’une matrice M de taille N × P.
                </p>

                <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-amber-800 leading-relaxed">
                  <span className="font-bold">Principe :</span>
                  les lignes deviennent des colonnes et les colonnes deviennent des lignes.
                </div>

                <div className="mt-7 space-y-4 text-slate-700 text-[17px] leading-relaxed">

                  <p>
                    • Une matrice transposée échange les indices :
                    M[?][?] devient MT[?][?]
                  </p>

                  <p>
                    • Le nombre de lignes et de colonnes est inversé
                  </p>

                  <p>
                    • Deux boucles FOR sont nécessaires pour parcourir toute la matrice
                  </p>

                  <p>
                    • Chaque valeur doit être copiée dans sa nouvelle position
                  </p>

                </div>

                <div className="mt-7 rounded-2xl bg-white border border-slate-200 p-5">

                  <p className="text-slate-500 text-sm mb-3">
                    Méthode de réflexion :
                  </p>

                  <div className="space-y-3 text-slate-700 text-[16px]">

                    <p>1. Parcourir chaque ligne</p>

                    <p>2. Parcourir chaque colonne</p>

                    <p>3. Copier M[?][?] dans MT[?][?]</p>

                    <p>4. Afficher la nouvelle matrice</p>

                  </div>

                </div>

              </div>

            </div>

            {/* DROITE */}
            <div className="space-y-5">

              {[
                [
                  'Matrice initiale',
                  '| 1  2  3 |\n| 4  5  6 |'
                ],

                [
                  'Résultat',
                  '| 1  4 |\n| 2  5 |\n| 3  6 |'
                ],

                [
                  'Observation importante',
                  '2 × 3 devient 3 × 2\n\nLa première ligne devient la première colonne.'
                ],

              ].map((e, i) => (

                <div
                  key={i}
                  className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 shadow-sm"
                >

                  <p className="text-slate-500 text-sm mb-3">
                    {e[0]}
                  </p>

                  <pre className="text-slate-800 text-lg font-semibold whitespace-pre-wrap leading-8">
                    {e[1]}
                  </pre>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* SLIDE 17 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">

        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Correction — Transposition d’une matrice
          </h2>

          <p className="text-slate-500 mt-2 text-lg">
            Comprendre comment les lignes deviennent des colonnes.
          </p>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 h-[78%]">

          {/* GAUCHE */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col">

            <h3 className="text-2xl font-black text-emerald-700 mb-5">
              Méthode de réflexion
            </h3>

            <div className="space-y-4 text-slate-700 leading-relaxed text-[17px]">
              <p>• Les lignes deviennent des colonnes</p>
              <p>• Les colonnes deviennent des lignes</p>
              <p>• On inverse les indices : M[i][j] devient T[j][i]</p>
              <p>• Une double boucle FOR est nécessaire</p>
              <p>• La taille N × P devient P × N</p>
            </div>

            <div className="mt-7 bg-white rounded-2xl border border-emerald-100 p-5">
              <p className="font-bold text-slate-700 mb-2">
                Exemple :
              </p>

              <p className="text-slate-600">
                M[1][2] = 2 → T[2][1] = 2
              </p>
            </div>

            <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-5">
              <p className="font-bold text-slate-700 mb-3">
                Étapes :
              </p>

              <div className="space-y-2 text-slate-700">
                <p>1. Lire la matrice M</p>
                <p>2. Parcourir toutes les cases</p>
                <p>3. Copier M[i][j] dans T[j][i]</p>
                <p>4. Afficher la matrice transposée</p>
              </div>
            </div>

          </div>

          {/* DROITE */}
          <div className="rounded-3xl bg-slate-900 p-7 text-slate-100 flex flex-col overflow-hidden">

            <div className="inline-block w-fit px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-blue-200 font-bold text-sm mb-5">
              Pseudo-code
            </div>

            <div className="font-mono text-[15px] leading-7 overflow-y-auto flex-1 pr-2">

              Algorithm Transposee; <br /><br />

              Var <br />
              entier : N, P, i, j ; <br />
              M : Array[100][100] of Integer ; <br />
              T : Array[100][100] of Integer ; <br /><br />

              Begin <br /><br />

              Read(N) ; <br />
              Read(P) ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Read(M[i][j]) ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;T[j][i] {'<-'} M[i][j] ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              Write("Matrice transposee :") ; <br /><br />

              For i {'<-'} 1 to P do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Write(T[i][j]) ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ; <br /><br />

              End.

            </div>

          </div>

        </div>

      </section>
      {/* SLIDE 18 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-10">

        <div className="mb-7">
          <h2 className="text-5xl font-black text-slate-800">
            Rappel — Fonctions & Procédures
          </h2>

          <p className="text-slate-500 text-lg mt-2">
            Découper un programme en blocs réutilisables.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 h-[60%]">

          {/* FONCTION */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">

            <h3 className="text-3xl font-black text-blue-700 mb-4">
              Fonction
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• retourne une valeur</p>
              <p>• utilisée dans un calcul</p>
              <p>• appelée dans une expression</p>
              <p>• possède généralement un Return</p>
            </div>

            <div className="mt-5 bg-white rounded-2xl border border-slate-200 p-4">
              <p className="font-bold text-slate-700 mb-2">
                Exemple :
              </p>

              <div className="font-mono text-[14px] leading-6 text-slate-700">
                Function Somme(a, b) : entier ; <br />
                Begin <br />
                &nbsp;&nbsp;Return a + b ; <br />
                End.
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-blue-100/40 border border-blue-200 p-4">
              <p className="font-bold text-blue-900 mb-1">
                Utilisation :
              </p>

              <p className="text-slate-700 font-mono text-[15px]">
                x {'<-'} Somme(4, 2)
              </p>
            </div>

          </div>

          {/* PROCEDURE */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">

            <h3 className="text-3xl font-black text-emerald-700 mb-4">
              Procédure
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• ne retourne pas de valeur</p>
              <p>• exécute une action</p>
              <p>• sert souvent à afficher ou modifier</p>
              <p>• appelée directement dans le programme</p>
            </div>

            <div className="mt-5 bg-white rounded-2xl border border-slate-200 p-4">
              <p className="font-bold text-slate-700 mb-2">
                Exemple :
              </p>

              <div className="font-mono text-[14px] leading-6 text-slate-700">
                Procedure AfficherMessage() ; <br />
                Begin <br />
                &nbsp;&nbsp;Write("Bonjour") ; <br />
                End.
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-emerald-100/40 border border-emerald-200 p-4">
              <p className="font-bold text-emerald-900 mb-1">
                Utilisation :
              </p>

              <p className="text-slate-700 font-mono text-[15px]">
                AfficherMessage()
              </p>
            </div>

          </div>

        </div>

        {/* SCHEMA */}
        <div className="mt-5 rounded-3xl bg-slate-50 border border-slate-200 p-5">

          <h4 className="text-xl font-black text-slate-800 text-center mb-4">
            Déroulement d’un appel
          </h4>

          <div className="flex items-center justify-center gap-5 text-slate-700 font-semibold text-[17px]">

            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200">
              Programme principal
            </div>

            <span className="text-2xl">→</span>

            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200">
              Appel
            </div>

            <span className="text-2xl">→</span>

            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200">
              Exécution
            </div>

            <span className="text-2xl">→</span>

            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200">
              Résultat
            </div>

          </div>

        </div>

      </section>
      {/* SLIDE 19 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Exercices essentiels — Fonctions & Procédures
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Découper un algorithme en plusieurs blocs réutilisables.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[72%]">
          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 1 — VALEUR ABSOLUE
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire une fonction ValeurAbsolue qui reçoit un entier x et retourne sa valeur absolue.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                x = -7 → 7
              </div>

              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                x = 5 → 5
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 2 — FONCTION MAXIMUM
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire une fonction Maximum qui retourne la plus grande valeur entre deux entiers.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                a = 4, b = 9 → 9
              </div>

              <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
                a = 15, b = 2 → 15
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-blue-700">
                EX 3 — AFFICHER UN TABLEAU
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire une procédure AfficherTableau qui affiche tous les éléments d’un tableau T.
              </p>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
              T = [4, 7, 2, 9]
            </div>
          </div>

          <div className="rounded-3xl p-7 border shadow-sm flex flex-col justify-between bg-emerald-50 border-emerald-100">
            <div>
              <h3 className="text-2xl font-black mb-5 text-emerald-700">
                EX 4 — SOMME D’UN TABLEAU
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Écrire une fonction SommeTableau qui retourne la somme des éléments d’un tableau.
              </p>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-700">
              T = [3, 5, 2, 8] → 18
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 20 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-10">

        <div className="mb-7">
          <h2 className="text-4xl font-black text-slate-800">
            Corrections — Fonctions
          </h2>

          <p className="text-slate-500 mt-2 text-lg">
            Comprendre comment retourner une valeur avec une fonction.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 h-[82%]">

          {/* EX 1 */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">

            <h3 className="text-2xl font-black text-blue-700 mb-4">
              EX 1 — Valeur absolue
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• si x {'<'} 0 → retourner -x</p>
              <p>• sinon retourner x</p>
              <p>• une fonction retourne une valeur</p>
            </div>

            <div className="mt-5 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-[14px] leading-6 flex-1 overflow-y-auto">

              Function ValeurAbsolue(x) : entier ; <br /><br />

              Begin <br /><br />

              If x {'<'} 0 Then <br />
              &nbsp;&nbsp;Return -x ; <br />

              Else <br />
              &nbsp;&nbsp;Return x ; <br />

              Endif ; <br /><br />

              End.

            </div>

          </div>

          {/* EX 2 */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">

            <h3 className="text-2xl font-black text-emerald-700 mb-4">
              EX 2 — Maximum
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• comparer deux valeurs</p>
              <p>• retourner la plus grande</p>
              <p>• une condition suffit</p>
            </div>

            <div className="mt-5 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-[14px] leading-6 flex-1 overflow-y-auto">

              Function Maximum(a, b) : entier ; <br /><br />

              Begin <br /><br />

              If a {'>'} b Then <br />
              &nbsp;&nbsp;Return a ; <br />

              Else <br />
              &nbsp;&nbsp;Return b ; <br />

              Endif ; <br /><br />

              End.

            </div>

          </div>

        </div>

      </section>
      {/* SLIDE 20.5 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-10">

        <div className="mb-7">
          <h2 className="text-4xl font-black text-slate-800">
            Corrections — Procédures & Fonctions
          </h2>

          <p className="text-slate-500 mt-2 text-lg">
            Différencier une procédure d’une fonction.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 h-[82%]">

          {/* EX 3 */}
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">

            <h3 className="text-2xl font-black text-blue-700 mb-4">
              EX 3 — Afficher un tableau
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• aucune valeur retournée</p>
              <p>• une procédure est adaptée</p>
              <p>• parcourir le tableau avec FOR</p>
            </div>

            <div className="mt-5 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-[14px] leading-6 flex-1 overflow-y-auto">

              Procedure AfficherTableau(T, N) ; <br /><br />

              Var <br />
              entier : i ; <br /><br />

              Begin <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              EndFor ; <br /><br />

              End.

            </div>

          </div>

          {/* EX 4 */}
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">

            <h3 className="text-2xl font-black text-emerald-700 mb-4">
              EX 4 — Somme d’un tableau
            </h3>

            <div className="space-y-2 text-slate-700 text-[16px] leading-relaxed">
              <p>• utiliser un accumulateur</p>
              <p>• somme commence à 0</p>
              <p>• retourner le résultat final</p>
            </div>

            <div className="mt-5 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-[14px] leading-6 flex-1 overflow-y-auto">

              Function SommeTableau(T, N) : entier ; <br /><br />

              Var <br />
              entier : i, somme ; <br /><br />

              Begin <br /><br />

              somme {'<-'} 0 ; <br /><br />

              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;somme {'<-'} somme + T[i] ; <br />
              EndFor ; <br /><br />

              Return somme ; <br /><br />

              End.

            </div>

          </div>

        </div>

      </section>
      {/* SLIDE 21 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black text-slate-800">
                Mini défi — Niveau examen
              </h2>
              <p className="text-slate-500 mt-2 text-lg">
                Organiser un problème complexe grâce aux fonctions et procédures.
              </p>
            </div>

            <div className="px-5 py-2 rounded-xl bg-red-50 border border-red-100 text-red-600 font-bold">
              Niveau examen
            </div>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 flex-1">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-between">
              <div>
                <div className="inline-block px-4 py-2 rounded-xl bg-white border border-blue-100 text-blue-700 font-bold mb-6">
                  Analyse des nombres premiers d’un tableau
                </div>

                <p className="text-slate-700 text-lg leading-relaxed">
                  On considère un tableau T de taille maximale 50 contenant des entiers positifs.
                  L’objectif est d’extraire les nombres premiers, de les stocker dans un nouveau tableau P,
                  puis de calculer la moyenne des nombres premiers trouvés.
                </p>

                <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-amber-800 leading-relaxed">
                  <span className="font-bold">Contraintes :</span> utiliser une fonction EstPremier(x),
                  une procédure ExtrairePremiers(...) et une fonction Moyenne(...).
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 shadow-sm">
                <p className="text-slate-500 text-sm mb-2">Exemple</p>
                <p className="text-slate-800 font-semibold">
                  T = [4, 7, 11, 8, 13, 10, 5]
                </p>
                <p className="text-slate-800 font-semibold mt-2">
                  P = [7, 11, 13, 5]
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 shadow-sm">
                <p className="text-slate-500 text-sm mb-2">Moyenne</p>
                <p className="text-emerald-700 text-3xl font-black">
                  9
                </p>
                <p className="text-slate-700 mt-3">
                  (7 + 11 + 13 + 5) / 4
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <p className="text-slate-700 leading-relaxed">
                  Avant d’écrire le programme principal, réfléchir aux rôles de chaque fonction,
                  identifier les entrées et sorties, et séparer clairement les responsabilités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 22 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Correction  Mini Exam — Construction des fonctions et procédures
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Découper le problème en plusieurs responsabilités.
          </p>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-blue-700 mb-5">
                FONCTION — EstPremier
              </h3>

              <div className="space-y-4 text-slate-700 text-[17px] leading-relaxed">
                <p>• tester les diviseurs possibles</p>
                <p>• vérifier si le nombre possède plus de deux diviseurs</p>
                <p>• retourner Vrai ou Faux</p>
              </div>

              <div className="mt-7 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
                Function EstPremier(x) : booleen ; <br />
                If x {'<='} 1 Then <br />
                &nbsp;&nbsp;Return Faux ; <br />
                Endif ; <br />
                For i {'<-'} 2 to x-1 do <br />
                &nbsp;&nbsp;If x MOD i = 0 Then <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Return Faux ; <br />
                &nbsp;&nbsp;Endif ; <br />
                EndFor ; <br />
                Return Vrai ;
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-emerald-700 mb-5">
                PROCÉDURE — ExtrairePremiers
              </h3>

              <div className="space-y-4 text-slate-700 text-[17px] leading-relaxed">
                <p>• parcourir le tableau initial</p>
                <p>• tester chaque valeur</p>
                <p>• copier uniquement les nombres premiers</p>
                <p>• remplir P progressivement</p>
              </div>

              <div className="mt-7 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
                Procedure ExtrairePremiers(T, N, P, NP) ; <br />
                NP {'<-'} 0 ; <br />
                For i {'<-'} 1 to N do <br />
                &nbsp;&nbsp;If EstPremier(T[i]) = Vrai Then <br />
                &nbsp;&nbsp;&nbsp;&nbsp;P[NP] {'<-'} T[i] ; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;NP {'<-'} NP + 1 ; <br />
                &nbsp;&nbsp;Endif ; <br />
                EndFor ;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 23 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Correction Mini Exam Suite — Utilisation des fonctions et procédures
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Assembler les différents blocs dans le programme principal.
          </p>
        </div>

        <div className="grid grid-cols-[0.95fr_1.05fr] gap-8 h-[78%]">
          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-emerald-700 mb-5">
                FONCTION — Moyenne
              </h3>

              <div className="space-y-4 text-slate-700 leading-relaxed text-[17px]">
                <p>• additionner les éléments du tableau</p>
                <p>• diviser par le nombre d’éléments</p>
                <p>• retourner la moyenne finale</p>
              </div>

              <div className="mt-7 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
                Function Moyenne(T, N) : reel ; <br />
                somme {'<-'} 0 ; <br />
                For i {'<-'} 1 to N do <br />
                &nbsp;&nbsp;somme {'<-'} somme + T[i] ; <br />
                EndFor ; <br />
                Return somme / N ;
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-blue-700 mb-5">
                PROGRAMME PRINCIPAL
              </h3>

              <div className="space-y-4 text-slate-700 text-[17px] leading-relaxed">
                <p>• lire le tableau initial</p>
                <p>• extraire les nombres premiers</p>
                <p>• calculer la moyenne</p>
                <p>• afficher les résultats</p>
              </div>

              <div className="mt-7 bg-slate-900 rounded-2xl p-5 text-slate-100 font-mono text-sm leading-7 flex-1 overflow-hidden">
                Read(N) ; <br />
                For i {'<-'} 1 to N do <br />
                &nbsp;&nbsp;Read(T[i]) ; <br />
                EndFor ; <br />
                ExtrairePremiers(T, N, P, NP) ; <br />
                moy {'<-'} Moyenne(P, NP) ; <br />
                For i {'<-'} 0 to NP-1 do <br />
                &nbsp;&nbsp;Write(P[i]) ; <br />
                EndFor ; <br />
                Write(moy) ;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 24 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Pièges classiques — Boucles & Conditions
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Identifier les erreurs les plus fréquentes en algorithmique.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">PIÈGE 1 — Compteur mal initialisé</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Algorithm Exemple1; <br />
              For i {'<-'} 1 to 10 do <br />
              &nbsp;&nbsp;cpt {'<-'} cpt + 1 ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Le compteur n’a jamais été initialisé. Il faut écrire <span className="font-semibold">cpt {'<-'} 0 ;</span> avant la boucle.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">PIÈGE 2 — Accumulateur écrasé</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Algorithm Exemple2; <br />
              somme {'<-'} 0 ; <br />
              For i {'<-'} 1 to 5 do <br />
              &nbsp;&nbsp;somme {'<-'} i ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La variable somme est écrasée à chaque tour. Il faut écrire <span className="font-semibold">somme {'<-'} somme + i ;</span>
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 3 — Condition impossible</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              If x {'<'} 5 And x {'>'} 10 Then <br />
              &nbsp;&nbsp;Write(x) ; <br />
              Endif ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Un nombre ne peut pas être inférieur à 5 et supérieur à 10 en même temps.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 4 — Boucle infinie</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              x {'<-'} 1 ; <br />
              While x {'<'} 10 do <br />
              &nbsp;&nbsp;Write(x) ; <br />
              Done ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La variable x n’est jamais modifiée. Il manque par exemple <span className="font-semibold">x {'<-'} x + 1 ;</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 25 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Pièges classiques — Tableaux
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Éviter les erreurs fréquentes lors des parcours et manipulations de tableaux.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">PIÈGE 1 — Dépassement d’indice</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              T : Array[5] of Integer ; <br />
              For i {'<-'} 0 to 5 do <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Le tableau possède des indices de 0 à 4. L’accès à T[5] provoque une erreur.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">PIÈGE 2 — Indice ou valeur ?</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              If i MOD 2 = 0 Then <br />
              &nbsp;&nbsp;Write(T[i]) ; <br />
              Endif ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La condition teste l’indice i, pas la valeur T[i]. Pour tester les valeurs paires : T[i] MOD 2 = 0.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 3 — Échange incorrect</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              temp {'<-'} T[i] ; <br />
              T[i] {'<-'} T[j] ; <br />
              T[j] {'<-'} T[i] ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La valeur initiale de T[i] est perdue. Il faut écrire T[j] {'<-'} temp.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 4 — Maximum non initialisé</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              For i {'<-'} 0 to 4 do <br />
              &nbsp;&nbsp;If T[i] {'>'} max Then <br />
              &nbsp;&nbsp;&nbsp;&nbsp;max {'<-'} T[i] ; <br />
              &nbsp;&nbsp;Endif ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La variable max n’a jamais été initialisée. Il faut écrire max {'<-'} T[1] avant la boucle.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 26 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Pièges classiques — Matrices
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Éviter les erreurs fréquentes lors des parcours matriciels.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">PIÈGE 1 — Lignes et colonnes inversées</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Write(M[j][i]) ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La lecture normale d’une matrice est M[i][j] avec i pour les lignes et j pour les colonnes.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">PIÈGE 2 — Mauvaises bornes</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              For i {'<-'} 0 to N do <br />
              &nbsp;&nbsp;For j {'<-'} 0 to P do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Write(M[i][j]) ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Les indices vont de 0 à N-1 et de 0 à P-1.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 3 — Diagonale secondaire</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              If i + j = N Then <br />
              &nbsp;&nbsp;Write(M[i][j]) ; <br />
              Endif ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La diagonale secondaire vérifie i + j = N - 1, et non i + j = N.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 4 — Somme non réinitialisée</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              somme {'<-'} 0 ; <br />
              For j {'<-'} 1 to P do <br />
              &nbsp;&nbsp;For i {'<-'} 1 to N do <br />
              &nbsp;&nbsp;&nbsp;&nbsp;somme {'<-'} somme + M[i][j] ; <br />
              &nbsp;&nbsp;EndFor ; <br />
              &nbsp;&nbsp;Write(somme) ; <br />
              EndFor ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La variable somme doit être réinitialisée à 0 pour chaque colonne.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 27 */}
      <section className="aspect-video bg-white rounded-[34px] shadow-2xl border border-slate-200 overflow-hidden p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-slate-800">
            Pièges classiques — Fonctions & Procédures
          </h2>
          <p className="text-slate-500 mt-2 text-lg">
            Comprendre les erreurs fréquentes lors du découpage d’un algorithme.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 h-[78%]">
          <div className="rounded-3xl bg-blue-50 border border-blue-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-blue-700 mb-4">PIÈGE 1 — Oubli du Return</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Function Somme(a, b) : entier ; <br />
              s {'<-'} a + b ; <br />
              End ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Une fonction doit obligatoirement retourner une valeur. Il manque Return s.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-emerald-700 mb-4">PIÈGE 2 — Fonction ou procédure ?</h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Procedure Maximum(a, b) ; <br />
              If a {'>'} b Then <br />
              &nbsp;&nbsp;Return a ; <br />
              Else <br />
              &nbsp;&nbsp;Return b ; <br />
              Endif ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Une procédure ne retourne pas de valeur. Il faut soit utiliser une fonction, soit modifier une variable avec IO.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 3 — Paramètre non modifié</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Procedure Ajouter1(I x : entier) ; <br />
              x {'<-'} x + 1 ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I signifie entrée uniquement. La variable originale n’est pas modifiée. Il faut utiliser IO.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-4">PIÈGE 4 — Variable locale confondue</h3>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 font-mono text-sm leading-7 text-slate-700">
              Function Double(x) : entier ; <br />
              y {'<-'} x * 2 ; <br />
              Return y ;
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              La variable y existe uniquement dans la fonction. Elle n’existe pas dans le programme principal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}