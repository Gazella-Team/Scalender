import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);
  return (
    <footer style={{background:"linear-gradient(338deg, rgba(101,126,255,0.10830269607843135) 0%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)"}} className="py-[100px] pb-[20px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-footermain gap-[100px] pb-[40px] ctaOne:grid-cols-1">
          <div className="flex justify-between gap-[130px] ctaOne:flex-col">
            <div>
              <h1 className="font-[600] text-[22px] mb-[10px]">
                {currentPath === "/en"
                  ? "We create industry-leading results for e-commerce brands"
                  : "SCALENDER"}
              </h1>
              <p className="text-gray-600 max-w-[500px]">
                {currentPath === "/en"
                  ? "With a long-term holistic approach, we focus solely on growing your profits. We manage the entire digital customer journey."
                  : "We Plug The Worlds Best CRO Experts & Protocols Into Your Brand To Increase Your Revenue, Scalability & Profitability."}
              </p>
            </div>
            <div className="flex gap-[160px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Menu</h1>
                <Link
                to="results"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Results
              </Link>
              <Link
                to="clients"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Client Testimonials
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                Services
              </Link>
              <Link
                to="faq"
                smooth={true}
                duration={10}
                className="cursor-pointer text-[16px]"
              >
                FAQ
              </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-[600] text-[22px] mb-[10px]">Contact</h1>
                <p className="text-gray-600">
                  VAT: DK44513102
                </p>
                <p className="text-gray-600">niclas@scalender.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t flex items-center text-center justify-center py-4 text-gray-400 text-[14px] font-[300] ctaOne:flex-col ctaOne:gap-[60px]">
          <h1 className="text-center">
            SCALENDER - ©{" "}
            {currentPath === "/en"
              ? "All rights reserved"
              : "All rights reserved"}
            , {new Date().getFullYear()}
          </h1>
        </div>
      </div>
    </footer>
  );
}