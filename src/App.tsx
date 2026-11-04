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
      icon: <FileSpreadsheet className="w-5 h-5 text-[#054d28]" />,
      badgeBg: 'bg-[#e2f6d5]',
      cardBg: 'bg-white',
      textColor: 'text-[#0e0f0c]',
      descColor: 'text-[#454745]',
      title: '일일 일지 & 원장 분석',
      desc: '12개월 원장 엑셀을 업로드하면 일자·월·분기·연도별로 자동 분류 및 매출처·제품 코드를 통합 검색합니다.'
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#0e0f0c]" />,
      badgeBg: 'bg-[#9fe870]',
      cardBg: 'bg-white',
      textColor: 'text-[#0e0f0c]',
      descColor: 'text-[#454745]',
      title: '매출 추이 & 예상 차트',
      desc: '선형 추세, 평균 증가율, 이동평균 방식을 통해 다음 기간 및 연간 판매액을 실시간 예측합니다.'
    },
    {
      icon: <Layers className="w-5 h-5 text-[#0e0f0c]" />,
      badgeBg: 'bg-[#ffc091]',
      cardBg: 'bg-white',
      textColor: 'text-[#0e0f0c]',
      descColor: 'text-[#454745]',
      title: '핵심 KPI & 실적 상세',
      desc: '목표 달성률, 직전 기간 대비 증감, 제품 코드·매출처 코드별 비중 집계 표를 손쉽게 편집합니다.'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#0e0f0c]" />,
      badgeBg: 'bg-[#9fe870]',
      cardBg: 'bg-[#0e0f0c]',
      textColor: 'text-[#9fe870]',
      descColor: 'text-[#e8ebe6]',
      title: '오피스 4종 일괄 저장',
      desc: '작성된 내용을 Word(.docx), Excel(.xlsx), PowerPoint(.pptx), 한글 문서로 즉시 다운로드합니다.'
    }
  ]

  return (
    <div
      className="min-h-screen bg-[#e8ebe6] text-[#0e0f0c] flex flex-col justify-between selection:bg-[#9fe870] selection:text-[#0e0f0c] relative overflow-x-hidden"
      style={{ fontFamily: "'Inter', 'Pretendard', system-ui, -apple-system, sans-serif" }}
    >
      {/* Sticky Nav Bar — Wise nav-bar token */}
      <header className="bg-white border-b border-[#0e0f0c]/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#9fe870] text-[#0e0f0c] flex items-center justify-center font-black text-xl tracking-tight">
              S
            </span>
            <span className="font-black text-xl tracking-tight text-[#0e0f0c]">
              Synthera
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2f6d5] text-[#054d28] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2ead4b]" />
              Wise Design System · React 19
            </span>

            <button
              onClick={() => setCurrentPage('wizard')}
              className="px-6 py-3 rounded-[24px] bg-[#9fe870] hover:bg-[#cdffad] active:bg-[#c5edab] text-[#0e0f0c] text-sm font-semibold transition flex items-center gap-2 cursor-pointer"
            >
              <span>입장하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Band — Sage canvas (#e8ebe6) with heavy display-mega 900 typography */}
      <main className="max-w-[1200px] w-full mx-auto px-6 py-12 sm:py-16 flex-1 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2f6d5] text-[#054d28] text-sm font-semibold mb-6">
          <Zap className="w-4 h-4 text-[#054d28]" />
          <span>판매실적 보고서 통합 시스템</span>
        </div>

        {/* Big Hellow Synthera Title — Weight 900 Wise Display Scale */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tight text-[#0e0f0c] select-none"
          style={{ lineHeight: 0.92, letterSpacing: '-0.03em' }}
        >
          Hellow{' '}
          <span className="inline-block bg-[#9fe870] text-[#0e0f0c] px-5 py-1 rounded-[24px]">
            Synthera
          </span>
        </h1>

        <p className="mt-7 text-[#454745] text-lg sm:text-xl max-w-2xl leading-relaxed font-normal">
          판매실적 일일 일지부터 제품·매출처 코드 분석, 매출 추이 예측, 그리고
          Word·Excel·PowerPoint·한글 문서 저장까지 8단계 마법사로 한 번에 완성하세요.
        </p>

        {/* Action Buttons — 24px pill radius */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setCurrentPage('wizard')}
            className="w-full sm:w-auto px-8 py-4 rounded-[24px] bg-[#9fe870] hover:bg-[#cdffad] active:scale-[0.99] text-[#0e0f0c] font-semibold text-base sm:text-lg transition flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Synthera 입장하기</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-full sm:w-auto px-6 py-4 rounded-[24px] bg-white hover:bg-[#e2f6d5] border border-[#0e0f0c] text-[#0e0f0c] text-base font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#054d28]" />
            <span>클릭 카운트: {count}</span>
          </button>
        </div>

        {/* Feature Cards Grid — White cards + polarity-flipped dark card on sage canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full text-left">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={`p-6 rounded-[24px] ${feat.cardBg} transition duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-11 h-11 rounded-full ${feat.badgeBg} flex items-center justify-center mb-5`}>
                  {feat.icon}
                </div>
                <h3 className={`font-bold text-lg tracking-tight ${feat.textColor}`}>
                  {feat.title}
                </h3>
                <p className={`text-sm ${feat.descColor} mt-2 leading-relaxed`}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Guide Pill */}
        <div className="mt-10 w-full max-w-2xl bg-white rounded-[24px] px-6 py-4 text-left text-sm text-[#454745] flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </span>
          <span>
            상단의 <strong className="text-[#0e0f0c] font-semibold">[입장하기]</strong> 버튼을 누르면 8단계 판매실적 보고서 작성 마법사로 전환됩니다.
          </span>
        </div>
      </main>

      {/* Dark Footer Band — Wise footer token (#0e0f0c bg, #e8ebe6 text) */}
      <footer className="bg-[#0e0f0c] text-[#e8ebe6] py-8 px-6 text-center text-sm">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#9fe870] text-[#0e0f0c] font-black text-xs flex items-center justify-center">
              S
            </span>
            <span className="font-bold text-white">Synthera</span>
          </div>
          <p className="text-[#868685]">© 2026 Synthera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
