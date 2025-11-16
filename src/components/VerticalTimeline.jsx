import React from "react";

export function VerticalTimeline({ children }) {
  return (
    <div className="relative ml-4 border-l-2 border-gray-300">
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
}) {
  return (
    <div className="relative mb-10 ml-6">

      {/* Dot/Icon */}
      <div
        className="absolute -left-11 top-0 flex items-center justify-center w-12 h-12 rounded-full shadow-md"
        style={iconStyle}
      >
        {icon}
      </div>

      {/* Date */}
      <p className="text-gray-500 text-sm mb-2 ml-2.5">{date}</p>

      {/* Content box */}
      <div
        className="bg-white p-5 rounded-lg shadow-md ml-2.5"
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
}
