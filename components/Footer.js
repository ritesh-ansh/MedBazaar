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
            <h3 className=" p-4 text-5xl font-semibold tracking-wider  leading-5 ">
              <span className="  text-[#077861] font-mulish font-  text-5xl font-bold ">
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
      <div className=" bg- ">
        <h3 className="p-3 text-xl font-semibold text-gray-700 font-mulish">
          Our Payment Partners
        </h3>
        <div className="flex justify-around items-center p-4 ">
          <div>
            <Image src="/icons/gpay.png" width={60} height={30} />
          </div>
          <div>
            <Image src="/icons/paytm.png" width={60} height={55} />
          </div>
          <div>
            <Image src="/icons/phone-pay.png" width={40} height={40} />
          </div>
          <div>
            <Image src="/icons/mastercard.png" width={60} height={40} />
          </div>
          <div>
            <Image src="/icons/visa.png" width={60} height={20} />
          </div>
          <div>
            <Image src="/icons/rupay.png" width={70} height={50} />
          </div>
          <div>
            <Image src="/icons/upi.png" width={90} height={50} />
          </div>
          <div className="mx-5 ml-6">
            <p className="text-md pd-3 m-3 font-mulish font-semibold">
              Connect with us
            </p>
            <div className="flex">
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105 ">
                  <Image src="/icons/instagram.svg" width={30} height={30} />
                </a>
              </Link>
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105 ">
                  <Image src="/icons/facebook.svg" width={30} height={30} />
                </a>
              </Link>
              <Link href="/">
                <a className="p-3 transform transition hover:scale-105">
                  <Image src="/icons/twitter.svg" width={30} height={30} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className=" p-3 text-gray-600 font-mulish text-lg font-bold ">
            © 2021{" "}
          </p>
          <Link href="/">
            <a className="p-3">
              <Image src="/images/logo.png" width={160} height={80} />
            </a>
          </Link>
          <p className=" text-gray-600 p-1 font-mulish text-md font-bold ">
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
