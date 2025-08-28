import Image from 'next/image'

type ProjectCardProps = {
  src: string
}

export function ProjectCard({ src }: ProjectCardProps) {
  return (
    <div className="relative h-[200px] w-[300px] overflow-hidden rounded-xs">
      <Image
        src={src}
        alt="Project thumbnail"
        fill
        style={{ objectFit: 'cover' }}
        className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        priority
      />
    </div>
  )
}
