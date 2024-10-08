import "../.././App.css";
import Hero from "../.././components/Hero/Hero";
import Skills from "../.././components/Skills/Skills";
import WorkExperience from "../.././components/WorkExperience/WorkExperience";
import ContactMe from "../.././components/ContactMe/ContactMe";
import Footer from "../.././components/Footer/Footer";
import "./HomePage.css";
import StickyWhatsAppButton from "../../components/StickyWhatsAppButton/StickyWhatsAppButton";

function HomePage() {
  return (
    <>
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <StickyWhatsAppButton />
      <Footer />
    </>
  );
}

export default HomePage;
