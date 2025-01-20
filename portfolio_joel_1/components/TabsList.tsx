import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

export function CustomTabsList() {
  return (
    <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsList className="flex flex-row justify-center xl:justify-start w-full gap-2 xl:gap-6 xl:flex-col">
        <TabsTrigger value="experience" className="bg-[#232329] px-4 flex-grow xl:flex-grow-0">Experience</TabsTrigger>
        <TabsTrigger value="education" className="bg-[#232329] px-4 flex-grow xl:flex-grow-0">Education</TabsTrigger>
        <TabsTrigger value="skills" className="bg-[#232329] px-4 flex-grow xl:flex-grow-0">Skills</TabsTrigger>
        <TabsTrigger value="about" className="bg-[#232329] px-4 flex-grow xl:flex-grow-0 hidden xl:flex">About me</TabsTrigger>
      </TabsList>
      <Button variant="outline" size="lg" className="uppercase w-full xl:w-auto">
        <a href="/assets/resume_joelsng.pdf" download="resume_joelsng.pdf" className="flex items-center justify-center gap-2 w-full">
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </a>
      </Button>
    </div>
  )
}

