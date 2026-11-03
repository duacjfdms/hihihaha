import { useState } from 'react'
import { ArrowLeft, ExternalLink, RefreshCw, Sparkles } from 'lucide-react'

interface SyntheraWizardProps {
  onBack: () => void
}

export function SyntheraWizard({ onBack }: SyntheraWizardProps) {
  const [iframeKey, setIframeKey] = useState(0)

  const handleReload = () => {
    setIframeKey((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-[#f2f4f6] dark:bg-[#101012] text-slate-800 dark:text-slate-100 overflow-hidden">
      {/* Top Bar for React Integration */}
      <header className="h-14 bg-white/90 dark:bg-[#1c1c1f]/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-semibold transition cursor-pointer text-slate-700 dark:text-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로 (Hellow Synthera)</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
            <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              Synthera 판매실적 보고서 마법사
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            title="마법사 새로고침"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <a
            href="/synthera-wizard.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition text-slate-600 dark:text-slate-300"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>새 탭에서 열기</span>
          </a>
        </div>
      </header>

      {/* Embedded Wizard Container */}
      <main className="flex-1 w-full h-[calc(100vh-3.5rem)] relative">
        <iframe
          key={iframeKey}
          src="/synthera-wizard.html"
          title="Synthera 판매실적 보고서 마법사"
          className="w-full h-full border-0 block"
          allow="clipboard-write; downloads"
        />
      </main>
    </div>
  )
}

export default SyntheraWizard
