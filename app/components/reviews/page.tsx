const ReviewsPage = () => {
  return (
    <section className="bg-[url('/assets/reviews1.webp')] bg-center bg-scroll bg-no-repeat bg-atta bg-cover py-6 text-white">
      <h3 className="text-center font-bold text-4xl tracking-wider">Reviews</h3>
      <div className="flex mt-14 gap-5">
        <div className="bg-[rgb(0,0,0,50%)] text-center py-5 rounded-3xl">
          <h4 className="font-bold">Michelle</h4>
          <p className="italic font-serif">
            {
              '"Brilliant service and very efficient. Highly recommended. Best prices in Gibraltar."'
            }
          </p>
        </div>
        <div>
          <h4>Kenneth</h4>
          <p>
            Affordable and reliable service, 10/10 would recommend to anyone.
          </p>
        </div>
        <div>
          <h4>Louisa</h4>
          <p>
            Just had my sliding mosquito nets fitted. Highly recommend and great
            prices. Thank you.
          </p>
        </div>
      </div>
      <div>
        <h4>Dale</h4>
        <p>
          {
            '"Very friendly and professional from start to finish. Replaced a balcony window with blinds and mosquito nets, fitted new rolling mosquito nets and replaced a broken filler blind. Very reasonably priced and I\'m super impressed with the job done. Fantastic team."'
          }
        </p>
      </div>
    </section>
  );
};

export default ReviewsPage;
