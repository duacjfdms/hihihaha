import { useState } from 'react'
import {
  Atom,
  CheckCircle2,
  Code2,
  Layers,
  Palette,
  Sparkles,
  Zap
} from 'lucide-react'

export function App() {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Vite 8',
      desc: '초고속 HMR 및 개발 서버 환경'
    },
    {
      icon: <Atom className="w-5 h-5 text-sky-500" />,
      title: 'React 19',
      desc: '최신 React 기능과 훅 지원'
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: 'TypeScript',
      desc: '정적 타입 체크 및 향상된 개발자 경험'
    },
    {
      icon: <Palette className="w-5 h-5 text-teal-500" />,
      title: 'Tailwind CSS v4',
      desc: '@tailwindcss/vite 플러그인 기반 신속한 스타일링'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              React + Vite Starter
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Environment Ready
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-indigo-400 mb-6">
          <Code2 className="w-4 h-4" />
          <span>성공적으로 React 개발 환경이 세팅되었습니다</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          빠르고 현대적인{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            React 개발 환경
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl">
          Vite, TypeScript, Tailwind CSS v4가 구성되었습니다.
          이제 원하는 웹 애플리케이션을 자유롭게 구축해보세요!
        </p>

        {/* Counter Interactive Demo */}
        <div className="mt-8 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-sm flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium transition shadow-lg shadow-indigo-600/25 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            클릭 카운터: {count}
          </button>
          <span className="text-sm text-slate-400">
            버튼을 눌러 React 상태 관리와 상호작용을 테스트해보세요.
          </span>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full text-left">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition duration-200"
            >
              <div className="p-2.5 rounded-xl bg-slate-800/60 w-fit mb-3 border border-slate-700/50">
                {feat.icon}
              </div>
              <h3 className="font-semibold text-slate-200 text-base">{feat.title}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-12 w-full max-w-2xl bg-slate-900/30 border border-slate-800/60 rounded-xl p-5 text-left text-sm text-slate-300">
          <div className="flex items-center gap-2 font-semibold text-slate-200 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>시작하기 팁</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
            <li>
              컴포넌트 수정: <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src/App.tsx</code>
            </li>
            <li>
              전역 스타일 설정: <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src/index.css</code>
            </li>
            <li>
              경로 별칭(Alias): <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">@/</code> 로 <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">src</code> 폴더 참조 가능
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        <p>Ready to build something awesome.</p>
      </footer>
    </div>
  )
}

export default App
