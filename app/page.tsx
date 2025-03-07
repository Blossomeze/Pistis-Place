import About from "@/components/About";
import ContactSection from "@/components/Contact";
import EventsSection from "@/components/Events";
import GallerySection from "@/components/Gallery";
import Give from "@/components/Give";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import Pastor from "@/components/Pastor";
import Sermon from "@/components/Sermon";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Ministries />
      <GallerySection />
      <Pastor />
      <EventsSection />
      <Sermon />
      <Give />
      <ContactSection />
    </div>
  );
}
