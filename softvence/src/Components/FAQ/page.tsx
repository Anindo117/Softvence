import { div } from "framer-motion/client";

const FAQ = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Ellipse 24.png'), url('/images/Ellipse 30.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, left",
        backgroundSize: "auto, 100%",
      }}
    >
      
      <section className="px-6 lg:mt-44 mt-20 md:max-w-[1440px] md:px-[120px]">
        <h2 className="lg:text-5xl text-3xl font-bold text-center p-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center mt-3 w-full lg:max-w-md mx-auto text-sm text-gray-600">
          Quick answers to help you get the most out of our app.
        </p>

        {/* Questions & Answer section */}
        <div className="lg:mt-16 mt-7 space-y-4 lg:max-w-3xl mx-auto">
          <div className="collapse border border-[#C7E6C5] collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold p-6">
              Is the app free to use?
            </div>
            <div className="collapse-content text-sm ml-10 mb-6">
              Yes! We offer a free plan for individuals and small teams. Paid
              plans unlock more features for scaling businesses.
            </div>
          </div>
          <div className="collapse border border-[#C7E6C5] collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold p-6">
            Can I assign multiple employees to one job?
            </div>
            <div className="collapse-content text-sm ml-10 mb-6">
              Yes! We offer a free plan for individuals and small teams. Paid
              plans unlock more features for scaling businesses.
            </div>
          </div>
          <div className="collapse border border-[#C7E6C5] collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold p-6">
            Does it work on both mobile and desktop?
            </div>
            <div className="collapse-content text-sm ml-10 mb-6">
              Yes! We offer a free plan for individuals and small teams. Paid
              plans unlock more features for scaling businesses.
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default FAQ;
