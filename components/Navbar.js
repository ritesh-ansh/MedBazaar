import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "./Search";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("clicked");
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };

  return (
    <>
      {/* TODO: MAKE SEARCH BAR FUNCTIONALITY i.e. WHEN BAR GOES IN THE ELEMENTS MOVE SIDE WAYS  */}
      {/* TODO: make navbar responsive in while scrolling  */}
      <header className=" w-full h-30 p-5 z-10 bg-[#fdd134] fixed ">
        <nav className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link href="/">
              <a className="  hover:shadow-inner hover:scale-105 transform transition duration-200 ">
                <img
                  className=" w-[30vh] transition-all duration-100 md:w-[20vh]"
                  src="/images/logo.png"
                />
              </a>
            </Link>
            <h4 className="px-10">Dropdown</h4>
          </div>
          <Link href="">
            <a
              onClick={handleButtonClick}
              className=" p-2 border-black rounded border-2 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
          <div className="hidden md:flex items-center space-x-16 pr-4 justify-around">
            <Link href="/">
              <a className="transform transition duration-75 hover:scale-105 ">
                <Image src="/icons/rx.png" width={40} height={40} />
              </a>
            </Link>
            <Link href="/">
              <a className="transform transition duration-75 hover:scale-105 ">
                <Image src="/icons/cart.png" width={40} height={35} />
              </a>
            </Link>
            <Link href="/">
              <a className="  flex items-center justify-center border-2 hover:outline-none hover:bg-white hover:ring-1 hover:border-transparent ring-gray-900 border-black px-2 py-1 rounded-md transform transition duration-75 hover:scale-105 ">
                <Image src="/icons/login.png" width={30} height={30} />
                <button className="p-2">Login</button>
              </a>
            </Link>
            <Link href="/">
              <a className="  flex items-center justify-center border-2 hover:bg-white hover:ring-1 hover:border-transparent ring-gray-900 hover:outline-none border-black px-2 py-1 rounded-md transform transition duration-75 hover:scale-105 ">
                <Image src="/icons/signup.png" width={30} height={30} />
                <button className="p-2">Sign Up</button>
              </a>
            </Link>
          </div>
        </nav>
        {/* TODO: use useState to get he slide in and onnclick behaviour on the buttin and the ul */}
        <ul
          className={
            " w-full space-y-3 px-6 py-2 fixed transition transform duration-150  left-0 right-0  md:hidden h-screen bg-[#fdd134] " +
            (isOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/rx.png" width={40} height={40} />

                <label className="px-3 text-white">Prescription</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/cart.png" width={40} height={40} />

                <label className="px-3 text-white">Cart</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/login.png" width={40} height={40} />

                <label className="px-3 text-white">Login</label>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <Image src="/icons/signup.png" width={40} height={40} />

                <label className="px-3 text-white">Sign Up</label>
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
