import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

//aza adinon'la ito
export const metadata: Metadata = {
  title: 'Madagascar Car Rental - Rent with Driver Guide',
  description: 'Experience the best car rental service in Madagascar. Rent a car with a professional driver-guide for a safe and enjoyable trip.',
  keywords: ['madagascar', 'Republic of Madagascar', 'Malagasy Republic', 'madagascar travel', 'madagascar tourism', 'madagascar culture', 'madagascar history', 'madagascar people', 'madagascar language', 'madagascar economy', 'madagascar environment', 'madagascar wildlife', 'madagascar geography', 'madagascar beaches', 'madagascar national parks', 'madagascar lemurs', 'madagascar baobabs', 'madagascar diving', 'madagascar surfing', 'madagascar hiking', 'madagascar food', 'madagascar music', 'madagascar art', 'madagascar festivals', 'madagascar accommodation', 'madagascar transportation', 'madagascar visa', 'Best time to visit Madagascar', 'madagascar honeymoon destinations', 'madagascar family vacation', 'madagascar adventure travel', 'madagascar eco-tourism', 'madagascar responsible tourism', 'madagascar volunteer opportunities', 'madagascar language learning', 'madagascar currency exchange', 'madagascar safety tips', 'madagascar travel insurance','car rental', 'madagascar', 'driver guide', 'transportation', 'travel service', 'rent a car', 'safari', 'tour', 'vehicle rental', 'car hire', 'car leasing', 'economy car rental', 'luxury car rental', 'SUV rental', 'compact car rental', 'long-term car rental', 'short-term car rental', 'airport car rental', 'business car rental', 'family car rental', 'sports car rental', 'convertible car rental', 'automatic car rental', 'manual car rental', 'GPS car rental', 'insurance included', 'child seat available', 'pet-friendly rental', 'location de voiture', 'louer une voiture', 'location de véhicule', 'location avec chauffeur', 'location de luxe', 'location de SUV', 'location de voiture compacte', 'location à long terme', 'location à court terme', 'location à l\'aéroport', 'location pour affaires', 'location familiale', 'location de voiture sportive', 'location de cabriolet', 'location de voiture automatique', 'location de voiture manuelle', 'location avec GPS', 'assurance incluse', 'siège pour enfant disponible', 'location amicale pour animaux','tour operateur','tourisme','mada',],
  robots: 'index, follow',
  openGraph: {
    title: 'Madagascar Car Rental - Rent with Driver Guide',
    description: 'Experience the best car rental service in Madagascar. Rent a car with a professional driver-guide for a safe and enjoyable trip.',
    type: 'website',
    //de ity tsy maintsy mbola soloina
    url: 'https://www.madagascar-rental.com',
    images: [
      {
        url: 'https://www.madagascar-rental.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madagascar Car Rental Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@madagascar_rental',
    title: 'Madagascar Car Rental - Rent with Driver Guide',
    description: 'Experience the best car rental service in Madagascar. Rent a car with a professional driver-guide for a safe and enjoyable trip.',
    images: [
      {
        url: 'https://www.madagascar-rental.com/images/twitter-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madagascar Car Rental Service',
      },
    ],
  },

  alternates: {
    canonical: 'https://www.madagascar-rental.com/terms-and-conditions',
    languages: {
      'en-US': 'https://www.madagascar-rental.com/en/terms-and-conditions',
      'fr-FR': 'https://www.madagascar-rental.com/fr/conditions-generales',
    },
  },
};


export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      <HomeBlogSection posts={posts} />
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
