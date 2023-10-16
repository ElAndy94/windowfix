import { BsFillPersonFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import { TbMoodSmileFilled } from "react-icons/tb";

const CategoriesPage = () => {
  return (
    <section>
      <article className="bg-[#65BDDF] py-4">
        <h3 className="text-lg text-center font-bold mb-9">
          OUR TOP THREE PRIORITIES
        </h3>
        <div className="flex md:flex-row flex-col text-center justify-around my-3 md:gap-0 gap-6">
          <div>
            <BsFillPersonFill className={"text-5xl mx-auto mb-4"} />
            <p>EXCELLENT CUSTOMER SERVICE</p>
          </div>
          <div>
            <MdDiscount className={"text-5xl mx-auto mb-4"} />
            <p>AFFORDABLE PRICING</p>
          </div>
          <div>
            <TbMoodSmileFilled className={"text-5xl mx-auto mb-4"} />
            <p>HIGH QUALITY PRODUCTS</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CategoriesPage;
