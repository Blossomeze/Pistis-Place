"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
        // Fallback for browsers that block autoplay
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        {/* Replace with your actual video sources */}
        <source src="/church-worship.mp4" type="video/mp4" />
        {/* Fallback image if video doesn&apos;t load */}
        <Image
          fill
          src="/placeholder.svg?height=1080&width=1920"
          alt="Church worship"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6), rgba(102,0,102,0.2))",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex md:pt-10 flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white opacity-50"></div>
            <p className="text-white/80 text-sm italic">Welcome to The Pistis Place</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white opacity-50"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Experience God&apos;s <span className="font-serif italic font-normal text-white/80">Presence</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 mb-5 max-w-2xl mx-auto">
            Join us for a life-changing encounter with God&apos;s word and worship
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="relative group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#660066]/20 transition-colors w-full sm:w-auto"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-[10px] opacity-30 group-hover:opacity-50 transition-opacity"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(102, 0, 102, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></div>

              <span className="text-white font-medium">Learn More</span>
              <ArrowRight className="w-5 h-5 text-white/70" />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto"
            >
              <span className="font-medium">Join Us Sunday</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[15%] md:bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-8 rounded-full border-2 border-white/40 flex justify-center p-1">
          <div className="w-2 h-3 bg-white/30 rounded-full animate-bounce"></div>
        </div>
        <p className="text-white/30 text-xs mt-2">Scroll Down</p>
      </div>
    </div>
  )
}

