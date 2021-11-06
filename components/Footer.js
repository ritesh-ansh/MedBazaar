import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className=" bg-[#F7F6F2] ">
      <div className=" flex ">
        <div className=" ">
          <Image
            src="/icons/phone.png"
            width={500}
            height={500}
            // layout="responsive"
          />
        </div>
        <div className=" flex items-center ">
          <div className="">
            <h3 className=" p-4 text-5xl font-semibold tracking-wider leading-5 ">
              <span className="  text-[#077861] font-mulish  text-5xl font-bold ">
                Download{" "}
              </span>
              the app for{" "}
            </h3>
            <h3 className=" p-4 pt-6 text-5xl font-semibold tracking-wider leading-5 ">
              free
            </h3>
            <div className="flex items-center">
              <Link href="/">
                <a className="transition transform hover:scale-105 ">
                  <Image
                    src="/icons/google-play.png"
                    width={240}
                    height={100}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className=" transition transform hover:scale-105 ">
                  <Image src="/icons/apple.svg" width={210} height={140} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
