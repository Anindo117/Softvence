import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const Features = () => {
  const items = [
    {
      icon: '/images/Frame 781.png',  
      title: "Easy Service Booking",
      desc: "Streamlined booking process for clients with service catalogs and availability.",
    },
    {
      icon: '/images/Frame 782.png',  
      title: "Real-Time Tracking",
      desc: "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
      icon: '/images/Frame 781 (2).png',  
      title: "Performance Analytics",
      desc: "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
      icon: '/images/Frame 781 (1).png',  
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
  ];
  return (
    <div className="w-full md:max-w-[1440px] md:px-[120px] grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-6 lg:mt-20">
      {items.map((item) => (
        <div key={item.title} className="p-6 hover:rounded-2xl border-r-1 border-[#F4F6F8] hover:shadow-sm">
          <Image src={item.icon} width={43} height={43} alt="icon" className="mb-5"/>
          <div className="text-lg font-bold">{item.title}</div>
          <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
