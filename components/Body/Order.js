import Link from "next/link";
import Image from "next/image";

function Order() {
  return (
    <>
      <div className="flex  flex-col m-4 justify-center items-center">
        <div>
          <h4 className=" text-4xl md:ext-5xl md:p-5 md:pt-9 font-bold text-[#077861] ">
            Order Medicines Here
          </h4>
        </div>
        <div className=" flex md:space-x-[40vh] md:justify-between m-4 md:m-0- items-center ">
          <div className="flex pt-5 md:m-4 space-y-7  flex-col items-center md:justify-center ">
            <button className="bg-[#077861] p-2 md:p-4 w-[40vh] md:w-[60vh] rounded-xl flex justify-center">
              {/* #TODO: make a presciption page */}
              <Link href="">
                <a className="flex space-x-3 md:px-1 items-center  ">
                  <span className=" text-md md:text-2xl  text-white font-quicksand ">
                    Order via Prescription
                  </span>
                  <div className=" w-[7vh] h-[7vh] md:h-10 md:w-10 ">
                    <Image
                      src="/icons/rx.png"
                      width={20}
                      height={20}
                      layout="responsive"
                    />
                  </div>
                </a>
              </Link>
            </button>

            <button className="bg-[#077861] p-2 md:p-4 w-[40vh] md:w-[60vh] rounded-xl flex justify-center">
              {/* #TODO: make a presciption page */}
              <Link href="">
                <a className="flex space-x-4 md:px-1 items-center  ">
                  <span className=" md:text-2xl text-sm text-white font-quicksand ">
                    Don't have a Presciption?
                  </span>
                  <div className=" w-[7vh] h-[7vh] md:h-10 md:w-10">
                    <Image
                      src="/icons/rx.png"
                      width={20}
                      height={20}
                      layout="responsive"
                    />
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className=" w-40 h-40 ml-16 md:ml-0 md:w-60 md:h-60  md:mb-8   ">
            <Image
              src="/icons/delivery.png"
              width={20}
              height={20}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
