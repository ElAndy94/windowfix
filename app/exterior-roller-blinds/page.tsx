// import Image from "next/image";
// import FooterPage from "../components/footer/page";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Exterior RollerBlinds",
//   description: `Keep the sun out of your house with our exterior roller blinds. They are perfectly fit to look aesthetically pleasing outside any window.`,
// };

// const ExteriorRollerBlinds = () => {
//   return (
//     <section className="mx-auto text-center text-white  md:h-screen relative">
//       <div
//         style={{
//           // backgroundImage: 'url("/assets/exterior1.webp")',
//           // backgroundSize: "cover",
//           // backgroundRepeat: "no-repeat",
//           // backgroundPosition: "center",
//           // paddingBottom: "50px",
//           background:
//             ' url("/assets/exterior1.webp") center center no-repeat fixed',
//           backgroundSize: "cover",
//           paddingBottom: "50px",
//         }}
//       >
//         <div className="pt-24">
//           <div className="mb md:w-screen mx-auto">
//             {/* <span className="absolute w-screen h-[900px] bg-opacity-50 bg-black z-0 top-0 left-0 "></span> */}
//             <h1 className="md:text-7xl text-4xl tracking-widest font-light pt-28">
//               Exterior Roller Blinds
//             </h1>
//             <p className="mt-5 mx-auto font-thin text-center">
//               Keep the sun out of your house with our exterior roller blinds.
//               They are perfectly fit to look aesthetically pleasing outside any
//               window.
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-4 mt-10">
//             <div>
//               <Image
//                 src="/assets/exterior1.webp"
//                 alt="picture of window"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div>
//               <Image
//                 src="/assets/exterior1.webp"
//                 alt="picture of window"
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <div>
//               <Image
//                 src="/assets/exterior1.webp"
//                 alt="picture of window"
//                 width={200}
//                 height={200}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterPage />
//     </section>
//   );
// };

// export default ExteriorRollerBlinds;

import Image from "next/image";
import FooterPage from "../components/footer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior RollerBlinds",
  description: `Keep the sun out of your house with our exterior roller blinds. They are perfectly fit to look aesthetically pleasing outside any window.`,
};

const ExteriorRollerBlinds = () => {
  return (
    <section className="mx-auto text-center text-white md:h-screen relative">
      <div
        style={{
          backgroundImage: 'url("/assets/exterior1.webp")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          paddingBottom: "50px",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative pt-24">
          <div className="mb md:w-screen mx-auto relative z-10">
            <h1 className="md:text-7xl text-4xl tracking-widest font-light pt-28">
              Exterior Roller Blinds
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
