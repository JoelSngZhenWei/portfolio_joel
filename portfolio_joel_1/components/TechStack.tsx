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
  <div className="w-full lg:w-1/3 p-4 bg-primary rounded-xl">
    {selectedSkill ? (
      <>
        <h3 className="text-2xl font-bold mb-4 ">{selectedSkill.name}</h3>
        <div className="text-6xl mb-4 text-accent">{selectedSkill.icon}</div>
        <p className="text-white/80">{selectedSkill.description}</p>
      </>
    ) : (
      <p className="text-white/80">Select a skill to view more information.</p>
    )}
  </div>
)

const SkillList: React.FC<{ title: string; items: Skill[]; onSkillClick: (skill: Skill) => void }> = ({
  title,
  items,
  onSkillClick,
}) => (
  <>
    <span className="text-accent font-bold">{title}</span>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {items.map((item, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                className="w-full h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group cursor-pointer"
                onClick={() => onSkillClick(item)}
              >
                <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                <span className="capitalize group-hover:text-accent transition-all duration-300">{item.name}</span>
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
    setSelectedSkill(skill)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <InfoColumn selectedSkill={selectedSkill} />
      <ScrollArea className="h-[400px] lg:h-full w-full lg:w-2/3 bg-secondary p-4 rounded-xl">
        <div className="flex flex-col gap-2">
          <SkillList title="Languages" items={skills.langlist} onSkillClick={handleSkillClick} />
          <SkillList title="Libraries and Frameworks" items={skills.frameworklist} onSkillClick={handleSkillClick} />
        </div>
      </ScrollArea>
    </div>
  )
}

