import { BsStarFill } from "react-icons/bs";


function Reviews() {

  return (
    <section grid grid-cols-1 content-center  id="reviews">
      <div className="grid grid-rows-1">
        <div className="grid grid-rows-1 justify-center items-center">
          <div className="flex mb-8 text-brand-darkteal items-center justify-center content-center text-5xl font-bold">What our members say</div>
          <div className="grid grid-cols-1 place-items-center ">
            <div className="grid mb-4 gap-4 bg-brand-yellow py-4 px-6 w-240 ">
              <div className="flex gap-4">
                <div className="flex text-2xl text-brand-darkteal">Hanna M.</div>
                <div className="flex size-[1em] mt-2 text-brand-blue">
                  <BsStarFill />
                </div>
              </div>
              <div className="grid grid-cols-1 text-wrap text-2xl text-brand-Review mb-4">
                <p>This app has been a <b>game-changer</b> for me! It's saved me so much time and <br />effort in reading and comprehending books. Highly recommend it to all book lovers.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 mb-4 gap-4 bg-brand-yellow py-4 px-6 w-240 ">
              <div className="flex gap-4">
                <div className="flex text-2xl text-brand-darkteal">David B.</div>
                <div className="flex size-[1em] mt-2 text-brand-blue">
                  <BsStarFill />
                </div>
              </div>
              <div className="grid grid-cols-1 text-wrap text-2xl text-brand-Review mb-4">I love this app! It provides <b>concise and accurate summaries</b> of books in a way that is easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                If you're a busy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            <button className="btn home__cta--btn">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;