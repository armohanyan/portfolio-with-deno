import type {PageData, PageHelpers} from "#types";

export const layout = "layouts/root.tsx";

export default (
  params: PageData,
  {urlFilter}: PageHelpers
) => {
  const {icons, comp, header} = params
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img alt="" loading="lazy" width="800" height="800"
                       decoding="async" data-nimg="1"
                       className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark-bg-zinc-800"
                       sizes="(min-width: 1024px) 32rem, 20rem"
                       style="color: transparent;"
                       src={urlFilter!("/images/portrait.jpg")}
                  />

                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1
                  className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark-text-zinc-100">
                  {header.title}
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark-text-zinc-400">
                  <p>
                    Hi, I'm Armen Ohanyan, a Fullstack Web Developer with over 3-4 years of experience. I started my
                    career at the age of 17, and since then, I have developed a deep love for building fantastic
                    websites and solving complex problems.

                  </p>
                  <p>
                    From a young age, I aspired to become a sought-after specialist, and today that dream is a reality.
                    I am passionate about helping people achieve their business desires and goals by providing my
                    technical services. Although I initially worked with PHP and Laravel, I found my true calling with
                    JavaScript and have since mastered various frameworks and libraries including Vue.js, Nuxt.js,
                    React.js, Next.js, Node.js, Express.js, Nest.js, and Deno.js.

                  </p>
                  <p>
                    I love to study every day, as self-education is crucial to staying in demand in today's fast-paced
                    tech world. My diverse project experience has made me a strong and responsive developer who is
                    always ready to tackle new challenges :)
                  </p>
                </div>
              </div>
              <div className="lg:pl-20">
                <ul role="list">
                  <li className="mt-4 flex"><a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark-text-zinc-200 dark-hover:text-teal-500"
                    href="https://github.com/armohanyan" target="_blank">
                    <comp.shared.icon
                      path={icons.github}
                      size={24}
                      className="fill-zinc-500 transition group-hover:fill-zinc-600 dark-fill-zinc-400 dark-group-hover:fill-zinc-300"
                      viewBox="0 0 24 24"
                    />
                    <span className="ml-4">Follow on GitHub</span></a></li>
                  <li className="mt-4 flex">
                    <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark-text-zinc-200 dark-hover:text-teal-500"
                    href="https://am.linkedin.com/in/armen-ohanyan-605bb0220" target="_blank">
                    <comp.shared.icon
                      path={icons.linkedin}
                      className="fill-zinc-500 transition group-hover:fill-zinc-600 dark-fill-zinc-400 dark-group-hover:fill-zinc-300"
                      size={24}
                      viewBox="0 0 24 24"
                    />
                    <span className="ml-4">Follow on LinkedIn</span></a></li>
                  <li className="mt-8 border-t border-zinc-100 pt-8 dark-border-zinc-700/40 flex">
                    <a
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark-text-zinc-200 dark-hover:text-teal-500"
                    href="mailto:me@armohanyan.dev">

                    <comp.shared.icon
                      path={icons.mailFull}
                      size={24}
                      className="flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                      viewBox="0 0 24 24"
                    />
                    <span className="ml-4">me@armohanyan.dev</span>
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
