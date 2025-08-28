'use client'
import { motion } from 'motion/react'
import { EMAIL, SOCIAL_LINKS, WORK_EXPERIENCE } from '~/data'
import { MagneticSocialLink } from './_components/magnetic-social'
import { Spotlight } from '~/components/ui/spotlight'
import { AnimatedBackground } from '~/components/ui/animated-background'
import Link from 'next/link'
import { IBlogPost } from '~/types'
import * as React from 'react'
import { getBlogPosts } from './actions'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Page() {
  const [BLOG_POSTS, setBlogPosts] = React.useState<Array<IBlogPost>>([])
  React.useEffect(() => {
    getBlogPosts().then((posts) => setBlogPosts(posts))
  }, [])
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-700 dark:text-zinc-300">
            Hello!!!! I&apos;m a self taught full stack developer, CS student
            and OSS enthusiast, currently working as a full stack developer at{' '}
            <Link
              href="https://www.skillrev.com"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
              target="_blank"
            >
              SkillRev
            </Link>
            . I have assisted more than 6 start-ups in their initial phase by
            building and scaling their technical infrastructure and product
            development. Also sometimes I yap over{' '}
            <Link
              href="/posts"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              my blog posts
            </Link>
            . In addition to that, I keep{' '}
            <Link
              href="/music"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              listening
            </Link>{' '}
            to random music
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-xs bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-sm p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-xs bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectCard src={project.thumbnail} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Latest Blog Posts</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-xs dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xs px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
        <div className="mt-4">
          <Link
            href="/posts"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            View all posts &rarr;
          </Link>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div>
          My PGP key:{' '}
          <Link
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/5A1E5B4C1587E151FEF4BBAFE85E4BE5AF9BC51D"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
            target="_blank"
          >
            5A1E5B4C1587E151FEF4BBAFE85E4BE5AF9BC51D
          </Link>
        </div>
        <div className="my-2">
          Help me fund my server costs and coffee addiction:
          <ul className="my-1">
            <li>
              <span>SOL: </span>
              <Link
                href="https://explorer.solana.com/address/2pKYHpCuvyQUooYvkCrMPXrc9DSEK7M3VXgJRFcTaKxz"
                className="hover:text-zinc-900 dark:hover:text-zinc-100"
                target="_blank"
              >
                2pKYHpCuvyQUooYvkCrMPXrc9DSEK7M3VXgJRFcTaKxz
              </Link>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
