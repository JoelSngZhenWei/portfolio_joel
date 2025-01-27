// import Image from "next/image"


export default function SPMDetails() {
    return (
        <div className="space-y-10 text-sm lg:text-base lg:px-0 pb-4">
            <section>
                <div className="text-white/80 space-y-4 ">
                    <p>
                        This web application is intended as an employee scheduling portal, where different classes of users (Staff, Managers, Directors, HR, and Senior Managers) have different capabilities within the application.
                    </p>
                    <p>
                        Users can make work from home (WFH) or in-office arrangements for days of the week, while manager-level users can manage the requests of those under them, and senior managers and HR can view the requests of all users.
                    </p>

                    <p>
                        While this web application was the final deliverable of this project, the most interesting part of this experience was our deep dive into optimal software project management processes, particularly <span className="text-white font-bold">Scrum methodologies</span> and <span className="text-white font-bold">Continuous Integration / Continuous Deployment (CI/CD)</span> techniques.
                    </p>
                </div>
            </section>

            {/* application users intro */}
            <section className="">
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Application Users</h3>
                <div className="space-y-4">
                    <p className="text-white/80 mb-4">
                        There are three possible types of users that may use our application, and for each user the application will offer different capabilities.
                    </p>
                    <ul className="text-white/80 space-y-3 mb-4 pl-5">
                        {[
                            "Staff",
                            "Managers \& Directors",
                            "Human Resources (HR) and Senior Management",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
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
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-white/80">
                                Staff are able to:
                            </p>
                            <ul className="text-white/80 space-y-3 mb-4 pl-5">
                                {[
                                    "View their team members\' schedules.",
                                    "View their own schedule.",
                                    "Apply for a working arrangement on a certain day.",
                                    "Apply for a working arrangement on a certain day.",
                                    "Change a selected working arrangement.",
                                    "Withdraw a selected working arrangement.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <Image
                                src="/assets/LSTM.png"
                                alt="LSTM Model Architecture"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                </div>
            </section>

            {/* Managers and directors */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Managers &amp; Directors</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-white/80">
                                Managers &amp; Directors are given additional capabilities:
                            </p>
                            <ul className="text-white/80 space-y-3 mb-4 pl-5">
                                {[
                                    "Approve and reject arrangements from team members.",
                                    "Withdraw arrangements of team members.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <Image
                                src="/assets/LSTM.png"
                                alt="LSTM Model Architecture"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                </div>
            </section>

            {/* HR and senior manager */}
            <section>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Humans Resources (HR) &amp; Senior Management</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1 space-y-4">
                            <p className="text-white/80">
                                HR &amp; Senior Managers are given additional capabilities:
                            </p>
                            <ul className="text-white/80 space-y-3 mb-4 pl-5">
                                {[
                                    "View schedules of selected teams.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
                            <Image
                                src="/assets/LSTM.png"
                                alt="LSTM Model Architecture"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            />
                        </div> */}
                    </section>
                </div>
            </section>

            {/* CI */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Continuous Integration</h3>
                <div className="space-y-4">
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                I developed a suite of test functions for our RESTful APIs developed in Flask. To do this, I utilised the PyTest library due to its ease of use and flexibility. Our backend development team utilised the paradigm of <span className="font-bold text-white">Test-Driven Development (TDD)</span>, where for each RESTful API function we would first write the code for all of its test cases, and then write and refactor the actual function&apos;s code until it worked well.
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
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                The next step was to make this testing automated on every push to our repo. To do this, I configured a <span className="text-white font-bold">GitHub Actions yaml workflow</span> to run our suite of PyTest functions on every Git push to either our backend or main branch, to constantly validate that code developed and pushed by our backend team was correct and working as intended. On any test failure, notifactions would be sent to team members&apos; emails to notify us.
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
                    <p className="text-white/80">
                        Continous Deployment for our frontend was handled by the platform we deployed our frontend on, <span className="text-white font-bold">Vercel</span>. Thus, my priority was continuous deployment for our backend to our <span className="text-white font-bold">PythonAnywhere</span> server.
                    </p>
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                For this, I configured a <span className="text-white font-bold">GitHub Actions webhook</span> to an API aimed at my PythonAnywhere deployment server. Upon receiving this webhook, a script I wrote in PythonAnywhere would run a bash console command to git pull and git merge to its local codebase.
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
                    <p className="text-white/80">
                        While this required webhook signature validation using webhook tokens and HMAC encoding, this allowed for seamless deployment of our Flask backends on every push to our main or backend branches, detailed deployment logs, and task scheduling functionality.
                    </p>
                </div>
            </div>

            {/* Scrum Master */}
            <div>
                <h3 className="text-xl font-bold mb-2 border-b border-white/20 pb-2">Scrum Master</h3>
                <div className="space-y-4">
                    <p className="text-white/80">
                        As Scrum master I was in charge of organising the team and facilitating Scrum meetings including:
                    </p>
                    <ul className="text-white/80 space-y-3 mb-4 pl-5">
                        {[
                            "Daily standups.",
                            "Sprint reviews.",
                            "Sprint retrospectives.",
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-white/80">
                        I helped to organise the team and direct development efforts throughout our 5 months of project development. We collaborated on <span className="font-bold text-white">Jira</span>, using the integrated Backlog Boards to plan user stories, acceptance criteria, and assign story points to our user stories using Planning Poker on a fibonacci sequence.
                    </p>
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                User stories were managed on backlog boards, and during each 2 week sprint we tracked progress on Jira&apos;s <span className="text-white font-bold">Kanban Boards</span> to ensure our frontend, backend, and testing developer teams were aligned.
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
                    <section className="flex flex-col md:flex-row gap-8 items-center ">
                        <div className="flex-1 order-2 lg:order-1">
                            <p className="text-white/80">
                                Confluence was integrated to our Jira workflow, and it was used as a shared repository of information. Key documents we had included:
                            </p>
                            <ul className="text-white/80 space-y-3 mb-4 pl-5">
                                {[
                                    "Customer briefs.",
                                    "Database schemas.",
                                    "C4 diagrams for our application architecture.",
                                    "Definition of done for both frontend and backend.",
                                    "Story point estimation process document.",
                                    "Test cases.",
                                    "Minutes for all meetings.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-1 h-1 mr-2 mt-2 bg-accent rounded-full flex-shrink-0" />
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
                    <p className="text-white/80">
                        Burndown charts from Jira were useful in helping our team document our velocity throughout our sprints, understanding our pace of work and our capability to deliver product features each sprint.
                    </p>
                </div>
            </div>
        </div >
    )
}

