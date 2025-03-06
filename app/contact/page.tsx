"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
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
              Contact <span className="font-serif italic font-normal text-white/60">Us</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions, prayer requests, or to learn more about our
              church.
            </p>
          </div>

          {/* Contact info and map */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Our Location</h3>
                    <p className="text-white/80">123 Faith Avenue</p>
                    <p className="text-white/80">City Center, State 12345</p>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#660066]/80 hover:text-[#660066] mt-2 inline-block"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                    <p className="text-white/80">Main Office: (123) 456-7890</p>
                    <p className="text-white/80">Prayer Line: (123) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#660066]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <p className="text-white/80">General Inquiries: info@thepistisplace.com</p>
                    <p className="text-white/80">Prayer Requests: prayer@thepistisplace.com</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between">
                  <span className="text-white/80">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Saturday</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Sunday</span>
                  <span className="text-white">8:00 AM - 1:00 PM</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#660066]/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 4.01C21.9 4.3 21.8 4.59 21.7 4.87C21.1 6.15 20.3 7.29 19.3 8.22C19.3 8.47 19.3 8.72 19.3 8.97C19.3 14.67 15.1 21.33 7.1 21.33C4.6 21.33 2.2 20.5 0.1 19C0.5 19.1 0.9 19.1 1.4 19.1C3.4 19.1 5.3 18.3 6.8 17C4.9 17 3.3 15.7 2.7 13.9C3 14 3.3 14 3.7 14C4.1 14 4.6 13.9 5 13.8C3 13.4 1.6 11.6 1.6 9.5C1.6 9.5 1.6 9.5 1.6 9.4C2.3 9.8 3 10 3.8 10C2.6 9.2 1.9 7.8 1.9 6.2C1.9 5.3 2.1 4.5 2.6 3.8C4.7 6.4 7.9 8.1 11.4 8.3C11.3 7.9 11.3 7.5 11.3 7.1C11.3 4.7 13.2 2.7 15.6 2.7C16.8 2.7 17.9 3.2 18.7 4.1C19.6 3.9 20.5 3.5 21.3 3C20.9 4.1 20.2 4.9 19.2 5.5C20.1 5.4 21 5.1 21.9 4.8C21.3 5.7 20.5 6.5 19.6 7.1C19.6 7.4 19.6 7.7 19.6 8C19.6 13.7 15.4 20.3 7.4 20.3C4.9 20.3 2.5 19.5 0.4 18C0.8 18.1 1.2 18.1 1.7 18.1C3.7 18.1 5.6 17.3 7.1 16C5.2 16 3.6 14.7 3 12.9C3.3 13 3.6 13 4 13C4.4 13 4.9 12.9 5.3 12.8C3.3 12.4 1.9 10.6 1.9 8.5C1.9 8.5 1.9 8.5 1.9 8.4C2.6 8.8 3.3 9 4.1 9C2.9 8.2 2.2 6.8 2.2 5.2C2.2 4.3 2.4 3.5 2.9 2.8C5 5.4 8.2 7.1 11.7 7.3C11.6 6.9 11.6 6.5 11.6 6.1C11.6 3.7 13.5 1.7 15.9 1.7C17.1 1.7 18.2 2.2 19 3.1C19.9 2.9 20.8 2.5 21.6 2C21.2 3.1 20.5 3.9 19.5 4.5C20.4 4.4 21.3 4.1 22.2 3.8C21.6 4.7 20.8 5.5 19.9 6.1C19.9 6.4 19.9 6.7 19.9 7C19.9 12.7 15.7 19.3 7.7 19.3C5.2 19.3 2.8 18.5 0.7 17C0.7 17 0.7 17 0.7 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#660066]/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12.073C24 5.446 18.627 0.073 12 0.073C5.373 0.073 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.34 7.949 13.875 8.874 13.875 9.823V12.073H17.203L16.67 15.543H13.875V23.928C19.612 23.027 24 18.062 24 12.073Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#660066]/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#660066]/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.498 6.186C23.2393 5.2738 22.6518 4.48151 21.8394 3.95535C21.0271 3.42919 20.0498 3.20223 19.07 3.316C16.06 3.516 10.06 3.516 10.06 3.516C7.61938 3.47443 5.18065 3.61359 2.77 3.933C1.79016 3.8193 0.812861 4.04626 0.000488281 4.57242C-0.811884 5.09858 -1.39934 5.89087 -1.658 6.803C-2.00265 8.79482 -2.16262 10.8214 -2.138 12.85C-2.16595 14.8809 -2.00331 16.9098 -1.658 18.903C-1.40243 19.8113 -0.822271 20.5976 -0.0153846 21.1198C0.791502 21.642 1.76734 21.8677 2.747 21.767C5.747 21.967 11.817 21.967 11.817 21.967C14.2576 22.0086 16.6964 21.8694 19.107 21.55C20.0868 21.6637 21.0641 21.4368 21.8764 20.9106C22.6888 20.3845 23.2763 19.5922 23.535 18.68C23.8796 16.6881 24.0396 14.6616 24.016 12.633C24.0699 10.5755 23.9069 8.51993 23.529 6.497L23.498 6.186ZM9.628 16.5L9.638 9.206L15.84 12.85L9.628 16.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Find Us</h2>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                {/* Replace with actual map or iframe */}
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Church location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-xl text-center">
                    <h3 className="text-xl font-bold text-white mb-2">The Pistis Place</h3>
                    <p className="text-white/80">123 Faith Avenue, City Center, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service times */}
          <div className="bg-[#141414] rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Us for Worship</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Sunday Services</h3>
                <p className="text-white/80">10:00 AM - 12:30 PM</p>
                <p className="text-white/60 mt-2">Main Sanctuary</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Wednesday Bible Study</h3>
                <p className="text-white/80">6:30 PM - 8:00 PM</p>
                <p className="text-white/60 mt-2">Fellowship Hall</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Friday Prayer Meeting</h3>
                <p className="text-white/80">7:00 PM - 9:00 PM</p>
                <p className="text-white/60 mt-2">Prayer Room</p>
              </div>
            </div>
          </div>

          {/* Contact form CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Have a Question?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Fill out our contact form and a member of our team will get back to you as soon as possible.
            </p>
            <Link
              href="/contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#660066]/20 hover:bg-[#660066]/30 transition-colors"
            >
              <span className="text-white">Contact Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

