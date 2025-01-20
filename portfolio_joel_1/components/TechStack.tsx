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
    <h2 className="text-3xl font-semibold tracking-wide mb-4 sticky top-0 bg-primary z-10">Tech Stack</h2>
    <ScrollArea className="h-[300px]">
      {selectedSkill ? (
        <div className="h-[300px] flex-col flex gap-1 place-items-center">
          <h3 className="text-2xl w-full font-bold mb-4">{selectedSkill.name}</h3>
          <div className="text-5xl lg:text-9xl mb-4 text-accent text-center">{selectedSkill.icon}</div>
          <p className="text-white/80">{selectedSkill.description}</p>
        </div>
      ) : (
        <div className="h-[300px] flex place-items-center text-center">
          <p className="text-white/80">
            Select a skill to view more information.
          </p>
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
    <span className="text-accent font-bold">{title}</span>
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-5">
      {items.map((item, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                className={`w-full h-[150px] bg-primary rounded-xl flex flex-col justify-center items-center group cursor-pointer ${selectedSkill === item ? "text-accent" : ""}`}
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
    setSelectedSkill((prevSkill) => (prevSkill === skill ? null : skill))
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <InfoColumn selectedSkill={selectedSkill} />
      <ScrollArea className="h-[300px] lg:h-[450px] w-full lg:w-2/3 bg-secondary p-4 rounded-xl">
        <div className="flex flex-col gap-2">
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

