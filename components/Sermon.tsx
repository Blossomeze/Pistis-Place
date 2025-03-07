"use client"

import { Headphones, Play, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Sermon() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Latest Teachings</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Recent <span className="font-serif italic font-normal text-white/60">sermons</span>
        </h2>

        {/* Featured sermon */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-3xl overflow-hidden aspect-video">
            <Image src="/placeholder.svg?height=400&width=600" alt="Featured Sermon" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 text-white fill-white" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-block bg-white/20 px-3 max-w-fit py-1 rounded-full text-white/80 text-sm mb-4">Featured</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">The Power of Faith in Uncertain Times</h3>
            <p className="text-white/80 mb-6">
              Pastor Japheth Joseph shares powerful insights on maintaining strong faith during life's most challenging
              seasons. Learn how to stand firm when everything around you seems uncertain.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Video className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-white/80">Watch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Headphones className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-white/80">Listen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L14 4M19 9V5M19 9H15M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 10.8717 22 9.87835 21.9447 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M7 16L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 16V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-white/80">Notes</span>
              </div>
            </div>
            <p className="text-white/60 text-sm">April 28, 2024 • Sunday Service</p>
          </div>
        </div>

        {/* Recent sermons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Sermon 1 */}
          <div className="bg-[#141414] rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=200&width=350" alt="Sermon thumbnail" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">Walking in Divine Purpose</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">
                Discover how to identify and fulfill your God-given purpose in this inspiring message.
              </p>
              <p className="text-white/60 text-sm">April 21, 2024</p>
            </div>
          </div>

          {/* Sermon 2 */}
          <div className="bg-[#141414] rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=200&width=350" alt="Sermon thumbnail" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">The Power of Prayer</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">
                Learn how to develop a powerful prayer life that brings breakthrough in every area.
              </p>
              <p className="text-white/60 text-sm">April 14, 2024</p>
            </div>
          </div>

          {/* Sermon 3 */}
          <div className="bg-[#141414] rounded-2xl overflow-hidden">
            <div className="relative aspect-video">
              <Image src="/placeholder.svg?height=200&width=350" alt="Sermon thumbnail" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5 text-white fill-white" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">Overcoming Life's Challenges</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">
                Biblical strategies for facing and conquering the obstacles in your path.
              </p>
              <p className="text-white/60 text-sm">April 7, 2024</p>
            </div>
          </div>
        </div>

        {/* View all sermons button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#141414] hover:bg-[#292b2b] transition-colors"
          >
            <span className="text-white/90">View All Sermons</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

