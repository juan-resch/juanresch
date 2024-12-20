import localFont from 'next/font/local'
import * as motion from 'framer-motion/client'
import { Header } from '@/components/Header'
import { ChevronRight, Images } from 'lucide-react'
import { Project, ProjectProps } from '@/components/Project'

import Masonry from 'react-masonry-css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const projects: ProjectProps[] = [
  {
    name: 'Vetfy',
    description: 'Sistema SaaS completo para gestão de clínicas veterinárias',
    url: 'https://www.vetfy.com.br/auth',
    images: [
      '/projects/vetfy/01.png',
      '/projects/vetfy/02.png',
      '/projects/vetfy/03.png',
      '/projects/vetfy/04.png',
      '/projects/vetfy/05.png',
    ],
    tags: ['Frontend', 'Backend', 'Design'],
    techs: ['NestJS', 'Vite (React)', 'TailwindCSS', 'Shadcn UI', 'DDD', 'Typescript', 'PostgreSQL', 'TypeORM'],
  },
  {
    name: 'Narrativ',
    description: 'Sistema para automação de campanhas de serviços de tecnologia e design',
    url: 'https://www.narrativ.global/',
    images: [
      '/projects/narrativ/01.png',
      '/projects/narrativ/02.png',
      '/projects/narrativ/03.png',
      '/projects/narrativ/04.png',
      '/projects/narrativ/05.png',
      '/projects/narrativ/06.png',
      '/projects/narrativ/07.png',
    ],
    tags: ['Backend', 'Devops'],
    techs: ['NestJS', 'DDD', 'Solid', 'TDD', 'Typescript', 'PostgreSQL', 'PrismaORM'],
  },
  {
    name: 'Simplelivery',
    description: 'Sistema SaaS completo para gestão de delivery',
    images: ['/projects/simplelivery/01.png', '/projects/simplelivery/02.png', '/projects/simplelivery/03.png'],
    tags: ['Frontend', 'Backend', 'Design', 'Devops'],
    techs: ['Next.js', 'Express.js', 'Firebase', 'AWS', 'Typescript', 'PostgreSQL', 'PrismaORM', 'TailwindCSS'],
  },
  {
    name: 'Allsmart',
    description: 'Sistema para instituições de ensino EAD',
    images: ['/projects/allsmart/01.png', '/projects/allsmart/02.png', '/projects/allsmart/03.png'],
    tags: ['Frontend'],
    techs: ['React', 'JavaScript', 'TailwindCSS'],
  },
  {
    name: 'F18 Foods',
    description: 'Aplicativo de comércio de alimentos com entrega',
    images: ['/projects/f18/01.png', '/projects/f18/02.png'],
    tags: ['Mobile'],
    techs: ['React Native', 'Expo'],
  },
  {
    name: 'Garage',
    description: 'Aplicativo para aluguel de carros',
    url: 'https://garage.lease/',
    images: ['/projects/garage/01.png', '/projects/garage/02.png', '/projects/garage/03.png'],
    tags: ['Mobile'],
    techs: ['React Native', 'Expo'],
  },
  {
    name: 'Medkobe',
    description: 'Aplicativo de ensino voltado para medicina',
    url: 'https://medkobe.com/home/',
    images: ['/projects/medkobe/01.png', '/projects/medkobe/02.png', '/projects/medkobe/03.png', '/projects/medkobe/04.png'],
    tags: ['Frontend', 'Backend'],
    techs: ['React Native', 'Expo', 'Express.js'],
  },
  {
    name: 'Sou Campeão',
    description: 'Aplicativo de apostas esportivas',
    images: [
      '/projects/soucampeao/01.png',
      '/projects/soucampeao/02.png',
      '/projects/soucampeao/03.png',
      '/projects/soucampeao/04.png',
    ],
    tags: ['Frontend'],
    techs: ['React Native', 'Expo', 'Express.js'],
  },
]

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        src="/background-top.svg"
        className="w-full absolute top-0"
      ></motion.img>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col w-full items-center"
      >
        <div className="flex flex-col w-full max-w-[1024px] min-h-[100vh] py-10">
          <Header />
          {/* main */}
          <div className="flex items-center z-10 w-full justify-between flex-1 gap-10 pb-10">
            <div className="flex flex-col gap-1">
              <span className="text-amber-100 text-3xl">Olá, eu sou</span>
              <span className="text-white font-bold text-9xl">Juan Resch</span>
              <span className="text-amber-100 font-bold text-3xl">Desenvolvedor Fullstack Node.js</span>
              <div className="flex gap-2">
                <a
                  className="group transition-all h-12 w-52 mt-2 pl-3 rounded-md bg-amber-50 text-zinc-950 font-bold flex items-center justify-center"
                  href="#about"
                >
                  Sobre
                  <ChevronRight
                    className="opacity-0 translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100 duration-150"
                    size={20}
                    color="#222"
                  />
                </a>
                <a
                  className="group transition-all h-12 w-52 mt-2 pl-3 rounded-md bg-gradient-to-r from-purple-600 via-purple-400 to-purple-800 text-zinc-950 font-bold flex items-center justify-center"
                  href="#projects"
                >
                  Projetos
                  <ChevronRight
                    className="opacity-0 translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100 duration-150"
                    size={20}
                    color="#222"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* about */}
      <div id="about" className="flex w-screen min-h-[100vh] items-center justify-center">
        <div className="flex flex-col w-full max-w-[1024px] py-10">
          <div className="flex z-10 w-full h-[60vh] gap-10 justify-between">
            <div className="flex flex-col mt-10 self-center mb-20">
              <span className="text-5xl mb-2">Sobre</span>
              <span className="text-zinc-100 text-xl max-w-[650px]">
                Desenvolvedor Fullstack com 3 anos de experiência criando soluções inteligentes e escaláveis. Especialista em
                Node.js, já contribui para projetos como plataformas bancárias (BaaS), sistemas SaaS e automação de
                processos, entregando resultados que transformam negócios.
              </span>
            </div>
            <div
              style={{
                background: 'url(small_radial.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
              }}
              className="relative p-16"
            >
              <img className="w-[400px] object-contain" src="me.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="flex w-screen min-h-[100vh] items-center justify-center">
        <div className="flex flex-col w-full max-w-[1200px] py-10">
          <div className="flex z-10 w-full gap-10 justify-between">
            <div className="flex flex-col w-full">
              <span className="text-5xl">Projetos</span>
              <Masonry breakpointCols={{ default: 3 }} className="flex w-full gap-4 mt-2">
                {projects.map((p, i) => (
                  <Project key={i} data={p} />
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
