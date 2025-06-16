"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = {
  programming: {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 90, description: "Advanced backend development and data analysis" },
      { name: "React", level: 85, description: "Modern frontend development with hooks and context" },
      { name: "JavaScript", level: 88, description: "ES6+ features and asynchronous programming" },
      { name: "Node.js", level: 80, description: "Server-side development and API creation" },
      { name: "HTML5", level: 95, description: "Semantic markup and accessibility best practices" },
      { name: "CSS3", level: 90, description: "Advanced styling, animations, and responsive design" },
    ],
  },
  softSkills: {
    title: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Teamwork", level: 95, description: "Collaborative problem-solving and communication" },
      { name: "Fast Learning", level: 90, description: "Quick adaptation to new technologies and methodologies" },
      { name: "Resilience", level: 88, description: "Overcoming challenges and learning from failures" },
      { name: "Attention to Detail", level: 92, description: "Ensuring code quality and preventing future issues" },
    ],
  },
  languages: {
    title: "Languages",
    icon: "🌍",
    skills: [
      { name: "Spanish", level: 100, description: "Native speaker from Colombia" },
      { name: "English", level: 80, description: "B2 level - Professional working proficiency" },
      { name: "Portuguese", level: 40, description: "A1 level - Basic conversational skills" },
    ],
  },
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
      cardsRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5",
    )
  }, [])

  useEffect(() => {
    if (activeCategory) {
      gsap.fromTo(".skill-detail", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" })
    }
  }, [activeCategory])

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey)
  }

  const handleBack = () => {
    gsap.to(".skill-detail", {
      opacity: 0,
      x: -100,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setActiveCategory(null),
    })
  }

  if (activeCategory) {
    const category = skillCategories[activeCategory as keyof typeof skillCategories]

    return (
      <div className="min-h-screen py-20 bg-black flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="skill-detail">
            <div className="flex items-center mb-12">
              <Button
                onClick={handleBack}
                variant="outline"
                className="mr-6 border-white text-white hover:bg-white hover:text-black"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back
              </Button>
              <h2 className="text-4xl md:text-6xl font-black text-white">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    <span className="text-2xl">{category.icon}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300 mb-2">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={sectionRef} className="min-h-screen py-20 bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-center">
          MY
          <span className="block text-gray-400">SKILLS</span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              onClick={() => handleCategoryClick(key)}
              className="bg-gray-800 p-8 rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-gray-300 mb-6">Click to explore</p>
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">→ View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
