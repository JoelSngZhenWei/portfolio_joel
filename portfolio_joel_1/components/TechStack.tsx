import type React from "react"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Skill {
  icon: React.ReactNode
  name: string
  description: string
}

interface TechStackProps {
  skills: {
    langlist: Skill[]
    frameworklist: Skill[]
  }
}

const InfoColumn: React.FC<{ selectedSkill: Skill | null }> = ({ selectedSkill }) => (
  <div className="w-full lg:w-1/3 p-4 bg-primary rounded-xl flex flex-col h-full">
    <h2 className="text-2xl font-semibold tracking-wide mb-4 sticky top-0 z-10 py-4 lg:py-6">Tech Stack</h2>
    <ScrollArea className="h-[40vh] lg:h-[60vh]">
      {selectedSkill ? (
        <div className="flex-col flex gap-4 place-items-center justify-center">
          <h3 className="text-lg w-full text-center font-bold">{selectedSkill.name}</h3>
          <div className="text-7xl lg:text-9xl mb-4 text-accent text-center">{selectedSkill.icon}</div>
          <p className="text-white/80">{selectedSkill.description}</p>
        </div>
      ) : (
        <div className="flex place-items-center text-center justify-center">
          <p className="text-white/80">Select a skill to view more information.</p>
        </div>
      )}
    </ScrollArea>
  </div>
)

const SkillList: React.FC<{
  title: string
  items: Skill[]
  onSkillClick: (skill: Skill) => void
  selectedSkill: Skill | null
}> = ({ title, items, onSkillClick, selectedSkill }) => (
  <>
    <span className="text-accent text-sm lg:text-base font-bold">{title}</span>
    <ul className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                className={`w-full py-6 lg:py-8 bg-primary rounded-xl flex flex-col justify-center items-center group cursor-pointer ${selectedSkill === item ? "text-accent" : ""}`}
                onClick={() => onSkillClick(item)}
              >
                <div className="text-4xl lg:text-6xl group-hover:text-accent transition-all duration-300">
                  {item.icon}
                </div>
                <span className="capitalize text-xs lg:text-base group-hover:text-accent transition-all duration-300">
                  {item.name}
                </span>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </>
)

export const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill((prevSkill) => (prevSkill === skill ? null : skill))
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <InfoColumn selectedSkill={selectedSkill} />
      <ScrollArea className="h-[40vh] lg:h-[60vh] w-full lg:w-2/3 p-4 bg-secondary rounded-xl">
        <div className="flex flex-col gap-8">
          <SkillList
            title="Languages"
            items={skills.langlist}
            onSkillClick={handleSkillClick}
            selectedSkill={selectedSkill}
          />
          <SkillList
            title="Libraries and Frameworks"
            items={skills.frameworklist}
            onSkillClick={handleSkillClick}
            selectedSkill={selectedSkill}
          />
        </div>
      </ScrollArea>
    </div>
  )
}

