import {PageData, PageHelpers} from "#types";

export const layout = "layouts/root.tsx";

export default (
  params: PageData,
  {urlFilter}: PageHelpers,
) => {
  const {comp, header, icons} = params

  const list = [
    {
      title: 'Planetaria',
      description: 'Creating technology to empower civilians to explore space on their own terms.',
      href: 'http://planetaria.tech',
      link: 'planetaria.tech',
      img: urlFilter('/images/logos/planetaria.svg'),
    },
    {
      title: 'Animaginary',
      description: 'High performance web animation library, hand-written in optimized WASM.',
      href: '#',
      link: 'github.com',
      img: urlFilter('/images/logos/animaginary.svg'),
    },
    {
      title: 'HelioStream',
      description: 'Real-time video streaming library, optimized for interstellar transmission.',
      href: '#',
      link: 'github.com',
      img: urlFilter('/images/logos/helio-stream.svg'),
    },
    {
      title: 'cosmOS',
      description: 'The operating system that powers our Planetaria space shuttles.',
      href: '#',
      link: 'github.com',
      img: urlFilter('/images/logos/cosmos.svg'),
    },
    {
      title: 'OpenShuttle',
      description: 'The schematics for the first rocket I designed that successfully made it to orbit.',
      href: '#',
      link: 'github.com',
      img: urlFilter('/images/logos/open-shuttle.svg'),
    }
  ]

  return (
    <comp.layout.container header={header}>
      <div>
        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40 space-y-8">
          <div className="grid max-w-3xl grid-cols-1 items-baseline  md:grid-cols-4">
            <h2 className="font-semibold text-zinc-800 dark-text-zinc-100">Iguan Systems</h2>
            <div className="md:col-span-3">
              <div className="space-y-2">

                <p
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark-text-zinc-500 pl-3.5">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span
                        className="h-4 w-0.5 rounded-full bg-zinc-200 dark-bg-zinc-500">
                      </span>
                    </span>
                  Apr 2022 — Present
                </p>
                <div>
                  <ul role="list">
                    <li className="group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold text-zinc-800 dark-text-zinc-100">
                        <div
                          className="dark-bg-zinc-800/50"></div>
                        <a href="https://datastorms.eu" target="_blank">
                          <span
                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span
                            className="text-sm relative z-10">Project: Datastorm</span>
                        </a>
                      </h2>
                      <div className="space-y-2 mt-2">
                        <div className="text-xs">
                          <span className="font-bold">Role: </span>
                          <span className=" text-zinc-600 dark-text-zinc-400">Team Leader</span>
                        </div>

                        <div className="text-xs">
                          <span className="font-bold">Team Size: </span>
                          <span className=" text-zinc-600 dark-text-zinc-400">7-8 Developers</span>
                        </div>

                        <div className="text-xs">
                          <span className="font-bold"> Technologies Used: </span>
                          <span className=" ext-zinc-600 dark-text-zinc-400">Vue 3, Pinia, Express.js, ArangoDB, TypeScript</span>
                        </div>
                        <div className="text-sm text-zinc-600 dark-text-zinc-400">
                          As the team leader of the Datastrom project, I led a team of 7-8 developers to build a robust
                          web application. This project involved developing with modern technologies such as Vue 3,
                          Pinia
                          for state management, Express.js for the backend, and ArangoDB as the database. We also
                          utilized
                          TypeScript to enhance code quality and maintainability. My responsibilities included
                          coordinating the team's efforts, ensuring timely delivery of features, and maintaining high
                          coding standards. The experience honed my leadership skills and deepened my expertise in
                          full-stack development.
                        </div>

                      </div>
                      <p
                        className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark-text-zinc-200">

                        <comp.shared.icon
                          path={icons.link}
                          size={20}
                          fill='currentColor'
                          className='flex-none'
                          viewBox="0 0 24 24"
                        />
                        <span className="ml-2">Datastorms</span></p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="grid max-w-3xl grid-cols-1 items-baseline  md:grid-cols-4">
            <h2 className="font-semibold text-zinc-800 dark-text-zinc-100">Upwork</h2>
            <div className="md:col-span-3">
              <div className="space-y-2">

                <p
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark-text-zinc-500 pl-3.5">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span
                        className="h-4 w-0.5 rounded-full bg-zinc-200 dark-bg-zinc-500">
                      </span>
                    </span>
                  Nov 2023 — Present
                </p>
                <div>
                  <ul role="list">
                    <li className="group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold text-zinc-800 dark-text-zinc-100">
                        <div
                          className="dark-bg-zinc-800/50"></div>
                        <a href="https://linare.am" target="_blank">
                          <span
                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span
                            className="text-sm relative z-10">Project: Linare Medical</span>
                        </a>
                      </h2>
                      <div className="space-y-2 mt-2">
                        <div className="text-xs">
                          <span className="font-bold">Role: </span>
                          <span className=" text-zinc-600 dark-text-zinc-400">Vue/Node Developer</span>
                        </div>

                        <div className="text-xs">
                          <span className="font-bold"> Technologies Used: </span>
                          <span className=" ext-zinc-600 dark-text-zinc-400">Vue 3, Vuex, Express.js, TypeScript, MySql/Sequelize</span>
                        </div>
                        <div className="text-sm text-zinc-600 dark-text-zinc-400">
                          Independently developed Linare, a comprehensive medical products platform, from inception to deployment on Upwork. Utilized Vue 3 for dynamic frontend interfaces, Node.js and Express for backend API development, and MySQL with Sequelize for efficient data management and transactions.
                        </div>

                      </div>
                      <p
                        className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark-text-zinc-200">

                        <comp.shared.icon
                          path={icons.link}
                          size={20}
                          fill='currentColor'
                          className='flex-none'
                          viewBox="0 0 24 24"
                        />
                        <span className="ml-2">Linare Medical</span></p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="grid max-w-3xl grid-cols-1 items-baseline  md:grid-cols-4">
            <h2 className="font-semibold text-zinc-800 dark-text-zinc-100">Evistep Enterprise</h2>
            <div className="md:col-span-3">
              <div className="space-y-2">

                <p
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark-text-zinc-500 pl-3.5">
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span
                        className="h-4 w-0.5 rounded-full bg-zinc-200 dark-bg-zinc-500">
                      </span>
                    </span>
                  Oct 2021 — Apr 2022
                </p>
                <div>
                  <ul role="list">
                    <li className="group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold text-zinc-800 dark-text-zinc-100">
                        <div
                          className="dark-bg-zinc-800/50"></div>
                        <a href="https://parichute.com/new-landing" target="_blank">
                          <span
                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span
                            className="text-sm relative z-10">Project: Pivvit/Parichute</span>
                        </a>
                      </h2>
                      <div className="space-y-2 mt-2">
                        <div className="text-xs">
                          <span className="font-bold">Role: </span>
                          <span className=" text-zinc-600 dark-text-zinc-400">PHP & Vue Developer</span>
                        </div>

                        <div className="text-xs">
                          <span className="font-bold">Team Size: </span>
                          <span className=" text-zinc-600 dark-text-zinc-400">7-8 Developers</span>
                        </div>

                        <div className="text-xs">
                          <span className="font-bold"> Technologies Used: </span>
                          <span className=" ext-zinc-600 dark-text-zinc-400">Vue 3, Vuex, PHP/Laravel, MySql</span>
                        </div>
                        <div className="text-sm text-zinc-600 dark-text-zinc-400">
                          Worked on the Parichute project utilizing PHP/Laravel framework to develop robust backend
                          functionality. Implemented database operations using MySQL to ensure seamless data management
                          and retrieval.
                        </div>

                      </div>
                      <p
                        className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark-text-zinc-200">

                        <comp.shared.icon
                          path={icons.link}
                          size={20}
                          fill='currentColor'
                          className='flex-none'
                          viewBox="0 0 24 24"
                        />
                        <span className="ml-2">Parichute</span></p>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>
    </comp.layout.container>
  )
};
