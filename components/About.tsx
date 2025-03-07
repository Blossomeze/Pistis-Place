"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full bg-black py-12 px-4 md:px-8 lg:px-16">
      {/* Header with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-black to-white opacity-50"></div>
        <p className="text-white/80 text-sm italic">Our Story</p>
        <div className="h-px w-16 bg-gradient-to-l from-black to-white opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          About{" "}
          <span className="font-serif italic font-normal text-white/60">
            our church
          </span>
        </h2>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-white/80 mb-6">
              Founded in 2010, The Pistis Place is a vibrant community of
              believers committed to sound doctrine and the demonstration of the
              Holy Spirit&apos;s power. Our mission is to raise disciples who are
              firmly rooted in God&apos;s Word and equipped to impact their world.
            </p>
            <p className="text-white/80 mb-8">
              We believe in creating an environment where people from all walks
              of life can encounter God&apos;s presence, experience authentic
              community, and discover their divine purpose.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <span>Learn More About Our Beliefs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/p8.jpeg"
                alt="Church building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] -skew-x-3 bg-[radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.6) 0%, #000000 100%)]"
        style={{
          width: "792.999990908723",
          height: "498.99999427925945",
          opacity: "0.2",
          top: "404.81px",
          left: "189.2px",
        }}
      ></div>
    </div>
  );
}
