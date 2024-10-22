import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="py-8 dark:bg-dark lg:pb-[70px] ">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Main Features Of Madagas'Car Rental"
          paragraph="When it comes to car rental services, customers typically look for a combination of convenience, flexibility, and quality. Here are what we can offer"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
