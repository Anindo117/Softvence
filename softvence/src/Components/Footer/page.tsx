const Footer = () => {
  return (
    <footer className="bg-[#052d26] text-white mt-12 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center">
              S
            </div>
            <div className="font-semibold">ScapeSync</div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Your all-in-one platform for job scheduling, employee management,
            and client service built to keep your business running smoothly.
          </p>
        </div>
        <div />
        <div />
      </div>
    </footer>
  );
};

export default Footer;
