import React from "react";
import "./AboutPage.css";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../.././components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="nav-conatiner">
        <Navbar />
      </div>
      <div className="img-container">
        <Carousel />
      </div>

      <div className="content-container">
        <section className="about-us-content">
          <h1>About Us</h1>
          <p>
            Welcome to AP Tech Enterprise! We are your go-to partners for all
            things web development. Founded by two passionate tech enthusiasts,
            Aman Rawat and Pranjal Maithani, our mission is to transform your
            digital dreams into reality with precision, creativity, and
            excellence.
          </p>
        </section>

        <section className="who-we-are-content">
          <h4>Who We Are</h4>
          <p>
            Aman Rawat and Pranjal Maithani bring together a unique blend of
            skills and experiences that drive AP Tech Enterprise. With a shared
            vision and complementary expertise, we have joined forces to offer
            top-notch web development services.
          </p>

          <ul>
            <li>
              <span>Aman Rawat: </span>A tech wizard with a knack for innovative
              solutions, Aman specializes in front-end development, ensuring
              that every website we create is not only visually stunning but
              also user-friendly and responsive. With a background in graphic
              design and UI/UX, Aman ensures that every project we undertake is
              aesthetically pleasing and functionally robust.
            </li>
            <li>
              <span>Pranjal Maithani: </span>A backend maestro, Pranjal is the
              engine behind our seamless, efficient, and scalable web solutions.
              With extensive experience in various programming languages and
              frameworks, Pranjal ensures that our websites are not just
              beautiful on the outside but also powerful and efficient under the
              hood.
            </li>
          </ul>
        </section>

        <section className="what-we-do-content">
          <h4>What We Do</h4>
          <p>
            At AP Tech Enterprise, we believe in creating websites that do more
            than just exist online. We build digital experiences that captivate,
            engage, and convert. Our range of services includes:
          </p>
          <ul>
            <li>
              <span>Custom Website Development: </span>Tailored solutions to
              meet your specific business needs, ensuring a perfect fit for your
              brand.
            </li>
            <li>
              <span>E-commerce Solutions:</span> Robust, secure, and
              user-friendly online stores to boost your business.
            </li>
            <li>
              <span>Responsive Design: </span>Websites that look great on any
              device, providing a seamless user experience across desktops,
              tablets, and mobiles.
            </li>
            <li>
              <span>SEO Optimization: </span>Enhancing your website’s visibility
              on search engines to attract more visitors.
            </li>
            <li>
              <span>Web Maintenance: </span>Ongoing support and updates to keep
              your website running smoothly and securely.
            </li>
            <li>
              <span>Consulting Services: </span>Expert advice to help you
              navigate the digital landscape and make informed decisions.
            </li>
          </ul>
        </section>

        <section className="our-philosophy-content">
          <h4>Our Philosophy</h4>
          <p>
            At AP Tech Enterprise, we are driven by a simple philosophy: Client
            Satisfaction First. We work closely with our clients to understand
            their needs, goals, and vision. By combining our technical expertise
            with creative flair, we deliver solutions that not only meet but
            exceed expectations.
          </p>
        </section>

        <section className="why-choose-us-content">
          <h4>Why Choose Us?</h4>
          <ul>
            <li>
              <span>Expertise and Experience: </span>With years of experience in
              the industry, we have the knowledge and skills to handle projects
              of any complexity.
            </li>
            <li>
              <span>Personalized Approach: </span>We treat every project as
              unique, providing personalized solutions that align with your
              business objectives.
            </li>
            <li>
              <span>Commitment to Quality: </span>We are committed to delivering
              the highest quality of work, ensuring that every website we build
              is flawless and functional.
            </li>
            <li>
              <span>Customer Support: </span>We believe in building long-term
              relationships with our clients, offering continuous support and
              assistance even after the project is completed.
            </li>
          </ul>
        </section>

        <section className="ending-para">
          <p>
            Join us on a journey to digital excellence. Let's create something
            extraordinary together!
          </p>
        </section>
      </div>
      <div className="foot-conatiner">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
