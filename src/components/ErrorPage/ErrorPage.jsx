import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import Footer from ".././Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page-container">
        <div id="not-found">
          <div className="not-found">
            <div className="not-found-404">
              <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed or is temporarily unavailable
            </p>

            <Link to={"/"} className="back-button">
              Back To Homepage
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
