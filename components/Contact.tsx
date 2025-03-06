"use client"

import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function ContactSection() {
  const textRefs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    // Animate text elements on load
    textRefs.current.forEach((el, index) => {
      setTimeout(
        () => {
          if (el) {
            el.style.opacity = "1"
            el.style.transform = "translateX(0px) translateY(0px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)"
          }
        },
        100 + index * 50,
      )
    })
  }, [])

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el)
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-black relative flex items-center justify-center py-12 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background shape with blur and rotation */}
      <div
        className="absolute inset-0 opacity-20 -rotate-13"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, rgb(0, 0, 0) 100%)",
          borderRadius: "10px",
          transform: "rotate(-13deg)",
        }}
      ></div>

      {/* Border gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.07) 0%, rgb(0, 0, 0) 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Text content container */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* "Reach out anytime" with decorative lines */}
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
            <p className="text-white/80 text-sm italic">Reach out anytime</p>
            <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl space-x-2 md:text-5xl font-medium text-center text-white/90">
            <span
              ref={addToRefs}
              className="inline-block opacity-0 translate-y-1.5"
              style={{ transition: "all 0.5s ease" }}
            >
              Let&apos;s{" "}
            </span>
            <span
              ref={addToRefs}
              className="inline-block opacity-0 translate-y-1.5"
              style={{ transition: "all 0.5s ease" }}
            >
              Stay{" "}
            </span>
            <span className="font-serif italic font-normal text-white/60">
              <span
                ref={addToRefs}
                className="inline-block opacity-0 translate-y-1.5"
                style={{ transition: "all 0.5s ease" }}
              >
                Connected
              </span>
            </span>
          </h2>

          {/* Description text */}
          <p className="text-white/80 text-center max-w-lg">
            {[
              "Got",
              "any",
              "questions",
              "or",
              "need",
              "support.",
              "Feel",
              "free",
              "to",
              "reach",
              "out to us",
              "open",
              "to",
              "new",
              "projects",
              "or",
              "just",
              "a",
              "casual",
              "chat!",
            ].map((word, i) => (
              <span
                key={i}
                ref={addToRefs}
                className="inline-block opacity-0 translate-y-1.5 mr-1"
                style={{ transition: "all 0.5s ease" }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Contact button with glow effect */}
        <Link
          href="https://cal.com/rick/get-rick-rolled?date=2024-12-24&month=2024-12"
          target="_blank"
          rel="noopener"
          className="relative group flex items-center justify-center gap-2 px-8 py-4 rounded-[118px] bg-white/5 mb-16"
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-[72px] blur-[15px] opacity-70 group-hover:opacity-100 transition-opacity"
            style={{
              background: "radial-gradient(25% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          {/* Stroke effect */}
          <div
            className="absolute inset-0 rounded-[72px]"
            style={{
              background: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          {/* Button fill */}
          <div className="absolute inset-0 rounded-[114px] bg-black"></div>

          {/* Button text */}
          <div className="relative flex items-center gap-2">
            <span className="text-white font-medium">Contact Us</span>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </Link>

        {/* Social media links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link
            href="https://x.com/home"
            target="_blank"
            rel="noopener"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Twitter className="w-5 h-5 text-white" />
          </Link>

          <div className="h-6 w-px bg-white/7"></div>

          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Instagram className="w-5 h-5 text-white" />
          </Link>

          <div className="h-6 w-px bg-white/7"></div>

          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Facebook className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Email address */}
        <a
          href="mailto:adriancarter@support.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white/80 hover:text-white transition-colors text-center"
        >
          thepistisplace@support.com
        </a>
      </div>
    </section>
  )
}

