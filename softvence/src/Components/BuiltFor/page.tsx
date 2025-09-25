"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const BuiltFor = () => {
  return (
    <div className="w-full md:max-w-[1440px] md:px-[120px] lg:mt-44">
      <h1
        className="text-5xl font-bold text-center p-2"
        style={{
          backgroundImage: "url('/images/Frame 2147227474.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "60% bottom ",
          backgroundSize: "20%",
        }}
      >
        Build for Everyone
      </h1>
      <p className="text-center mt-3 w-full lg:max-w-xl mx-auto text-sm text-gray-600">
        Whether you're booking services, managing tasks, or running operations,
        we've designed the perfect experience for you.
      </p>

      {/* Users section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-between lg:mt-24 p-5">
        <div>
          <div className="text-sm font-semibold text-[#3BA334] border rounded-[60px] border-[#3BA334] py-1 px-5 w-20 mb-5">
            Users
          </div>
          <h3 className="md:text-2xl text-xl font-bold">
            <span>Book services, track progress</span>
            <br />
            <span>and stay updated</span>
          </h3>
          <p className="md:text-lg font-normal text-gray-600 mt-4 md:w-lg w-full">
            Easily schedule appointments, get real-time updates, and enjoy a
            smooth, transparent service experience.
          </p>
          <div className="flex mt-9">
            <ul className="space-y-4 md:text-lg text-sm text-gray-900">
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
                Book services in seconds
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
                Track real-time job updates
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
                Schedule appointments at your convenience
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className=""
        >
          <div
            className="mt-10 md:mt-0 overflow-hidden "
            style={{
              backgroundImage: "url('/images/Ellipse 29.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "auto",
            }}
          >
            <Image
              src="/images/Rectangle 161124259.png"
              alt="app"
              width={656}
              height={656}
            />
          </div>
        </motion.div>
      </section>

      {/* Business owners section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:mt-10 p-5 ">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className=""
        >
          <div
            className="mt-10 md:mt-0 overflow-hidden "
            style={{
              backgroundImage: "url('/images/Ellipse 29.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "auto",
            }}
          >
            <Image
              src="/images/Rectangle 161124261.png"
              alt="app"
              width={656}
              height={516}
            />
          </div>
        </motion.div>
        <div>
          <div className="text-sm font-semibold text-[#3BA334] border rounded-[60px] border-[#3BA334] py-1 px-5 w-40 mb-5">
          Business Owners
          </div>
          <h3 className="md:text-2xl text-xl font-bold">
            <span>Assign jobs, monitor performance, and </span>
            <br />
            <span>streamline operations.</span>
          </h3>
          <p className="md:text-lg font-normal text-gray-600 mt-4 md:w-lg w-full">
          Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.
          </p>
          <div className="flex mt-9">
            <ul className="space-y-4 md:text-lg text-sm text-gray-900">
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Assign jobs to the right team member
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Monitor performance in real time
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Manage clients and services seamlessly
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Employee section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:mt-10 p-5 ">     
        <div>
          <div className="text-sm font-semibold text-[#3BA334] border rounded-[60px] border-[#3BA334] py-1 px-5 w-28 mb-5">
          Employees
          </div>
          <h3 className="md:text-2xl text-xl font-bold">
            <span>See tasks, track time, and navigate</span>
            <br />
            <span>routes with ease.</span>
          </h3>
          <p className="md:text-lg font-normal text-gray-600 mt-4 md:w-lg w-full">
          Everything you need to manage your workday from job assignments to optimized routes and time logging.
          </p>
          <div className="flex mt-9">
            <ul className="space-y-4 md:text-lg text-sm text-gray-900">
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Assign jobs to the right team member
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Monitor performance in real time
              </li>
              <li className="border-l-3 border-[#3BA33466] hover:border-[#3BA334] pl-6">
              Manage clients and services seamlessly
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
          className=""
        >
          <div
            className="mt-10 md:mt-0 overflow-hidden "
            style={{
              backgroundImage: "url('/images/Ellipse 29.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "auto",
            }}
          >
            <Image
              src="/images/Rectangle 161124259-1.png"
              alt="app"
              width={656}
              height={516}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BuiltFor;
