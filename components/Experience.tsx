import { FC } from 'react'

export type ExperienceProps = {
  title: string
  description: string
  duration: string
  tags: string[]
}

export const Experience: FC<{ data: ExperienceProps }> = ({ data }) => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-2">
        <span className="text-3xl font-semibold">{data.title}</span>
        <span className="text-xl font-semibold">{data.duration}</span>
        <span className="text-xl w-3/4 break-words">{data.description}</span>
        <div className="flex items-center gap-4 flex-wrap">
          {data.tags.map((tag, index) => (
            <div className="flex text-center py-1 px-3 rounded-full bg-white text-black font-semibold text-xs" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full rounded-full w-[3px] bg-zinc-400" />
    </div>
  )
}
