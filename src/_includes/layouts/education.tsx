import {PageData, PageHelpers} from "#types";

export const layout = "layouts/root.tsx";

export default (
  params: PageData,
  {urlFilter}: PageHelpers,
) => {
  const {comp, header} = params

  return (
    <comp.layout.container header={header}>
      <div className="space-y-20">
        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2 className="font-semibold text-zinc-800 dark-text-zinc-100">National Polytechnic
              University of Armenia
            </h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-16">
                <li className="group relative flex flex-col items-start">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-800 dark-text-zinc-100">
                    Professional: Software Engineer
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark-text-zinc-400">
                    I am currently studying at the National Polytechnic University of Armenia, where I have received a
                    solid technical background. This education keeps me up to date with the latest advancements in
                    technology, allowing me to quickly understand and learn new technologies. <br/>
                    <br/>
                    Having a strong foundation is crucial to becoming a proficient professional. The rigorous academic
                    training at the Polytechnic has equipped me with the necessary skills and knowledge to excel in the
                    field of web development and software engineering.

                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby=":S2:"
                 className="md:border-l md:border-zinc-100 md:pl-6 md:dark-border-zinc-700/40">
          <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
            <h2 id=":S2:" className=" font-semibold text-zinc-800 dark-text-zinc-100">Sunny School</h2>
            <div className="md:col-span-3">
              <ul role="list" className="space-y-16">
                <li className="group relative flex flex-col items-start">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-800 dark-text-zinc-100">
                    Cyber Security
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark-text-zinc-400">
                    I have studied at Sunny School, where I focused on Cyber Security. Security is a critical aspect of
                    the development process, and at Sunny School, I learned how to protect software and ensure secure
                    development practices.
                    <br/>
                    <br/>
                    This training has provided me with the expertise to safeguard applications
                    and data, making my development work robust and reliable.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </comp.layout.container>
  )
};
