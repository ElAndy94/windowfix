import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const Landing = () => {
  return (
    <section
      className="bg-center flex items-center mx-auto py-10"
      style={{
        backgroundImage: 'url("/assets/landing1.webp")',
        // backgroundSize: "cover",
        // height: "calc(100vh - 85px)",
      }}
    >
      <div className="mx-auto">
        <div className="bg-slate-100 bg-opacity-90 p-6 mx-auto max-w-sm rounded-2xl text-center my-14">
          <Link
            href="https://api.whatsapp.com/send?phone=35054080732"
            target="_blank"
            className="text-gray-700 hover:text-gray-800 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2">Free Consultation</h3>
            <p className="text-lg">Schedule Now</p>
            <RiWhatsappFill className="text-6xl mt-4 text-green-500 mx-auto hover:translate-y-[-10px] transition duration-300" />
            <p>+350 54080732</p>
          </Link>
        </div>
        <p className="mt-10 md:text-lg bg-slate-100 bg-opacity-90 px-3 py-2 rounded-lg font-bold text-xs">
          EXCELLENT WINDOW SERVICES AT AFFORDABLE PRICES
        </p>
      </div>
    </section>
  );
};

export default Landing;
