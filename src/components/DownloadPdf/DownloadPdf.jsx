import React from "react";
import "./DownloadPdf.css";
import pdf from "../../pdf/null.pdf";

const DownloadPdf = () => {
  return (
    <div>
      <button className="download-btn">
        <a href={pdf} download="test">
          Download
        </a>
      </button>
    </div>
  );
};

export default DownloadPdf;
