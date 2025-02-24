import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi'
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full mt-2 lg:mt-0 lg:px-16">
      <div className="container mx-auto h-full lg:-mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 lg:pt-9 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-base lg:text-lg font-bold tracking-wide">
              Aspiring Data Science Professional
            </span>
            <h1 className="h2 lg:h1 mb-2 lg:mb-2">
              <span className="text-accent tracking-wide">Joel Sng</span>
            </h1>
            <div>
              <p className="max-w-[500px] text-primary-foreground/80">
                I am a first class honours double degree undergraduate from Singapore Management University specialising in machine learning, automation, and software development.
              </p>
              <p className="max-w-[500px] mb-4 lg:mb-9 text-primary-foreground/80">
                Expected graduation in <span className="text-accent font-semibold tracking-wide">May 2026</span>.
              </p>
            </div>

            {/* btn and socials */}
            <div className="flex flex-row justify-center items-center gap-6">
              <Button variant="outline" className="uppercase lg:text-lg h-9 lg:h-10 px-6">
                <a href="/assets/resume_joelsng.pdf" download="resume_joelsng.pdf" className='flex items-center gap-2'>
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="lg:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 lg:w-10 lg:h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base lg:text-xl hover:bg-accent hover:text-primary hover:transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-none mb-5 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

    </section>

  );
}
