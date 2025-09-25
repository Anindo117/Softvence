"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/images/Ellipse 24.png'), url('/images/Ellipse 29.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, bottom right",
        backgroundSize: "auto, auto",
      }}
    >
      <section className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 md:max-w-[1440px] md:pl-[120px]">
        <div
          className="pt-10"
          style={{
            backgroundImage: "url('/images/Vector.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% top",
            backgroundSize: "15%",
          }}
        >
          <h1 className="text-4xl md:text-7xl font-bold">
            <span>All Your Jobs</span>
            <br />
            <span
              style={{
                backgroundImage: "url('/images/Vector 7621.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "70%",
              }}
            >
              One Smart App
            </span>
          </h1>
          <p className="text-muted-foreground mt-4 mb-16 md:w-lg w-full">
            Built for business owners, employees, and clients—streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>
          <div className="flex gap-4">
            <div className="flex justify-center gap-5">
              <a
                href="#"
                className="google-play-button flex items-center rounded-md px-4 py-2 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#ABDAA9] max-w-xs"
              >
                <div className="mr-3 flex-shrink-0">
                  <Image
                    src="/images/Apple.png"
                    alt="google play"
                    width={23}
                    height={26}
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[9px]">Download on the</div>
                  <div className="md:text-lg font-medium">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="google-play-button flex items-center rounded-md px-4 py-2 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#ABDAA9] max-w-xs"
              >
                <div className="mr-3 flex-shrink-0">
                  <Image
                    src="/images/Playstore.png"
                    alt="google play"
                    width={23}
                    height={26}
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[9px]">Download on the</div>
                  <div className="md:text-lg font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="md:pr-24 md:w-2xl"
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              backgroundImage: "url('/images/Ellipse 29.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "auto",
            }}
          >
            <Image
              src="/images/Rectangle 161124256@3x.png"
              alt="app"
              width={656}
              height={656}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
