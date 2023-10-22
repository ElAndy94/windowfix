import Link from "next/link";

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="relative">
      <div className="bg-[#3AC4FE] py-4">
        <p className="text-center text-sm">
          &copy; {currentYear} Widnowfix LTD |
          <Link
            href={
              "https://www.termsfeed.com/live/80d78bec-b49a-45d4-b2cd-802ecbe1b51a"
            }
            target="_blank"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      <span className="bg-[#ED5829] md:absolute top-0 right-0 bg-none w-1/4 h-full"></span>
    </section>
  );
};

export default FooterPage;
