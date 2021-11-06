import Image from "next/image";
import link from "next/link";

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
      </div>
    </nav>
  );
}

export default Navbar;
