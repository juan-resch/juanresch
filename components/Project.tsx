import { FC, useRef } from 'react'

export const Project: FC<{ h: number }> = ({ h }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = elementRef.current

    if (element) {
      element.style.transition = '0ms'

      const { offsetX, offsetY, target } = e.nativeEvent
      const { clientWidth, clientHeight } = target as HTMLElement

      const x = (offsetX / clientWidth - 0.5) * 10
      const y = (offsetY / clientHeight - 0.5) * -10

      element.style.transform = `perspective(500px) rotateX(${y}deg) rotateY(${x}deg)`
      element.style.transition = `scale 500ms`
      element.style.scale = `1.02`
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

  return (
    <div
      ref={elementRef}
      style={{ height: `${h}px` }}
      className="flex bg-white rounded-md shadow-lg mt-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    ></div>
  )
}
