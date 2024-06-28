import type {PageData, PageHelpers} from "#types";
import {formatDate} from "#utils";

export const renderOrder = 1;
export const indexable = true;
export const title = "Home";
export const layout = "layouts/root.tsx";

const header = {
  title: 'Armen Ohanyan: Strong Middle Software Engineer',
}

export default (
  params: PageData,
  {urlFilter}: PageHelpers,
) => {
  const {comp, icons, search} = params
  const articles = search?.pages("type=article", "date=desc", 3)

  const images = [
    {
      id: 1,
      src: urlFilter!("/images/photos/image-1.jpg"),
      className: 'rotate-2'
    },
    {
      id: 2,
      src: urlFilter!("/images/photos/image-2.jpg"),
      className: '-rotate-2'
    },
    {
      id: 3,
      src: urlFilter!("/images/photos/image-3.jpg"),
      className: 'rotate-2'
    },
    {
      id: 3,
      src: urlFilter!("/images/photos/image-4.jpg"),
      className: 'rotate-2'
    },
    {
      id: 3,
      src: urlFilter!("/images/photos/image-5.jpg"),
      className: '-rotate-2'
    }
  ]
  const workList = [
    {
      icon: urlFilter('/images/logos/iguan.png'),
      company: 'Iguan Systems',
      role: 'Full Stack Developer',
      start: 'Apr 2022',
      end: 'Present'
    },
    {
      icon: urlFilter('/images/logos/upwork.png'),
      company: 'Upwork',
      role: 'Full Stack Developer',
      start: 'Nov 2023',
      end: 'Present'
    },
    {
      icon: urlFilter('/images/logos/evistep.png'),
      company: 'Evistep Enterprise',
      role: 'Full Stack Developer',
      start: 'Oct 2021',
      end: 'Apr 2022'
    }
  ]

  const socialMedias = () => {
    return <div className="max-w-2xl">
      <p className="mt-6 text-base text-zinc-600 dark-text-zinc-400">
        An open-minded, creative and hardworking person who interested in IT.

        One of my general purposes is to become an employee whom management can trust to do a good job, work towards
        the
        company’s goals and come to work prepared each day. <br/> <br/>

        Being a good employee is so important: along with being a hard worker, a good employee also knows how to treat
        their supervisors and colleagues with respect.<br/> <br/>

        Also, I want to note that my goals are so meaningful for me and I do everything to reach them. Whatever I put
        my
        mind to, I achieve. And that’s my motivation to work hard.<br/> <br/>

        My slogan is "Don't give up and work until your role-models become your colleagues"
      </p>
    </div>

  }

  return (
    <comp.layout.container header={header} headerChild={socialMedias()}>
      <div>
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="gap-y-3 mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2">
                <div>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark-border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark-text-zinc-100">

                      <span>Contact</span></h2>
                    <ol className="mt-6 space-y-4">

                      <li className="flex gap-4">
                        <div>
                          <comp.shared.icon
                            path={icons.mailFull}
                            size={24}
                            className="flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                            viewBox="0 0 24 24"
                          />

                        </div>
                        <dl className="flex items-center flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Mail</dt>
                          <dd className=" text-xs text-zinc-900 dark-text-zinc-100">
                            <a href="mailto:me@armohanyan.dev">

                              <span className="text-xs text-zinc-500 dark-text-zinc-400">me@armohanyan.dev</span>
                            </a>
                          </dd>
                        </dl>
                      </li>

                      <li className="flex gap-4">
                        <div>
                          <comp.shared.icon
                            path={icons.linkedin}
                            className="fill-zinc-500 transition group-hover:fill-zinc-600 dark-fill-zinc-400 dark-group-hover:fill-zinc-300"
                            size={24}
                            viewBox="0 0 24 24"
                          />

                        </div>
                        <dl className="flex items-center flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Linkedin</dt>
                          <dd className=" text-xs text-zinc-900 dark-text-zinc-100">
                            <a className="text-xs text-zinc-500 dark-text-zinc-400" aria-label="Follow on LinkedIn"
                               href="https://am.linkedin.com/in/armen-ohanyan-605bb0220" target="_blank">
                              Armen Ohanyan
                            </a>
                          </dd>
                        </dl>
                      </li>

                      <li className="flex gap-4">
                        <div>
                          <comp.shared.icon
                              path={icons.github}
                              size={24}
                              className="fill-zinc-500 transition group-hover:fill-zinc-600 dark-fill-zinc-400 dark-group-hover:fill-zinc-300"
                              viewBox="0 0 24 24"
                            />

                          </div>
                          <dl className="flex items-center flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">GitHub</dt>
                            <dd className=" text-xs text-zinc-900 dark-text-zinc-100">
                              <a className="text-xs text-zinc-500 dark-text-zinc-400" aria-label="Follow on GitHub"
                                 href="https://github.com/armohanyan" target="_blank"> armohanyan</a>
                            </dd>
                          </dl>
                      </li>

                    </ol>


                  </div>

                </div>
                <div className="lg:pl-16 xl:pl-24">
                  <div className="rounded-2xl border border-zinc-100 p-6 dark-border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark-text-zinc-100">
                      <comp.shared.icon
                        path={icons.work.path1}
                        path2={icons.work.path2}
                        size={24}
                        p1ClassName="fill-zinc-100 stroke-zinc-400 dark-fill-zinc-100/10 dark-stroke-zinc-500"
                        p2ClassName="stroke-zinc-400 dark-stroke-zinc-500"
                        viewBox="0 0 24 24"
                      />

                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {
                        workList.map(item =>
                          <li className="flex gap-4">
                            <div
                              className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark-border dark-border-zinc-700/50 dark-bg-zinc-800 dark-ring-0">
                              <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                                   className="h-7 w-7" style="color:transparent"
                                   src={item.icon}/></div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                              <dt className="sr-only">Company</dt>
                              <dd
                                className="w-full flex-none text-sm font-medium text-zinc-900 dark-text-zinc-100">{item.company}
                              </dd>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-xs text-zinc-500 dark-text-zinc-400">{item.role}</dd>
                              <dt className="sr-only">Date</dt>
                              <dd className="ml-auto text-xs text-zinc-400 dark-text-zinc-500">
                                <time>{item.start}</time>
                                <span aria-hidden="true">—</span>
                                <time>{item.end}</time>
                              </dd>
                            </dl>
                          </li>)
                      }
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark-bg-zinc-800/50 dark-text-zinc-300 dark-hover:bg-zinc-800 dark-hover:text-zinc-50 dark-active:bg-zinc-800/50 dark-active:text-zinc-50/70 group mt-6 w-full"
                      href={urlFilter!('pdf/cv.pdf')}
                      target="_blank"
                    >
                      View CV

                      <comp.shared.icon
                        path={icons.arrowDown}
                        size={26}
                        className="stroke-zinc-400 transition group-active:stroke-zinc-600 dark-group-hover:stroke-zinc-50 dark-group-active:stroke-zinc-50"
                        viewBox="0 0 24 24"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </comp.layout.container>
  )
};

