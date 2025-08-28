import { projectMetaData } from '~/libs/post-utils'
import moment from 'moment'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Project</h1>
      <div className="my-4 flex flex-col gap-2">
        {projectMetaData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              passHref
            >
              <h2>{project.title}</h2>
              <span className="text-xs text-[#666666]">
                {moment(project.date).format('MMMM D, YYYY')}
              </span>
            </Link>
          ))}
      </div>
    </>
  )
}
