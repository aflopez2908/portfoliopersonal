"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Copy, Send, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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
      contentRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5",
    )
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual EmailJS implementation)
    try {
      // Here you would integrate with EmailJS
      // emailjs.sendForm('service_1ew9brn', 'mitemplate', form)

      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call

      setSubmitStatus("success")
      setFormData({ from_name: "", email: "", message: "" })

      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = async (text: string, type: "email" | "linkedin") => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedLinkedIn(true)
        setTimeout(() => setCopiedLinkedIn(false), 2000)
      }
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div ref={sectionRef} className="min-h-screen py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-center">
          CONTACT
          <span className="block text-gray-400">ME</span>
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="mr-3" size={24} />
                Email
              </h3>
              <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-300">aflopezrussi@gmail.com</span>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open("mailto:aflopezrussi@gmail.com")}
                  >
                    <Send size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => copyToClipboard("aflopezrussi@gmail.com", "email")}
                  >
                    {copiedEmail ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">LinkedIn</h3>
              <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <span className="text-gray-300">Alvaro Felipe Lopez Russi</span>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/alvaro-felipe-lopez-russi-3a76521a1/", "_blank")
                    }
                  >
                    <Send size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => copyToClipboard("Alvaro Felipe Lopez Russi", "linkedin")}
                  >
                    {copiedLinkedIn ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && <p className="text-green-400 text-center">Message sent successfully!</p>}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <div className="text-4xl font-bold text-white mb-4">FR</div>
          <p className="text-gray-400">Made with ❤️</p>
        </div>
      </div>
    </div>
  )
}
