import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Layers,
  Sparkles,
  Zap
} from 'lucide-react'
import SyntheraWizard from './components/SyntheraWizard'

export function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'wizard'>('landing')
  const [count, setCount] = useState(0)

  // Listen for message from iframe ("메인으로" button inside wizard)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'NAVIGATE_HOME') {
        setCurrentPage('landing')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  if (currentPage === 'wizard') {
    return <SyntheraWizard onBack={() => setCurrentPage('landing')} />
  }

  const features = [
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      title: '일일 일지 & 원장 분석',
      desc: '12개월 원장 엑셀을 업로드하면 일자·월·분기·연도별로 자동 분류 및 판매처를 검색합니다.'
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-sky-400" />,
      title: '매출 추이 & 예상 차트',
      desc: '선형 추세, 평균 증가율, 이동평균 방식을 통해 다음 기간 및 연간 판매액을 예측합니다.'
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: '핵심 KPI & 실적 상세',
      desc: '목표 달성률, 전년 대비 증감, 제품별·판매처별 비중 집계 표를 손쉽게 편집합니다.'
    },
    {
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      title: '오피스 4종 일괄 저장',
      desc: '작성된 내용을 Word(.docx), Excel(.xlsx), PowerPoint(.pptx), 한글 문서로 즉시 다운로드합니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/15 to-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 23.5V8.5C6 7.67 6.67 7 7.5 7H24.5C25.33 7 26 7.67 26 8.5V23.5C26 24.33 25.33 25 24.5 25H7.5C6.67 25 6 24.33 6 23.5Z" stroke="white" strokeOpacity=".4" strokeWidth="1.5" />
                <path d="M9 20.5L13.1 16.4L16.2 18.8L23 11.8" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 11.8H23V16.3" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Synthera
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              React 19 + Vite
            </span>

            <button
              onClick={() => setCurrentPage('wizard')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white text-xs sm:text-sm font-semibold transition shadow-md shadow-indigo-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>입장하기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-14 sm:py-20 flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-indigo-400 mb-8 backdrop-blur-sm shadow-sm">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>판매실적 보고서 통합 시스템</span>
        </div>

        {/* Big Hellow Synthera Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm select-none">
          Hellow Synthera
        </h1>

        <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          판매실적 일일 일지부터 매출 추이 분석, AI 예상치 산출, 그리고
          Word·Excel·PowerPoint·한글 문서 파일 저장까지 8단계 마법사로 한 번에 완성하세요.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setCurrentPage('wizard')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:opacity-95 active:scale-95 text-white font-bold text-base sm:text-lg transition shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Synthera 입장하기</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-medium transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>클릭 카운트: {count}</span>
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full text-left">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/80 transition duration-200 backdrop-blur-sm"
            >
              <div className="p-2.5 rounded-xl bg-slate-800/70 w-fit mb-3 border border-slate-700/50">
                {feat.icon}
              </div>
              <h3 className="font-semibold text-slate-200 text-sm">{feat.title}</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Guide Pill */}
        <div className="mt-12 w-full max-w-xl bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 text-left text-xs text-slate-400 flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            상단의 <strong>[입장하기]</strong> 버튼을 누르면 8단계 판매실적 보고서 작성 마법사로 전환됩니다.
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 relative z-10">
        <p>© Synthera. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
