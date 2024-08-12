import React from "react";
import "./PrivacyPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PrivacyPage = () => {
  return (
    <div className="privacy_page_container">
      <div className="nav-conatiner">
        <Navbar />
      </div>

      <div className="content_container">
        <section className="privacy_policy_content">
          <h1>Privacy Policy</h1>
          <p>
            At AP Tech Enterprise, we take your privacy seriously. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            personal information when you visit our website or use our services.
          </p>
        </section>

        <section className="information_we_collect_container">
          <h4>Information We Collect</h4>
          <p>
            When you visit our website, we may collect certain information
            automatically, including your IP address, browser type, device type,
            and operating system. We may also collect information about your
            usage patterns, such as the pages you visit and the links you click
            on.
          </p>
          <p>
            If you choose to engage with our services or contact us through our
            website, we may collect additional information, such as your name,
            email address, phone number, and any other information you choose to
            provide.
          </p>
        </section>

        <section className="how_we_use_your_information">
          <h4>How We Use Your Information</h4>
          <p>
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To communicate with you and respond to your inquiries</li>
            <li>To personalize your experience and provide tailored content</li>
            <li>
              To analyze usage patterns and improve our website and services
            </li>
            <li>
              To detect, prevent, and address technical issues and security
              vulnerabilities
            </li>
            <li>
              To comply with legal obligations and protect our rights and
              interests
            </li>
          </ul>
        </section>

        <section className="data_security_content">
          <h4>Data Security</h4>
          <p>
            We are committed to protecting the security of your personal
            information. We implement appropriate technical and organizational
            measures to safeguard your data against unauthorized access,
            disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="data_disclosure_content">
          <h4>Data Disclosure</h4>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this Privacy Policy or as required by law.
          </p>
          <p>
            We may disclose your information to trusted third-party service
            providers who assist us in operating our website, conducting our
            business, or providing services to you, as long as those parties
            agree to keep this information confidential.
          </p>
        </section>

        <section className="cookies_content">
          <h4>Cookies</h4>
          <p>
            Our website may use cookies and similar technologies to enhance your
            browsing experience and provide certain features and functionality.
            You have the option to disable cookies through your browser
            settings, but please note that this may affect the functionality of
            our website.
          </p>
        </section>

        <section className="google_compliance_content">
          <h4>Google Compliance</h4>
          <p>
            We adhere to the privacy guidelines and requirements set forth by
            Google, including:
          </p>
          <ul>
            <li>
              Compliance with Google Analytics Terms of Service and Google Ads
              Data Processing Terms
            </li>
            <li>
              Implementation of IP anonymization to protect your privacy when
              using Google Analytics
            </li>
            <li>
              Usage of Google Analytics for Demographics and Interest Reporting
              to better understand our audience and tailor our services
            </li>
          </ul>
        </section>

        <section className="your_rights_content">
          <h4>Your Rights</h4>
          <p>
            You have the right to access, correct, or delete your personal
            information at any time. You may also opt out of receiving marketing
            communications from us by following the instructions provided in our
            emails or contacting us directly.
          </p>
        </section>

        <section className="Updates_to_this_Policy_content">
          <h4>Updates to this Policy</h4>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically for the latest information on our
            privacy practices.
          </p>
        </section>

        <section className="contact_us_content">
          <h4>Contact Us</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at ar981089@gmail.com.
          </p>
        </section>

        <sectiion className="last_para">
          <p>
            By using our website or engaging with our services, you consent to
            the terms of this Privacy Policy.
          </p>
        </sectiion>
      </div>

      <div className="foot-conatiner">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPage;
