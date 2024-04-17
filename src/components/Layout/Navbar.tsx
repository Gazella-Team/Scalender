import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";

const links = [
    {name: "Results", path: "/"},
    {name: "Client testimonials", path: "/"},
    {name: "Services", path: "/"},
    {name: "FAQ", path: "/"},
]

export default function Navbar() {
    const [isEnglish, setIsEnglish] = useState(false);
    const [menuClicked, setMenuClicked] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname.slice(0, 3);
    return (
      <>
        <nav
          className="bg-transparent text-white h-[10vh] flex items-center z-[999]" // You can adjust opacity using Tailwind's bg-opacity utility
        >
          <div className="w-[96%] mx-auto max-w-main flex items-center justify-between">
            <Link href={"/"} className="text-[24px] font-[600] text-main">
              <h1 className="text-[18px]">SCALENDER</h1>
            </Link>
            <div className="flex items-center gap-[50px] font-[500] text-[16px] mde:hidden">
              <Link
                to="results"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Resultater
              </Link>
              <Link
                to="results"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Klientudtalelser
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Services
              </Link>
            </div>
            <div className="mde:hidden">
              <a target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full px-10 text-center from-blue-600 via-blue-500 to-indigo-700 text-white py-3 rounded-full font-medium text-sm">Tag kontakt</a>
            </div>
            <div
              onClick={() => setMenuClicked(true)}
              className="hidden mde:inline-block"
            >
              <Menu size={26} />
            </div>
          </div>
        </nav>
        {menuClicked ? (
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-[1000] py-[16px] mne:hidden">
            <div className="w-[96%] mx-auto max-w-main">
              <div className="flex items-center justify-between">
                <Link href={"/"} className="text-[24px] font-[600] text-main">
                  SCALENDER
                </Link>
                <div
                  onClick={() => setMenuClicked(false)}
                  className="hidden mde:inline-block"
                >
                  <X size={28} />
                </div>
              </div>
              <div className="py-[60px] flex flex-col">
                <Link
                  onClick={() => setMenuClicked(false)}
                  to="results"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[40px]"
                >
                  Resultater
                </Link>
                <Link
                  onClick={() => setMenuClicked(false)}
                  to="results"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[40px]"
                >
                  Klientudtalelser
                </Link>
                <Link
                  onClick={() => setMenuClicked(false)}
                  to="services"
                  smooth={true}
                  duration={10}
                  className="cursor-pointer text-[40px]"
                >
                  Services
                </Link>
              </div>
              <a target="_blank" href={"https://calendly.com/niclas-wwk"} className="bg-gradient-to-br w-full px-10 text-center from-blue-600 via-blue-500 to-indigo-700 text-white py-3 rounded-full font-medium text-sm">Tag kontakt</a>
              <div className="inline-block">
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
}