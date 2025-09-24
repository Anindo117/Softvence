"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
      <div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          All Your Jobs
          <br />
          One Smart App
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Built for business owners, employees, and clients—streamline job
          scheduling, service tracking, and team management in one powerful app.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">
            Download on the App Store
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">
            Get it on Google Play
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="flex justify-center md:justify-end"
      >
        <div className="w-64 md:w-96 shadow-2xl rounded-3xl overflow-hidden bg-white p-6">
          <Image src="/images/Rectangle 161124256.png" alt="app" width={420} height={820} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
