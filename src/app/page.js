"use client";
import { useEffect, useState } from "react";
import { FaBars, FaAmazon, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiOutlineApple } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [isDropDownOpen, setisDropDownOpen] = useState(false)

  const toggle = () => {
    console.log("toggle Click")
    setisDropDownOpen(!isDropDownOpen);
  }

  const [isLgScreen, setIsLgScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Adjust this value according to your breakpoint for large screens
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize means agar window resize hui jesa k phela argument bhi hai addevenetlistener main tabhi yeh function call hoga handle resize ka
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount means agar hum essa nahi karain gy toh for suppose yeh component jo hum ny banaya hai yeh home page hai aur ab jab hum about page per jayein gy toh humain yeh check karnay ki zarrorat nahi k window resize hui yeh nahi kyu k wahan toh is compoent k code ki zarrorat nahi hai na lekin agar hum memory clean nahi karain gy neecchay wala code likh k toh ho sakta hai k about k page per jis per ho sakata hai humain window resize check karnay ki zarrorat hi na lekin phir bhi resize check ho raha hoga is component ki wajah say in simple words humain is component k unmount per addeventlistener ko memory say khatam kardena chahi hai
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen px-6 py-3 space-y-10 md:px-10 lg:px-16 lg:py-7">
        <header className="flex justify-between lg:gap-24">
          <a href="" className="flex items-center">
            <h1 className="text-4xl font-bold">WFA.</h1>
          </a>
          <div className={`absolute -top-full left-0 max-lg:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 w-full flex flex-col gap-6 items-center py-2 text-lg font-bold ${isDropDownOpen ? 'top-16' : '-top-full'} lg:static lg:flex-row lg:justify-between`}>
            <ul className=" flex flex-col items-center gap-6 lg:flex lg:gap-10 lg:font-medium lg:text-lg lg:flex-row"> 
              <li>
                <a href="" className="hover:text-orange-400">Locations</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400">Offerings</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400">Pricing</a>
              </li>
              <li>
                <a href="" className="hover:text-orange-400">About Us</a>
              </li>
            </ul>
            <div className="flex flex-col items-center gap-6 lg:flex lg:gap-10 lg:items-center lg:font-medium lg:text-lg lg:flex-row  ">
              <a href="">Login</a>
              <button className="bg-purple-900 px-2 py-1 rounded-md hover:text-orange-400">
                Register
              </button>
            </div>
          </div>
          <div className="lg:hidden" onClick={toggle}>
            <FaBars className="text-4xl" />
          </div>
        </header>

        <main className="lg:flex">
          {/* agar hum itmes center or justify center use karain gy toh jab hum choti yeni mobile screen say bari screen per jayein gy toh hamari picture idhar udhar nahi jaye gi balkay center ,main rahay gi */}
          {/* 24 minutes video lg:flex-1 agar hum is ko aur neechay walay ko bhi de ddein gy toh yeh equal spaces lain gy means large screen per hum chatay hain k adhi screen per yeh aye aur us k baad adhi per neechay wala content toh us k liye hum essa kartay hain */}

          <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
            {isLgScreen && (
              <RevealWrapper
                origin="top"
                delay={400}
                duration={2600}
                distance="60px"
                reset={true}
              >
                <img
                  src="img3.avif"
                  alt=""
                  className="outline outline-white shadow-2xl shadow-black lg:h-[600px] lg:w-[600px] lg:rounded-full lg:object-center"
                />
              </RevealWrapper>
            )}
            {!isLgScreen && (
              <img
                src="img3.avif"
                alt=""
                className="outline outline-white shadow-2xl shadow-black lg:h-[600px] lg:w-[600px] lg:rounded-full lg:object-center"
              />
            )}
          </div>

          <div className="space-y-6 mt-16 lg:flex-1 lg:order-1 lg:mt-32">
            <RevealWrapper
              origin="left"
              delay={400}
              duration={2600}
              distance="60px"
              reset={true}
            >
              <div className="space-y-6">
              <div className="text-7xl font-bold leading-tight whitespace-nowrap">
                <h2>Let's Switch</h2>
                <h2>To Remote</h2>
              </div>
              <p >
                WFA provides top-notch office spaces in prime locations
                worldwide allowing people to work from anwhere. We provide
                coworking spaces where people from various backgrounds like
                remote workers, entrepreneurs, freelancers, and startup
                enthusiasts can work, connect, and grow their businesses.
              </p>
              <form
                action=""
                className="flex flex-col gap-2 md:flex-row md:gap-0"
              >
                <input
                  type="text"
                  placeholder="Enter City"
                  className="max-md:rounded-md text-black px-4 py-3 md:rounded-l-md md:w-80"
                />
                <button className="bg-purple-900 px-4 py-3 max-md:rounded-md font-medium whitespace-nowrap md:rounded-r-md">
                  Find Your Office
                </button>
              </form>
              <div className="flex flex-col gap-4 py-8">
                <p className="font-semibold">Used by these Companies:</p>
                <ul className="flex gap-6">
                  <li>
                    <FaAmazon className="text-2xl" />
                  </li>
                  <li>
                    <FaFacebookF className="text-2xl" />
                  </li>
                  <li>
                    <FaXTwitter className="text-2xl" />
                  </li>
                  <li>
                    <AiOutlineApple className="text-2xl" />
                  </li>
                </ul>
              </div>
              </div>
            </RevealWrapper>
          </div>
        </main>
      </div>
    </>
  );
}

// items center hata k dekhna wfa k a tag say
