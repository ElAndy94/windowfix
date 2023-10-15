import { BsFillPersonFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import { TbMoodSmileFilled } from "react-icons/tb";

const CategoriesPage = () => {
  return (
    <section>
      <article className="bg-[#65BDDF] py-4">
        <h3 className="text-lg text-center">OUR TOP THREE PRIORITIES</h3>
        <div className="flex justify-around my-3">
          <div>
            <BsFillPersonFill className={"text-5xl mx-auto mb-4"} />
            <p>EXCELLENT CUSTOMER SERVICE</p>
          </div>
          <div>
            <MdDiscount />
            <p>AFFORDABLE PRICING</p>
          </div>
          <div>
            <TbMoodSmileFilled />
            <p>HIGH QUALITY PRODUCTS</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CategoriesPage;
