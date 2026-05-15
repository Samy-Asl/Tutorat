export default function CodeBlock({ code, title = 'Pseudo-code', lang = 'algo' }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 dark:border-slate-700">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-slate-800 dark:bg-slate-900 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-slate-400 text-xs font-medium ml-1">{title}</span>
        </div>
        <span className="text-slate-600 text-xs uppercase tracking-wider">{lang}</span>
      </div>
      {/* Code body */}
      <pre className="bg-slate-900 dark:bg-slate-950 p-5 text-slate-200 text-sm leading-7 overflow-x-auto code-font whitespace-pre">
        {code}
      </pre>
    </div>
  );
}
