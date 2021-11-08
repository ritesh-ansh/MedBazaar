import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-2  ">
      <div className="flex items-center">
        <Image src="/images/logo.png" height={50} width={100} />
        <div className="px-10">
          <button className="box-border py-1 px-2 border-2 rounded-md font-quicksand">
            Medicine
          </button>
        </div>
        <div className="ml-auto">
          <Search />
        </div>

        <div className="items-center ml-auto flex">
          <Link href="/">
            <a className="transition transform hover:scale-105 mx-5">
              <Image src="/icons/cart.png" width={25} height={25} />
            </a>
          </Link>
          <Link href="/">
            <a className="transition transform hover:scale-105 mx-5">
              <Image src="/icons/rx.png" width={25} height={25} />
            </a>
          </Link>

          <button className="box-border py-0.5 px-1.5 border-2 rounded-md font-quicksand text-sm mr-5 ml-5">
            Login
          </button>
          <button className="box-border py-0.5 px-1.5 border-2 rounded-md font-quicksand text-sm mr-5">
            SignIn
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
