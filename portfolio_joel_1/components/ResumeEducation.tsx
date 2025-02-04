import { ScrollArea } from "./ui/scroll-area";

// education data
const education = {
  icon: '',
  title: 'My Education',
  description: 'Double degree first class honours student from Singapore Management University. Dean\'s list for all applicable years.',
  items: [
    {
      instituition: 'Singapore Management University',
      degree: 'Double Bachelor Degree in Info Systems and Business Management',
      duration: 'Aug 2021 - Present'
    },
    {
      instituition: 'St Andrew\'s Junior College',
      degree: 'Singapore Cambridge GCE Advanced Level',
      duration: 'Jan 2017 - Dec 2018'
    },
    {
      instituition: 'St Joseph\'s Institution',
      degree: 'Singapore Cambridge GCE Ordinary Level',
      duration: 'Jan 2013 - Dec 2016'
    },
  ]
}


export default function ResumeEducation() {
  return (
    <div className='flex flex-col gap-2 lg:gap-8 text-center lg:text-left '>
      <h3 className='text-lg lg:text-4xl font-bold'>
        {education.title}
      </h3>
      <p className='max-w-2xl h-18 lg:h-20 text-sm  lg:text-base text-primary-foreground/60 mx-auto lg:mx-0'>
        {education.description}
      </p>
      <ScrollArea className='h-[400px]'>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[30px]'>
          {education.items.map((item, index) => {
            return (
              <li key={index} className='bg-secondary h-[120px] py-4 px-6 lg:h-[184px] lg:py-6 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start shadow-md'>
                <span className='text-accent text-sm lg:text-base'>{item.duration}</span>
                <div className='flex w-full items-center max-w-[290px] min-h-[30px] lg:min-h-[60px] justify-center lg:justify-normal'>
                  <h3 className='text-base lg:text-xl  font-bold'>{item.degree}</h3>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='text-primary-foreground/60 text-sm lg:text-base'>{item.instituition}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>

    </div>
  )
}