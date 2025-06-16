"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowLeft, Sun, Moon, Globe, Home } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import FloatingSocialButtons from "@/components/floating-social-buttons"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  image: string
}

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    backToPortfolio: "Back to Portfolio",
    home: "Home",
    contact: "Contact",
    letsTalk: "Let's Talk!",

    // Content
    myBlog: "My Blog",
    blogDescription:
      "Reflections, tutorials and experiences about web development, technology and my journey as a programmer.",

    // Posts
    webDevelopmentFuture: "The Future of Web Development: 2024 Trends",
    webDevelopmentFutureExcerpt:
      "We explore emerging technologies that are transforming the way we develop modern web applications.",

    motionAnimations: "Motion.dev: Revolutionizing React Animations",
    motionAnimationsExcerpt:
      "Discover how Motion.dev is changing the way we create fluid and performant animations in React.",

    aiDevelopment: "AI in Development: Tools Every Developer Should Know",
    aiDevelopmentExcerpt:
      "A complete guide on artificial intelligence tools that are revolutionizing software development.",

    designSystems: "Building Scalable Design Systems",
    designSystemsExcerpt:
      "Learn best practices for creating and maintaining design systems that grow with your product.",

    nextjs15: "Next.js 15: New Features and Improvements",
    nextjs15Excerpt:
      "We explore the new functionalities of Next.js 15 and how they can improve your React applications.",

    selfTaughtCareer: "My Journey as a Self-Taught Developer",
    selfTaughtCareerExcerpt: "Reflections and advice on my experience learning programming self-taught.",

    // Tags
    webDevelopment: "Web Development",
    trends: "Trends",
    technology: "Technology",
    react: "React",
    animations: "Animations",
    motion: "Motion",
    ai: "AI",
    tools: "Tools",
    productivity: "Productivity",
    uiux: "UI/UX",
    figma: "Figma",
    nextjs: "Next.js",
    framework: "Framework",
    career: "Career",
    learning: "Learning",
    motivation: "Motivation",

    // Months
    january: "January",
    december: "December",
  },
  es: {
    // Navigation
    backToPortfolio: "Volver al Portfolio",
    home: "Inicio",
    contact: "Contacto",
    letsTalk: "¡Hablemos!",

    // Content
    myBlog: "Mi Blog",
    blogDescription:
      "Reflexiones, tutoriales y experiencias sobre desarrollo web, tecnología y mi journey como programador.",

    // Posts
    webDevelopmentFuture: "El Futuro del Desarrollo Web: Tendencias 2024",
    webDevelopmentFutureExcerpt:
      "Exploramos las tecnologías emergentes que están transformando la manera en que desarrollamos aplicaciones web modernas.",

    motionAnimations: "Motion.dev: Revolucionando las Animaciones en React",
    motionAnimationsExcerpt:
      "Descubre cómo Motion.dev está cambiando la forma en que creamos animaciones fluidas y performantes en React.",

    aiDevelopment: "IA en el Desarrollo: Herramientas que Todo Developer Debe Conocer",
    aiDevelopmentExcerpt:
      "Una guía completa sobre las herramientas de inteligencia artificial que están revolucionando el desarrollo de software.",

    designSystems: "Construyendo Design Systems Escalables",
    designSystemsExcerpt:
      "Aprende las mejores prácticas para crear y mantener design systems que crezcan con tu producto.",

    nextjs15: "Next.js 15: Nuevas Características y Mejoras",
    nextjs15Excerpt:
      "Exploramos las nuevas funcionalidades de Next.js 15 y cómo pueden mejorar tus aplicaciones React.",

    selfTaughtCareer: "Mi Journey como Desarrollador Autodidacta",
    selfTaughtCareerExcerpt:
      "Reflexiones y consejos sobre mi experiencia aprendiendo programación de forma autodidacta.",

    // Tags
    webDevelopment: "Desarrollo Web",
    trends: "Tendencias",
    technology: "Tecnología",
    react: "React",
    animations: "Animaciones",
    motion: "Motion",
    ai: "IA",
    tools: "Herramientas",
    productivity: "Productividad",
    uiux: "UI/UX",
    figma: "Figma",
    nextjs: "Next.js",
    framework: "Framework",
    career: "Carrera",
    learning: "Aprendizaje",
    motivation: "Motivación",

    // Months
    january: "Enero",
    december: "Diciembre",
  },
}

export default function Blog() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

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

  const blogPosts: BlogPost[] = [
    {
      id: "futuro-desarrollo-web",
      title: t("webDevelopmentFuture"),
      excerpt: t("webDevelopmentFutureExcerpt"),
      content: "El desarrollo web está evolucionando a un ritmo acelerado...",
      date: "2024-01-15",
      readTime: "5 min",
      tags: [t("webDevelopment"), t("trends"), t("technology")],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "motion-animaciones",
      title: t("motionAnimations"),
      excerpt: t("motionAnimationsExcerpt"),
      content: "Las animaciones son fundamentales para crear experiencias de usuario excepcionales...",
      date: "2024-01-10",
      readTime: "7 min",
      tags: [t("react"), t("animations"), t("motion")],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "ia-desarrollo",
      title: t("aiDevelopment"),
      excerpt: t("aiDevelopmentExcerpt"),
      content: "La inteligencia artificial está transformando la industria del desarrollo...",
      date: "2024-01-05",
      readTime: "8 min",
      tags: [t("ai"), t("tools"), t("productivity")],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "design-systems",
      title: t("designSystems"),
      excerpt: t("designSystemsExcerpt"),
      content: "Un design system bien construido es la base de cualquier producto digital exitoso...",
      date: "2023-12-28",
      readTime: "10 min",
      tags: [t("uiux"), t("figma")],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "nextjs-15",
      title: t("nextjs15"),
      excerpt: t("nextjs15Excerpt"),
      content: "Next.js 15 trae consigo una serie de mejoras significativas...",
      date: "2023-12-20",
      readTime: "6 min",
      tags: [t("nextjs"), t("react"), t("framework")],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "carrera-autodidacta",
      title: t("selfTaughtCareer"),
      excerpt: t("selfTaughtCareerExcerpt"),
      content: "Comenzar como desarrollador autodidacta puede ser desafiante pero increíblemente gratificante...",
      date: "2023-12-15",
      readTime: "12 min",
      tags: [t("career"), t("learning"), t("motivation")],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

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

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Filter posts by selected tag
  const filteredPosts = selectedTag ? blogPosts.filter((post) => post.tags.includes(selectedTag)) : blogPosts

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
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
            {/* Left side - Navigation */}
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
                {t("backToPortfolio")}
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

            {/* Center - Logo */}
            <Link href="/">
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
            </Link>

            {/* Right side - Controls */}
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </motion.header>

      <FloatingSocialButtons onContactClick={scrollToContact} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" animate="animate" variants={staggerContainer} className="text-center">
            <motion.h1
              variants={fadeInUp}
              className={`text-6xl md:text-7xl font-black mb-6 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              }`}
            >
              {t("myBlog")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              {t("blogDescription")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className={`py-10 px-4 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTag === tag
                    ? isDarkMode
                      ? "bg-white/10 text-white"
                      : "bg-gray-100 text-gray-900"
                    : isDarkMode
                      ? "bg-gray-800/20 text-white/80"
                      : "bg-white/20 text-gray-500"
                }`}
                variants={fadeInUp}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <motion.h2
                    className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                    variants={fadeInUp}
                  >
                    {post.title}
                  </motion.h2>
                  <motion.p
                    className={`text-gray-600 dark:text-gray-400 mb-4 ${
                      isDarkMode ? "text-white/80" : "text-gray-700"
                    }`}
                    variants={fadeInUp}
                  >
                    {post.excerpt}
                  </motion.p>
                  <motion.div
                    className={`flex items-center gap-4 ${isDarkMode ? "text-white/80" : "text-gray-600"}`}
                    variants={fadeInUp}
                  >
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 ${
                            isDarkMode ? "text-gray-900" : "text-gray-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
