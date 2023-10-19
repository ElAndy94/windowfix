import Link from "next/link";

const Services = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col text-white font-bold text-center">
        <div className="bg-[url('/assets/windows1.webp')] bg-no-repeat flex-1 min-h-[260px] md:min-h-[450px] bg-cover relative">
          <Link
            href="/windows"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
          >
            WINDOWS
          </Link>
        </div>
        <div className="bg-[url('/assets/doors1.webp')] bg-no-repeat flex-1 bg-cover min-h-[260px] md:min-h-[450px] relative">
          <Link
            href="/doors"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
          >
            DOORS
          </Link>
        </div>
        <div className="bg-[url('/assets/mosq1.webp')] bg-no-repeat flex-1 bg-cover min-h-[260px] md:min-h-[450px] relative">
          <Link
            href="/mosquito-nets"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
          >
            MOSQUITO NETS
          </Link>
        </div>
        <div className="bg-[url('/assets/exterior1.webp')] bg-no-repeat flex-1 min-h-[260px] md:min-h-[450px] bg-cover relative">
          <Link
            href="/exterior-roller-blinds"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
          >
            EXTERIOR ROLLER BLINDS
          </Link>
        </div>
        <div className="bg-[url('/assets/inter1.webp')] bg-no-repeat flex-1 min-h-[260px] md:min-h-[450px] bg-cover relative">
          <Link
            href="/interior-blinds"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
          >
            INTERIOR BLINDS
          </Link>
        </div>
      </div>
      <div className="bg-[url('/assets/glass1.webp')] bg-no-repeat min-h-[260px] md:h-[290px] bg-cover relative text-white font-bold">
        <span className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,10%)]"></span>
        <Link
          href="/windows"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg tracking-widest hover:text-2xl duration-300"
        >
          <p className="text-center">GLASS</p>
          <p>CURTAINS</p>
        </Link>
      </div>
    </section>
  );
};

export default Services;

// "/assets/windows1.webp"
