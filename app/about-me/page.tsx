"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Heart,
  Coffee,
  Code,
  Music,
  Camera,
  Gamepad2,
  Book,
  MapPin,
  Calendar,
  Home,
  Sun,
  Moon,
  Globe,
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
    backToPortfolio: "Back to Portfolio",
    home: "Home",
    contact: "Contact",
    letsTalk: "Let's Talk!",

    // Content
    moreAboutMe: "More About Me",
    aboutDescription:
      "Beyond code, I'm a person passionate about life, continuous learning and creating meaningful experiences.",
    aboutMyStory: "A Bit About My Story",
    origin: "Origin",
    originText: "Born and raised in Colombia, where I developed my love for technology and innovation.",
    journey: "Journey",
    journeyText: "My programming path began as self-taught, driven by curiosity and passion for solving problems.",
    motivation: "Motivation",
    motivationText:
      "My greatest motivation is using technology to create opportunities and help people who don't have access to technological resources.",
    passionsInterests: "My Passions and Interests",
    thoughtsPhilosophy: "My Thoughts and Philosophy",
    professionalJourney: "My Professional Journey",
    wantToKnowMore: "Want to know more?",
    wantToKnowMoreText: "I love connecting with people who share the passion for technology and innovation",
    readMyBlog: "Read My Blog",
    letsConnect: "Let's Connect",

    // Interests
    creativeProgramming: "Creative Programming",
    creativeProgrammingDesc:
      "I'm fascinated by exploring new technologies and creating innovative solutions that positively impact people's lives.",
    music: "Music",
    musicDesc:
      "Music is my constant companion. From classic rock to electronic music, I find inspiration in every genre.",
    photography: "Photography",
    photographyDesc:
      "Capturing unique moments and seeing the world from different perspectives is one of my greatest passions.",
    gaming: "Gaming",
    gamingDesc:
      "Video games are not just entertainment, but a source of inspiration for interface design and user experiences.",
    reading: "Reading",
    readingDesc: "From technical books to science fiction, reading expands my mind and constantly feeds my creativity.",
    specialtyCoffee: "Specialty Coffee",
    specialtyCoffeeDesc: "I'm a true coffee lover. Each cup is a sensory experience that accompanies my best ideas.",

    // Thoughts
    technologyAsChange: "Technology as a Tool for Change",
    technologyAsChangeText:
      "I firmly believe that technology should be a tool to democratize opportunities. My goal is to create solutions that are not only technically excellent, but also accessible to everyone, especially those who need it most.",
    continuousLearning: "The Power of Continuous Learning",
    continuousLearningText:
      "In the development world, you never stop learning. Every project is an opportunity to grow, every mistake is a valuable lesson, and every success is a step towards the next challenge. This growth mindset is what drives me every day.",
    userCenteredDesign: "User-Centered Design",
    userCenteredDesignText:
      "The best technology is one that becomes invisible to the user. My approach is always to create intuitive and meaningful experiences, where technical complexity is hidden behind simple and elegant interfaces.",
    collaborationCommunity: "Collaboration and Community",
    collaborationCommunityText:
      "The best projects are born from collaboration. I believe in the power of diverse teams, in sharing knowledge and in building a more inclusive and collaborative tech community.",

    // Timeline
    developerAtAlfa: "Developer at Alfa GL",
    developerAtAlfaDesc: "Leading the development of internal applications and optimizing business processes.",
    freelancerFullStack: "Freelancer Full Stack",
    freelancerFullStackDesc: "Specializing in custom solutions for startups and small businesses.",
    dataManagerTeleperformance: "Data Manager at Teleperformance",
    dataManagerTeleperformanceDesc: "Developing skills in database management and customer service.",
    startInProgramming: "Start in Programming",
    startInProgrammingDesc: "Discovering my passion for code and beginning my self-taught journey.",
  },
  es: {
    // Navigation
    backToPortfolio: "Volver al Portfolio",
    home: "Inicio",
    contact: "Contacto",
    letsTalk: "¡Hablemos!",

    // Content
    moreAboutMe: "Más Sobre Mí",
    aboutDescription:
      "Más allá del código, soy una persona apasionada por la vida, el aprendizaje continuo y la creación de experiencias significativas.",
    aboutMyStory: "Un Poco Sobre Mi Historia",
    origin: "Origen",
    originText: "Nacido y criado en Colombia, donde desarrollé mi amor por la tecnología y la innovación.",
    journey: "Journey",
    journeyText:
      "Mi camino en la programación comenzó como autodidacta, impulsado por la curiosidad y la pasión por resolver problemas.",
    motivation: "Motivación",
    motivationText:
      "Mi mayor motivación es usar la tecnología para crear oportunidades y ayudar a personas que no tienen acceso a recursos tecnológicos.",
    passionsInterests: "Mis Pasiones e Intereses",
    thoughtsPhilosophy: "Mis Pensamientos y Filosofía",
    professionalJourney: "Mi Journey Profesional",
    wantToKnowMore: "¿Quieres conocer más?",
    wantToKnowMoreText: "Me encanta conectar con personas que comparten la pasión por la tecnología y la innovación",
    readMyBlog: "Lee Mi Blog",
    letsConnect: "Conectemos",

    // Interests
    creativeProgramming: "Programación Creativa",
    creativeProgrammingDesc:
      "Me fascina explorar nuevas tecnologías y crear soluciones innovadoras que impacten positivamente en la vida de las personas.",
    music: "Música",
    musicDesc:
      "La música es mi compañera constante. Desde rock clásico hasta música electrónica, encuentro inspiración en cada género.",
    photography: "Fotografía",
    photographyDesc:
      "Capturar momentos únicos y ver el mundo desde diferentes perspectivas es una de mis pasiones más grandes.",
    gaming: "Gaming",
    gamingDesc:
      "Los videojuegos no solo son entretenimiento, sino una fuente de inspiración para el diseño de interfaces y experiencias de usuario.",
    reading: "Lectura",
    readingDesc:
      "Desde libros técnicos hasta ciencia ficción, la lectura expande mi mente y alimenta mi creatividad constantemente.",
    specialtyCoffee: "Café de Especialidad",
    specialtyCoffeeDesc:
      "Soy un verdadero amante del café. Cada taza es una experiencia sensorial que acompaña mis mejores ideas.",

    // Thoughts
    technologyAsChange: "La Tecnología como Herramienta de Cambio",
    technologyAsChangeText:
      "Creo firmemente que la tecnología debe ser una herramienta para democratizar oportunidades. Mi objetivo es crear soluciones que no solo sean técnicamente excelentes, sino que también sean accesibles para todos, especialmente para aquellos que más lo necesitan.",
    continuousLearning: "El Poder del Aprendizaje Continuo",
    continuousLearningText:
      "En el mundo del desarrollo, nunca se deja de aprender. Cada proyecto es una oportunidad para crecer, cada error es una lección valiosa, y cada éxito es un escalón hacia el siguiente desafío. Esta mentalidad de crecimiento es lo que me impulsa cada día.",
    userCenteredDesign: "Diseño Centrado en el Usuario",
    userCenteredDesignText:
      "La mejor tecnología es aquella que se vuelve invisible para el usuario. Mi enfoque siempre es crear experiencias intuitivas y significativas, donde la complejidad técnica se oculta detrás de interfaces simples y elegantes.",
    collaborationCommunity: "Colaboración y Comunidad",
    collaborationCommunityText:
      "Los mejores proyectos nacen de la colaboración. Creo en el poder de los equipos diversos, en compartir conocimiento y en construir una comunidad tech más inclusiva y colaborativa.",

    // Timeline
    developerAtAlfa: "Desarrollador en Alfa GL",
    developerAtAlfaDesc: "Liderando el desarrollo de aplicaciones internas y optimizando procesos empresariales.",
    freelancerFullStack: "Freelancer Full Stack",
    freelancerFullStackDesc: "Especializándome en soluciones personalizadas para startups y pequeñas empresas.",
    dataManagerTeleperformance: "Gestor de Datos en Teleperformance",
    dataManagerTeleperformanceDesc: "Desarrollando habilidades en gestión de bases de datos y atención al cliente.",
    startInProgramming: "Inicio en Programación",
    startInProgrammingDesc: "Descubriendo mi pasión por el código y comenzando mi journey autodidacta.",
  },
}

export default function AboutMe() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<"en" | "es">("es")

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

  const interests = [
    {
      icon: Code,
      title: t("creativeProgramming"),
      description: t("creativeProgrammingDesc"),
    },
    {
      icon: Music,
      title: t("music"),
      description: t("musicDesc"),
    },
    {
      icon: Camera,
      title: t("photography"),
      description: t("photographyDesc"),
    },
    {
      icon: Gamepad2,
      title: t("gaming"),
      description: t("gamingDesc"),
    },
    {
      icon: Book,
      title: t("reading"),
      description: t("readingDesc"),
    },
    {
      icon: Coffee,
      title: t("specialtyCoffee"),
      description: t("specialtyCoffeeDesc"),
    },
  ]

  const thoughts = [
    {
      title: t("technologyAsChange"),
      content: t("technologyAsChangeText"),
    },
    {
      title: t("continuousLearning"),
      content: t("continuousLearningText"),
    },
    {
      title: t("userCenteredDesign"),
      content: t("userCenteredDesignText"),
    },
    {
      title: t("collaborationCommunity"),
      content: t("collaborationCommunityText"),
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: t("developerAtAlfa"),
      description: t("developerAtAlfaDesc"),
    },
    {
      year: "2023",
      title: t("freelancerFullStack"),
      description: t("freelancerFullStackDesc"),
    },
    {
      year: "2020",
      title: t("dataManagerTeleperformance"),
      description: t("dataManagerTeleperformanceDesc"),
    },
    {
      year: "2019",
      title: t("startInProgramming"),
      description: t("startInProgrammingDesc"),
    },
  ]

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

      {/* Quick Contact CTA */}
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
              {t("moreAboutMe")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
                isDarkMode ? "text-white/80" : "text-gray-700"
              }`}
            >
              {t("aboutDescription")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className={`py-20 px-4 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className={`text-4xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {t("aboutMyStory")}
              </h2>

              <div className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className={`flex items-start gap-4 p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-white shadow-md"}`}
                >
                  <MapPin className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-2">{t("origin")}</h3>
                    <p className={isDarkMode ? "text-white/70" : "text-gray-600"}>{t("originText")}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className={`flex items-start gap-4 p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-white shadow-md"}`}
                >
                  <Calendar className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-2">{t("journey")}</h3>
                    <p className={isDarkMode ? "text-white/70" : "text-gray-600"}>{t("journeyText")}</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className={`flex items-start gap-4 p-4 rounded-lg ${isDarkMode ? "bg-white/10" : "bg-white shadow-md"}`}
                >
                  <Heart className="text-red-400 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-2">{t("motivation")}</h3>
                    <p className={isDarkMode ? "text-white/70" : "text-gray-600"}>{t("motivationText")}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className={`absolute inset-0 rounded-2xl ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-600"
                  }`}
                ></motion.div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Felipe Russi"
                  className={`relative z-10 w-full rounded-2xl border-4 ${
                    isDarkMode ? "border-white/20" : "border-white shadow-xl"
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            }`}
          >
            {t("passionsInterests")}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl ${isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"}`}
              >
                <interest.icon className="text-blue-400 mb-4" size={32} />
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {interest.title}
                </h3>
                <p className={isDarkMode ? "text-white/70" : "text-gray-600"}>{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Thoughts */}
      <section className={`py-20 px-4 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {t("thoughtsPhilosophy")}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {thoughts.map((thought, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl ${isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"}`}
              >
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                  }`}
                >
                  {thought.title}
                </h3>
                <p className={`text-lg leading-relaxed ${isDarkMode ? "text-white/80" : "text-gray-700"}`}>
                  {thought.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-12 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            }`}
          >
            {t("professionalJourney")}
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}></div>

            {timeline.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative flex items-start gap-8 mb-12">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                    isDarkMode ? "bg-blue-600" : "bg-blue-600"
                  }`}
                >
                  {item.year}
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 p-6 rounded-xl ${isDarkMode ? "bg-white/10" : "bg-white shadow-lg border border-gray-200"}`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </h3>
                  <p className={isDarkMode ? "text-white/70" : "text-gray-600"}>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-4 ${isDarkMode ? "bg-black/20" : "bg-gray-50"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {t("wantToKnowMore")}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg mb-8 ${isDarkMode ? "text-white/70" : "text-gray-600"}`}
          >
            {t("wantToKnowMoreText")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/blog")}
              className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
              }`}
            >
              {t("readMyBlog")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/#contact")}
              className={`px-8 py-4 rounded-full font-bold border-2 transition-all duration-300 ${
                isDarkMode
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {t("letsConnect")}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
