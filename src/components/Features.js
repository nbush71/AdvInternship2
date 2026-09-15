import { AiFillFileText } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";

function Features() {
  return (
    <section id="features" className="grid grid-col-1 px-4 py- bg-white-300">
      <div className="max-w-full mx-auto items-center px-4">
        <div className="grid grid-cols-1 md-auto">
          <div className="grid grid-cols-1 text-6xl text-black px-4 py-8 font-bold text-center items-center justify-center">Understand books in few minutes</div>
          <div className="grid grid-cols-3 justify-between">
            <div className=" grid grid-cols-1"  id="features1">
              <div className="flex items-center justify-center py-2" >
                <AiFillFileText className="text-brand-icons size-20"  />
              </div>
              <div className="grid grid-cols-1  font-bold text-3xl text-center justify-center">Read or listen</div>
              <div className="grid grid-cols-1  px-4 py-4 text-3xl text-center justify-center text-black/60 text-wrap">
                Save time by getting the core <br />ideas from the best books.
              </div>
            </div>
            <div className="grid grid-cols2 items-center" id="features2">
              <div className="flex items-center justify-center py-4">
                <AiFillBulb className="text-brand-icons size-20"/>
              </div>
              <div className="grid grid-cols-1 px-4 font-bold text-3xl text-center justify-center">Find your next read
              </div>
              <div className="grid grid-cols-1 items-center py-4 px-6  text-black/60 text-center text-3xl text-wrap">
                Explore book lists and <br />personalized recommendations.
              </div>
            </div> 
            <div className="grid grid-cols-1 px-4 text-center justify-center" id="features3">
              <div className="flex items-center justify-center">
                <AiFillAudio className="text-brand-icons size-20" />
              </div>
              <div className="grid grid-cols-1 font-bold text-3xl text-center justify-center">Briefcasts</div>
              <div className="grid grid-cols-1 items-center text-black/60 text-center text-3xl text-wrap">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 px-4 py-6 gap-8 items-center mt-16">
            <div className="grid grid-cols-1 py-4 text-5xl font-bold text-brand-gray ">
              <div className="flex py-6 px-4">Enhance your knowledge</div>
              <div className="flex py-6 px-4">Achieve greater success</div>
              <div className="flex py-6 px-4">Improve your health</div>
              <div className="flex py-6 px-4">Develop better parenting skills</div>
              <div className="flex py-6 px-4">Increase happiness</div>
              <div className="flex py-6 px-4">Be the best version of yourself!</div>
            </div>
            <div className="grid grid-cols-1 w-2xl h-full bg-brand-ltgreen px-2 py-4 items-center justify-center content-center align-center">
              <div className="flex py-4 px-6 gap-4 justify-between">
                <div className="flex py-4 text-brand-blue font-bold text-3xl">93%</div>
                <div className=" text-black/60 text-3xl text-wrap px-4 py-4">of Summarist members <b>significantly increase</b> reading frequency.
                </div>
              </div>
              <div className="flex py-6 px-6 gap-4 justify-between">
                <div className="flex py-4 text-brand-blue font-bold text-3xl">93%</div>
                <div className=" text-black/60 text-3xl text-wrap px-4 py-4">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex py-6 px-6 gap-4 justify-between">
                <div className="flex py-4 text-brand-blue font-bold text-3xl">90%</div>
                <div className=" text-black/60 text-3xl text-wrap px- py-4">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-14">
            <div className="flex flex-1 w-3xl bg-brand-ltgreen px-6 py-4 items-center justify-center content-center align-center">
              <div className="grid grid-cols-1 py-4 px-4 gap-4 justify-between">
                <div className="flex justify-between gap-4">
                  <div className="flex py-4 pr-4 text-brand-blue font-bold text-3xl">91%</div>
                  <div className=" text-black/60 text-3xl text-wrap px-4 py-4">of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                </div>
              </div>
                <div className="flex justify-between gap-4">
                  <div className="flex pr-4 py-4 text-brand-blue font-bold text-3xl">94%</div>
                  <div className=" text-black/60 text-3xl text-wrap px-6 py-4">of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex py-4 text-brand-blue font-bold text-3xl">88%</div>
                <div className=" text-black/60 text-3xl text-wrap px-6 py-4">of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.</div>
              </div>
          </div>
            </div>
                <div className="grid grid-cols-2 w-2xl  px-4 py-6">
                  <div className="flex w-6xl">
                    <div className="grid gap-4 text-5xl text-right font-bold text-brand-gray ">
                      <div className="flex py-6 px-4">Expand your learning</div>
                      <div className="flex py-6 px-4">Accomplish your goals</div>
                      <div className="flex py-6 px-4" >Strengthen your vitality</div>
                      <div className="flex py-6 px-4">Become a better caregiver</div>
                      <div className="flex py-6 px-4">Improve your mood</div>
                      <div className="flex py-6 px-4">Maximize your abilities</div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;