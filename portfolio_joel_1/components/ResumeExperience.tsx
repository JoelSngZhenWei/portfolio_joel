import { ScrollArea } from "./ui/scroll-area";

const experience = {
    icon: '',
    title: 'My Experience',
    description: "Experienced in data science, analytics, and software development, with specialties in machine learning, NLP, RPA, and cloud development to deliver impactful solutions.",
    items: [
      {
        company: 'Zurich Insurance',
        position: 'Data Science Intern',
        duration: 'Jan 2025 - Present'
      },
      {
        company: 'Housing & Development Board',
        position: 'Data Analyst Intern',
        duration: 'Jan 2024 - Aug 2024'
      },
      {
        company: 'PwC',
        position: 'Digital Transformation Consulting Intern',
        duration: 'May 2023 - Aug 2023'
      }
    ]
  }

export default function ResumeExperience(){
    return(
        <div className='flex flex-col gap-2 lg:gap-8 text-center lg:text-left '>
        <h3 className='text-lg lg:text-4xl font-bold'>
          {experience.title}
        </h3>
        <p className='max-w-2xl h-18 lg:h-20 text-sm  lg:text-base text-primary-foreground/60 mx-auto lg:mx-0'>
          {experience.description}
        </p>
        <ScrollArea className='h-[400px]'>
          <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[30px]'>
            {experience.items.map((item, index) => {
              return (
                <li key={index} className='bg-secondary h-[120px] py-4 px-6 lg:h-[184px] lg:py-6 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start shadow-md'>
                  <span className='text-accent text-sm lg:text-base'>{item.duration}</span>
                  <div className='flex w-full items-center max-w-[290px] min-h-[30px] lg:min-h-[60px] justify-center lg:justify-normal'>
                    <h3 className='text-base lg:text-xl  font-bold'>{item.position}</h3>
                  </div>
                  <div className='flex items-center gap-3'>
                    {/* dot */}
                    <span className='w-[4px] h-[4px] lg:w-[6px] lg:h-[6px] rounded-full bg-accent'></span>
                    <p className='text-primary-foreground/60 text-sm lg:text-base'>{item.company}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>

      </div>
    )
}