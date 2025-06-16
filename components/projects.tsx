"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  // NUEVOS PROYECTOS (arriba)
  {
    id: "baloncesto-gestion",
    title: "Gestión Baloncesto",
    description:
      "Sistema completo de gestión de equipos y estadísticas de baloncesto con seguimiento de partidos y jugadores en tiempo real.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://v0-baloncesto-gestion-estadisticas.vercel.app/",
    repoUrl: "#",
  },
  {
    id: "cv-generator-ia",
    title: "Generador CV con IA",
    description:
      "Herramienta inteligente para crear currículums profesionales utilizando inteligencia artificial y plantillas personalizables.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "AI/ML", "Tailwind CSS"],
    liveUrl: "https://v0.dev/chat/cv-creation-tool-vh36Gp7vYjy",
    repoUrl: "#",
  },
  {
    id: "restaurant-reservas",
    title: "App Restaurante",
    description: "Aplicación completa para restaurantes con sistema de reservas, gestión de mesas y pedidos online.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://v0-restaurant-app-design-omega.vercel.app/",
    repoUrl: "#",
  },
  {
    id: "docuwebs-biblioteca",
    title: "DocuWebs - Biblioteca Dev",
    description:
      "Biblioteca completa de recursos y documentación para desarrolladores con herramientas y guías actualizadas.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "MDX", "Vercel"],
    liveUrl: "https://docuwebs.vercel.app/",
    repoUrl: "#",
  },
  // PROYECTOS ANTERIORES (abajo)
  {
    id: "api-proyectos",
    title: "API Proyectos",
    description:
      "Una API robusta para gestión de proyectos con funcionalidades avanzadas de autenticación y manejo de datos.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "analisis-precipitaciones",
    title: "Análisis Precipitaciones",
    description:
      "Sistema de análisis de datos meteorológicos con visualizaciones interactivas y predicciones basadas en machine learning.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Pandas", "Matplotlib"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "barberia-web",
    title: "Barbería Web",
    description: "Sitio web moderno para barbería con sistema de reservas online y galería de trabajos realizados.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "figma-design-system",
    title: "Figma Design System",
    description: "Sistema de diseño completo con componentes reutilizables y guías de estilo para aplicaciones web.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Figma", "Design Tokens", "CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Stripe", "Prisma"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Generador automático de portafolios personalizados con múltiples plantillas y temas.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "crypto-tracker",
    title: "Crypto Tracker",
    description: "Aplicación para seguimiento de criptomonedas con gráficos en tiempo real y alertas de precio.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Chart.js", "WebSocket"],
    liveUrl: "#",
    repoUrl: "#",
  },
]

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card: any, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-center">
          MY
          <span className="block text-gray-400">PROJECTS</span>
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, showAllProjects ? projects.length : visibleProjects).map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.repoUrl, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                      onClick={() => window.open(project.repoUrl, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10">
                    Leer Más →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {!showAllProjects && projects.length > visibleProjects && (
            <Button
              size="lg"
              onClick={() => setShowAllProjects(true)}
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Más Proyectos
            </Button>
          )}

          {showAllProjects && (
            <Button
              size="lg"
              onClick={() => setShowAllProjects(false)}
              className="bg-gray-600 text-white hover:bg-gray-700 text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Menos Proyectos
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
