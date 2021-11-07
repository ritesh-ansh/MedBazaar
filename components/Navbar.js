import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-400 p-2">
      <div className="flex items-center">
        <Image src="/images/logo.png" height={50} width={100} />
        <div className="px-10">
          <button className="box-border py-1 px-2 border-2 rounded-md font-quicksand">
            Medicine
          </button>
        </div>

<<<<<<< HEAD
        <div>
          <Link href="/">
            <a className="transition transform hover:scale-105 mx-20">
              <Image src="/icons/cart.png" width={25} height={25} />
            </a>
          </Link>
          <Link href="/">
            <a className="transition transform hover:scale-105 mx-20">
              <Image src="/icons/rx.png" width={25} height={25} />
            </a>
          </Link>

          <button className="box-border py-1 px-2 border-2 rounded-md font-quicksand">
            Login
          </button>
          <button className="box-border py-1 px-2 border-2 rounded-md font-quicksand">
            SignIn
          </button>
=======
        <div className="items-center ml-auto flex">
        <Link href="/">
                <a className="transition transform hover:scale-105">
                  <Image
                    src="/icons/cart.png"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
        <Link href="/">
                <a className="transition transform hover:scale-105">
                  <Image
                    src="/icons/rx.png"
                    width={25}
                    height={25}
                  />
                </a>
        </Link>

        <button className="box-border py-1 px-2 border-2 rounded-md font-mulish">Login</button>
        <button className="box-border py-1 px-2 border-2 rounded-md font-quicksand">SignIn</button>
  
>>>>>>> ccbdb9e0b587fe3f1254f8caa5d8c77c0899bfcf
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
