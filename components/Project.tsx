import { FC, useEffect, useRef, useState } from 'react'
import Masonry from 'react-masonry-css'

export type ProjectProps = {
  name: string
  description: string
  url?: string
  images: string[]
  tags: string[]
  techs: string[]
}

export const Project: FC<{ data: ProjectProps }> = ({ data }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = elementRef.current

    if (element) {
      element.style.transition = '0ms'

      const { offsetX, offsetY, target } = e.nativeEvent
      const { clientWidth, clientHeight } = target as HTMLElement

      const x = (offsetX / clientWidth - 0.5) * 5
      const y = (offsetY / clientHeight - 0.5) * -5

      element.style.transform = `perspective(500px) rotateX(${y}deg) rotateY(${x}deg)`
      element.style.transition = `scale 200ms`
      element.style.scale = `1.05`
    }
  }

  const handleMouseLeave = () => {
    const element = elementRef.current

    if (element) {
      element.style.transition = '500ms'
      element.style.scale = `1`
      element.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)'
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setIsOpen(false)
      })

      return () => window.removeEventListener('keydown', (e) => {})
    }
  }, [])

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center fixed !z-30 w-screen h-screen top-0 right-0 bg-opacity-70 backdrop-blur-lg bg-black"
        >
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="flex flex-col gap-1 z-40 p-10 rounded-md shadow-md border border-zinc-200 bg-zinc-100 min-w-[1100px] max-w-[1400px] max-h-[75vh] overflow-auto"
          >
            <div className="flex flex-col">
              <span className="text-black text-4xl">{data.name}</span>
              <span className="text-zinc-900 text-base">{data.description}</span>
            </div>
            <span className="text-zinc-700 mt-2">Tags</span>
            <div className="flex items-center gap-1">
              {data.tags.map((tag, index) => (
                <div className="text-sm text-white font-semibold bg-black px-3 rounded-full">{tag}</div>
              ))}
            </div>
            <span className="text-zinc-700 mt-2">Techs</span>
            <div className="flex items-center gap-1">
              {data.techs.map((tech, index) => (
                <div className="text-sm text-white font-semibold bg-black px-3 rounded-full">{tech}</div>
              ))}
            </div>
            <span className="text-zinc-900 text-xl mt-4">Galeria</span>
            <Masonry breakpointCols={{ default: 2 }} className="flex gap-4">
              {data.images.map((image, index) => (
                <img className="border border-zinc-300 rounded-md overflow-hidden mt-4" src={image} key={index} />
              ))}
            </Masonry>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setIsOpen(true)
        }}
        ref={elementRef}
        className="flex bg-white rounded-sm overflow-hidden shadow-lg mt-4 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img className="w-full h-auto object-cover" src={data.images[0]} />
      </div>
    </>
  )
}
