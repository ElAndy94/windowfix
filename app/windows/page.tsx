import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windows",
  description: `Our windows are designed, manufactured and installed with perfect precision to give your house the best look possible. Choose from PVC or Aluminium window frames as well as a range of different types of glass.`,
};

const Windows = () => {
  return (
    <section className="mx-auto text-center text-white  md:h-screen">
      <div
        style={{
          backgroundImage: 'url("/assets/windows5.webp")',
          background:
            ' url("/assets/windows5.webp") center center cover no-repeat fixed',
          paddingBottom: "50px",
        }}
      >
        <div className="pt-24">
          <div className="mb md:w-[420px] mx-auto">
            <h1 className="md:text-7xl text-4xl tracking-widest font-light pt-28">
              WINDOWS
            </h1>
            <p className="mt-5 mx-auto font-thin md:text-left text-center">
              Our windows are designed, manufactured and installed with perfect
              precision to give your house the best look possible. Choose from
              PVC or Aluminium window frames as well as a range of different
              types of glass.
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

export default Windows;
