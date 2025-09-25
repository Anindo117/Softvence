import Image from "next/image";

const Testimonials = () => {
  const items = [
    {
      img: "/images/Ellipse 452.png",
      name: "Farzana H.",
      role: "Owner, CleanPro Services",
      text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      img: "/images/Ellipse 452-1.png",
      name: "Ahmed R.",
      role: "Technician",
      text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
      img: "/images/Ellipse 452-2.png",
      name: "Farzana H.",
      role: "Rafiq M., Homeowner",
      text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
  ];
  return (
    <section className="px-6 bg-scapeLight lg:mt-44 mt-20 md:max-w-[1440px] md:px-[120px]">
      <h2 className="lg:text-5xl text-3xl font-bold text-center p-2">
        What Our Users Are Saying
      </h2>
      <p className="text-center mt-3 w-full lg:max-w-md mx-auto text-sm text-gray-600">
        Real stories from clients, employees, and business owners who use our
        app every day.
      </p>
      <div
        className="grid md:grid-cols-3 gap-5 lg:mt-16 mt-7 pb-2"
        style={{
          backgroundImage: "url('/images/Ellipse 29.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "auto",
        }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white p-7 rounded-3xl shadow-xl shadow-[#92ab911a]"
            style={{
              backgroundImage: "url('/images/quote.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "5% 50%",
              backgroundSize: "20%",
            }}
          >
            <div className="flex items-center gap-3">
                <div className="mr-3 flex-shrink-0">
                  <Image src={item.img} alt="google play" width={48} height={48} />
                </div>
                <div>
                  <div className="font-bold mb-1">{item.name}</div>
                  <div className="text-sm text-gray-600 font-normal">
                    {item.role}
                  </div>
                </div>
            </div>
            <p className="mt-6 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
