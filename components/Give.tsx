"use client"

import { ArrowUpRight, Heart } from "lucide-react"
import Link from "next/link"

export default function Give() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Support Our Mission</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Give <span className="font-serif italic font-normal text-white/60">with a cheerful heart</span>
        </h2>

        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          Your generous contributions help us continue our mission of spreading the gospel, supporting our community,
          and expanding our outreach programs.
        </p>

        {/* Giving options */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* One-time giving */}
          <div className="bg-[#141414] p-8 rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white/70" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">One-Time Gift</h3>
            <p className="text-white/80 mb-6">Support our ministry with a one-time donation of any amount.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors w-full"
            >
              <span className="text-white/90">Give Now</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </Link>
          </div>

          {/* Recurring giving */}
          <div className="bg-[#141414] p-8 rounded-3xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M3.05 11C3.27151 7.94428 5.04062 5.29468 7.65 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20.9568 11C20.7353 7.94428 18.9662 5.29468 16.3568 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.05 13C3.50351 17.0533 7.26983 20 12 20C16.7302 20 20.4965 17.0533 20.95 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Recurring Support</h3>
            <p className="text-white/80 mb-6">Set up a monthly contribution to provide consistent support.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors w-full"
            >
              <span className="text-white/90">Set Up Monthly</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </Link>
          </div>
        </div>

        {/* Additional info */}
        <p className="text-white/60 text-sm">
          For other giving options or questions, please{" "}
          <Link href="#contact" className="text-white/80 hover:text-white underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

