"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"

// Define gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "worship", name: "Worship" },
  { id: "events", name: "Events" },
  { id: "community", name: "Community" },
  { id: "outreach", name: "Outreach" },
]

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Sunday Worship Service",
    category: "worship",
    image: "/placeholder.svg?height=600&width=800",
    description: "Our congregation gathered in worship and praise.",
  },
  {
    id: 2,
    title: "Youth Conference 2024",
    category: "events",
    image: "/placeholder.svg?height=600&width=800",
    description: "Young people coming together to grow in faith.",
  },
  {
    id: 3,
    title: "Community Outreach",
    category: "outreach",
    image: "/placeholder.svg?height=600&width=800",
    description: "Serving our local community with love and compassion.",
  },
  {
    id: 4,
    title: "Prayer Night",
    category: "worship",
    image: "/placeholder.svg?height=600&width=800",
    description: "A powerful night of prayer and intercession.",
  },
  {
    id: 5,
    title: "Bible Study Group",
    category: "community",
    image: "/placeholder.svg?height=600&width=800",
    description: "Diving deeper into God's Word together.",
  },
  {
    id: 6,
    title: "Easter Celebration",
    category: "events",
    image: "/placeholder.svg?height=600&width=800",
    description: "Celebrating the resurrection of our Lord.",
  },
  {
    id: 7,
    title: "Food Drive",
    category: "outreach",
    image: "/placeholder.svg?height=600&width=800",
    description: "Collecting food for families in need.",
  },
  {
    id: 8,
    title: "Children's Ministry",
    category: "community",
    image: "/placeholder.svg?height=600&width=800",
    description: "Nurturing the faith of our youngest members.",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Our Gallery</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          Moments <span className="font-serif italic font-normal text-white/60">captured</span>
        </h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-white/30 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-white/70 text-xs">View Larger</span>
                  <ArrowUpRight className="w-4 h-4 text-white/70" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh]">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-white/50 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-h-[80vh]">
              {galleryItems.find((item) => item.id === selectedImage) && (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                      alt={galleryItems.find((item) => item.id === selectedImage)?.title || ""}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-white">
                      {galleryItems.find((item) => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-white/80">
                      {galleryItems.find((item) => item.id === selectedImage)?.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

