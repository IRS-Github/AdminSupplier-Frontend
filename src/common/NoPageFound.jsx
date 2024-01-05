import React from "react";

const NoPageFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl font-serif font-bold">! Page not Found</h1>
      <h1 className="text-4xl font-serif font-bold">Error</h1>
      <iframe
        src="https://giphy.com/embed/UoeaPqYrimha6rdTFV"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default NoPageFound;
