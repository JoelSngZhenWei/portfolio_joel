import PictureCarousel from "./PictureCarousel"


export default function SPMDetails() {
    return (
        <div className="space-y-10 text-sm lg:text-base lg:px-0 pb-4">
            <section>
                <div className="text-primary-foreground/80 space-y-4 ">
                    <p>
                        This web application is intended as an employee scheduling portal, where different classes of users (Staff, Managers, Directors, HR, and Senior Managers) have different capabilities within the application.
                    </p>
                    <p>
                        Users can make work from home (WFH) or in-office arrangements for days of the week, while manager-level users can manage the requests of those under them, and senior managers and HR can view the requests of all users.
                    </p>

                    <p>
                        While this web application was the final deliverable of this project, the most interesting part of this experience was our deep dive into optimal software project management processes, particularly <span className="text-primary-foreground font-bold">Scrum methodologies</span> and <span className="text-primary-foreground font-bold">Continuous Integration / Continuous Deployment (CI/CD)</span> techniques.
                    </p>
                </div>
            </section>

            {/* application users intro */}
            <section className="">
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Application Users</h3>
                <div className="space-y-4">
                    <p className="text-primary-foreground/80 mb-4">
                        There are three possible types of users that may use our application, and for each user the application will offer different capabilities.
                    </p>
                    <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-decimal list-inside">
                        {[
                            "Staff",
                            "Managers \& Directors",
                            "Human Resources (HR) and Senior Management",
                        ].map((item, index) => (
                            <li key={index} className="">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Staff */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Staff</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-primary-foreground/80">
                                Staff are able to:
                            </p>
                            <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-disc list-inside">
                                {[
                                    "View their own schedule.",
                                    "View their team members\' schedules.",
                                    "Apply for a working arrangement on a certain day.",
                                    "Change/Withdraw a selected working arrangement.",
                                ].map((item, index) => (
                                    <li key={index} className="">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <PictureCarousel images={[
                                { src: '/spm/schedule_personal.png', alt: "Personal schedule view." },
                                { src: '/spm/teamview.png', alt: 'Team schedule view.' },
                                { src: '/spm/makerequest.png', alt: 'Request arrangement.' },
                                { src: '/spm/withdraw.png', alt: 'Withdraw arrangement.' },

                            ]} />
                        </div>
                    </section>
                </div>
            </section>

            {/* Managers and directors */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Managers &amp; Directors</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-primary-foreground/80">
                                Managers &amp; Directors are given additional capabilities to manage teams under them:
                            </p>
                            <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-disc list-inside">
                                {[
                                    "Approve and reject arrangements from team members.",
                                    "View approved and rejected arrangements from team members."
                                ].map((item, index) => (
                                    <li key={index} className="">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <PictureCarousel images={[
                                { src: '/spm/managerequest.png', alt: "Approve and reject arrangements view." },
                                { src: '/spm/viewpastrequest.png', alt: 'View past approved arrangements.' },

                            ]} />
                        </div>
                    </section>
                </div>
            </section>

            {/* HR and senior manager */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Humans Resources (HR) &amp; Senior Management</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-primary-foreground/80">
                                HR &amp; Senior Managers are given additional capabilities to manage departments and teams:
                            </p>
                            <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-disc list-inside">
                                {[
                                    "View all departments in organisation.",
                                    "View all teams in each department.",
                                    "View schedule of any chosen team.",
                                ].map((item, index) => (
                                    <li key={index} className="">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <PictureCarousel images={[
                                { src: '/spm/deptview.png', alt: "All departments view." },
                                { src: '/spm/seniormanagerteamview.png', alt: "All teams under chosen department view." },
                                { src: '/spm/seniormanagersmallteamview.png', alt: "Schedule of a single team in chosen department." }
                            ]} />
                        </div>
                    </section>
                </div>
            </section>

            {/* CI */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Continuous Integration</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-primary-foreground/80">
                                I developed a suite of test functions for our RESTful APIs developed in Flask. To do this, I utilised the <span className="font-bold text-primary-foreground">PyTest</span> library due to its ease of use and flexibility. Our backend development team utilised the paradigm of <span className="font-bold text-primary-foreground">Test-Driven Development (TDD)</span>, where for each RESTful API function we would first write the code for all of its test cases, and then write and refactor the actual function&apos;s code until it worked well.
                            </p>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_initial.png"
                                alt="Hybrid ANN Model Diagram"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-primary-foreground/80">
                                The next step was to make this testing automated on every push to our repo. To do this, I configured a <span className="text-primary-foreground font-bold">GitHub Actions yaml workflow</span> to run our suite of PyTest functions on every Git push to either our backend or main branch, to constantly validate that code developed and pushed by our backend team was correct and working as intended. On any test failure, notifactions would be sent to team members.
                            </p>
                            <p className="text-primary-foreground/80">
                                Our group enforced a minimum 80% test coverage throughout our development process to ensure we had a clean and correct code base, and ended development at a 97% test coverage.
                            </p>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_final.png"
                                alt="Hybrid ANN Model Diagram"
                                width={600}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                </div>
            </div>

            {/* CD */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Continuous Deployment</h3>
                <div className="space-y-4">
                    <p className="text-primary-foreground/80">
                        Continous Deployment for our frontend was handled by the platform we deployed our frontend on, <span className="text-primary-foreground font-bold">Vercel</span>. Thus, my priority was continuous deployment for our backend to our <span className="text-primary-foreground font-bold">PythonAnywhere</span> server.
                    </p>
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-primary-foreground/80">
                                For this, I configured an encoded <span className="text-primary-foreground font-bold">GitHub Actions webhook</span> to an API aimed at my PythonAnywhere deployment server. Upon receiving this webhook, a script I wrote in PythonAnywhere would run a bash console command to git pull and git merge to the server&apos;s codebase.
                            </p>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_initial.png"
                                alt="Hybrid ANN Model Diagram"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                    <p className="text-primary-foreground/80">
                        While this required webhook signature validation using webhook tokens and HMAC encoding, this allowed for seamless deployment of our Flask backends on every push to our main or backend branches, usage logs, deployment logs, error logs, and scheduled running of scripts on the server.
                    </p>
                </div>
            </div>

            {/* Scrum Master */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Scrum Master</h3>
                <div className="space-y-4">
                    <p className="text-primary-foreground/80">
                        As Scrum master I was in charge of organising the team and facilitating Scrum meetings including:
                    </p>
                    <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-disc list-inside">
                        {[
                            "Daily standups.",
                            "Sprint reviews.",
                            "Sprint retrospectives.",
                        ].map((item, index) => (
                            <li key={index} className="">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-primary-foreground/80">
                        I helped to organise the team and direct development efforts throughout our 5 months of project development. We collaborated on <span className="font-bold text-primary-foreground">Jira</span>, using the integrated Backlog Boards to plan user stories, acceptance criteria, and assign story points to our user stories using Planning Poker on a fibonacci sequence.
                    </p>
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-primary-foreground/80">
                                User stories were managed on backlog boards, and during each 2 week sprint we tracked progress on Jira&apos;s <span className="text-primary-foreground font-bold">Kanban Boards</span> to ensure our frontend, backend, and testing developer teams were aligned.
                            </p>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_initial.png"
                                alt="Hybrid ANN Model Diagram"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                    <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-primary-foreground/80">
                                Confluence was integrated to our Jira workflow, and it was used as a shared repository of information. Key documents we had included:
                            </p>
                            <ul className="text-primary-foreground/80 space-y-3 mb-4 pl-5 list-disc list-inside">
                                {[
                                    "Customer briefs.",
                                    "Database schemas.",
                                    "C4 diagrams for our application architecture.",
                                    "Definition of done for both frontend and backend.",
                                    "Story point estimation process document.",
                                    "Test cases.",
                                    "Minutes for all meetings.",
                                ].map((item, index) => (
                                    <li key={index} className="">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2 p-1">
                            <Image
                                src="/assets/ANN_final.png"
                                alt="Hybrid ANN Model Diagram"
                                width={600}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                    <p className="text-primary-foreground/80">
                        Burndown charts from Jira were useful in helping our team document our velocity throughout our sprints, understanding our pace of work and our capability to deliver product features each sprint.
                    </p>

                    {/* Final closing remarks */}
                    <section>
                        <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">And...</h3>
                        <div className="space-y-4">
                            <section className="flex flex-col md:flex-row gap-3 lg:gap-8 items-center ">
                                <div className="flex-1 order-2 lg:order-1 space-y-4">
                                    <p className="text-primary-foreground/80">
                                        I made the logo too! AIO stands for our app name: All in One.
                                    </p>
                                </div>
                                <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                                    <PictureCarousel images={[
                                        { src: '/spm/logo.png', alt: "Logo." },
                                        { src: '/spm/login.png', alt: "Login page using the logo." },
                                    ]} />
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}

