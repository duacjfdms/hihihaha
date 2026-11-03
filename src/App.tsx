import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-medium text-indigo-400 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          React 19 + Vite + Tailwind CSS v4
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm select-none">
          Hellow Synthera
        </h1>

        <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-md">
          React 프로젝트 세팅이 완료되었습니다.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium transition shadow-lg shadow-indigo-600/25 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            클릭 카운트: {count}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
