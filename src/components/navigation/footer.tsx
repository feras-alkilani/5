import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const monthIndex = new Date().getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const currentMonth = months[monthIndex];
  return (
    <footer className="py-4 boorder-t">
      <div className="container">
        <p className="text-sm flex justify-end ">
          All rights reserved &copy; {currentMonth} {currentYear}
        </p>
      </div>
    </footer>
  );
}
