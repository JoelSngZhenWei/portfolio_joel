import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SkillModalProps {
  isOpen: boolean
  onClose: () => void
  skill: {
    name: string
    icon: React.ReactNode
    description: string
  }
}

export function SkillModal({ isOpen, onClose, skill }: SkillModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-5xl text-accent">{skill.icon}</span>
            <span className="capitalize">{skill.name}</span>
          </DialogTitle>
        </DialogHeader>
        <p>{skill.description}</p>
      </DialogContent>
    </Dialog>
  )
}

