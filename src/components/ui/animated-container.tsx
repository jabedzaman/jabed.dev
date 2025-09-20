'use client'

import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

export const AnimatedContainer = ({
  sections,
}: {
  sections: React.ReactNode[]
}) => {
  return (
    <motion.div
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {sections.map((section, index) => (
        <motion.section
          key={index}
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          {section}
        </motion.section>
      ))}
    </motion.div>
  )
}
