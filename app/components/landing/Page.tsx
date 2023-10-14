// // import Image from "next/image";

// import Link from "next/link";
// import { RiWhatsappFill } from "react-icons/ri";

// const Landing = () => {
//   return (
//     <section>
//       <div>
//         <img
//           src="/assets/landing1.webp"
//           alt="the landing image"
//           width={350}
//           height={350}
//         />
//         <div>
//           <Link
//             href={"https://api.whatsapp.com/send?phone=35054080732"}
//             target="blank"
//           >
//             <h3>Free Consultation</h3>
//             <p>Schedule Now</p>
//             <RiWhatsappFill />
// <p>EXCELLENT WINDOW SERVICES AT AFFORDABLE PRICES.</p>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Landing;
// import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const Landing = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url("/assets/landing1.webp")' }}
    >
      <div className="bg-white bg-opacity-90 p-6 mx-auto max-w-md rounded-lg text-center">
        <Link
          href="https://api.whatsapp.com/send?phone=35054080732"
          target="_blank"
          className="text-gray-700 hover:text-gray-800 transition-colors bg-cover"
        >
          <h3 className="text-3xl font-bold mb-2">Free Consultation</h3>
          <p className="text-lg">Schedule Now</p>
          <RiWhatsappFill className="text-6xl mt-4 text-green-500 mx-auto hover:translate-y-[-10px] transition duration-300" />
          <p>+350 54080732</p>
          <p className="mt-4 text-lg">
            EXCELLENT WINDOW SERVICES AT AFFORDABLE PRICES.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
