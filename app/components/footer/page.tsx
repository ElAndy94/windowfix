import Link from "next/link";

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section>
      <div>
        <p>
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
    </section>
  );
};

export default FooterPage;
