import "../../assets/styles/home/ourServices.module.css";
import HomePagePackageItem from "../../components/HomePagePackageItem.tsx";

export default function OurServices() {

  type ServiceItemType = {
    title: string;
    header: string;
    body1: string;
    includes: string[];
}

  const items: ServiceItemType[] = [];

  const itemOne = {
    title: "Startup",
    header: "Package",
    body1: "An affordable choice for launching your online presence.",
    includes: [
      "Brand Identity Kit",
      "Social Media Kit",
      "Custom Landing Page",
      "Contact Form Integration",
    ],
  };

  const itemTwo = {
    title: "Startup +",
    header: "Package",
    body1:
      "The perfect option for businesses on a budget or looking to get started quickly.",
    includes: [
      "Complete Branding Style Guide",
      "Complete Social Media Kit",
      "Advanced Social Media Strategy",
      "Custom Content Creation",
      "Enhanced Website Design",
    ],
  };

  const itemThree = {
    title: "Alias +",
    header: "Subscription",
    body1:
      "With Alias+ Subscription, you're not just another client on a long list – you're our top priority. Unlike traditional agencies, we focus on one request at a time, ensuring dedicated attention to your project. Plus, our streamlined process guarantees a swift turnaround of about 48 hours, so you can bring your ideas to life without delay.",
    includes: [
      "Custom Services",
      "Flexible Pricing",
      "Personalized Proposal",
      "Diverse Expertise",
      "Responsive Support",
      "Continuous Innovation",
    ],
  };

  items.push(itemTwo);
  items.push(itemOne);
  items.push(itemThree);

  return (
    <>
      <section className="ourServices">
        <hr className="hRunner" />

        <div className="ourServicesGrid">
          <div className="serviceText">
            <h3 className="whyUs">
              Why Choose Alias? <br /> Discover Your Identity
            </h3>
            <p className="whyUsP">
              Alias, derived from the concept of 'identity,' embodies our
              agency's mission: to uncover and amplify the unique essence of
              your brand. Just as the name suggests, we specialize in crafting
              distinctive identities that resonate with authenticity and
              captivate audiences.
            </p>
            <br />
            <p className="whyUsP">
              At Alias, we believe in the power of identity to drive success.
              From strategic branding to innovative design, we're here to help you
              shine in a crowded marketplace and stand out as the unmistakable
              force you were meant to be.
            </p>
          </div>
          <hr className="mobRunner" />
          {items.map((item) => (
            <HomePagePackageItem contentItem={item} />
          ))}
        </div>
      </section>
    </>
  );
}
