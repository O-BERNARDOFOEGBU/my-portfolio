import data from "../HomePageData.json";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
// import Skill from "../components/Skill/Skill";
import Resume from "../components/Resume/ResumeSection";
import BlogSection from "../components/Blog/BlogSection";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import Founder from "../components/Founder/Founder";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import SreSection from "../components/Sre/SreSection";

const Home = () => {
  const {
    heroData,
    aboutData,
    founderData,
    serviceData,
    skillData,
    portfolioData,
    sreData,
    blogData,
    resumeData,
    reviewData,
    contactData,
    socialData,
  } = data;
  return (
    <>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      {/* <Skill data={skillData} data-aos="fade-right" /> */}
      <SreSection data={sreData} data-aos="fade-right" />
      <Founder data={founderData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact
        data={contactData}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home;
