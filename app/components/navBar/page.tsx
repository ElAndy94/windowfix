import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex justify-between ">
      <Link href="/" className="py-3">
        WindoFix
      </Link>
      <div className="flex">
        <Link
          href="/"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          Home
        </Link>
        <button className="hover:bg-slate-100 p-3 transition duration-300">
          Services
        </button>
        <Link
          href="/about-us"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
