"use client"

import { Link2, Twitter } from "lucide-react"
import Image from "next/image"

export default function Pastor() {

  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
            <p className="text-white/80 text-sm italic">Our Pastor</p>
            <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Profile section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Profile image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[2/3] md:aspect-auto">
            <Image
              src="/p9.jpeg"
              alt="Adrian Carter"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Profile info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Pastor Japeth <span className="font-serif italic font-normal text-white/60">Joseph</span>
            </h2>

            <p className="text-white/80 mb-4">
            Pastor Japheth Joseph is a devoted shepherd and teacher committed to raising believers grounded in sound doctrine, demonstrating the power of the Holy Ghost whilst maintaining a high level of conviction
            </p>

            <p className="text-white/80 mb-8">
              His innovative approach and attention to detail have made him a go-to professional for startups,
              enterprises, and creatives worldwide.
            </p>

            <a
              href="https://twitter.com/adriancarter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] hover:bg-[#292b2b] transition-colors w-fit"
            >
              <Link2 className="w-5 h-5 text-white/70" />
              <span className="text-white/90">Japeth Joseph</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

