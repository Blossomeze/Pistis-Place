"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Mail, Phone } from "lucide-react"
import Link from "next/link"

// FAQ categories and questions
const faqData = {
  general: {
    title: "General",
    questions: [
      {
        id: "what-time",
        question: "What time are your services?",
        answer:
          "We have multiple services throughout the week: Sunday Worship Service at 10:00 AM - 12:30 PM, Wednesday Bible Study at 6:30 PM - 8:00 PM, and Friday Prayer Meeting at 7:00 PM - 9:00 PM.",
      },
      {
        id: "location",
        question: "Where are you located?",
        answer:
          "Our main campus is located at 123 Faith Avenue, City Center, State 12345. We also have two satellite campuses. You can find directions and campus-specific information on our Contact page.",
      },
      {
        id: "parking",
        question: "Is parking available?",
        answer:
          "Yes, we have ample free parking available at all our locations. We also offer valet parking service for elderly and disabled visitors during our Sunday services.",
      },
    ],
  },
  newcomers: {
    title: "New Visitors",
    questions: [
      {
        id: "first-time",
        question: "What should I expect on my first visit?",
        answer:
          "You'll be warmly welcomed by our greeting team who will help you find your way around. Our services include contemporary worship, prayer, and relevant biblical teaching. We recommend arriving 10-15 minutes early to get settled.",
      },
      {
        id: "dress-code",
        question: "Is there a dress code?",
        answer:
          "We want you to feel comfortable! While some members dress formally, others come in casual attire. We care more about your presence than your appearance.",
      },
      {
        id: "children",
        question: "Do you have programs for children?",
        answer:
          "Yes! We have age-appropriate programs for children from nursery through high school. All our children's ministry workers undergo background checks and are trained in child safety protocols.",
      },
    ],
  },
  involvement: {
    title: "Getting Involved",
    questions: [
      {
        id: "membership",
        question: "How do I become a member?",
        answer:
          "Our membership process begins with attending our 'Welcome to The Pistis Place' class, held monthly. This is followed by a four-week membership class where you'll learn about our beliefs, values, and opportunities for involvement.",
      },
      {
        id: "small-groups",
        question: "How can I join a small group?",
        answer:
          "We have various small groups meeting throughout the week. You can browse and join groups through our website or visit our Welcome Center after any service for personal assistance in finding the right group.",
      },
      {
        id: "volunteer",
        question: "How can I serve at the church?",
        answer:
          "We have numerous ministry opportunities available! Visit our Welcome Center or fill out our volunteer form online to learn about current needs and how your gifts can be used to serve others.",
      },
    ],
  },
  beliefs: {
    title: "Beliefs & Practices",
    questions: [
      {
        id: "denomination",
        question: "What denomination are you?",
        answer:
          "We are a non-denominational Christian church that emphasizes biblical teaching and the present-day ministry of the Holy Spirit. We welcome people from all denominational backgrounds.",
      },
      {
        id: "baptism",
        question: "Do you perform baptisms?",
        answer:
          "Yes, we perform water baptisms for believers who have made a personal commitment to follow Jesus Christ. We hold baptism services monthly and provide baptism classes beforehand.",
      },
      {
        id: "communion",
        question: "How often do you have communion?",
        answer:
          "We celebrate communion on the first Sunday of each month during our worship service. All believers in Jesus Christ are welcome to participate.",
      },
    ],
  },
  giving: {
    title: "Giving & Support",
    questions: [
      {
        id: "online-giving",
        question: "Can I give online?",
        answer:
          "Yes, we offer secure online giving through our website and mobile app. You can set up one-time or recurring donations using credit/debit cards or bank transfers.",
      },
      {
        id: "tax-deductible",
        question: "Are donations tax-deductible?",
        answer:
          "Yes, The Pistis Place is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. We provide annual giving statements for tax purposes.",
      },
      {
        id: "special-projects",
        question: "How can I support special projects?",
        answer:
          "We have various special projects including our Building Fund and Community Outreach initiatives. You can designate gifts to specific projects through our giving platform or contact our finance team for more information.",
      },
    ],
  },
}

export default function FAQPage() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("general")

  const toggleQuestion = (id: string) => {
    if (expandedQuestion === id) {
      setExpandedQuestion(null)
    } else {
      setExpandedQuestion(id)
    }
  }

  return (
    <div className="min-h-screen bg-black">
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
              Your Questions <span className="font-serif italic font-normal text-white/60">Answered</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Find answers to commonly asked questions about The Pistis Place. If you need additional information, don't
              hesitate to contact us.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(faqData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === key
                    ? "bg-[#660066]/30 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="max-w-3xl mx-auto mb-16">
            {faqData[activeCategory as keyof typeof faqData].questions.map((item) => (
              <div key={item.id} className="mb-4">
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full flex items-center justify-between bg-[#141414] hover:bg-[#1a1a1a] p-5 rounded-xl transition-colors"
                >
                  <h3 className="text-xl font-bold text-white text-left">{item.question}</h3>
                  {expandedQuestion === item.id ? (
                    <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0 ml-4" />
                  )}
                </button>
                {expandedQuestion === item.id && (
                  <div className="bg-[#0c0c0c] p-5 rounded-b-xl mt-px">
                    <p className="text-white/80">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="bg-[#141414] rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Still Have Questions?</h2>
            <p className="text-white/80 text-center mb-8">
              Can't find what you're looking for? We're here to help! Reach out to us through any of these channels.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="mailto:info@thepistisplace.com"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-[#660066]/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-white/70 group-hover:text-white/90" />
                <span className="text-white/90 group-hover:text-white">info@thepistisplace.com</span>
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-[#660066]/20 transition-colors group"
              >
                <Phone className="w-5 h-5 text-white/70 group-hover:text-white/90" />
                <span className="text-white/90 group-hover:text-white">(123) 456-7890</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

