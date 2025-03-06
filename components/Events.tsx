"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsSection() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Upcoming Events</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Join Us <span className="font-serif italic font-normal text-white/60">in fellowship</span>
        </h2>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Event 1 */}
          <div className="bg-[#141414] rounded-3xl overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=600" alt="Sunday Service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-white font-medium">Sunday, May 12</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Sunday Worship Service</h3>
              <p className="text-white/80 mb-6">
                Join us for a powerful time of worship, prayer, and teaching from Pastor Japheth Joseph.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white/70" />
                  <span className="text-white/80">10:00 AM - 12:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <span className="text-white/80">123 Faith Avenue, City Center</span>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors w-full justify-center"
              >
                <Calendar className="w-5 h-5 text-white/70" />
                <span className="text-white/90">Add to Calendar</span>
              </Link>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-[#141414] rounded-3xl overflow-hidden">
            <div className="relative h-[250px]">
              <Image src="/placeholder.svg?height=250&width=600" alt="Bible Study" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-white font-medium">Wednesday, May 15</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Midweek Bible Study</h3>
              <p className="text-white/80 mb-6">
                Dive deeper into the Word with our interactive Bible study sessions led by our teaching team.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white/70" />
                  <span className="text-white/80">6:30 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white/70" />
                  <span className="text-white/80">123 Faith Avenue, City Center</span>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors w-full justify-center"
              >
                <Calendar className="w-5 h-5 text-white/70" />
                <span className="text-white/90">Add to Calendar</span>
              </Link>
            </div>
          </div>
        </div>

        {/* View all events button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#141414] hover:bg-[#292b2b] transition-colors"
          >
            <span className="text-white/90">View All Events</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

