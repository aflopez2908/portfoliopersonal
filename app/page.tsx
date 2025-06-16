"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ArrowRight,
  BookOpen,
  User,
} from "lucide-react"
import FloatingSocialButtons from "@/components/floating-social-buttons"

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    blog: "Blog",

    // Hero
    welcome: "WELCOME",
    im: "I'm",
    role: "Software Developer • Frontend Specialist • App Developer • Designer",
    getCv: "Get My CV",
    quickContact: "Quick Contact",

    // About
    aboutMe: "ABOUT ME",
    aboutText:
      "I'm a full-stack developer who is working to learn more every day, making new projects and exploring new technologies. I want to change the vision of programming and make history helping people who don't have coding or economic opportunities.",
    fullStack: "Full Stack",
    frontend: "Frontend",
    designer: "Designer",
    learnMore: "Learn More About Me",
    viewBlog: "View My Blog",

    // Experience
    workExperience: "WORK EXPERIENCE",
    technologies: "Technologies",

    // Projects
    myProjects: "MY PROJECTS",
    code: "Code",
    demo: "Demo",
    readMore: "Read More",
    viewAllProjects: "View All Projects",

    // Skills
    mySkills: "MY SKILLS",
    programming: "Programming",
    softSkills: "Soft Skills",
    languages: "Languages",

    // Contact
    contactMe: "CONTACT ME",
    email: "Email",
    linkedin: "LinkedIn",
    yourName: "Your Name",
    emailAddress: "Email Address",
    message: "Message",
    sendMessage: "Send Message",
    letsTalk: "Let's Talk!",

    // Footer
    madeWith: "Made with ❤️ by Felipe Russi",
  },
  es: {
    // Navigation
    home: "Inicio",
    about: "Acerca de",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    blog: "Blog",

    // Hero
    welcome: "BIENVENIDO",
    im: "Soy",
    role: "Desarrollador de Software • Especialista Frontend • Desarrollador de Apps • Diseñador",
    getCv: "Obtener CV",
    quickContact: "Contacto Rápido",

    // About
    aboutMe: "ACERCA DE MÍ",
    aboutText:
      "Soy un desarrollador full-stack que trabaja para aprender más cada día, haciendo nuevos proyectos y explorando nuevas tecnologías. Quiero cambiar la visión de la programación y hacer historia ayudando a personas que no tienen oportunidades de código o económicas.",
    fullStack: "Full Stack",
    frontend: "Frontend",
    designer: "Diseñador",
    learnMore: "Conoce Más Sobre Mí",
    viewBlog: "Ver Mi Blog",

    // Experience
    workExperience: "EXPERIENCIA LABORAL",
    technologies: "Tecnologías",

    // Projects
    myProjects: "MIS PROYECTOS",
    code: "Código",
    demo: "Demo",
    readMore: "Leer Más",
    viewAllProjects: "Ver Todos los Proyectos",

    // Skills
    mySkills: "MIS HABILIDADES",
    programming: "Programación",
    softSkills: "Habilidades Blandas",
    languages: "Idiomas",

    // Contact
    contactMe: "CONTÁCTAME",
    email: "Email",
    linkedin: "LinkedIn",
    yourName: "Tu Nombre",
    emailAddress: "Dirección de Email",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",
    letsTalk: "¡Hablemos!",

    // Footer
    madeWith: "Hecho con ❤️ por Felipe Russi",
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeExperience, setActiveExperience] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [showAllProjects, setShowAllProjects] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const t = (key: string) => translations[language][key] || key

  const experiences = [
    {
      company: "Alfa GL",
      period: "2024",
      role: language === "en" ? "Software Developer" : "Desarrollador de Software",
      description:
        language === "en"
          ? "Designed, developed and supported an internal company application, optimizing financial processes and improving user experience. Implemented new functionalities, solved errors and improved application performance."
          : "Diseñé, desarrollé y di soporte a una aplicación interna de la empresa, optimizando procesos financieros y mejorando la experiencia del usuario. Implementé nuevas funcionalidades, solucioné errores y mejoré el rendimiento de la aplicación.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3"],
    },
    {
      company: "Teleperformance",
      period: "2020",
      role: language === "en" ? "Database Manager" : "Gestor de Base de Datos",
      description:
        language === "en"
          ? "Managed databases to optimize customer information, ensuring accuracy and accessibility. Stood out for personalized attention skills, using active listening to identify customer needs."
          : "Se encargó de gestionar bases de datos para optimizar la información de los clientes, asegurando su precisión y accesibilidad. Destacó por su habilidad en la atención personalizada, utilizando escucha activa para identificar las necesidades de los clientes.",
      technologies: ["Database"],
    },
    {
      company: "Freelance",
      period: language === "en" ? "Currently" : "Actualmente",
      role: language === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      description:
        language === "en"
          ? "Specialized in brand analysis and positioning to offer personalized technological solutions to clients. Stands out for designing models in Figma to strategically plan applications."
          : "Especializado en el análisis y posicionamiento de marca para ofrecer soluciones tecnológicas personalizadas a los clientes. Destaca por el diseño de modelos en Figma para planificar de manera estratégica las aplicaciones.",
      technologies: ["Angular", "JavaScript", "Node.js", "Database", "HTML5", "CSS3", "React", "Python"],
    },
  ]

  const projects = [
    // NUEVOS PROYECTOS (arriba)
    {
      id: "baloncesto-gestion",
      title: language === "en" ? "Basketball Management" : "Gestión Baloncesto",
      description:
        language === "en"
          ? "Complete basketball team and statistics management system with real-time game and player tracking."
          : "Sistema completo de gestión de equipos y estadísticas de baloncesto con seguimiento de partidos y jugadores en tiempo real.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Next.js", "TypeScript"],
      github: "#",
      demo: "https://v0-baloncesto-gestion-estadisticas.vercel.app/",
    },
    {
      id: "cv-generator-ia",
      title: language === "en" ? "AI CV Generator" : "Generador CV con IA",
      description:
        language === "en"
          ? "Intelligent tool to create professional resumes using artificial intelligence and customizable templates."
          : "Herramienta inteligente para crear currículums profesionales utilizando inteligencia artificial y plantillas personalizables.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "AI/ML", "Tailwind CSS"],
      github: "#",
      demo: "https://v0.dev/chat/cv-creation-tool-vh36Gp7vYjy",
    },
    {
      id: "restaurant-reservas",
      title: language === "en" ? "Restaurant App" : "App Restaurante",
      description:
        language === "en"
          ? "Complete restaurant application with reservation system, table management and online ordering."
          : "Aplicación completa para restaurantes con sistema de reservas, gestión de mesas y pedidos online.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "https://v0-restaurant-app-design-omega.vercel.app/",
    },
    {
      id: "docuwebs-biblioteca",
      title: language === "en" ? "DocuWebs - Dev Library" : "DocuWebs - Biblioteca Dev",
      description:
        language === "en"
          ? "Complete library of resources and documentation for developers with updated tools and guides."
          : "Biblioteca completa de recursos y documentación para desarrolladores con herramientas y guías actualizadas.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "MDX", "Vercel"],
      github: "#",
      demo: "https://docuwebs.vercel.app/",
    },
    // PROYECTOS ANTERIORES (abajo)
    {
      id: "api-proyectos",
      title: "API Proyectos",
      description:
        language === "en"
          ? "Complete project management system with REST API, JWT authentication and administration panel."
          : "Sistema completo de gestión de proyectos con API REST, autenticación JWT y panel de administración.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      id: "analisis-precipitaciones",
      title: language === "en" ? "Precipitation Analysis" : "Análisis Precipitaciones",
      description:
        language === "en"
          ? "Meteorological data analysis application with interactive visualizations and predictions."
          : "Aplicación de análisis de datos meteorológicos con visualizaciones interactivas y predicciones.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
    },
    {
      id: "barberia-web",
      title: language === "en" ? "Barbershop Web" : "Barbería Web",
      description:
        language === "en"
          ? "Complete website for barbershop with appointment system, gallery and service management."
          : "Sitio web completo para barbería con sistema de citas, galería y gestión de servicios.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: "figma-design-system",
      title: "Figma Design System",
      description:
        language === "en"
          ? "Complete design system with reusable components and style guides."
          : "Sistema de diseño completo con componentes reutilizables y guías de estilo.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Figma", "Design System"],
      github: "#",
      demo: "#",
    },
    {
      id: "ecommerce-platform",
      title: language === "en" ? "E-commerce Platform" : "Plataforma E-commerce",
      description:
        language === "en"
          ? "Complete e-commerce platform with shopping cart, payments and inventory management."
          : "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Stripe", "Prisma"],
      github: "#",
      demo: "#",
    },
    {
      id: "task-manager",
      title: language === "en" ? "Task Manager App" : "App Gestor de Tareas",
      description:
        language === "en"
          ? "Task management application with real-time collaboration and push notifications."
          : "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      id: "portfolio-generator",
      title: language === "en" ? "Portfolio Generator" : "Generador de Portafolios",
      description:
        language === "en"
          ? "Automatic portfolio generator with multiple templates and themes."
          : "Generador automático de portafolios personalizados con múltiples plantillas y temas.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Nuxt.js", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      id: "crypto-tracker",
      title: language === "en" ? "Crypto Tracker" : "Rastreador Crypto",
      description:
        language === "en"
          ? "Cryptocurrency tracking application with real-time charts and price alerts."
          : "Aplicación para seguimiento de criptomonedas con gráficos en tiempo real y alertas de precio.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Angular", "Chart.js", "WebSocket"],
      github: "#",
      demo: "#",
    },
  ]

  const skills = {
    programming: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Angular", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
    softSkills: [
      { name: language === "en" ? "Teamwork" : "Trabajo en Equipo", level: 95 },
      { name: language === "en" ? "Fast Learning" : "Aprendizaje Rápido", level: 90 },
      { name: language === "en" ? "Resilience" : "Resistencia", level: 85 },
      { name: language === "en" ? "Attention to Detail" : "Atención al Detalle", level: 88 },
    ],
    languages: [
      { name: language === "en" ? "Spanish" : "Español", level: 100, flag: "🇨🇴" },
      { name: language === "en" ? "English" : "Inglés", level: 80, flag: "🇺🇸" },
      { name: language === "en" ? "Portuguese" : "Portugués", level: 40, flag: "🇧🇷" },
    ],
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = [heroRef, aboutRef, experienceRef, projectsRef, skillsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  // Animation variants
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

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}
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
        <motion.div
          className="fixed inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0),
              radial-gradient(circle at 75px 75px, #1d4ed8 2px, transparent 0)
            `,
            backgroundSize: "100px 100px",
            zIndex: -1,
            y,
          }}
        ></motion.div>
      )}

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
          isDarkMode ? "bg-black/20 border-white/10" : "bg-white/90 border-gray-200 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-black transition-colors duration-500 cursor-pointer ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              FR
            </motion.div>

            {/* Theme and Language Controls */}
            <div className="flex items-center space-x-4">
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "skills", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === item
                      ? isDarkMode
                        ? "text-blue-400 font-bold"
                        : "text-blue-600 font-bold"
                      : isDarkMode
                        ? "text-white/80 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {t(item)}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`md:hidden transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden py-4 space-y-4 transition-colors duration-500 ${
                isDarkMode ? "bg-black/95 backdrop-blur-md" : "bg-white/95 backdrop-blur-md shadow-lg"
              }`}
            >
              {["home", "about", "experience", "projects", "skills", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 transition-colors font-medium ${
                    activeSection === item
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                        ? "text-white/80 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {t(item)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20"
              : "bg-gradient-to-r from-blue-50/80 to-cyan-50/80"
          }`}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>

        <div className="text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-lg md:text-xl mb-4 tracking-widest uppercase font-bold transition-colors duration-500 ${
                isDarkMode ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {t("welcome")}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-2xl md:text-3xl mb-2 font-medium transition-colors duration-500 ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              {t("im")}
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className={`text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent"
              }`}
            >
              FELIPE
              <br />
              RUSSI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium transition-colors duration-500 ${
                isDarkMode ? "text-white/70" : "text-gray-600"
              }`}
            >
              {t("role")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 overflow-hidden text-white ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                }`}
              >
                <Download size={20} />
                {t("getCv")}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown
              size={32}
              className={`transition-colors duration-500 cursor-pointer ${isDarkMode ? "text-white/60" : "text-gray-500"}`}
              onClick={() => scrollToSection("about")}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2
                className={`text-5xl md:text-6xl font-black mb-8 transition-all duration-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t("aboutMe").split(" ")[0]}
                <br />
                <span
                  className={`transition-all duration-500 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                  }`}
                >
                  {t("aboutMe").split(" ")[1]}
                </span>
              </h2>

              <p
                className={`text-xl leading-relaxed font-medium transition-colors duration-500 ${
                  isDarkMode ? "text-white/80" : "text-gray-700"
                }`}
              >
                {t("aboutText")}
              </p>

              <motion.div variants={staggerContainer} className="flex flex-wrap gap-4 pt-4">
                {[t("fullStack"), t("frontend"), t("designer")].map((tag, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className={`backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-500 ${
                      isDarkMode ? "bg-white/10" : "bg-blue-100"
                    }`}
                  >
                    <span
                      className={`font-medium transition-colors duration-500 ${
                        isDarkMode ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      {tag}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/about-me">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    }`}
                  >
                    <User size={20} />
                    {t("learnMore")}
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>

                <Link href="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 transition-all duration-300 ${
                      isDarkMode
                        ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <BookOpen size={20} />
                    {t("viewBlog")}
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-600"
                  }`}
                ></motion.div>
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Felipe Russi"
                  className={`relative z-10 w-full h-full object-cover rounded-full border-4 transition-all duration-500 ${
                    isDarkMode ? "border-white/20" : "border-white shadow-xl"
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={experienceRef}
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
            {t("workExperience").split(" ")[0]}
            <br />
            <span
              className={`transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {t("workExperience").split(" ")[1]}
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
                  key={index}
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
                {t("technologies")}
              </motion.h5>

              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="flex flex-wrap gap-2"
              >
                {experiences[activeExperience].technologies.map((tech, index) => (
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

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-4">
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
            {t("myProjects").split(" ")[0]}
            <br />
            <span
              className={`transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {t("myProjects").split(" ")[1]}
            </span>
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
                }`}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 font-medium transition-colors duration-500 ${
                      isDarkMode ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={staggerContainer}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={scaleIn}
                        className={`px-2 py-1 rounded text-xs font-medium transition-all duration-500 ${
                          isDarkMode ? "bg-blue-600/30 text-white" : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className={`flex items-center gap-2 transition-colors font-medium ${
                        isDarkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-600 hover:text-blue-500"
                      }`}
                    >
                      <Github size={16} />
                      {t("code")}
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      className={`flex items-center gap-2 transition-colors font-medium ${
                        isDarkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-600 hover:text-blue-500"
                      }`}
                    >
                      <ExternalLink size={16} />
                      {t("demo")}
                    </motion.a>
                    <Link href={`/project/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-2 transition-colors font-medium ${
                          isDarkMode ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-800"
                        }`}
                      >
                        <ArrowRight size={16} />
                        {t("readMore")}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            {!showAllProjects && projects.length > 6 && (
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllProjects(true)}
                className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                }`}
              >
                Ver Más Proyectos
              </motion.button>
            )}

            {showAllProjects && (
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllProjects(false)}
                className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-gray-600 to-gray-700"
                    : "bg-gradient-to-r from-gray-600 to-gray-700 shadow-lg"
                }`}
              >
                Ver Menos Proyectos
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
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
            {t("mySkills").split(" ")[0]}
            <br />
            <span
              className={`transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {t("mySkills").split(" ")[1]}
            </span>
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Programming Skills */}
            <motion.div
              variants={fadeInUp}
              className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${
                isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {t("programming")}
              </h3>
              <motion.div variants={staggerContainer} className="space-y-4">
                {skills.programming.map((skill, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-medium transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 transition-all duration-500 ${
                        isDarkMode ? "bg-white/20" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${
                          isDarkMode
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              variants={fadeInUp}
              className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${
                isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {t("softSkills")}
              </h3>
              <motion.div variants={staggerContainer} className="space-y-4">
                {skills.softSkills.map((skill, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <div className="flex justify-between mb-2">
                      <span
                        className={`font-medium transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 transition-all duration-500 ${
                        isDarkMode ? "bg-white/20" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${
                          isDarkMode
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={fadeInUp}
              className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${
                isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                  isDarkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {t("languages")}
              </h3>
              <motion.div variants={staggerContainer} className="space-y-4">
                {skills.languages.map((lang, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`flex items-center gap-2 font-medium transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        {lang.name}
                      </span>
                      <span
                        className={`font-bold transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {lang.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 transition-all duration-500 ${
                        isDarkMode ? "bg-white/20" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full ${
                          isDarkMode
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 px-4">
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
            {t("contactMe").split(" ")[0]}
            <br />
            <span
              className={`transition-all duration-500 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {t("contactMe").split(" ")[1]}
            </span>
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${
                  isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                    isDarkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {t("email")}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    aflopezrussi@gmail.com
                  </span>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:aflopezrussi@gmail.com"
                      className={`p-2 rounded-full transition-colors text-white ${
                        isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      <Mail size={16} />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigator.clipboard.writeText("aflopezrussi@gmail.com")}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? "bg-white/20 hover:bg-white/30" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      📋
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className={`backdrop-blur-sm p-6 rounded-xl transition-all duration-500 ${
                  isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                    isDarkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {t("linkedin")}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? "text-white/80" : "text-gray-700"
                    }`}
                  >
                    Alvaro Felipe Lopez Russi
                  </span>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/in/alvaro-felipe-lopez-russi-3a76521a1/"
                      target="_blank"
                      className={`p-2 rounded-full transition-colors text-white ${
                        isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      rel="noreferrer"
                    >
                      <Linkedin size={16} />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigator.clipboard.writeText("Alvaro Felipe Lopez Russi")}
                      className={`p-2 rounded-full transition-colors ${
                        isDarkMode ? "bg-white/20 hover:bg-white/30" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      📋
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={fadeInUp}
              className={`space-y-6 backdrop-blur-sm p-8 rounded-xl transition-all duration-500 ${
                isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"
              }`}
            >
              <motion.div variants={scaleIn}>
                <label
                  htmlFor="name"
                  className={`block text-sm font-bold mb-2 transition-colors duration-500 ${
                    isDarkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {t("yourName")}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 font-medium ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white focus:border-blue-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  }`}
                />
              </motion.div>

              <motion.div variants={scaleIn}>
                <label
                  htmlFor="email"
                  className={`block text-sm font-bold mb-2 transition-colors duration-500 ${
                    isDarkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {t("emailAddress")}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 font-medium ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white focus:border-blue-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  }`}
                />
              </motion.div>

              <motion.div variants={scaleIn}>
                <label
                  htmlFor="message"
                  className={`block text-sm font-bold mb-2 transition-colors duration-500 ${
                    isDarkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {t("message")}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 resize-none font-medium ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white focus:border-blue-400"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  }`}
                ></motion.textarea>
              </motion.div>

              <motion.button
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 text-white ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                }`}
              >
                {t("sendMessage")}
              </motion.button>
            </motion.form>
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
          <p className={`font-medium transition-colors duration-500 ${isDarkMode ? "text-white/60" : "text-gray-600"}`}>
            {t("madeWith")}
          </p>
        </div>
      </motion.footer>

      {/* Floating Social Buttons */}
      <FloatingSocialButtons onContactClick={() => scrollToSection("contact")} isDarkMode={isDarkMode} />
    </div>
  )
}
