export function EducationJourneyMap() {
  const educationSteps = [
    {
      title: "10th Grade",
      period: "2020 - 2021",
      school: "St.Joseph's Matriculation Higher Secondary School",
      achievement: "Percentage: 86.83%",
    },
    {
      title: "12th Grade",
      period: "2022 - 2023",
      school: "St.Joseph's Matriculation Higher Secondary School",
      achievement: "Percentage: 86.83%",
    },
    {
      title: "Undergraduate",
      period: "2023 - 2027",
      school: "Kongu Engineering College",
      achievement: "Bachelor's in Computer Science - CGPA: 7.92",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline Container */}
      <div className="space-y-0">
        {educationSteps.map((step, index) => (
          <div key={index} className="relative flex gap-8">
            {/* Left Side - Timeline */}
            <div className="flex flex-col items-center pt-2">
              {/* Circle Node */}
              <div className="relative z-10">
                <div className="w-6 h-6 rounded-full bg-yellow-400 border-4 border-background shadow-lg"></div>
              </div>
              {/* Connector Line */}
              {index < educationSteps.length - 1 && (
                <div className="w-1 bg-gradient-to-b from-yellow-400 to-yellow-400/30 mt-2 flex-grow" style={{ minHeight: '240px' }}></div>
              )}
            </div>

            {/* Right Side - Content */}
            <div className="pb-16 pt-0 flex-1">
              <div className="border border-yellow-400/40 rounded-lg p-6 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-transparent">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full">
                    {step.period.split(' - ')[1]}
                  </span>
                </div>
                
                <p className="text-yellow-400 font-semibold mb-2">{step.period}</p>
                
                <p className="text-lg font-semibold text-yellow-300 mb-3">{step.school}</p>
                
                <p className="text-foreground/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400/60"></span>
                  {step.achievement}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-transparent opacity-10"></div>
    </div>
  )
}
