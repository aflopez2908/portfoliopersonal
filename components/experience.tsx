"use client"

import { forwardRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

type Language = "en" | "es"

interface ExperienceItem {
  company: string
  period: string
  role: string
  description: string
  technologies: string[]
}

interface ExperienceProps {
  language: Language
  isDarkMode: boolean
  technologiesLabel: string
  workExperienceLabel: string
}

const experiencesByLanguage: Record<Language, ExperienceItem[]> = {
  en: [
    {
      company: "Alfa GL",
      period: "2024",
      role: "Software Developer",
      description:
        "Designed, developed and supported an internal company application, optimizing financial processes and improving user experience. Implemented new functionalities, solved errors and improved application performance.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3"],
    },
    {
      company: "Teleperformance",
      period: "2020",
      role: "Database Manager",
      description:
        "Managed databases to optimize customer information, ensuring accuracy and accessibility. Stood out for personalized attention skills, using active listening to identify customer needs.",
      technologies: ["Database"],
    },
    {
      company: "Freelance",
      period: "Currently",
      role: "Full Stack Developer",
      description:
        "Specialized in brand analysis and positioning to offer personalized technological solutions to clients. Stands out for designing models in Figma to strategically plan applications.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
    },
    {
      company: "One Bot center",
      period: "Currently",
      role: "Full Stack Developer",
      description:
        "Specialized in brand analysis and positioning to offer personalized technological solutions to clients. Stands out for designing models in Figma to strategically plan applications.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
    },
  ],
  es: [
    {
      company: "Alfa GL",
      period: "2024",
      role: "Desarrollador de Software",
      description:
        "Diseñé, desarrollé y di soporte a una aplicación interna de la empresa, optimizando procesos financieros y mejorando la experiencia del usuario. Implementé nuevas funcionalidades, solucioné errores y mejoré el rendimiento de la aplicación.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3"],
    },
    {
      company: "Teleperformance",
      period: "2020",
      role: "Gestor de Base de Datos",
      description:
        "Se encargó de gestionar bases de datos para optimizar la información de los clientes, asegurando su precisión y accesibilidad. Destacó por su habilidad en la atención personalizada, utilizando escucha activa para identificar las necesidades de los clientes.",
      technologies: ["Database"],
    },
    {
      company: "Freelance",
      period: "Actualmente",
      role: "Desarrollador Full Stack",
      description:
        "Especializado en el análisis y posicionamiento de marca para ofrecer soluciones tecnológicas personalizadas a los clientes. Destaca por el diseño de modelos en Figma para planificar de manera estratégica las aplicaciones.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
    },
    {
      company: "One Bot center",
      period: "Actualmente",
      role: "Desarrollador Full Stack",
      description:
        "Especializado en el análisis y posicionamiento de marca para ofrecer soluciones tecnológicas personalizadas a los clientes. Destaca por el diseño de modelos en Figma para planificar de manera estratégica las aplicaciones.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
    },
  ],
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

function ExperienceSection(
  { language, isDarkMode, technologiesLabel, workExperienceLabel }: ExperienceProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const [activeExperience, setActiveExperience] = useState(0)
  const experiences = experiencesByLanguage[language]

  useEffect(() => {
    setActiveExperience(0)
  }, [language])

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 px-4 transition-all duration-500 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-5xl md:text-6xl font-black mb-12 text-center transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {workExperienceLabel.split(" ")[0]}
          <br />
          <span
            className={`transition-all duration-500 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            }`}
          >
            {workExperienceLabel.split(" ")[1]}
          </span>
        </motion.h2>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company + exp.period}
                variants={scaleIn}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveExperience(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeExperience === index
                    ? isDarkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : isDarkMode
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-white hover:bg-blue-50 shadow-md border border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold transition-colors duration-500 ${
                    activeExperience === index ? "text-white" : isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.company}
                </h3>
                <p
                  className={`font-medium transition-colors duration-500 ${
                    activeExperience === index ? "text-white/80" : isDarkMode ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {exp.period}
                </p>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={`backdrop-blur-sm p-8 rounded-xl transition-all duration-500 ${
              isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
            }`}
          >
            <motion.h3
              key={activeExperience}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {experiences[activeExperience].role}
            </motion.h3>

            <motion.h4
              key={`${activeExperience}-company`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`mb-4 font-medium transition-colors duration-500 ${
                isDarkMode ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {experiences[activeExperience].company} - {experiences[activeExperience].period}
            </motion.h4>

            <motion.p
              key={`${activeExperience}-desc`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`mb-6 leading-relaxed transition-colors duration-500 ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              {experiences[activeExperience].description}
            </motion.p>

            <motion.h5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className={`text-lg font-bold mb-4 transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {technologiesLabel}
            </motion.h5>

            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="flex flex-wrap gap-2">
              {experiences[activeExperience].technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
                    isDarkMode ? "bg-blue-600/30 text-white" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default forwardRef<HTMLElement, ExperienceProps>(ExperienceSection)
