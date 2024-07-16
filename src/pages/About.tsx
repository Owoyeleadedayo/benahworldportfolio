import ClientReview from "../component/ClientReview";
import AboutCoreValues from "../component/AboutCoreValues";
import AboutSection from "../component/AboutSection"
import AboutServices from "../component/AboutServices";
import Services from "../component/Services"

const About = () => {
  return (
    <>
      <AboutSection />
      <Services />
      <AboutServices />
      <AboutCoreValues />
      <ClientReview />
    </>
  );
}

export default About
