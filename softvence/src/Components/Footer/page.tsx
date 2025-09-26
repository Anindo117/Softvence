import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#052d26] text-white mt-12 p-5" 
    style={{
      backgroundImage: "url('/images/Vector 3.png'), url('/images/Vector 2.png'), url('/images/Vector 4.png')",
      backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      backgroundPosition: "right top, 75% bottom, right bottom",
      backgroundSize: "auto",
    }}>
      <div className="md:max-w-[1440px] md:px-[120px]">
        <div className="grid md:grid-cols-3 gap-6 items-start md:pt-32 md:mb-24 mb-12">
          <div>
            <Image
              src="/images/Vector-1.png"
              alt="google play"
              width={207}
              height={76}
            />
          </div>
          <div className="flex items-start">
            <p className="text-sm text-white/70 max-w-sm ">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly from
              anywhere.
            </p>
          </div>
          <div className="flex items-center md:items-start gap-3">
            <a
              href="#"
              className="border border-green-500 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-green-600/20 transition"
            >
              <Image
                src="/images/Apple-white.png"
                alt="google play"
                width={23}
                height={26}
              />
              <span>
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </span>
            </a>
            <a
              href="#"
              className="border border-green-500 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-green-600/20 transition"
            >
              <Image
                src="/images/Playstore.png"
                alt="google play"
                width={23}
                height={26}
              />
              <span>
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">Google Play</div>
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-start gap-4 text-xl mb-14 ">
          <a href="#" className="hover:text-green-400">
          <Image
              src="/images/Vector-2.png"
              alt="google play"
              width={24}
              height={16}
            />
          </a>
          <a href="#" className="hover:text-green-400">
          <Image
              src="/images/Instagram.png"
              alt="google play"
              width={24}
              height={16}
            />
          </a>
          <a href="#" className="hover:text-green-400">
          <Image
              src="/images/twitter.png"
              alt="google play"
              width={24}
              height={16}
            />
          </a>
          <a href="#" className="hover:text-green-400">
          <Image
              src="/images/Youtube.png"
              alt="google play"
              width={24}
              height={16}
            />
          </a>
        </div>
      </div>
      <div className="border-t border-white/20 md:px-[120px] text-start text-xs text-white/50">
      © 2021-2025, ScapeSync. All Rights Reserved.
        </div>
    </footer>
  );
};

export default Footer;
