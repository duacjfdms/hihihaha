import { useEffect, useState, useRef } from 'react'
import SyntheraWizard from './components/SyntheraWizard'

export function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'wizard'>('landing')
  const [coverGone, setCoverGone] = useState(false)
  const stepsRef = useRef<HTMLDivElement>(null)

  // Listen for message from iframe ("메인으로" button inside wizard)
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'NAVIGATE_HOME') {
        setCurrentPage('landing')
        setCoverGone(true) // 메인으로 돌아올 때는 히어로 화면으로 바로 표시
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const scrollToSteps = (e: React.MouseEvent) => {
    e.preventDefault()
    stepsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  if (currentPage === 'wizard') {
    return <SyntheraWizard onBack={() => {
      setCurrentPage('landing')
      setCoverGone(true)
    }} />
  }

  return (
    <div
      className="min-h-screen bg-[#E8EBE6] text-[#0E0F0C] relative selection:bg-[#9FE870] selection:text-[#0E0F0C]"
      style={{ fontFamily: "'Inter', 'Pretendard', 'Noto Sans KR', system-ui, sans-serif" }}
    >
      {/* ======================================================== */}
      {/* 1. 표지 (Cover Overlay) — 홈 1/4                           */}
      {/* ======================================================== */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-between transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] bg-[#054D28] text-white ${
          coverGone ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
      >
        {/* Cover Photo with Bottom Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/image1.jpg"
            alt="Synthera 표지"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#054D28]/40 via-transparent via-40% to-[#054D28] to-85%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#054D28] via-[#054D28]/80 via-30% to-transparent" />
        </div>

        {/* Cover Top Header */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between font-extrabold text-sm sm:text-base">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#9FE870] text-[#0E0F0C] flex items-center justify-center font-black text-lg">
              S
            </span>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white">Synthera</span>
          </div>
          <span className="text-white/80 tracking-widest text-xs sm:text-sm font-bold">AI GPASS</span>
        </div>

        {/* Cover Bottom Content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 sm:px-10 pb-10 sm:pb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h1
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tight text-white leading-none select-none drop-shadow-md"
              style={{ letterSpacing: '-0.05em' }}
            >
              Synthera
            </h1>
            <p className="mt-3 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-[#E2F6D5] tracking-tight">
              판매실적 보고서 통합 시스템
            </p>
          </div>

          <button
            type="button"
            onClick={() => setCoverGone(true)}
            className="self-start sm:self-auto px-8 sm:px-11 py-4 sm:py-5 rounded-full bg-[#9FE870] hover:bg-[#B9F293] active:scale-95 text-[#0E0F0C] font-extrabold text-lg sm:text-xl transition-all cursor-pointer shadow-xl flex items-center justify-center"
          >
            시작하기
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. 히어로 (Hero Section) — 홈 2/4                         */}
      {/* ======================================================== */}
      <section className="bg-[#054D28] text-white overflow-hidden relative">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          {/* Hero Top Navbar */}
          <header className="flex items-center justify-between py-6 border-b border-white/10">
            <button
              onClick={() => setCoverGone(false)}
              className="flex items-center gap-2.5 cursor-pointer group bg-transparent border-0 text-left"
              title="표지로 이동"
            >
              <span className="w-10 h-10 rounded-full bg-[#9FE870] text-[#0E0F0C] flex items-center justify-center font-black text-xl group-hover:scale-105 transition-transform">
                S
              </span>
              <span className="text-2xl font-black tracking-tight text-white">Synthera</span>
            </button>

            <button
              onClick={() => setCurrentPage('wizard')}
              className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#9FE870] hover:bg-[#B9F293] active:scale-95 text-[#0E0F0C] font-extrabold text-sm sm:text-base transition cursor-pointer"
            >
              보고서 만들기
            </button>
          </header>

          {/* Hero Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16 sm:py-24">
            {/* Left Headline & Action */}
            <div className="lg:col-span-7">
              <h1
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.12] tracking-tight"
                style={{ letterSpacing: '-0.04em' }}
              >
                <span>엑셀 파일 더미에서</span>
                <br />
                <span>보고서 한 부로</span>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-[#DCEBDD] leading-relaxed max-w-xl font-normal">
                Synthera는 판매실적 보고서 프로그램입니다. 12개월 원장을 올리면 기간별로 집계하고,
                전망과 KPI를 넣어 보고서를 완성합니다.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-7">
                <button
                  onClick={() => setCurrentPage('wizard')}
                  className="px-8 sm:px-9 py-4 rounded-full bg-[#9FE870] hover:bg-[#B9F293] active:scale-95 text-[#0E0F0C] font-extrabold text-lg transition cursor-pointer shadow-lg"
                >
                  보고서 만들기
                </button>
                <a
                  href="#steps"
                  onClick={scrollToSteps}
                  className="font-bold text-[#E2F6D5] hover:text-[#9FE870] text-base sm:text-lg underline underline-offset-8 transition"
                >
                  쓰는 순서 보기
                </a>
              </div>
            </div>

            {/* Right Report Preview Card with Floating Chips */}
            <div className="lg:col-span-5 relative flex justify-center py-6">
              {/* Floating Excel Chips (Animated visual metaphor) */}
              <div className="absolute -left-4 top-2 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#0E0F0C] text-xs font-bold shadow-xl -rotate-6 animate-pulse">
                <span className="w-5 h-6 rounded bg-[#1E7A47] text-white flex items-center justify-center text-[10px] font-black">X</span>
                <span>원장_최종.xlsx</span>
              </div>
              <div className="absolute right-0 top-6 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-[#0E0F0C] text-xs font-bold shadow-xl rotate-6">
                <span className="w-5 h-6 rounded bg-[#1E7A47] text-white flex items-center justify-center text-[10px] font-black">X</span>
                <span>원장_최종_진짜.xlsx</span>
              </div>
              <div className="absolute -left-6 bottom-8 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-[#0E0F0C] text-xs font-bold shadow-xl 3deg">
                <span className="w-5 h-6 rounded bg-[#1E7A47] text-white flex items-center justify-center text-[10px] font-black">X</span>
                <span>3분기실적_취합.xlsx</span>
              </div>
              <div className="absolute right-4 bottom-2 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#0E0F0C] text-xs font-bold shadow-xl -rotate-3">
                <span className="w-5 h-6 rounded bg-[#C8502B] text-white flex items-center justify-center text-[10px] font-black">P</span>
                <span>보고서_v7_최종.pptx</span>
              </div>

              {/* The Actual Report Preview Card */}
              <div className="w-full max-w-[380px] bg-white text-[#0E0F0C] rounded-2xl p-7 shadow-2xl relative z-10 border border-white/20">
                <h3 className="text-2xl font-black tracking-tight text-[#0E0F0C] m-0">
                  판매실적 보고서
                </h3>
                <p className="text-xs text-[#6B6F68] mt-1 mb-4 font-semibold">
                  영업1팀, 2026년 3분기
                </p>
                <div className="border-t-2 border-[#0E0F0C] mb-5" />

                <p className="text-xs font-bold text-[#0E0F0C] mb-2">매출 추이와 전망</p>
                
                {/* Bar Chart Simulation */}
                <div className="flex items-end gap-2.5 h-28 mb-5 pb-1 border-b-2 border-[#0E0F0C]">
                  <div className="flex-1 bg-[#054D28] rounded-t-sm" style={{ height: '45%' }} />
                  <div className="flex-1 bg-[#054D28] rounded-t-sm" style={{ height: '60%' }} />
                  <div className="flex-1 bg-[#054D28] rounded-t-sm" style={{ height: '54%' }} />
                  <div className="flex-1 bg-[#054D28] rounded-t-sm" style={{ height: '75%' }} />
                  <div className="flex-1 bg-[#054D28] rounded-t-sm" style={{ height: '82%' }} />
                  {/* Forecast Bar (Striped Lime) */}
                  <div
                    className="flex-1 rounded-t-sm border border-[#054D28]"
                    style={{
                      height: '96%',
                      backgroundImage:
                        'repeating-linear-gradient(135deg, #9FE870 0, #9FE870 5px, #C8F2AC 5px, #C8F2AC 10px)'
                    }}
                  />
                </div>

                {/* Text skeleton lines */}
                <div className="h-2 rounded bg-[#E1E4DE] mb-2 w-full" />
                <div className="h-2 rounded bg-[#E1E4DE] mb-2 w-4/5" />
                <div className="h-2 rounded bg-[#E1E4DE] mb-5 w-3/5" />

                {/* Export Formats Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E1E4DE]">
                  <span className="px-3 py-1 rounded-full bg-[#E2F6D5] text-[#054D28] text-xs font-bold">
                    Word
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E2F6D5] text-[#054D28] text-xs font-bold">
                    Excel
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E2F6D5] text-[#054D28] text-xs font-bold">
                    PowerPoint
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E2F6D5] text-[#054D28] text-xs font-bold">
                    한글용
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. 전후 비교 (Before / After) — 홈 3/4                   */}
      {/* ======================================================== */}
      <section className="w-full">
        {/* Top Split Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-64 sm:h-80 md:h-[380px] overflow-hidden bg-[#14171F]">
            <img
              src="/images/image3.jpg"
              alt="보고 전날 밤늦은 회의실 모습"
              className="w-[200%] max-w-none h-full object-cover object-left"
            />
          </div>
          <div className="w-full h-64 sm:h-80 md:h-[380px] overflow-hidden bg-[#9FE870]">
            <img
              src="/images/image3.jpg"
              alt="Synthera로 밝아진 회의실 모습"
              className="w-[200%] max-w-none h-full object-cover object-right -translate-x-1/2"
            />
          </div>
        </div>

        {/* Bottom Split Comparison Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Before Text Column */}
          <div className="bg-[#14171F] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-8">
              보고 전날 밤이 길어지는 이유
            </h2>
            <ul className="space-y-4 text-base sm:text-lg font-semibold text-white/90">
              <li className="pt-4 border-t border-white/20">어느 파일이 최종본인지 찾아야 합니다</li>
              <li className="pt-4 border-t border-white/20">표마다 합계를 다시 맞춰야 합니다</li>
              <li className="pt-4 border-t border-white/20">추가 요청이 오면 형식별로 다시 만듭니다</li>
            </ul>
          </div>

          {/* After Text Column */}
          <div className="bg-[#9FE870] text-[#0E0F0C] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-8">
              Synthera로 바뀌는 일
            </h2>
            <ul className="space-y-4 text-base sm:text-lg font-bold text-[#0E0F0C]">
              <li className="pt-4 border-t border-[#054D28]/30">원장 하나를 올리면 기간별로 집계합니다</li>
              <li className="pt-4 border-t border-[#054D28]/30">거래처와 제품 기준으로 바로 찾아봅니다</li>
              <li className="pt-4 border-t border-[#054D28]/30">한 번의 작업으로 네 가지 형식에 저장합니다</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. 사용 순서 (4 Steps) & 실무 특징 — 홈 4/4              */}
      {/* ======================================================== */}
      <section ref={stepsRef} id="steps" className="py-20 sm:py-28 max-w-[1240px] mx-auto px-6 sm:px-10">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0E0F0C] mb-14">
          네 단계면 끝납니다
        </h2>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Step 1 */}
          <div className="relative pt-18">
            <div className="hidden lg:block absolute left-16 right-[-24px] top-7 h-[2px] bg-[#B7C2B4]" />
            <div className="w-14 h-14 rounded-full bg-[#054D28] text-[#9FE870] flex items-center justify-center font-bold text-xl absolute top-0 left-0 shadow-md z-10">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="4" width="14" height="17" rx="2.5" />
                <path d="M9 4.5V3h6v1.5M9 10.5h6M9 15h6" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-[#0E0F0C] tracking-tight mb-2">
              1. 보고서 정보
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              부서, 보고 기간, 작성자를 입력합니다.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pt-18">
            <div className="hidden lg:block absolute left-16 right-[-24px] top-7 h-[2px] bg-[#B7C2B4]" />
            <div className="w-14 h-14 rounded-full bg-[#054D28] text-[#9FE870] flex items-center justify-center font-bold text-xl absolute top-0 left-0 shadow-md z-10">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z" />
                <path d="M12 17v-5M9.5 14 12 11.5l2.5 2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-[#0E0F0C] tracking-tight mb-2">
              2. 원장 불러오기
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              엑셀 원장을 올리고 연, 분기, 월, 일자 중 기간을 고릅니다.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pt-18">
            <div className="hidden lg:block absolute left-16 right-[-24px] top-7 h-[2px] bg-[#B7C2B4]" />
            <div className="w-14 h-14 rounded-full bg-[#054D28] text-[#9FE870] flex items-center justify-center font-bold text-xl absolute top-0 left-0 shadow-md z-10">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l1-4.5L16.2 4.3a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.5 19Z" />
                <path d="M14.5 6l3.5 3.5" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-[#0E0F0C] tracking-tight mb-2">
              3. 보고서 작성
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              자동으로 채워진 요약, 지표, 분석을 확인하고 고칩니다.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative pt-18">
            <div className="w-14 h-14 rounded-full bg-[#054D28] text-[#9FE870] flex items-center justify-center font-bold text-xl absolute top-0 left-0 shadow-md z-10">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-[#0E0F0C] tracking-tight mb-2">
              4. 파일로 저장
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              Word, Excel, PowerPoint, 한글용 중 필요한 형식을 내려받습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. 실무 정보 (Facts)                                     */}
      {/* ======================================================== */}
      <section className="bg-white py-20 border-t border-b border-[#D5DAD2]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#0E0F0C] mb-3">
              샘플 원장으로 먼저 해 보세요
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              2단계에서 12개월 샘플 엑셀을 내려받아 올리면, 실제 자료 없이도 저장까지 해 볼 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#0E0F0C] mb-3">
              전망 방법을 고릅니다
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              선형 추세, 평균 증가율, 최근 3기간 평균 중 자료에 맞는 방법을 선택합니다.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#0E0F0C] mb-3">
              원장은 브라우저에서 처리합니다
            </h3>
            <p className="text-[#454745] text-base leading-relaxed">
              올린 엑셀 파일은 서버로 보내지 않고 지금 쓰는 브라우저 안에서 안전하게 읽습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. 마무리 CTA (End Banner)                               */}
      {/* ======================================================== */}
      <footer className="bg-[#054D28] text-white pt-20 pb-10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              다음 보고서를 지금 시작하세요
            </h2>
            <button
              onClick={() => setCurrentPage('wizard')}
              className="self-start sm:self-auto px-8 sm:px-10 py-4 rounded-full bg-[#9FE870] hover:bg-[#B9F293] active:scale-95 text-[#0E0F0C] font-extrabold text-lg transition cursor-pointer shadow-lg shrink-0"
            >
              보고서 만들기
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/20 text-sm font-semibold text-[#C9DCCD]">
            <span>© 2026 Synthera</span>
            <span>AI GPASS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
