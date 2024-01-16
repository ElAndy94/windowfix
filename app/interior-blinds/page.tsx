import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Blinds",
  description:
    "Choose from a range of interior blind designs and materials, all manufactured and fitted by us. Improve the overall appearance of any room by choosing the right style for you.",
};
const InteriorBlinds = () => {
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
          <div className="mb md:w-[420px] mx-auto">
            <h1 className="md:text-7xl text-4xl tracking-widest font-light pt-28">
              InteriorBlinds
            </h1>
            <p className="mt-5 mx-auto font-thin md:text-left text-center">
              Choose from a range of interior blind designs and materials, all
              manufactured and fitted by us. Improve the overall appearance of
              any room by choosing the right style for you.
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

export default InteriorBlinds;
