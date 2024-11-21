import { Download, Github, Linkedin } from 'lucide-react'

export const Header = () => {
  return (
    <div className="flex w-full glass rounded-xl h-12 items-center justify-between px-20 ">
      <a href="/">Home</a>
      <a href="/projects">Projetos</a>
      <a href="/contact">Contato</a>
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
  )
}
