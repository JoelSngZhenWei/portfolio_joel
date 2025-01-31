import { ScrollArea } from "./ui/scroll-area";


// cca data
const cca = {
  title: 'My Extracurricular Activities',
  description: "I am passionate about community service and leadership, driving initiatives that positively impact communities and foster meaningful change. I have been recognised by Madam Halimah Yacob and led SMU\'s 2 largest community service organisations.",
  items: [
    {
      organisation: 'SMU Special Interest & Community Service Sodality',
      position: 'President',
      duration: 'Jan 2023 - Dec 2023',
      details: ['1', '2', '3']
    },
    {
      organisation: 'StarringSMU',
      position: 'President',
      duration: 'Jan 2022 - Dec 2022',
      details: ['1', '2', '3']
    },
  ]
}


export default function ResumeCCA() {
  return (
    <div className='flex flex-col gap-2 lg:gap-8 text-center lg:text-left '>
      <h3 className='text-lg lg:text-4xl font-bold'>
        {cca.title}
      </h3>
      <p className='max-w-2xl h-18 lg:h-20 text-sm  lg:text-base text-primary-foreground/60 mx-auto lg:mx-0'>
        {cca.description}
      </p>
      <ScrollArea className='h-[400px]'>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[30px]'>
          {cca.items.map((item, index) => {
            return (
              <li key={index} className='bg-secondary h-[120px] py-4 px-6 lg:h-[184px] lg:py-6 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start shadow-md'>
                <span className='text-accent text-sm lg:text-base'>{item.duration}</span>
                <div className='flex w-full items-center max-w-[290px] min-h-[30px] lg:min-h-[60px] justify-center lg:justify-normal'>
                  <h3 className='text-base lg:text-xl  font-bold'>{item.position}</h3>
                </div>
                <div className='flex items-center gap-3'>
                  {/* dot */}
                  <span className='w-[4px] h-[4px] lg:w-[6px] lg:h-[6px] rounded-full bg-accent'></span>
                  <p className='text-primary-foreground/60 text-sm lg:text-base'>{item.organisation}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>

    </div>
  )
}