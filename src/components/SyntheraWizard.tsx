interface SyntheraWizardProps {
  onBack: () => void
}

export function SyntheraWizard({ onBack: _onBack }: SyntheraWizardProps) {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#e8ebe6]">
      <iframe
        src="/synthera-wizard.html"
        title="Synthera 판매실적 보고서"
        className="w-full h-full border-0 block"
        allow="clipboard-write; downloads"
      />
    </div>
  )
}

export default SyntheraWizard
