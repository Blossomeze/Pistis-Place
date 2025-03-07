"use client"

import { ArrowRight, CreditCard, Heart, Repeat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GivePage() {
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
              Give <span className="font-serif italic font-normal text-white/60">with a cheerful heart</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Your generous contributions help us continue our mission of spreading the gospel, supporting our
              community, and expanding our outreach programs.
            </p>
          </div>

          {/* Scripture quote */}
          <div className="bg-[#141414] rounded-xl p-8 mb-16 text-center max-w-3xl mx-auto">
            <p className="text-white/80 text-lg italic mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
              for God loves a cheerful giver."
            </p>
            <p className="text-white/60">2 Corinthians 9:7</p>
          </div>

          {/* Giving options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* One-time giving */}
            <div className="bg-[#141414] p-8 rounded-3xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white/70" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">One-Time Gift</h3>
              <p className="text-white/80 mb-6 text-center">
                Support our ministry with a one-time donation of any amount.
              </p>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Bank Transfer Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Bank Name:</span>
                    <span className="text-white">First National Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Account Name:</span>
                    <span className="text-white">The Pistis Place</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Account Number:</span>
                    <span className="text-white">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Routing Number:</span>
                    <span className="text-white">987654321</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Reference:</span>
                    <span className="text-white">Your Name - Offering</span>
                  </div>
                </div>
              </div>
              <Link
                href="/give/one-time"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full"
              >
                <span className="text-white/90">Give Now</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </Link>
            </div>

            {/* Recurring giving */}
            <div className="bg-[#141414] p-8 rounded-3xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Repeat className="w-8 h-8 text-white/70" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Recurring Support</h3>
              <p className="text-white/80 mb-6 text-center">
                Set up a monthly contribution to provide consistent support.
              </p>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Standing Order Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Bank Name:</span>
                    <span className="text-white">First National Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Account Name:</span>
                    <span className="text-white">The Pistis Place</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Account Number:</span>
                    <span className="text-white">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Routing Number:</span>
                    <span className="text-white">987654321</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Reference:</span>
                    <span className="text-white">Your Name - Monthly</span>
                  </div>
                </div>
              </div>
              <Link
                href="/give/recurring"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full"
              >
                <span className="text-white/90">Set Up Monthly</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </Link>
            </div>

            {/* Mobile/Online giving */}
            <div className="bg-[#141414] p-8 rounded-3xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white/70" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Mobile Giving</h3>
              <p className="text-white/80 mb-6 text-center">
                Give quickly and securely using your mobile device or credit card.
              </p>
              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Mobile Payment Options</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white">CashApp</span>
                    <span className="text-white font-medium">$ThePistisPlace</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Venmo</span>
                    <span className="text-white font-medium">@ThePistisPlace</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">PayPal</span>
                    <span className="text-white font-medium">giving@thepistisplace.com</span>
                  </div>
                </div>
              </div>
              <Link
                href="/give/mobile"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full"
              >
                <span className="text-white/90">Give via Mobile</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </Link>
            </div>
          </div>

          {/* Special projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Special Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Building fund */}
              <div className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=200&width=600"
                    alt="Building Fund"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Building Fund</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/80 mb-6">
                    Support our vision for a new sanctuary and community center to better serve our growing
                    congregation.
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Goal</span>
                      <span className="text-white">$500,000</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white/70 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-white/70">Raised so far</span>
                      <span className="text-white">$175,000 (35%)</span>
                    </div>
                  </div>
                  <Link
                    href="/give/building-fund"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full"
                  >
                    <span className="text-white/90">Contribute</span>
                    <ArrowRight className="w-4 h-4 text-white/70" />
                  </Link>
                </div>
              </div>

              {/* Outreach program */}
              <div className="bg-[#141414] rounded-xl overflow-hidden">
                <div className="relative h-[200px]">
                  <Image
                    src="/placeholder.svg?height=200&width=600"
                    alt="Outreach Program"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Community Outreach</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/80 mb-6">
                    Help us provide food, clothing, and essential services to families in need throughout our community.
                  </p>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Goal</span>
                      <span className="text-white">$100,000</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white/70 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-white/70">Raised so far</span>
                      <span className="text-white">$62,000 (62%)</span>
                    </div>
                  </div>
                  <Link
                    href="/give/outreach"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors w-full"
                  >
                    <span className="text-white/90">Contribute</span>
                    <ArrowRight className="w-4 h-4 text-white/70" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Tax information */}
          <div className="bg-[#141414] rounded-xl p-8 mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Tax Information</h2>
            <p className="text-white/80 mb-6">
              The Pistis Place is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to
              the extent allowed by law.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white/70">Tax ID: 12-3456789</p>
              <Link href="/tax-receipt" className="text-white/80 hover:text-white transition-colors">
                Request Tax Receipt
              </Link>
            </div>
          </div>

          {/* Contact for questions */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Questions About Giving?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              If you have any questions about ways to give or need assistance, please contact our finance team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:giving@thepistisplace.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors"
              >
                <span className="text-white/90">giving@thepistisplace.com</span>
              </Link>
              <Link
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors"
              >
                <span className="text-white/90">(123) 456-7890</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

