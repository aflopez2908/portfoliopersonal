"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ExperienceData {
  company: string
  period: string
  description: string
  technologies: string[]
}

const experiences: ExperienceData[] = [
  {
    company: "Alfa GL",
    period: "2024",
    description:
      "Diseñé, desarrollé y di soporte a una aplicación interna de la empresa, optimizando procesos financieros y mejorando la experiencia del usuario. Implementé nuevas funcionalidades, solucioné errores y mejoré el rendimiento de la aplicación. Participé activamente en la documentación técnica y en la formación de usuarios internos, abordando tanto el backend como el frontend.",
    technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3"],
  },
  {
    company: "Teleperformance",
    period: "2020",
    description:
      "Se encargó de gestionar bases de datos para optimizar la información de los clientes, asegurando su precisión y accesibilidad. Destacó por su habilidad en la atención personalizada, utilizando escucha activa para identificar las necesidades de los clientes y proporcionar soluciones técnicas efectivas en el ámbito del software.",
    technologies: ["Database"],
  },
  {
    company: "Freelance",
    period: "Currently",
    description:
      "Especializado en el análisis y posicionamiento de marca para ofrecer soluciones tecnológicas personalizadas a los clientes. Destaca por el diseño de modelos en Figma para planificar de manera estratégica las aplicaciones, asegurando una experiencia de usuario eficiente y alineada con los objetivos del cliente.",
    technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
  },
]

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }).fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5",
    )
  }, [])

  useEffect(() => {
    // Animate content change
    gsap.fromTo(".experience-content", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" })
  }, [activeExperience])

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      Angular: "🅰️",
      JavaScript: "🟨",
      "Node.js": "🟢",
      Database: "🗄️",
      HTML5: "🟧",
      CSS3: "🔷",
      React: "⚛️",
      Python: "🐍",
    }
    return icons[tech] || "💻"
  }

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-center">
          WORK
          <span className="block text-gray-400">EXPERIENCE</span>
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Buttons */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveExperience(index)}
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeExperience === index
                    ? "bg-white text-black shadow-2xl"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-sm opacity-70">{exp.period}</p>
              </button>
            ))}
          </div>

          {/* Experience Content */}
          <div className="lg:col-span-2 experience-content">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-4">
                {experiences[activeExperience].company} - {experiences[activeExperience].period}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">{experiences[activeExperience].description}</p>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {experiences[activeExperience].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm"
                    >
                      <span className="text-lg">{getTechIcon(tech)}</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
