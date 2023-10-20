const ReviewsPage = () => {
  return (
    <section className="bg-[url('/assets/reviews1.webp')] bg-center bg-scroll bg-no-repeat bg-atta bg-cover py-6 text-white">
      <div className="container mx-auto">
        <h3 className="text-center mt-7 font-bold text-4xl tracking-wider">
          Reviews
        </h3>
        <div className="flex md:flex-row flex-col gap-4 md:gap-8 mt-16 md:justify-around">
          <div className="bg-[rgb(0,0,0,50%)] md:w-[300px] mx-2 text-center py-5 rounded-[40px]">
            <h4 className="font-bold mb-2">Michelle</h4>
            <p className="italic font-serif px-7 tracking-tight">
              {
                '"Brilliant service and very efficient. Highly recommended. Best prices in Gibraltar."'
              }
            </p>
          </div>
          <div className="bg-[rgb(0,0,0,50%)] md:w-[300px] mx-2 text-center py-5 rounded-[40px]">
            <h4 className="font-bold mb-2">Kenneth</h4>
            <p className="italic font-serif px-7 tracking-tight">
              {
                '"Affordable and reliable service, 10/10 would recommend to anyone."'
              }
            </p>
          </div>
          <div className="bg-[rgb(0,0,0,50%)] md:w-[300px] mx-2 text-center py-5 rounded-[40px]">
            <h4 className="font-bold mb-2">Louisa</h4>
            <p className="italic font-serif px-7 tracking-tight">
              {
                '"Just had my sliding mosquito nets fitted. Highly recommend and great prices. Thank you."'
              }
            </p>
          </div>
        </div>
        <div className="md:mt-14 mt-5 mb-[100px] mx-2 text-center bg-[rgb(0,0,0,50%)] py-5 rounded-[40px]">
          <h4 className="font-bold mb-2">Dale</h4>
          <p className="italic px-16 tracking-tight font-serif">
            {
              '"Very friendly and professional from start to finish. Replaced a balcony window with blinds and mosquito nets, fitted new rolling mosquito nets and replaced a broken filler blind. Very reasonably priced and I\'m super impressed with the job done. Fantastic team."'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
