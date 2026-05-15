// Badge component
export function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
    red: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800',
    amber: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    violet: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${colors[color]}`}>
      {children}
    </span>
  );
}

// Section header
export function SectionHeader({ badge, badgeColor = 'blue', title, subtitle }) {
  return (
    <div className="mb-8">
      {badge && <Badge color={badgeColor}>{badge}</Badge>}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Divider between sections
export function SectionDivider() {
  return <div className="border-t border-slate-100 dark:border-slate-800 my-14" />;
}

// Exercise card
export function ExerciceCard({ number, title, description, examples, color = 'blue' }) {
  const colors = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-100 dark:border-blue-900',
      badge: 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800',
      title: 'text-blue-700 dark:text-blue-300',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-100 dark:border-emerald-900',
      badge: 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800',
      title: 'text-emerald-700 dark:text-emerald-300',
    },
  };
  const c = colors[color] || colors.blue;
  return (
    <div className={`rounded-2xl border p-6 flex flex-col gap-4 ${c.bg} ${c.border}`}>
      <div>
        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-lg border mb-3 ${c.badge}`}>
          EX {number}
        </span>
        <h3 className={`text-base font-black mb-2 ${c.title}`}>{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
      {examples && examples.length > 0 && (
        <div className="space-y-2">
          {examples.map((ex, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 px-4 py-2.5 text-slate-700 dark:text-slate-300 text-sm code-font">
              {ex}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Inline hint box
export function HintBox({ children, color = 'amber' }) {
  const colors = {
    amber: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-300',
    blue: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300',
  };
  return (
    <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${colors[color]}`}>
      {children}
    </div>
  );
}

// Correction block: method hints + code side by side
export function CorrectionBlock({ number, title, color = 'blue', hints, code, codeTitle }) {
  const colors = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-100 dark:border-blue-900',
      title: 'text-blue-700 dark:text-blue-300',
      dot: 'text-blue-400',
    },
    emerald: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-100 dark:border-emerald-900',
      title: 'text-emerald-700 dark:text-emerald-300',
      dot: 'text-emerald-400',
    },
    slate: {
      bg: 'bg-slate-50 dark:bg-slate-800/50',
      border: 'border-slate-200 dark:border-slate-700',
      title: 'text-slate-700 dark:text-slate-300',
      dot: 'text-slate-400',
    },
  };
  const c = colors[color] || colors.blue;
  return (
    <div className={`rounded-2xl border overflow-hidden ${c.bg} ${c.border}`}>
      {/* Header */}
      <div className={`px-5 py-3.5 border-b ${c.border}`}>
        <span className={`text-xs font-bold uppercase tracking-wider ${c.dot}`}>EX {number}</span>
        <h3 className={`font-black text-base mt-0.5 ${c.title}`}>{title}</h3>
      </div>
      {/* Content */}
      <div className="p-5 grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        {/* Hints */}
        {hints && hints.length > 0 && (
          <div className="space-y-2">
            {hints.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <span className={`mt-0.5 text-xs font-black ${c.dot}`}>→</span>
                <span className="leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        )}
        {/* Code */}
        {code && (
          <div className="rounded-xl overflow-hidden border border-slate-800">
            <div className="bg-slate-800 dark:bg-slate-900 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-slate-400 text-xs ml-1">{codeTitle || 'Pseudo-code'}</span>
            </div>
            <pre className="bg-slate-900 dark:bg-slate-950 px-4 py-4 text-slate-200 text-xs leading-6 overflow-x-auto code-font whitespace-pre">
              {code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Piège card
export function PiegeCard({ number, title, badCode, explanation, color = 'blue' }) {
  const colors = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-100 dark:border-blue-900', title: 'text-blue-700 dark:text-blue-300' },
    emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', border: 'border-emerald-100 dark:border-emerald-900', title: 'text-emerald-700 dark:text-emerald-300' },
    slate: { bg: 'bg-white dark:bg-slate-800/50', border: 'border-slate-200 dark:border-slate-700', title: 'text-slate-800 dark:text-slate-200' },
  };
  const c = colors[color] || colors.slate;
  return (
    <div className={`rounded-2xl border p-5 flex flex-col gap-4 ${c.bg} ${c.border}`}>
      <div>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 mb-2">
          ⚠️ PIÈGE {number}
        </span>
        <h3 className={`font-black text-base ${c.title}`}>{title}</h3>
      </div>
      {badCode && (
        <pre className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-700 dark:text-slate-300 text-xs leading-6 overflow-x-auto code-font whitespace-pre">
          {badCode}
        </pre>
      )}
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{explanation}</p>
    </div>
  );
}

// Exam challenge card
export function ExamChallenge({ title, description, hint, structure, examples, observation }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Header band */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 flex items-center justify-between">
        <span className="text-white font-black text-sm">⚡ Mini Défi — Niveau Examen</span>
        <span className="text-white/80 text-xs font-semibold">Essaie seul d'abord !</span>
      </div>
      <div className="bg-white dark:bg-slate-800/50 p-6">
        {/* Title + description */}
        <div className="mb-6">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{title}</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Left column */}
          <div className="space-y-4">
            {hint && (
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">💡 Indice</p>
                <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">{hint}</p>
              </div>
            )}
            {structure && (
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <p className="text-xs font-bold text-slate-500 mb-2">Structure logique</p>
                <pre className="text-slate-700 dark:text-slate-300 text-xs leading-6 code-font whitespace-pre">{structure}</pre>
              </div>
            )}
          </div>

          {/* Right column - examples */}
          <div className="space-y-3">
            {examples && examples.map((ex, i) => (
              <div key={i} className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-xl p-4">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Exemple {i + 1}</p>
                <p className="text-slate-800 dark:text-slate-200 font-semibold text-sm leading-relaxed">{ex.input}</p>
                {ex.output && <p className="text-emerald-700 dark:text-emerald-300 font-black text-lg mt-1">{ex.output}</p>}
              </div>
            ))}
            {observation && (
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{observation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Recall visual section for Tableaux / Matrices / Fonctions
export function RappelCard({ color = 'blue', title, children }) {
  const colors = {
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900',
    slate: 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700',
  };
  const titleColors = {
    blue: 'text-blue-700 dark:text-blue-300',
    emerald: 'text-emerald-700 dark:text-emerald-300',
    slate: 'text-slate-800 dark:text-slate-200',
  };
  return (
    <div className={`rounded-2xl border p-5 ${colors[color]}`}>
      <h3 className={`font-black text-lg mb-4 ${titleColors[color]}`}>{title}</h3>
      {children}
    </div>
  );
}
