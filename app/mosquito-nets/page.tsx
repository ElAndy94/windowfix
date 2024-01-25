import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mosquito Nets",
  description:
    "Choose from a range of interior blind designs and materials, all manufactured and fitted by us. Improve the overall appearance of any room by choosing the right style for you.",
};
const MosquitoNets = () => {
  return (
    <section className="mx-auto text-center text-white  md:h-screen">
      <div
        style={{
          paddingBottom: "50px",
          background:
            "url('/assets/windows5.webp') center center no-repeat fixed",

          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="pt-24">
          <div className="mb mx-auto">
            <h1 className="md:text-7xl text-4xl  tracking-widest font-light pt-28">
              MOSQUITO NETS
            </h1>
            <p className="mt-5 mx-auto md:w-[420px] font-thin text-center md:text-left">
              When the days get warmer, the nights get packed with mosquitoes
              roaming the house. Don’t worry because we have you covered. Choose
              from sliding, fixed, pleated, or roll-up nets to keep all types of
              bugs away from your home.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-4 mt-10">
            <div>
              <Image
                src="/assets/windows2.webp"
                alt="picture of window"
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/assets/windows3.webp"
                alt="picture of window"
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/assets/windows4.webp"
                alt="picture of window"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </section>
  );
};

export default MosquitoNets;
