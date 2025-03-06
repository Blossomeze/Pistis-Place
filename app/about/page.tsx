"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown, ChevronUp, Users } from "lucide-react"
// Sample leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Pastor Japheth Joseph",
    role: "Lead Pastor",
    image: "/p8.jpeg",
    bio: "Pastor Japheth Joseph is a devoted shepherd and teacher committed to raising believers grounded in sound doctrine, demonstrating the power of the Holy Ghost whilst maintaining a high level of conviction.",
    featured: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Associate Pastor - Family Ministry",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Leading our family ministry with wisdom and compassion, Pastor Sarah helps families build strong spiritual foundations.",
  },
  {
    id: 3,
    name: "Michael Thomas",
    role: "Associate Pastor - Youth Ministry",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With a heart for the next generation, Pastor Michael leads our youth with energy and biblical wisdom.",
  },
  {
    id: 4,
    name: "Rebecca Johnson",
    role: "Associate Pastor - Worship",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Leading our congregation in authentic worship, Pastor Rebecca helps create an atmosphere where God's presence is experienced.",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Associate Pastor - Teaching",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With a gift for making scripture accessible, Pastor David leads our teaching ministry with depth and clarity.",
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    role: "Associate Pastor - Outreach",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Passionate about community impact, Pastor Jennifer leads our efforts to serve and reach our city with God's love.",
  },
]

// Sample beliefs data
const beliefs = [
  {
    id: 1,
    title: "The Bible",
    content:
      "We believe the Bible is the inspired, infallible Word of God and our final authority for faith and practice.",
  },
  {
    id: 2,
    title: "The Trinity",
    content: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    id: 3,
    title: "Salvation",
    content:
      "We believe salvation is a gift of God received through faith in Jesus Christ, whose blood was shed for the forgiveness of sins.",
  },
  {
    id: 4,
    title: "The Holy Spirit",
    content:
      "We believe in the present ministry of the Holy Spirit, whose indwelling enables Christians to live a godly life and empowers them for service.",
  },
  {
    id: 5,
    title: "The Church",
    content:
      "We believe the Church is the Body of Christ, composed of all believers, and is called to worship, fellowship, discipleship, ministry, and evangelism.",
  },
  {
    id: 6,
    title: "The Return of Christ",
    content: "We believe in the personal, visible return of Christ to earth and the establishment of His kingdom.",
  },
]

export default function AboutPage() {
  const [expandedBelief, setExpandedBelief] = useState<number | null>(null)

  const toggleBelief = (id: number) => {
    if (expandedBelief === id) {
      setExpandedBelief(null)
    } else {
      setExpandedBelief(id)
    }
  }

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
              About <span className="font-serif italic font-normal text-white/60">Our Church</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              The Pistis Place is a vibrant community of believers committed to sound doctrine and the demonstration of
              the Holy Spirit's power.
            </p>
          </div>

          {/* Our Story section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Our Story</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Founded on Faith <span className="font-serif italic font-normal text-white/60">and Vision</span>
              </h2>
              <p className="text-white/80 mb-6">
                The Pistis Place was founded in 2010 by Pastor Japheth Joseph with a vision to create a church that
                would be firmly rooted in God's Word while embracing the full power and gifts of the Holy Spirit.
              </p>
              <p className="text-white/80 mb-6">
                Starting with just a small group of dedicated believers meeting in a living room, our church has grown
                into a thriving community of faith with multiple services and outreach programs that impact thousands of
                lives.
              </p>
              <p className="text-white/80">
                The name "Pistis" comes from the Greek word for faith, reflecting our commitment to building strong
                faith in every believer through sound biblical teaching and spiritual empowerment.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Church founding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Church mission" fill className="object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Our Purpose</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Mission & <span className="font-serif italic font-normal text-white/60">Vision</span>
              </h2>

              <div className="bg-[#141414] rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-white/80">
                  To raise disciples who are firmly rooted in God's Word and equipped to impact their world through the
                  demonstration of the Holy Spirit's power.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-white/80">
                  To create an environment where people from all walks of life can encounter God's presence, experience
                  authentic community, and discover their divine purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">What We Stand For</p>
                <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Core <span className="font-serif italic font-normal text-white/60">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Biblical Authority</h3>
                <p className="text-white/80">
                  We believe the Bible is our ultimate authority and guide for faith, doctrine, and conduct.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Generous Living</h3>
                <p className="text-white/80">
                  We believe in living generously with our time, talents, and resources to bless others and advance
                  God's kingdom.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white/70" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Authentic Community</h3>
                <p className="text-white/80">
                  We believe in creating a welcoming environment where people can build genuine relationships and grow
                  together.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12L11 15L16 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-white/80">
                  We believe in pursuing excellence in all we do as a reflection of our commitment to honor God.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Spirit-Led Ministry</h3>
                <p className="text-white/80">
                  We believe in the present-day ministry of the Holy Spirit and the manifestation of spiritual gifts in
                  the church.
                </p>
              </div>

              <div className="bg-[#141414] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.6001 9H20.4001"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.6001 15H20.4001"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5 3C9.81534 5.69961 8.9375 8.81787 8.9375 12C8.9375 15.1821 9.81534 18.3004 11.5 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 3C14.1847 5.69961 15.0625 8.81787 15.0625 12C15.0625 15.1821 14.1847 18.3004 12.5 21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-white/80">
                  We believe in extending God's love beyond our walls to reach our community and the nations with the
                  gospel.
                </p>
              </div>
            </div>
          </div>

          {/* What We Believe section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Our Faith</p>
                <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What We <span className="font-serif italic font-normal text-white/60">Believe</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our beliefs are rooted in the historic Christian faith and the authority of Scripture.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {beliefs.map((belief) => (
                <div key={belief.id} className="mb-4">
                  <button
                    onClick={() => toggleBelief(belief.id)}
                    className="w-full flex items-center justify-between bg-[#141414] hover:bg-[#1a1a1a] p-5 rounded-xl transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white">{belief.title}</h3>
                    {expandedBelief === belief.id ? (
                      <ChevronUp className="w-5 h-5 text-white/70" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/70" />
                    )}
                  </button>
                  {expandedBelief === belief.id && (
                    <div className="bg-[#0c0c0c] p-5 rounded-b-xl mt-px">
                      <p className="text-white/80">{belief.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Our Leaders</p>
                <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leadership <span className="font-serif italic font-normal text-white/60">Team</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Meet the dedicated team that guides our church with wisdom, vision, and compassion.
              </p>
            </div>

            {/* Featured leader */}
            {leadershipTeam.filter((leader) => leader.featured)[0] && (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative rounded-3xl h-[500px] overflow-hidden aspect-[2/3] md:aspect-auto">
                  <Image
                    src={leadershipTeam.filter((leader) => leader.featured)[0].image || "/placeholder.svg"}
                    alt={leadershipTeam.filter((leader) => leader.featured)[0].name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="inline-block bg-[#660066]/20 px-3 py-1 rounded-full text-white/80 text-sm mb-4">
                    {leadershipTeam.filter((leader) => leader.featured)[0].role}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {leadershipTeam.filter((leader) => leader.featured)[0].name}
                  </h3>
                  <p className="text-white/80 mb-6">{leadershipTeam.filter((leader) => leader.featured)[0].bio}</p>
                  <p className="text-white/80 mb-8">
                    His innovative approach to ministry and attention to detail have made him a respected voice for
                    believers worldwide, with a passion for equipping the saints for the work of ministry.
                  </p>
                  <Link
                    href="/about/pastor-japheth"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <span>Read Full Bio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Leadership team grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipTeam
                .filter((leader) => !leader.featured)
                .map((leader) => (
                  <div key={leader.id} className="bg-[#141414] rounded-xl overflow-hidden">
                    <div className="relative h-[300px]">
                      <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-1">{leader.name}</h4>
                      <p className="text-white/60 mb-4">{leader.role}</p>
                      <p className="text-white/80 mb-6">{leader.bio}</p>
                      <Link
                        href={`/about/team/${leader.id}`}
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Our Impact</p>
                <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                By The <span className="font-serif italic font-normal text-white/60">Numbers</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#141414] p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-white mb-2">14</h4>
                <p className="text-white/80">Years of Ministry</p>
              </div>
              <div className="bg-[#141414] p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-white mb-2">5000+</h4>
                <p className="text-white/80">Members Worldwide</p>
              </div>
              <div className="bg-[#141414] p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-white mb-2">20+</h4>
                <p className="text-white/80">Outreach Programs</p>
              </div>
              <div className="bg-[#141414] p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-bold text-white mb-2">3</h4>
                <p className="text-white/80">Campus Locations</p>
              </div>
            </div>
          </div>

          {/* Community Impact section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
                <p className="text-white/80 text-sm italic">Making A Difference</p>
                <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Community <span className="font-serif italic font-normal text-white/60">Impact</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We're committed to making a tangible difference in our community and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[200px]">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Food Drive" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Food Distribution</h3>
                  <p className="text-white/80 mb-4">
                    Our monthly food distribution program provides nutritious meals to over 500 families in need.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">6,000+ meals distributed annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Partnership with local food banks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Volunteer opportunities for church members</span>
                    </li>
                  </ul>
                  <Link
                    href="/ministries/food-distribution"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Youth Mentorship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Youth Mentorship</h3>
                  <p className="text-white/80 mb-4">
                    Our mentorship program pairs at-risk youth with caring adults who provide guidance and support.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">100+ youth mentored annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Academic and life skills support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Career development workshops</span>
                    </li>
                  </ul>
                  <Link
                    href="/ministries/youth-mentorship"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Global Missions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Global Missions</h3>
                  <p className="text-white/80 mb-4">
                    Our missions teams travel internationally to provide humanitarian aid and share the gospel.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">5 countries served annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Medical and educational support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#660066]/70 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">Church planting initiatives</span>
                    </li>
                  </ul>
                  <Link
                    href="/ministries/global-missions"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Join Us CTA section */}
          <div className="bg-[#141414] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our <span className="font-serif italic font-normal text-white/60">Community</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We'd love to welcome you to The Pistis Place. Join us for a service, connect with our community, and
              discover your purpose.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#660066]/20 transition-colors w-full sm:w-auto"
              >
                <span className="text-white">Service Times</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#660066]/20 hover:bg-[#660066]/30 transition-colors w-full sm:w-auto"
              >
                <span className="text-white">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

