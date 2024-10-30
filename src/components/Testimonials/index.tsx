import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michelle Rahm",
    designation: "From USA",
    content:
      "I had an incredible experience with this car rental service in Madagascar. The driver-guide was not only professional but also extremely knowledgeable about the local culture and hidden gems. The 4x4 vehicle was perfect for the rugged terrain, and the high-speed Starlink internet connection kept us connected throughout our journey. Highly recommend this service for anyone looking to explore Madagascar comfortably and safely!",
    image: "/images/testimonials/MichelleRahm.webp",
    star: 5,
  },
  {
    id: 2,
    name: "Wim Vertriest",
    designation: "From the Netherlands",
    content:
      "Renting a car with a driver-guide from this service was the best decision we made for our trip to Madagascar. The booking process was straightforward, and the customer support was top-notch. Our driver was punctual, friendly, and knew all the best spots to visit. The comprehensive insurance and 24/7 roadside assistance gave us peace of mind, allowing us to fully enjoy our adventure. Five stars all the way!",
    image: "/images/testimonials/Wim-vertriest.webp",
    star: 5,
  },
  {
    id: 3,
    name: "Steve Backshall",
    designation: "From the UK",
    content:
      "Our family trip to Madagascar was unforgettable, thanks to this amazing car rental service. The driver-guide was fantastic, providing us with fascinating insights and ensuring we were comfortable at all times. The vehicle was well-maintained and equipped with all the modern amenities, including high-speed internet. We felt safe and well taken care of throughout our journey. I can't recommend this service enough!",
    image: "/images/testimonials/steve-backshall-6.webp",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Our clients have experienced the best of Madagascar with our top-rated car rental services. From seamless booking processes to knowledgeable driver-guides, we ensure every journey is memorable. But don't just take our word for it. Here's what our satisfied customers have to say:"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
