"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(titleRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" })
      .fromTo(textRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(imageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8")
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              ABOUT
              <span className="block text-gray-400">ME</span>
            </h2>

            <p ref={textRef} className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">full-stack developer</span> who is working to learn more
              every day, making new projects and exploring new technologies. I want to change the vision of programming
              and make history helping people who don't have coding or economic opportunities.
            </p>

            <div className="flex flex-wrap gap-4 text-lg">
              <span className="px-4 py-2 bg-white/10 rounded-full text-white">Problem Solver</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-white">Creative Thinker</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-white">Team Player</span>
            </div>
          </div>

          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=250&width=250"
                    alt="Felipe Russi"
                    className="w-60 h-60 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
