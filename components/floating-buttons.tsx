"use client"

import { Github, Linkedin, MessageCircle, Mail } from "lucide-react"

export default function FloatingButtons() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aflopez2908",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/alvaro-felipe-lopez-russi-3a76521a1/",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/573052374118",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:aflopezrussi@gmail.com",
      label: "Email",
    },
  ]

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 group"
            aria-label={link.label}
          >
            <Icon size={20} />
          </a>
        )
      })}
    </div>
  )
}
