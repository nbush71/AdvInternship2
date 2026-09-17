import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";

function Features() {
  return (
    <section id="features" className="w-full bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8">
          <div className="px-4 py-8 text-center text-3xl font-bold text-black md:text-6xl">
            Understand books in few minutes
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-3 px-4 py-6 text-center" id="features1">
              <div className="flex items-center justify-center py-2">
                <AiFillFileText className="size-16 text-brand-icons sm:size-20 md:size-24" />
              </div>
              <div className="text-2xl font-bold text-black md:text-3xl">Read or listen</div>
              <div className="text-lg text-black/60 md:text-3xl">
                Save time by getting the core <br className="hidden md:block" />
                ideas from the best books.
              </div>
            </div>

            <div className="grid gap-3 px-4 py-6 text-center" id="features2">
              <div className="flex items-center justify-center py-2">
                <AiFillBulb className="size-16 text-brand-icons sm:size-20 md:size-24" />
              </div>
              <div className="px-4 text-2xl font-bold text-black md:text-3xl">
                Find your next read
              </div>
              <div className="px-2 text-lg text-black/60 md:text-3xl">
                Explore book lists and <br className="hidden md:block" />
                personalized recommendations.
              </div>
            </div>

            <div className="grid gap-3 px-4 py-6 text-center" id="features3">
              <div className="flex items-center justify-center py-2">
                <AiFillAudio className="size-16 text-brand-icons sm:size-20 md:size-24" />
              </div>
              <div className="text-2xl font-bold text-black md:text-3xl">Briefcasts</div>
              <div className="text-lg text-black/60 md:text-3xl">
                Gain valuable insights from briefcasts.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 px-4 py-4 text-base font-bold text-brand-gray sm:text-2xl md:text-5xl" id="features4">
              <div className="py-2 md:py-6">Enhance your knowledge</div>
              <div className="py-2 md:py-6">Achieve greater success</div>
              <div className="py-2 md:py-6">Improve your health</div>
              <div className="py-2 md:py-6">Develop better parenting skills</div>
              <div className="py-2 md:py-6">Increase happiness</div>
              <div className="py-2 md:py-6">Be the best version of yourself!</div>
            </div>

            <div className="grid grid-cols-1 gap-12 md:gap-10 sm:gap-8 sm: bg-brand-ltgreen py-6 content-center px-8" id="features5">
              <div className="flex flex-row gap-3  ">
                <div className="text-3xl font-bold text-brand-blue md:text-4xl">93%</div>
                <div className="text-base text-black/60 md:text-3xl">
                  of Summarist members <b>significantly increase</b> reading frequency.
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-3xl font-bold text-brand-blue md:text-4xl">96%</div>
                <div className="text-base text-black/60 md:text-3xl">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-3xl font-bold text-brand-blue md:text-4xl">90%</div>
                <div className="text-base text-black/60 md:text-3xl">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2" id="features6">
            <div className="bg-brand-ltgreen p-4 md:p-6">
              <div className="grid gap-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-3xl font-bold text-brand-blue md:text-4xl">91%</div>
                  <div className="text-base text-black/60 md:text-3xl">
                    of Summarist members <b>report feeling more productive</b> after incorporating the service into their daily routine.
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-3xl font-bold text-brand-blue md:text-4xl">94%</div>
                  <div className="text-base text-black/60 md:text-3xl">
                    of Summarist members have <b>noticed an improvement</b> in their overall comprehension and retention of information.
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-3xl font-bold text-brand-blue md:text-4xl">88%</div>
                  <div className="text-base text-black/60 md:text-3xl">
                    of Summarist members <b>feel more informed</b> about current events and industry trends since using the platform.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-2 py-6" id="features7">
              <div className="grid gap-4" dir="rtl">
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Expand your learning</p>
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Accomplish your goals</p>
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Strengthen your vitality</p>
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Become a better caregiver</p>
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Improve your mood</p>
                <p className="py-2 text-xl font-bold text-brand-gray sm:text-2xl md:text-5xl">Maximize your abilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;