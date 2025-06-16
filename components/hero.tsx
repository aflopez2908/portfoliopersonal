"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current], {
      opacity: 0,
      y: 100,
    })

    // Animation sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )

    // Typing effect for name
    gsap.to(subtitleRef.current, {
      duration: 2,
      text: "Felipe Russi",
      ease: "none",
      delay: 1,
    })

    // Floating animation for arrow
    gsap.to(".floating-arrow", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: aboutSection, offsetY: 80 },
        ease: "power3.inOut",
      })
    }
  }

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
        >
          WELCOME
        </h1>

        <h2
          ref={subtitleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white min-h-[80px] md:min-h-[100px]"
        >
          {/* Text will be animated here */}
        </h2>

        <p
          ref={descriptionRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="font-light">Software Developer</span> •
          <span className="font-light"> Frontend Specialist</span> •<span className="font-light"> App Developer</span> •
          <span className="font-light"> Designer</span>
        </p>

        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <Download className="mr-2" size={20} />
            Get My CV
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={scrollToAbout}
          >
            Explore More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToAbout} className="floating-arrow text-white hover:text-gray-300 transition-colors">
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  )
}
