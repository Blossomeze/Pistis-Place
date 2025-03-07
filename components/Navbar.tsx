"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import logo from "@/public/logowhite.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <nav
          className={cn(
            "transition-all duration-300 ease-in-out",
            isScrolled
              ? "bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)]"
              : "bg-transparent",
          )}
        >
          <div className="px-4 py-3 md:px-6 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-44 h-10">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Church logo"
                    width={160}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/sermons"
                  className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Sermons
                </Link>
                <Link
                  href="/events"
                  className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Link
                  href="/give"
                  rel="noopener"
                  className="relative group inline-flex h-10 items-center justify-center rounded-3xl bg-white border-white/90 px-6 py-2 text-sm font-medium text-black hover:bg-white/50 transition-colors"
                >
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl blur-[10px] opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  ></div>

                  <span>Give</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden rounded-full p-2 text-white/80 hover:bg-white/5 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/sermons"
                    className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sermons
                  </Link>
                  <Link
                    href="/events"
                    className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-white/80 hover:text-white px-3.5 py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/give"
                    rel="noopener"
                    className="inline-flex h-10 items-center justify-center rounded-[10px] bg-white/5 border border-white/10 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Give
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

