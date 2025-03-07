"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"
import ContactSection from "@/components/Contact"

// Sample events data
const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "May 12, 2024",
    time: "10:00 AM - 12:30 PM",
    location: "Main Sanctuary",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us for a powerful time of worship, prayer, and teaching from Pastor Japheth Joseph.",
    featured: true,
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "May 15, 2024",
    time: "6:30 PM - 8:00 PM",
    location: "Fellowship Hall",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Dive deeper into the Word with our interactive Bible study sessions led by our teaching team.",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Night",
    date: "May 17, 2024",
    time: "7:00 PM - 9:30 PM",
    location: "Youth Center",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "A night of fun, fellowship, and spiritual growth for teenagers and young adults.",
    featured: false,
  },
  {
    id: 4,
    title: "Prayer & Intercession",
    date: "May 18, 2024",
    time: "6:00 AM - 7:30 AM",
    location: "Prayer Room",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join our intercessory prayer team as we pray for our church, community, and world.",
    featured: false,
  },
  {
    id: 5,
    title: "Sunday Worship Service",
    date: "May 19, 2024",
    time: "10:00 AM - 12:30 PM",
    location: "Main Sanctuary",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us for a powerful time of worship, prayer, and teaching from Pastor Japheth Joseph.",
    featured: true,
  },
  {
    id: 6,
    title: "Women's Fellowship",
    date: "May 21, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Fellowship Hall",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "A special gathering for women to connect, share, and grow together in faith.",
    featured: false,
  },
  {
    id: 7,
    title: "Men's Breakfast",
    date: "May 25, 2024",
    time: "8:00 AM - 10:00 AM",
    location: "Fellowship Hall",
    address: "123 Faith Avenue, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us for breakfast, fellowship, and an inspiring message for men of all ages.",
    featured: false,
  },
  {
    id: 8,
    title: "Community Outreach Day",
    date: "May 26, 2024",
    time: "1:00 PM - 4:00 PM",
    location: "Community Center",
    address: "456 Hope Street, City Center",
    image: "/placeholder.svg?height=400&width=600",
    description: "Join us as we serve our local community through various outreach projects and activities.",
    featured: false,
  },
]

// Group events by month
const months = ["May 2024", "June 2024", "July 2024"]

export default function EventsPage() {
  const [activeMonth, setActiveMonth] = useState(months[0])
  const [viewType, setViewType] = useState<"list" | "calendar">("list")

  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16">
        {/* Background gradient */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Upcoming <span className="font-serif italic font-normal text-white/60">Events</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join us for worship services, Bible studies, and special events designed to help you grow in your faith.
            </p>
          </div>

          {/* Featured event */}
          {events.filter((event) => event.featured)[0] && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Event</h2>
              <div className="grid md:grid-cols-2 gap-5 bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={events.filter((event) => event.featured)[0].image || "/placeholder.svg"}
                    alt={events.filter((event) => event.featured)[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-block bg-white/20 max-w-fit px-3 py-1 rounded-full text-white/80 text-sm mb-4">
                    Featured
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {events.filter((event) => event.featured)[0].title}
                  </h3>
                  <p className="text-white/80 mb-6">{events.filter((event) => event.featured)[0].description}</p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-white/70" />
                      <span className="text-white/80">{events.filter((event) => event.featured)[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-white/70" />
                      <span className="text-white/80">{events.filter((event) => event.featured)[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-white/70" />
                      <span className="text-white/80">
                        {events.filter((event) => event.featured)[0].location},{" "}
                        {events.filter((event) => event.featured)[0].address}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/events/${events.filter((event) => event.featured)[0].id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full sm:w-auto"
                  >
                    <Calendar className="w-5 h-5 text-white/70" />
                    <span className="text-white/90">Add to Calendar</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Month selector and view type */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const currentIndex = months.indexOf(activeMonth)
                  if (currentIndex > 0) {
                    setActiveMonth(months[currentIndex - 1])
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
                disabled={months.indexOf(activeMonth) === 0}
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>
              <h2 className="text-xl font-bold text-white px-4">{activeMonth}</h2>
              <button
                onClick={() => {
                  const currentIndex = months.indexOf(activeMonth)
                  if (currentIndex < months.length - 1) {
                    setActiveMonth(months[currentIndex + 1])
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors"
                disabled={months.indexOf(activeMonth) === months.length - 1}
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewType("list")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewType === "list" ? "bg-white/30 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewType("calendar")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewType === "calendar" ? "bg-white/30 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>

          {/* Events list */}
          {viewType === "list" && (
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {events.map((event) => (
                <div key={event.id} className="bg-[#141414] rounded-xl overflow-hidden">
                  <div className="relative h-[200px]">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-white font-medium">{event.date}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-white/80 mb-6">{event.description}</p>
                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-white/70" />
                        <span className="text-white/80">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-white/70" />
                        <span className="text-white/80">
                          {event.location}, {event.address}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full justify-center"
                    >
                      <Calendar className="w-5 h-5 text-white/70" />
                      <span className="text-white/90">Add to Calendar</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Calendar view */}
          {viewType === "calendar" && (
            <div className="bg-[#141414] rounded-xl p-6 mb-16">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center py-2 text-white/70 font-medium">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {/* Example calendar days - would be dynamically generated */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = events.some((event) => event.date.includes(`May ${day}`))
                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-lg border border-white/10 p-2 ${
                        hasEvent ? "bg-white/10" : ""
                      } ${day < 5 ? "opacity-30" : ""}`}
                    >
                      <div className="text-white/80">{day}</div>
                      {hasEvent && (
                        <div className="mt-1">
                          <div className="w-full h-1 bg-white/50 rounded-full mb-1"></div>
                          <Link
                            href={`/events/${events.find((event) => event.date.includes(`May ${day}`))?.id}`}
                            className="text-xs text-white/90 hover:text-white truncate block"
                          >
                            {events.find((event) => event.date.includes(`May ${day}`))?.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Subscribe to calendar */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Never Miss an Event</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our church calendar to stay updated with all our events and activities.
            </p>
            <Link
              href="/calendar-subscription"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-colors"
            >
              <Calendar className="w-5 h-5 text-white/70" />
              <span className="text-white">Subscribe to Calendar</span>
            </Link>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}

