import React from "react";

const LogoMarquee = () => {
  const logos = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg",
  ];

  return (
    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-20">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff] to-transparent"></div>

      {/* Scrolling logos */}
      <div
        className="marquee-inner flex will-change-transform min-w-[200%]"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        <div className="flex">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand-logo"
              className="w-full h-full object-cover mx-6"
              draggable="false"
            />
          ))}
        </div>
      </div>

      {/* Right gradient */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff] to-transparent"></div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default LogoMarquee;
