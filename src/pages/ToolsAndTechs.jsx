import React, { useEffect, useRef, useState } from "react";
import StickyNav from "../components/StickyNav";
import MList from "../components/MList";

function ToolsAndTechs() {
  return (
    <div className="flex flex-col h-full min-h-svh w-full">
      {/* Sticky nav */}
      <StickyNav />
      <div className="w-full h-full flex-1 flex flex-col items-center justify-start text-lg">
        <div className="w-full max-w-[1080px] pt-10 max-md:pt-0 px-10 relative">
          <h1 className="font-bold text-3xl max-md:text-2xl tracking-tight">
            Welcome to QuoteMate
          </h1>
          <p className="text-base tracking-tight text-dark-color/80 pt-3">
            I built QuoteMate to share a little bit of inspiration with every
            click. It’s a simple, lightweight app that pulls random quotes from
            the Rapid Quotes API, designed with a focus on ease and enjoyment.
            My goal was to create something quick, reliable, and fun to use,
            giving you and others a motivation to brighten your day.
            <br /> <br />
            Simply Made with:
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
        </div>
      </div>
    </div>
  );
}

export default ToolsAndTechs;
