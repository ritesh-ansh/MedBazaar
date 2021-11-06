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
              <Link href="/">
                <a>
                  <span className=" text-[#077861] text-5xl font-bold ">
                    Download{" "}
                  </span>
                </a>
              </Link>
              the app for{" "}
            </h3>
            <h3 className=" p-4 pt-2 text-5xl font-semibold tracking-wider leading-5 ">
              free
            </h3>
            <div className="flex items-center">
              <Link href="/">
                <a>
                  <Image
                    className="transition transform hover:scale-105 "
                    src="/icons/google-play.png"
                    width={250}
                    height={100}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    className=" pt-0 transition transform hover:scale-105 "
                    src="/icons/apple.png"
                    width={250}
                    height={230}
                  />
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
