import { AiFillFileText } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";

function Features() {
  return (
    <section id="features" className="flex-col flex px-4 py- bg-white-300 border">
      <div className="max-w-full flex mx-auto items-center px-4">
        <div className="flex flex-col md-auto">
          <div className="flex text-4xl text-black px-4 py-8 font-bold text-center justify-center">Understand books in few minutes</div>
          <div className="flex flex-col-3 justify-between">
            <div className=" flex flex-col"  id="features">
              <div className="flex flex-col items-center justify-center py-4 mb-4" >
                <AiFillFileText className="text-brand-icons size-20"  />
              </div>
              <div className="flex flex-col font-bold text-3xl text-center justify-center">Read or listen</div>
              <div className="flex flex-col px-4 py-4 text-2xl text-center justify-center text-black/60 text-wrap">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center" id="features">
              <div className="flex flex-col items-center justify-center py-4 mb-4">
                <AiFillBulb className="text-brand-icons size-20"/>
              </div>
              <div className="flex flex-col px-4 font-bold text-3xl text-center justify-center">Find your next read</div>
              <div className="flex flex-col items-center py-4 px-6  text-black/60 text-center text-2xl text-wrap">
                Explore book lists and personalized <br />recommendations.
              </div>
            </div>
            <div className="flex flex-col px-4 font-bold text-3xl text-center justify-center">
              <div className="flex flex-col items-center justify-center py- mb-4">
                <AiFillAudio className="text-brand-icons size-20" />
              </div>
              <div className="flex flex-col px-4 font-bold text-3xl text-center justify-center">Briefcasts</div>
              <div className="flex flex-col px-4 py-4 text-2xl text-center justify-center text-black/60 text-wrap">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="flex flex-1 px-4 py-6 gap-8">
            <div className="flex flex-col px-8 py-4 text-2xl font-bold text-black/60 ">
              <div className="flex flex-col py-4">Enhance your knowledge</div>
              <div className="flex flex-col py-4">Achieve greater success</div>
              <div className="flex flex-col py-4">Improve your health</div>
              <div className="flex flex-col py-4">
                Develop better parenting skills
              </div>
              <div className="flex flex-col py-4">Increase happiness</div>
              <div className="flex flex-col py-4">
                Be the best version of yourself!
              </div>
            </div>
            <div className="flex flex-col bg-brand-ltgreen px-2 py-4 gap-6 items-center justify-center content-evenly size-140 align-center">
              <div className="flex justify-between">
                <div className="flex px-6 py-4 text-brand-blue font-bold text-lg">93%</div>
                <div className=" text-black/60 text-1xl text-wrap px-4 py-4">of Summarist members <b>significantly increase</b> reading frequency.
                </div>
              </div>
              <div className="flex px-4 justify-between">
                <div className="flex flex-1 px-4 py-4 text-brand-blue font-bold text-lg">96%</div>
                <div className=" text-black/60 text-lxl text-wrap px-6 py-4">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="flex flex-1 px-4 justify-between">
                <div className="flex flex-1 px-2 text-brand-blue font-bold text-lg">90%</div>
                <div className=" text-black/60 text-1xl text-wrap px-6 py-4">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 bg-brand-ltgreen py-4 gap-6 items-center justify-center content-evenly size-120 align-center">
            <div className="flex flex-col ">
              <div className="flex justify-between gap-4">
                <div className="flex px-6 py-4 text-brand-blue font-bold text-lg">91%</div>
                <div className=" text-black/60 text-1xl text-wrap px-4 py-4">of Summarist members report <b>feeling more productive</b> after incorporating the service into their daily routine.
              </div>
            </div>
              <div className="flex px-4 justify-between">
                <div className="flex flex-1 px-4 py-4 text-brand-blue font-bold text-lg">94%</div>
                <div className=" text-black/60 text-lxl text-wrap px-6 py-4">of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
              </div>
            </div>
            <div className="flex flex-1 px-4 justify-between">
              <div className="flex flex-1 px-2 text-brand-blue font-bold text-lg">88%</div>
              <div className=" text-black/60 text-1xl text-wrap px-6 py-4">of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.</div>
            </div>
            </div>
                <div className="flex px-4 py-6 gap-8">
                  <div className="flex flex-col px-8 py-4 text-2xl font-bold text-black/60">
                  <div className="flex flex-col py-4">Expand your learning</div>
                  <div className="flex flex-col py-4">Accomplish your goals</div>
                  <div className="flex flex-col py-4">Strengthen your vitality</div>
                  <div className="flex flex-col py-4">Become a better caregiver</div>
                  <div className="flex flex-col py-4">Improve your mood</div>
                  <div className="flex flex-col py-4">Maximize your abilities</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;