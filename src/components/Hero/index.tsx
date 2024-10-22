import Image from "next/image";
import Link from "next/link";
import MadagascarSlider from "./MadagascarSlider";
//todo ravinala.svg

const Hero = () => {
  return (
    // ra ecran latsaky ny lg de aleo ny original no itoetra, jerena demain
    <div className="relative min-h-screen lg:h-[1000px] w-full overflow-hidden">
       <div className="absolute inset-0 z-0">
        <MadagascarSlider />
      </div>
      <section
        id="home"
        className="relative overflow-hidden  pt-[250px] md:pt-[270px] lg:pt-[330px]"
      >
         
        <div className="container relative z-10  border-dark-3/20 bg-dark/20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-3 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Book your car rental today and enjoy the freedom to explore Madagascar
                </h1>
                <p className="mx-auto mb-5 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                Explore Madagascar with ease and comfort by choosing our top-rated car rental services. Whether you’re planning a scenic road trip, a business visit, or a family vacation, we offer a wide range of vehicles to suit your needs. From compact cars to spacious SUVs, our fleet is well-maintained and ready for your adventure.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
