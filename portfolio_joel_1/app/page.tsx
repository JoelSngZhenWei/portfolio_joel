import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full xl:px-16">
      <div className="container mx-auto h-full mb-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-9 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl font-bold">
              Data Scientist
            </span>
            <h1 className="h2 xl:h1 mb-4 xl:mb-6">
              <span className="accent">Joel Sng</span>
            </h1>
            <p className="max-w-[500px] mb-4 xl:mb-9 text-white/80">
              I am a first class honours double degree undergraduate specialising in machine learning, automation, and software development.
            </p>
            {/* btn and socials */}
            <div className="flex flex-row justify-center items-center gap-6">
              <Button variant="outline" size="lg" className="uppercase ">
                <a href="/assets/resume_joelsng.pdf" download="resume_joelsng.pdf" className='flex items-center gap-2'>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-5 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>

  );
}
