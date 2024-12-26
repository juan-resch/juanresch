import { Download, Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed pb-4 group flex w-screen h-40 top-0 left-0 items-center justify-center z-30">
      <div
        className={`flex ${isScrolled ? 'opacity-10' : 'opacity-100'} ${
          isScrolled ? 'translate-y-[-30px]' : ''
        } group-hover:opacity-100 group-hover:translate-y-0 w-[1200px] duration-300 glass rounded-xl h-12 items-center justify-between px-20`}
      >
        <a href="#">Home</a>
        <a href="#projects">Projetos</a>
        <a href="#experience">Experiência</a>
        <a href="/cv.pdf" className="flex gap-1 items-center cursor-pointer" download="juan-resch-resume.pdf">
          Meu curriculo
        </a>
        <a href="https://www.linkedin.com/in/juan-resch-a6050221a/" className="flex gap-1 items-center cursor-pointer">
          LinkedIn
        </a>
        <a href="https://github.com/juan-resch" className="flex gap-1 items-center cursor-pointer">
          GitHub
        </a>
      </div>
    </div>
  )
}
