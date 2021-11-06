import Image from "next/image";
import link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-400">
      <div className="flex">
        <Image
          src="/logo.png"
          height={50}
          width={100}
        />
      </div>
    </nav>
  );
}

export default Navbar;
