import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior RollerBlinds",
  description: `Keep the sun out of your house with our exterior roller blinds. They are perfectly fit to look aesthetically pleasing outside any window.`,
};

const ExteriorRollerBlinds = () => {
  return (
    <section className="mx-auto text-center text-white relative">
      <div
        style={{
          paddingBottom: "50px",
          background:
            "url('/assets/exterior1.webp') center center no-repeat fixed",

          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative pt-24">
          <div className="mb md:w-[60vw] mx-auto relative z-10">
            <h1 className="md:text-8xl text-4xl tracking-widest leading-9 font-light pt-28">
              EXTERIOR ROLLER BLINDS
            </h1>
            <p className="mt-5 mx-auto font-thin text-center">
              Keep the sun out of your house with our exterior roller blinds.
              They are perfectly fit to look aesthetically pleasing outside any
              window.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-4 mt-10 z-10">
            <div>
              <Image
                src="/assets/exterior1.webp"
                alt="picture of window"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/assets/exterior1.webp"
                alt="picture of window"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/assets/exterior1.webp"
                alt="picture of window"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </section>
  );
};

export default ExteriorRollerBlinds;
