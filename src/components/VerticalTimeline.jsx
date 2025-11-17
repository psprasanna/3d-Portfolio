import React from "react";

export function VerticalTimeline({ children }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

      {children}
    </div>
  );
}

export function VerticalTimelineElement({
  children,
  date,
  icon,
  iconStyle,
  contentStyle,
  position = "left",
}) {
  const isLeft = position === "left";

  return (
    <div className="relative w-full mb-16">

      {/* Icon */}
      <div
        className="
          absolute 
          left-1/2 
          -translate-x-1/2 
          top-0
          w-12 h-12 rounded-full shadow-md 
          flex items-center justify-center
          bg-white
          z-10
        "
        style={iconStyle}
      >
        {icon}
      </div>

      {/* Date (placed horizontally next to icon) */}
      <div
        className={`
          absolute top-3 
          ${isLeft ? "left-[calc(50%+2rem)]" : "right-[calc(50%+2rem)]"}
          text-sm text-gray-500
          whitespace-nowrap
        `}
      >
        {date}
      </div>

      {/* Content Box */}
      <div
        className={`
          w-1/2 
          mt-10
          ${isLeft ? "pr-10 text-right" : "pl-10 text-left ml-auto"}
        `}
      >
        <div
          className="bg-white p-5 rounded-lg shadow-md text-left"
          style={contentStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
