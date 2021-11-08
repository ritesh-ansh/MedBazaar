import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

function Navbar() {
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
          <Link href="/">
            <a className=" p-2 border-black rounded border-2 md:hidden">
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
              <a className=" border-2 hover:outline-none border-black px-2 py-1 rounded-md transform transition duration-75 hover:scale-105 ">
                <button>Login</button>
              </a>
            </Link>
            <Link href="/">
              <a className=" border-2 hover:outline-none border-black px-2 py-1 rounded-md transform transition duration-75 hover:scale-105 ">
                <button>Sign Up</button>
              </a>
            </Link>
          </div>
        </nav>
        {/* <ul className=" w-full md:hidden h-screen bg-[#fdd134] ">
          <li>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul> */}
      </header>
    </>
  );
}

export default Navbar;
