import Image from "next/image";
import { FaBars, FaAmazon, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiOutlineApple } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="min-h-screen px-3 py-6 space-y-10">
        <header className="flex justify-between">
          <a href="" className="flex items-center">
            <h1 className="text-4xl font-bold">WFA.</h1>
          </a>
          <div>
            <FaBars className="text-4xl" />
          </div>
        </header>

        <main>
          {/* agar hum itmes center or justify center use karain gy toh jab hum choti yeni mobile screen say bari screen per jayein gy toh hamari picture idhar udhar nahi jaye gi balkay center ,main rahay gi */}
          <div className="flex items-center justify-center">
            <img
              src="8b3c8f0dfdf841e2b8d75ae8c45e035d.jpeg"
              alt=""
              className="outline outline-white shadow-2xl shadow-black"
            />
          </div>

          <div>
            <div>
              <h2>Let's Switch</h2>
              <h2>To Remote</h2>
            </div>
            <p>
              WFA provides top-notch office spaces in prime locations worldwide
              allowing people to work from anwhere. We provide coworking spaces
              where people from various backgrounds like remote workers,
              entrepreneurs, freelancers, and startup enthusiasts can work,
              connect, and grow their businesses.
            </p>
            <form action="">
              <input type="text" placeholder="Enter City" className="" />
              <button>Find Your Office</button>
            </form>
            <div>
              <p>Used by these Companies:</p>
              <ul>
                <li><FaAmazon className="text-2xl"/></li>
                <li><FaFacebookF className="text-2xl"/></li>
                <li><FaXTwitter className="text-2xl"/></li>
                <li><AiOutlineApple className="text-2xl"/></li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// items center hata k dekhna wfa k a tag say
