import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doors",
  description: `We offer made to measure sliding glass doors which are built to
  transform any room you add them to. From balconies and patios to
  bedrooms and kitchens, make sure to improve the overall design"`,
};

const Doors = () => {
  return (
    <section className="mx-auto text-center text-white  md:h-screen">
      <div
        style={{
          backgroundImage: 'url("/assets/windows5.webp")',
          paddingBottom: "50px",
          height: "100%",
        }}
      >
        <div className="pt-24">
          <div className="mb md:w-[420px] mx-auto">
            <h1 className="md:text-7xl text-4xl tracking-widest font-light pt-28">
              DOORS
            </h1>
            <p className="mt-5 mx-auto font-thin md:text-left text-center">
              We offer made to measure sliding glass doors which are built to
              transform any room you add them to. From balconies and patios to
              bedrooms and kitchens, make sure to improve the overall design
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

export default Doors;
