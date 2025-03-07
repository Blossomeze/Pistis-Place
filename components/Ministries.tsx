"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Ministries() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Our Ministries</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Get Involved <span className="font-serif italic font-normal text-white/60">in our church</span>
        </h2>

        {/* Ministries grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Ministry 1 */}
          <div className="group relative rounded-3xl overflow-hidden h-[400px]">
            <Image
              src="/img2.jpg"
              alt="Youth Ministry"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Living Portals</h3>
              <p className="text-white/80 mb-4">
                Empowering the next generation through mentorship, activities, and spiritual growth.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Ministry 2 */}
          <div className="group relative rounded-3xl overflow-hidden h-[400px]">
            <Image
              src="/img3.jpg"
              alt="Worship Ministry"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Children&apos;s Ministry</h3>
              <p className="text-white/80 mb-4">
                Creating an atmosphere of worship through music, arts, and creative expression.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Ministry 3 */}
          <div className="group relative rounded-3xl overflow-hidden h-[400px]">
            <Image
              src="/img1.jpg"
              alt="Outreach Ministry"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Intercessory Unit</h3>
              <p className="text-white/80 mb-4">
                Extending God&apos;s love to our community through service, support, and evangelism.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

