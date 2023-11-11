import Image from "next/image";

const Windows = () => {
  return (
    <section className="mx-auto text-center text-white h-screen">
      <div
        className="h-screen"
        style={{
          backgroundImage: 'url("/assets/windows5.webp")',
          // backgroundSize: "cover",
        }}
      >
        <div className="pt-24">
          <h1 className="text-7xl tracking-widest font-light pt-28">WINDOWS</h1>
          <p className="mt-5 w-[30%] mx-auto font-thin text-left">
            Our windows are designed, manufactured and installed with perfect
            precision to give your house the best look possible. Choose from PVC
            or Aluminium window frames as well as a range of different types of
            glass.
          </p>
          <div className="pt-16 flex justify-center gap-8">
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
    </section>
  );
};

export default Windows;
