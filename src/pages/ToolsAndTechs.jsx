import React, { useEffect, useRef, useState } from "react";
import StickyNav from "../components/StickyNav";
import MList from "../components/MList";

function ToolsAndTechs() {
  return (
    <div className="flex flex-col h-full min-h-svh w-full">
      {/* Sticky nav */}
      <StickyNav />
      <div className="w-full h-full flex-1 flex flex-col items-center justify-start text-lg pb-10">
        <div className="w-full max-w-[1080px] pt-10 max-md:pt-0 px-10 relative">
          <h1 className="font-bold text-3xl max-md:text-2xl tracking-tight">
            Welcome to QuoteMate
          </h1>
          <p className="text-base tracking-tight text-dark-color/80 pt-3">
            Hi There, My names are Kevin K. Mbonimpaye. I built QuoteMate to
            share a little bit of inspiration with every click. It’s a simple,
            lightweight app that pulls random quotes from the Rapid Quotes API,
            designed with a focus on ease and enjoyment. My goal was to create
            something quick, reliable, and fun to use, giving you and others a
            motivation to brighten your day.
            <br /> <br />
            Techs:
          </p>
          {/* Markup list */}
          <MList
            list={[
              "React",
              "Tailwind CSS",
              "UIBall",
              "Axios",
              "Ant Design",
              "Lodash",
              "Vite",
            ]}
          />
          <p className="text-base tracking-tight text-dark-color/80 pt-3">
            Typography
          </p>
          {/* Markup list */}
          <MList list={["Cascadia font", "SF-Pro font"]} />
          <h1 className="font-bold text-3xl max-md:text-2xl tracking-tight mt-10">
            Let’s Collaborate
          </h1>
          <p className="text-base tracking-tight text-dark-color/80 pt-3 mb-10">
            I’m always open to new opportunities and collaborations. If you’re
            interested in working together or just want to connect, feel free to
            reach out. let’s chat and see how we can
            create something amazing together. Connect with me on <a href="https://www.linkedin.com/in/kevinkaneza/" target="_blank" className="text-blue-500 font-semibold">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToolsAndTechs;
