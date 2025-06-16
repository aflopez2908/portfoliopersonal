"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, MessageCircle, Mail, Phone, Plus, X } from "lucide-react"

interface FloatingSocialButtonsProps {
  onContactClick?: () => void
  isDarkMode?: boolean
}

export default function FloatingSocialButtons({ onContactClick, isDarkMode = true }: FloatingSocialButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aflopez2908",
      label: "GitHub",
      color: "bg-gray-700 hover:bg-gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alvaro-felipe-lopez-russi-3a76521a1/",
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Phone,
      href: "https://wa.me/573052374118",
      label: "WhatsApp",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Mail,
      href: "mailto:aflopezrussi@gmail.com",
      label: "Email",
      color: "bg-red-600 hover:bg-red-700",
    },
  ]

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Social Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 20, y: 10 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContactClick}
        className="flex items-center gap-2 px-4 py-3 rounded-full font-bold text-white shadow-lg mb-3 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
      >
        <MessageCircle size={20} />
        <span>¡Hablemos!</span>
      </motion.button>

      {/* Expand/Collapse Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleExpanded}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          isDarkMode
            ? "bg-slate-700 hover:bg-slate-600 text-white"
            : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
        }`}
      >
        <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isExpanded ? <X size={20} /> : <Plus size={20} />}
        </motion.div>
      </motion.button>
    </div>
  )
}
