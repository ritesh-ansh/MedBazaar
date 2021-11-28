import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";

const options = ["one", "two", "three"];
const defaultOption = options[0];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
  });
  const checkScrollPosition = () => {
    if (window.scrollY > 240) setNavbar(true);
    else setNavbar(false);
  };

  return (
    <>
      {/* TODO: MAKE SEARCH BAR FUNCTIONALITY i.e. WHEN BAR GOES IN THE ELEMENTS MOVE SIDE WAYS  */}
      {/* TODO: make navbar responsive in while scrolling  */}
      <header
        className={
          " font-quicksand rounded-md w-full    p-5 z-10 bg-[#fdd134] fixed " +
          (navbar ? "h-20" : "h-30 ")
        }
      >
        <nav className="flex  items-center transition-all duration-100 justify-between ">
          <div className="flex items-center">
            <Link href="/">
              <a className="hover:scale-105 items-start transform transition duration-200 ">
                <div
                  className={
                    " transition-all duration-100 " +
                    (navbar ? "w-[10vh] " : "w-[18vh] ")
                  }
                >
                  <Image
                    src="/images/logo.png"
                    width={35}
                    height={20}
                    layout="responsive"
                  />
                </div>
              </a>
            </Link>
            {/* Dropdown */}
            <div
              className={
                "     " +
                (navbar
                  ? " ml-[5vh] w-[12vh] h-[4vh]  md:w-[20vh] "
                  : "ml-[4vh] w-[14vh] h-[5vh]   md:w-[20vh] ")
              }
            >
              <Dropdown />
            </div>
          </div>
          {/* <div
            className={
              "w-[60vh] transition duration-150 " +
              (navbar
                ? "translate-y-0 visible"
                : "translate-y-full hidden" + isOpen
                ? "hidden"
                : "visible")
            }
          >
            <Search />
          </div> */}

          <Link href="#">
            <a
              onClick={handleButtonClick}
              className=" p-2 border-gray-50 rounded border-2 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-50  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </Link>
          <div
            className={
              " hidden md:flex items-center transition-all duration-200 pr-4 justify-around" +
              " space-x-16"
            }
          >
            <Link href="/">
              <a
                className={
                  "transform transition duration-75 hover:scale-105 " +
                  (navbar ? "h-9 w-9" : "h-10 w-10 ")
                }
              >
                <Image
                  src="/icons/rx.png"
                  width={40}
                  height={40}
                  layout="responsive"
                />
              </a>
            </Link>
            <Link href="/">
              <a
                className={
                  "transform transition-all duration-100 hover:scale-105 " +
                  (navbar ? "h-9 w-9" : "h-10 w-10 ")
                }
              >
                <Image
                  src="/icons/cart.png"
                  width={40}
                  height={35}
                  layout="responsive"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <button
                  className={
                    "  flex items-center justify-center border-2 hover:outline-none hover:bg-white hover:ring-1 hover:border-transparent ring-gray-900 border-black  rounded-md transform transition-all duration-100 hover:scale-105 " +
                    (navbar ? "px-1 " : "px-2 py-1")
                  }
                >
                  <div className={navbar ? "h-7 w-7" : "h-9 w-9 "}>
                    <Image
                      src="/icons/login.png"
                      width={30}
                      height={30}
                      layout="responsive"
                    />
                  </div>
                  <span className="p-2  leading-tight">Login</span>
                </button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button
                  className={
                    "  flex items-center justify-center border-2 hover:bg-white hover:ring-1 hover:border-transparent ring-gray-900 hover:outline-none border-black  rounded-md transform transition-all duration-100 hover:scale-105 " +
                    (navbar ? "px-2 " : "px-2 py-1")
                  }
                >
                  <div className={navbar ? "h-6 w-6 " : "h-8 w-8 "}>
                    <Image
                      src="/icons/signup.png"
                      width={30}
                      height={30}
                      layout="responsive"
                    />
                  </div>
                  <span className="p-2 leading-tight ">Sign Up</span>
                </button>
              </a>
            </Link>
          </div>
        </nav>
        {/* TODO: use useState to get he slide in and onnclick behaviour on the buttin and the ul */}
        <ul
          className={
            " w-full space-y-3 px-6 py-2 fixed transition-all transform duration-150  left-0 right-0  md:hidden h-screen bg-[#fdd134] " +
            (isOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/rx.png" width={40} height={40} />

                <label className="px-3 text-black">Prescription</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/cart.png" width={40} height={40} />

                <label className="px-3 text-black">Cart</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/login.png" width={40} height={40} />

                <label className="px-3 text-black">Login</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/signup.png" width={40} height={40} />

                <label className="px-3 text-black">Sign Up</label>
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
