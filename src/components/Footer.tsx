"use client";
import React from "react";

export const Footer = () => {
  function getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const now = new Date();

    const month = months[now.getMonth()]; // Get month as short name
    const day = String(now.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
    const year = now.getFullYear(); // Get full year

    return `${month}, ${day}, ${year}`;
  }
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{getFormattedDate()} </span>
      &#8212; Built by Mohd Aftab
    </div>
  );
};
