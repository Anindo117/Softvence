"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div style={{
        backgroundImage: "url('/images/Ellipse 24.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "auto",
      }}>
      <section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6">
        <div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            All Your Jobs
            <br />
            One Smart App
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Built for business owners, employees, and clients—streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">
              Download on the App Store
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">
              <Image
                src="/images/ic_google.png"
                alt="google play"
                width={30}
                height={30}
              />
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
          <div
            className="rounded-3xl overflow-hidden p-6"
            style={{
              backgroundImage: "url('/images/Ellipse 29.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              backgroundSize: "auto",
            }}
          >
            <Image
              src="/images/Rectangle 161124256.png"
              alt="app"
              width={720}
              height={656}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
