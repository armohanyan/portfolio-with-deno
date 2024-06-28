import {PageData, PageHelpers} from "#types";

export const layout = "layouts/root.tsx";

export default (
  params: PageData
) => {
  const {comp, header, icons} = params

  return (
    <comp.layout.container header={header}>
      <div className="space-y-8">
        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-3 md:grid-cols-4">
            <h2 id=":S2:" className="text-sm font-semibold text-zinc-800 dark-text-zinc-100">Frontend</h2>
            <div className="md:col-span-3">
              <ul role="list" className="flex gap-2 flex flex-wrap  w-75">
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">HTML
                </li>
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">CSS
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">JavaScript
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">TypeScript
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Vue.js
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Nuxt.js
                </li>


                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Pinia
                </li>


                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">React.js
                </li>

              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-3 md:grid-cols-4">
            <h2 id=":S2:" className="text-sm font-semibold text-zinc-800 dark-text-zinc-100">Backend</h2>
            <div className="md:col-span-3">
              <ul role="list" className="flex gap-2 flex flex-wrap  w-75">
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Node.js
                </li>
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Express.js
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Nest.js
                </li>

              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-3 md:grid-cols-4">
            <h2 id=":S2:" className="text-sm font-semibold text-zinc-800 dark-text-zinc-100">Database</h2>
            <div className="md:col-span-3">
              <ul role="list" className="flex gap-2 flex flex-wrap  w-75">
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">MySql
                </li>
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Postgres
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Mongo
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Arango
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Redis
                </li>
              </ul>
            </div>
          </div>
        </section>


        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-3 md:grid-cols-4">
            <h2 id=":S2:" className="text-sm font-semibold text-zinc-800 dark-text-zinc-100">Deployment</h2>
            <div className="md:col-span-3">
              <ul role="list" className="flex gap-2 flex flex-wrap  w-75">
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Git
                </li>
                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Nginx
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Apache
                </li>

                <li
                  className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Docker
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </comp.layout.container>
  )
};
