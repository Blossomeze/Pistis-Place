"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Download, Headphones, Play, Search, Video } from "lucide-react"
// Define sermon categories
const categories = [
  { id: "all", name: "All Sermons" },
  { id: "faith", name: "Faith" },
  { id: "prayer", name: "Prayer" },
  { id: "worship", name: "Worship" },
  { id: "purpose", name: "Purpose" },
  { id: "relationships", name: "Relationships" },
  { id: "leadership", name: "Leadership" },
]

// Sample sermon data
const sermons = [
  {
    id: 1,
    title: "The Power of Faith in Uncertain Times",
    preacher: "Pastor Japheth Joseph",
    date: "April 28, 2024",
    duration: "45 min",
    category: "faith",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Learn how to maintain strong faith during life's most challenging seasons. Pastor Japheth shares powerful insights on standing firm when everything around you seems uncertain.",
  },
  {
    id: 2,
    title: "Developing a Powerful Prayer Life",
    preacher: "Pastor Sarah Williams",
    date: "April 21, 2024",
    duration: "38 min",
    category: "prayer",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Discover the keys to effective prayer that brings breakthrough in every area of your life. Learn practical strategies to deepen your communion with God.",
  },
  {
    id: 3,
    title: "Walking in Divine Purpose",
    preacher: "Pastor Japheth Joseph",
    date: "April 14, 2024",
    duration: "42 min",
    category: "purpose",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "God has a unique purpose for your life. This message will help you identify and fulfill your God-given purpose with confidence and clarity.",
  },
  {
    id: 4,
    title: "The Heart of Worship",
    preacher: "Pastor Rebecca Johnson",
    date: "April 7, 2024",
    duration: "40 min",
    category: "worship",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Explore what true worship means beyond music and singing. Learn how to live a lifestyle of worship that honors God in everything you do.",
  },
  {
    id: 5,
    title: "Building Healthy Relationships",
    preacher: "Pastor Michael Thomas",
    date: "March 31, 2024",
    duration: "47 min",
    category: "relationships",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Discover biblical principles for building and maintaining healthy relationships in your family, workplace, and community.",
  },
  {
    id: 6,
    title: "Overcoming Life's Challenges",
    preacher: "Pastor Japheth Joseph",
    date: "March 24, 2024",
    duration: "44 min",
    category: "faith",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Biblical strategies for facing and conquering the obstacles in your path. Learn how to overcome with faith and perseverance.",
  },
  {
    id: 7,
    title: "Servant Leadership",
    preacher: "Pastor David Wilson",
    date: "March 17, 2024",
    duration: "39 min",
    category: "leadership",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Jesus modeled servant leadership during His ministry. Discover how to lead like Jesus in your home, workplace, and ministry.",
  },
  {
    id: 8,
    title: "The Power of Persistent Prayer",
    preacher: "Pastor James Anderson",
    date: "March 10, 2024",
    duration: "41 min",
    category: "prayer",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Learn why persistence in prayer matters and how to maintain a consistent prayer life even when you don't see immediate results.",
  },
]

export default function SermonsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter sermons based on category and search query
  const filteredSermons = sermons.filter((sermon) => {
    const matchesCategory = activeCategory === "all" || sermon.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16">
        {/* Background gradient */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(102,0,102,0.8) 0%, rgba(0,0,0,0) 70%)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sermons & <span className="font-serif italic font-normal text-white/60">Teachings</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Explore our collection of life-changing messages that will inspire your faith and deepen your walk with
              God.
            </p>
          </div>

          {/* Search and filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search bar */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-white/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#660066]/30"
                />
              </div>

              {/* Featured sermon link */}
              <Link
                href="/sermons/featured"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#660066]/20 hover:bg-[#660066]/30 transition-colors"
              >
                <span className="text-white">Featured Sermons</span>
                <ArrowRight className="w-5 h-5 text-white/70" />
              </Link>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#660066]/30 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sermons grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#660066]/30 transition-colors">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm">{sermon.date}</span>
                    <div className="w-1 h-1 rounded-full bg-white/30"></div>
                    <Clock className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm">{sermon.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sermon.title}</h3>
                  <p className="text-white/60 mb-4">{sermon.preacher}</p>
                  <p className="text-white/80 text-sm mb-6 line-clamp-3">{sermon.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/sermons/${sermon.id}`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#660066]/20 transition-colors"
                    >
                      <Video className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 text-sm">Watch</span>
                    </Link>
                    <Link
                      href={`/sermons/${sermon.id}/audio`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#660066]/20 transition-colors"
                    >
                      <Headphones className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 text-sm">Listen</span>
                    </Link>
                    <Link
                      href={`/sermons/${sermon.id}/download`}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#660066]/20 transition-colors"
                    >
                      <Download className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 text-sm">Download</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#660066]/20 transition-colors">
              <span className="text-white">Load More Sermons</span>
              <ArrowRight className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

