"use client"

import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Target,
  CheckCircle,
  Sun,
  Moon,
  Globe,
  Home,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import FloatingSocialButtons from "@/components/floating-social-buttons"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    back: "Back",
    home: "Home",
    contact: "Contact",
    letsTalk: "Let's Talk!",

    // Project Details
    duration: "Duration",
    team: "Team",
    role: "Role",
    challengesFaced: "Challenges Faced",
    solutionsImplemented: "Solutions Implemented",
    keyFeatures: "Key Features",
    impactResults: "Impact & Results",
    projectGallery: "Project Gallery",
    interestedProject: "Interested in this project?",
    interestedDescription: "I'd love to discuss how I can help you with similar projects",
    viewCode: "View Code",
    contactMe: "Contact Me",

    // Months
    months: "months",
    month: "month",

    // Common
    developer: "developer",
    developers: "developers",
    projectNotFound: "Project not found",

    // Project specific content will be added below
  },
  es: {
    // Navigation
    back: "Volver",
    home: "Inicio",
    contact: "Contacto",
    letsTalk: "¡Hablemos!",

    // Project Details
    duration: "Duración",
    team: "Equipo",
    role: "Rol",
    challengesFaced: "Desafíos Enfrentados",
    solutionsImplemented: "Soluciones Implementadas",
    keyFeatures: "Características Principales",
    impactResults: "Impacto y Resultados",
    projectGallery: "Galería del Proyecto",
    interestedProject: "¿Te interesa este proyecto?",
    interestedDescription: "Me encantaría discutir cómo puedo ayudarte con proyectos similares",
    viewCode: "Ver Código",
    contactMe: "Contactar",

    // Months
    months: "meses",
    month: "mes",

    // Common
    developer: "desarrollador",
    developers: "desarrolladores",
    projectNotFound: "Proyecto no encontrado",
  },
}

interface ProjectDetail {
  id: string
  title: {
    en: string
    es: string
  }
  subtitle: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  longDescription: {
    en: string
    es: string
  }
  image: string
  technologies: string[]
  github: string
  demo: string
  duration: {
    en: string
    es: string
  }
  team: {
    en: string
    es: string
  }
  role: {
    en: string
    es: string
  }
  challenges: {
    en: string[]
    es: string[]
  }
  solutions: {
    en: string[]
    es: string[]
  }
  impact: {
    en: string[]
    es: string[]
  }
  features: {
    en: string[]
    es: string[]
  }
  gallery: string[]
}

const projectsData: { [key: string]: ProjectDetail } = {
  "api-proyectos": {
    id: "api-proyectos",
    title: {
      en: "Projects API",
      es: "API Proyectos",
    },
    subtitle: {
      en: "Enterprise Project Management System",
      es: "Sistema de Gestión de Proyectos Empresariales",
    },
    description: {
      en: "A robust API for project management with advanced authentication features and data handling.",
      es: "Una API robusta para gestión de proyectos con funcionalidades avanzadas de autenticación y manejo de datos.",
    },
    longDescription: {
      en: "This project was born from the need to optimize project management in enterprise environments. I developed a complete API that allows companies to manage their projects efficiently, with a robust authentication system and scalable architecture.",
      es: "Este proyecto nació de la necesidad de optimizar la gestión de proyectos en entornos empresariales. Desarrollé una API completa que permite a las empresas gestionar sus proyectos de manera eficiente, con un sistema de autenticación robusto y una arquitectura escalable.",
    },
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker", "Redis"],
    github: "#",
    demo: "#",
    duration: {
      en: "4 months",
      es: "4 meses",
    },
    team: {
      en: "2 developers",
      es: "2 desarrolladores",
    },
    role: {
      en: "Full Stack Developer & Architect",
      es: "Full Stack Developer & Arquitecto",
    },
    challenges: {
      en: [
        "Design a scalable architecture to handle multiple simultaneous projects",
        "Implement a secure authentication system with roles and permissions",
        "Optimize database queries to improve performance",
        "Create an intuitive and well-documented RESTful API",
      ],
      es: [
        "Diseñar una arquitectura escalable para manejar múltiples proyectos simultáneamente",
        "Implementar un sistema de autenticación seguro con roles y permisos",
        "Optimizar las consultas de base de datos para mejorar el rendimiento",
        "Crear una API RESTful intuitiva y bien documentada",
      ],
    },
    solutions: {
      en: [
        "Implemented a microservices architecture using FastAPI",
        "Developed a JWT system with refresh tokens and granular roles",
        "Optimized queries using indexes and caching techniques with Redis",
        "Documented the API using OpenAPI/Swagger with detailed examples",
      ],
      es: [
        "Implementé una arquitectura de microservicios usando FastAPI",
        "Desarrollé un sistema JWT con refresh tokens y roles granulares",
        "Optimicé las consultas usando índices y técnicas de caching con Redis",
        "Documenté la API usando OpenAPI/Swagger con ejemplos detallados",
      ],
    },
    impact: {
      en: [
        "60% reduction in project management time",
        "40% improvement in team collaboration",
        "Elimination of manual errors in task tracking",
        "Successful implementation in 3 different companies",
      ],
      es: [
        "Reducción del 60% en el tiempo de gestión de proyectos",
        "Mejora del 40% en la colaboración entre equipos",
        "Eliminación de errores manuales en el seguimiento de tareas",
        "Implementación exitosa en 3 empresas diferentes",
      ],
    },
    features: {
      en: [
        "JWT authentication with roles and permissions",
        "Complete CRUD for projects and tasks",
        "Real-time notification system",
        "Dashboard with metrics and reports",
        "Fully documented RESTful API",
        "Integration with external tools",
      ],
      es: [
        "Autenticación JWT con roles y permisos",
        "CRUD completo para proyectos y tareas",
        "Sistema de notificaciones en tiempo real",
        "Dashboard con métricas y reportes",
        "API RESTful completamente documentada",
        "Integración con herramientas externas",
      ],
    },
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "analisis-precipitaciones": {
    id: "analisis-precipitaciones",
    title: {
      en: "Precipitation Analysis",
      es: "Análisis de Precipitaciones",
    },
    subtitle: {
      en: "Intelligent Meteorological Analysis System",
      es: "Sistema de Análisis Meteorológico Inteligente",
    },
    description: {
      en: "Meteorological data analysis system with interactive visualizations and machine learning-based predictions.",
      es: "Sistema de análisis de datos meteorológicos con visualizaciones interactivas y predicciones basadas en machine learning.",
    },
    longDescription: {
      en: "I developed a complete application for meteorological data analysis that helps scientists and meteorologists understand precipitation patterns. The system includes machine learning algorithms for predictions and interactive visualizations to facilitate data interpretation.",
      es: "Desarrollé una aplicación completa para el análisis de datos meteorológicos que ayuda a científicos y meteorólogos a entender patrones de precipitación. El sistema incluye algoritmos de machine learning para predicciones y visualizaciones interactivas para facilitar la interpretación de datos.",
    },
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Plotly", "Streamlit"],
    github: "#",
    demo: "#",
    duration: {
      en: "3 months",
      es: "3 meses",
    },
    team: {
      en: "1 developer",
      es: "1 desarrollador",
    },
    role: {
      en: "Data Scientist & Developer",
      es: "Data Scientist & Developer",
    },
    challenges: {
      en: [
        "Process large volumes of historical meteorological data",
        "Create clear and understandable visualizations for non-technical users",
        "Implement accurate prediction algorithms",
        "Optimize performance for real-time analysis",
      ],
      es: [
        "Procesar grandes volúmenes de datos meteorológicos históricos",
        "Crear visualizaciones claras y comprensibles para usuarios no técnicos",
        "Implementar algoritmos de predicción precisos",
        "Optimizar el rendimiento para análisis en tiempo real",
      ],
    },
    solutions: {
      en: [
        "Implemented parallel processing techniques with Pandas",
        "Developed interactive dashboards using Plotly and Streamlit",
        "Applied regression models and time series for predictions",
        "Optimized code using vectorization and intelligent caching",
      ],
      es: [
        "Implementé técnicas de procesamiento paralelo con Pandas",
        "Desarrollé dashboards interactivos usando Plotly y Streamlit",
        "Apliqué modelos de regresión y series temporales para predicciones",
        "Optimicé el código usando vectorización y caching inteligente",
      ],
    },
    impact: {
      en: [
        "50% improvement in meteorological prediction accuracy",
        "70% reduction in data analysis time",
        "Adoption by 2 meteorological stations",
        "Publication of insights at scientific conferences",
      ],
      es: [
        "Mejora del 50% en la precisión de predicciones meteorológicas",
        "Reducción del 70% en el tiempo de análisis de datos",
        "Adopción por parte de 2 estaciones meteorológicas",
        "Publicación de insights en conferencias científicas",
      ],
    },
    features: {
      en: [
        "Advanced time series analysis",
        "Real-time interactive visualizations",
        "Machine learning prediction models",
        "Customizable dashboard",
        "Automatic report export",
        "Integration with meteorological APIs",
      ],
      es: [
        "Análisis de series temporales avanzado",
        "Visualizaciones interactivas en tiempo real",
        "Modelos de predicción con machine learning",
        "Dashboard personalizable",
        "Exportación de reportes automáticos",
        "Integración con APIs meteorológicas",
      ],
    },
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "barberia-web": {
    id: "barberia-web",
    title: {
      en: "Barbershop Web",
      es: "Barbería Web",
    },
    subtitle: {
      en: "Digital Platform for Barbershop Services",
      es: "Plataforma Digital para Servicios de Barbería",
    },
    description: {
      en: "Modern website for barbershop with online booking system and portfolio gallery.",
      es: "Sitio web moderno para barbería con sistema de reservas online y galería de trabajos realizados.",
    },
    longDescription: {
      en: "I created a complete web platform to modernize a traditional barbershop business. The project includes an online booking system, work gallery, service management, and an administrative panel for the owner.",
      es: "Creé una plataforma web completa para modernizar el negocio de una barbería tradicional. El proyecto incluye un sistema de reservas online, galería de trabajos, gestión de servicios y un panel administrativo para el propietario.",
    },
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Stripe"],
    github: "#",
    demo: "#",
    duration: {
      en: "2 months",
      es: "2 meses",
    },
    team: {
      en: "1 developer",
      es: "1 desarrollador",
    },
    role: {
      en: "Full Stack Developer & UI/UX Designer",
      es: "Full Stack Developer & UI/UX Designer",
    },
    challenges: {
      en: [
        "Create an attractive interface that reflects the barbershop's identity",
        "Implement an intuitive and reliable booking system",
        "Integrate secure online payments",
        "Optimize for mobile devices",
      ],
      es: [
        "Crear una interfaz atractiva que refleje la identidad de la barbería",
        "Implementar un sistema de reservas intuitivo y confiable",
        "Integrar pagos online de forma segura",
        "Optimizar para dispositivos móviles",
      ],
    },
    solutions: {
      en: [
        "Designed a modern interface with vintage elements using React",
        "Developed an interactive calendar with real-time availability",
        "Integrated Stripe for secure payments and card processing",
        "Implemented responsive design with mobile-first approach",
      ],
      es: [
        "Diseñé una interfaz moderna con elementos vintage usando React",
        "Desarrollé un calendario interactivo con disponibilidad en tiempo real",
        "Integré Stripe para pagos seguros y procesamiento de tarjetas",
        "Implementé un diseño responsive con mobile-first approach",
      ],
    },
    impact: {
      en: [
        "80% increase in online bookings",
        "50% reduction in last-minute cancellations",
        "90% improvement in customer satisfaction",
        "35% increase in monthly revenue",
      ],
      es: [
        "Aumento del 80% en reservas online",
        "Reducción del 50% en cancelaciones de última hora",
        "Mejora del 90% en la satisfacción del cliente",
        "Incremento del 35% en ingresos mensuales",
      ],
    },
    features: {
      en: [
        "Real-time online booking system",
        "Work gallery with filters",
        "Service and pricing management",
        "Complete administrative panel",
        "Automatic notifications",
        "Social media integration",
      ],
      es: [
        "Sistema de reservas online en tiempo real",
        "Galería de trabajos con filtros",
        "Gestión de servicios y precios",
        "Panel administrativo completo",
        "Notificaciones automáticas",
        "Integración con redes sociales",
      ],
    },
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "figma-design-system": {
    id: "figma-design-system",
    title: {
      en: "Figma Design System",
      es: "Figma Design System",
    },
    subtitle: {
      en: "Scalable and Consistent Design System",
      es: "Sistema de Diseño Escalable y Consistente",
    },
    description: {
      en: "Complete design system with reusable components and style guides for web applications.",
      es: "Sistema de diseño completo con componentes reutilizables y guías de estilo para aplicaciones web.",
    },
    longDescription: {
      en: "I developed a complete design system in Figma that standardizes the visual and user experience across multiple products. This system includes reusable components, design tokens, and detailed documentation for development teams.",
      es: "Desarrollé un sistema de diseño completo en Figma que estandariza la experiencia visual y de usuario across múltiples productos. Este sistema incluye componentes reutilizables, tokens de diseño, y documentación detallada para equipos de desarrollo.",
    },
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Figma", "Design Tokens", "CSS Variables", "Storybook", "React"],
    github: "#",
    demo: "#",
    duration: {
      en: "6 months",
      es: "6 meses",
    },
    team: {
      en: "3 designers + 2 developers",
      es: "3 diseñadores + 2 desarrolladores",
    },
    role: {
      en: "Lead Designer & Design System Architect",
      es: "Lead Designer & Design System Architect",
    },
    challenges: {
      en: [
        "Create visual consistency across multiple products",
        "Establish an efficient workflow between design and development",
        "Document components clearly and accessibly",
        "Maintain the system updated and scalable",
      ],
      es: [
        "Crear consistencia visual across múltiples productos",
        "Establecer un workflow eficiente entre diseño y desarrollo",
        "Documentar componentes de manera clara y accesible",
        "Mantener el sistema actualizado y escalable",
      ],
    },
    solutions: {
      en: [
        "Developed an atomic component library in Figma",
        "Implemented design tokens for automatic synchronization",
        "Created interactive documentation using Storybook",
        "Established versioning and continuous update processes",
      ],
      es: [
        "Desarrollé una librería de componentes atómicos en Figma",
        "Implementé design tokens para sincronización automática",
        "Creé documentación interactiva usando Storybook",
        "Establecí procesos de versionado y actualización continua",
      ],
    },
    impact: {
      en: [
        "60% reduction in design time for new features",
        "80% improvement in visual consistency",
        "40% acceleration in development process",
        "Successful adoption by 5 product teams",
      ],
      es: [
        "Reducción del 60% en tiempo de diseño de nuevas features",
        "Mejora del 80% en consistencia visual",
        "Aceleración del 40% en el proceso de desarrollo",
        "Adopción exitosa por 5 equipos de producto",
      ],
    },
    features: {
      en: [
        "Complete UI component library",
        "Synchronized design tokens",
        "Interactive documentation",
        "Usage guides and best practices",
        "Templates for common cases",
        "Versioning system",
      ],
      es: [
        "Librería completa de componentes UI",
        "Design tokens sincronizados",
        "Documentación interactiva",
        "Guías de uso y mejores prácticas",
        "Templates para casos comunes",
        "Sistema de versionado",
      ],
    },
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<"en" | "es">("es")

  const projectId = params.id as string
  const project = projectsData[projectId]

  const t = (key: string) => translations[language][key] || key

  // Load preferences from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const savedLanguage = localStorage.getItem("language")

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
    if (savedLanguage) {
      setLanguage(savedLanguage as "en" | "es")
    }
  }, [])

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const scrollToContact = () => {
    router.push("/#contact")
  }

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-slate-900 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("projectNotFound")}</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("back")}
          </button>
        </div>
      </div>
    )
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

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDarkMode ? "text-white" : "text-gray-900"}`}
      style={{
        backgroundImage: isDarkMode ? `url('/background.svg')` : "none",
        backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
        backgroundSize: isDarkMode ? "cover" : "auto",
        backgroundPosition: isDarkMode ? "center" : "initial",
        backgroundAttachment: isDarkMode ? "fixed" : "initial",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className={`fixed inset-0 transition-all duration-500 ${isDarkMode ? "bg-slate-900/80" : "bg-transparent"}`}
        style={{ zIndex: -1 }}
      ></div>

      {/* Light mode pattern background */}
      {!isDarkMode && (
        <div
          className="fixed inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0),
              radial-gradient(circle at 75px 75px, #1d4ed8 2px, transparent 0)
            `,
            backgroundSize: "100px 100px",
            zIndex: -1,
          }}
        ></div>
      )}

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
          isDarkMode ? "bg-black/20 border-white/10" : "bg-white/90 border-gray-200 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Back and Home buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.back()}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
              >
                <ArrowLeft size={20} />
                {t("back")}
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                  }`}
                >
                  <Home size={20} />
                  {t("home")}
                </motion.button>
              </Link>
            </div>

            {/* Center - Project title */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-xl font-black transition-colors duration-500 cursor-pointer ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {project.title[language]}
            </motion.div>

            {/* Right side - Controls and actions */}
            <div className="flex items-center gap-4">
              {/* Theme and Language Controls */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "bg-white/10 hover:bg-white/20 text-white"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                }`}
              >
                <Globe size={16} />
                <span className="font-medium">{language.toUpperCase()}</span>
              </motion.button>

              {/* Project links */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.github}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100"}`}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={project.demo}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100"}`}
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Quick Contact CTA */}
      <FloatingSocialButtons onContactClick={scrollToContact} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <motion.h1
                className={`text-5xl md:text-6xl font-black mb-4 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                }`}
              >
                {project.title[language]}
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                className={`text-2xl mb-6 font-medium ${isDarkMode ? "text-white/80" : "text-gray-700"}`}
              >
                {project.subtitle[language]}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-white/70" : "text-gray-600"}`}
              >
                {project.longDescription[language]}
              </motion.p>

              <motion.div variants={staggerContainer} className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode ? "bg-blue-600/30 text-white" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-4 text-center">
                <motion.div
                  variants={fadeInUp}
                  className={`p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <Calendar className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="text-sm font-medium">{t("duration")}</p>
                  <p className={`text-xs ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>
                    {project.duration[language]}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className={`p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <Users className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="text-sm font-medium">{t("team")}</p>
                  <p className={`text-xs ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>
                    {project.team[language]}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className={`p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <Target className="mx-auto mb-2 text-blue-400" size={24} />
                  <p className="text-sm font-medium">{t("role")}</p>
                  <p className={`text-xs ${isDarkMode ? "text-white/70" : "text-gray-600"}`}>
                    {project.role[language]}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title[language]}
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className={`py-20 px-4 transition-all duration-500 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <h3 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                {t("challengesFaced")}
              </h3>
              <div className="space-y-4">
                {project.challenges[language].map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`p-4 rounded-lg ${isDarkMode ? "bg-red-900/20" : "bg-red-50"} border-l-4 ${isDarkMode ? "border-red-400" : "border-red-500"}`}
                  >
                    <p className={isDarkMode ? "text-white/80" : "text-gray-700"}>{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                {t("solutionsImplemented")}
              </h3>
              <div className="space-y-4">
                {project.solutions[language].map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`p-4 rounded-lg ${isDarkMode ? "bg-green-900/20" : "bg-green-50"} border-l-4 ${isDarkMode ? "border-green-400" : "border-green-500"}`}
                  >
                    <p className={isDarkMode ? "text-white/80" : "text-gray-700"}>{solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            }`}
          >
            {t("keyFeatures")}
          </motion.h3>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {project.features[language].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"}`}
              >
                <CheckCircle className="text-green-400 mb-4" size={24} />
                <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className={`py-20 px-4 transition-all duration-500 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
            }`}
          >
            {t("impactResults")}
          </motion.h3>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {project.impact[language].map((impact, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg ${isDarkMode ? "bg-gradient-to-r from-yellow-900/20 to-orange-900/20" : "bg-gradient-to-r from-yellow-50 to-orange-50"} border ${isDarkMode ? "border-yellow-400/30" : "border-yellow-200"}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${isDarkMode ? "bg-yellow-400/20" : "bg-yellow-100"}`}>
                    <Target className="text-yellow-500" size={20} />
                  </div>
                  <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>{impact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {t("projectGallery")}
          </motion.h3>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title[language]} - ${t("projectGallery")} ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-4 transition-all duration-500 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {t("interestedProject")}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg mb-8 ${isDarkMode ? "text-white/70" : "text-gray-600"}`}
          >
            {t("interestedDescription")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
              }`}
            >
              {t("viewCode")}
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className={`px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 ${
                isDarkMode
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {t("contactMe")}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`py-8 px-4 border-t transition-all duration-500 ${
          isDarkMode ? "border-white/10" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-black mb-4 transition-all duration-500 cursor-pointer ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              FR
            </motion.div>
          </Link>
          <p className={`font-medium transition-colors duration-500 ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
            Made with ❤️ by Felipe Russi
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
