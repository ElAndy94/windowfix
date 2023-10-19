import Link from "next/link";

const Services = () => {
  return (
    <section>
      <div className="flex flex-wrap text-white font-bold text-center">
        <div className="bg-[url('/assets/windows1.webp')] bg-no-repeat flex-1 h-[450px] bg-cover relative">
          <Link
            href="/windows"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            WINDOWS
          </Link>
        </div>
        <div className="bg-[url('/assets/doors1.webp')] bg-no-repeat flex-1 bg-cover relative">
          <Link
            href="/doors"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            DOORS
          </Link>
        </div>
        <div className="bg-[url('/assets/mosq1.webp')] bg-no-repeat flex-1 bg-cover relative">
          <Link
            href="/mosquito-nets"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            MOSQUITO NETS
          </Link>
        </div>
        <div className="bg-[url('/assets/exterior1.webp')] bg-no-repeat flex-1 bg-cover relative">
          <Link
            href="/exterior-roller-blinds"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            EXTERIOR ROLLER BLINDS
          </Link>
        </div>
        <div className="bg-[url('/assets/inter1.webp')] bg-no-repeat flex-1 bg-cover relative">
          <Link
            href="/interior-blinds"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            INTERIOR BLINDS
          </Link>
        </div>
      </div>
      <div className="bg-[url('/assets/glass1.webp')] bg-no-repeat h-[290px] bg-cover">
        <Link href="/windows">GLASS CURTAINS</Link>
      </div>
    </section>
  );
};

export default Services;

// "/assets/windows1.webp"
