import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Curtains",
  description: `Glass curtains provide an attractive and modern aesthetic, allow for natural light to filter in, offer insulation and energy savings, and provide flexibility in dividing up spaces.`,
};

const GlassCurtains = () => {
  return (
    <section className="mx-auto text-center text-white  h-screen">
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
          <div className="mx-auto">
            <h1 className="md:text-7xl text-4xl md:tracking-widest leading-9 font-light pt-28">
              Glass Curtains
            </h1>
            <p className="mt-5 mx-auto font-thin text-center md:w-[500px] md:leading-8 md:tracking-wider">
              Glass curtains provide an attractive and modern aesthetic, allow
              for natural light to filter in, offer insulation and energy
              savings, and provide flexibility in dividing up spaces.
            </p>
          </div>
        </div>
      </div>
      <FooterPage />
    </section>
  );
};

export default GlassCurtains;
