"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logowhite.png"

export default function Footer() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.footer
      className="bg-black text-white pt-12 pb-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Newsletter Section */}
      {/* <motion.div variants={fadeInUp} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-zinc-900/60 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">JOIN OUR MAILING LIST</h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          We're committed to delivering insightful and inspiring content from The Pistis Place, without overwhelming your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-3.5 rounded-full bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-[#660066] font-bold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </motion.div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <div className="max-w-[240px]">
              <Image
                src={logo || "/placeholder.svg"}
                width={300}
                height={300}
                alt="Pistis logo"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-white/70 pt-3 text-lg">Birthing convictions in men...</h3>

            {/* Social Media Icons for Mobile */}
            <div className="flex space-x-5 mt-3 lg:hidden">
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkColumn
              title="CONNECT"
              links={[
                { label: "Become a member", href: "#" },
                { label: "Prayer Request", href: "#" },
                { label: "First Timers", href: "#" },
                { label: "Second Timers", href: "#" },
                { label: "Online Community", href: "#" },
              ]}
              variants={fadeInUp}
            />

            <FooterLinkColumn
              title="MINISTRIES"
              links={[
                { label: "Transforming Experience", href: "#" },
                { label: "School of Ministry", href: "#" },
                { label: "Godly Pearls", href: "#" },
                { label: "Celeb Kids", href: "#" },
              ]}
              variants={fadeInUp}
            />

            <FooterLinkColumn
              title="RESOURCES"
              links={[
                { label: "Membership Classes", href: "#" },
                { label: "Celebrations", href: "#" },
                { label: "Counselling", href: "#" },
                { label: "Pre Marital Counselling", href: "#" },
                { label: "Post Marital Counselling", href: "#" },
                { label: "Welfare Request", href: "#" },
              ]}
              variants={fadeInUp}
            />

            <FooterLinkColumn
              title="MEDIA"
              links={[
                { label: "Watch Online", href: "#" },
                { label: "Sermons", href: "#" },
                { label: "Resources", href: "#" },
              ]}
              variants={fadeInUp}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center mt-16 pt-5 border-t border-white/20"
        >
          <p className="text-sm text-white/70 mb-0">
            ©2025 <span className="font-bold text-white">The Pistis Place</span> Copyright
          </p>

          {/* Social Media Icons for Desktop */}
          <div className="hidden md:flex mt-3 space-x-5">
            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Youtube className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

// Helper Components for cleaner code
interface FooterLinkColumnProps {
  title: string
  links: Array<{ label: string; href: string }>
  variants: any  // Using any for Framer Motion variants, but you could create a more specific type
}

function FooterLinkColumn({ title, links, variants }: FooterLinkColumnProps) {
  return (
    <motion.div variants={variants} className="space-y-4">
      <h3 className="text-base font-bold tracking-wide">{title}</h3>
      <ul className="space-y-3">
        {links.map((link: { label: string; href: string }, index: number) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 inline-block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200 border border-white/5"
    >
      {icon}
    </Link>
  )
}

